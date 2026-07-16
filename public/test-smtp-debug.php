<?php
header('Content-Type: text/plain');

// Load configurations
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'support@shreegopalagroup.com');
define('SMTP_PASS', '8D!Ldg501&Gd');

$recipient = isset($_GET['email']) ? $_GET['email'] : 'sgsc-test-123@mailinator.com';

echo "SMTP DEBUG TEST SCRIPT\n";
echo "======================\n";
echo "Recipient: $recipient\n\n";

try {
    $smtp_host = SMTP_HOST;
    $smtp_port = SMTP_PORT;
    $smtp_user = SMTP_USER;
    $smtp_pass = SMTP_PASS;

    echo "1. Resolving hostname: $smtp_host...\n";
    $ip = gethostbyname($smtp_host);
    echo "   Resolved IP (IPv4): $ip\n\n";

    echo "2. Setting up SSL context...\n";
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
            'peer_name' => $smtp_host
        ]
    ]);

    $host_connection = ($smtp_port == 465 ? 'ssl://' : 'tcp://') . $ip;
    echo "3. Connecting to $host_connection on port $smtp_port (Timeout: 5s)...\n";
    
    $start_time = microtime(true);
    $socket = @stream_socket_client($host_connection, $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);
    $conn_time = microtime(true) - $start_time;

    if (!$socket) {
        throw new Exception("Connection failed: $errstr ($errno) in " . round($conn_time, 3) . "s");
    }
    echo "   Connected successfully in " . round($conn_time, 3) . "s!\n\n";

    stream_set_timeout($socket, 5);

    $readResponse = function($socket, $expected) {
        $response = "";
        while (substr($response, 3, 1) != ' ') {
            $line = fgets($socket, 512);
            if ($line === false) {
                $info = stream_get_meta_data($socket);
                if ($info['timed_out']) {
                    throw new Exception("Timed out waiting for response.");
                }
                break;
            }
            $response .= $line;
            echo "S: " . trim($line) . "\n";
        }
        $code = substr($response, 0, 3);
        if ($code != $expected) {
            throw new Exception("SMTP protocol error: Expected $expected, got: " . trim($response));
        }
        return $response;
    };

    echo "4. SMTP Handshake & Auth...\n";
    $readResponse($socket, 220);

    echo "C: EHLO localhost\n";
    fwrite($socket, "EHLO localhost\r\n");
    $readResponse($socket, 250);

    echo "C: AUTH LOGIN\n";
    fwrite($socket, "AUTH LOGIN\r\n");
    $readResponse($socket, 334);

    echo "C: [Username Base64]\n";
    fwrite($socket, base64_encode($smtp_user) . "\r\n");
    $readResponse($socket, 334);

    echo "C: [Password Base64]\n";
    fwrite($socket, base64_encode($smtp_pass) . "\r\n");
    $readResponse($socket, 235);

    echo "\n5. SMTP Mail Routing...\n";
    echo "C: MAIL FROM:<$smtp_user>\n";
    fwrite($socket, "MAIL FROM:<$smtp_user>\r\n");
    $readResponse($socket, 250);

    echo "C: RCPT TO:<$recipient>\n";
    fwrite($socket, "RCPT TO:<$recipient>\r\n");
    $readResponse($socket, 250);

    echo "C: DATA\n";
    fwrite($socket, "DATA\r\n");
    $readResponse($socket, 354);

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <$smtp_user>\r\n";
    $headers .= "To: <$recipient>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode("SMTP Debug Test Mail") . "?=\r\n";
    $headers .= "Date: " . date('r') . "\r\n";

    $body = "<h2>SMTP Debug Success</h2><p>This email confirms that the SMTP connection has been fixed and successfully bypassed timeouts.</p>";
    $smtp_data = $headers . "\r\n" . $body . "\r\n.\r\n";

    fwrite($socket, $smtp_data);
    $readResponse($socket, 250);

    echo "C: QUIT\n";
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    echo "\n=== TEST SUCCESSFUL! SMTP EMAIL SENT ===\n";

} catch (Exception $e) {
    echo "\n!!! TEST FAILED !!!\n";
    echo "Error Message: " . $e->getMessage() . "\n";
}
?>
