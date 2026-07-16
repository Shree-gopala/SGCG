<?php
header('Content-Type: text/plain');

$smtp_host = 'smtp.hostinger.com';
$smtp_port = 465;
$ip = gethostbyname($smtp_host);

$context = stream_context_create([
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true,
        'peer_name' => $smtp_host
    ]
]);

$host_connection = "ssl://$ip:$smtp_port";
$socket = @stream_socket_client($host_connection, $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);

if (!$socket) {
    echo "Connection failed: $errstr ($errno)\n";
    exit;
}

stream_set_timeout($socket, 5);

// Read greeting
$greeting = fgets($socket, 512);
echo "Greeting: " . trim($greeting) . "\n";

// Send EHLO
fwrite($socket, "EHLO localhost\r\n");

// Read responses
while (true) {
    $line = fgets($socket, 512);
    if ($line === false) {
        echo "End of stream or timeout.\n";
        break;
    }
    
    $len = strlen($line);
    $char3 = ($len > 3) ? $line[3] : 'N/A';
    $char3_code = ($len > 3) ? ord($line[3]) : -1;
    
    echo "Line: " . trim($line) . " (Len: $len, Char at index 3: '" . $char3 . "' Code: " . $char3_code . ")\n";
    
    if ($char3_code == 32) {
        echo "Detected space code 32. Breaking!\n";
        break;
    }
}

fwrite($socket, "QUIT\r\n");
fclose($socket);
?>
