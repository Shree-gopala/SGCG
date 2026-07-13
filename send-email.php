<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ============================================
// HOSTINGER SMTP CONFIGURATION
// ============================================
// Update these with your Hostinger email credentials
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465); // We use 465 for secure SMTP (SSL)
define('SMTP_USER', 'support@shreegopalagroup.com'); // Email you created in Hostinger
define('SMTP_PASS', '8D!Ldg501&Gd'); // Password for that email

// Get the JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Sanitize inputs
$name = sanitizeInput($data['name']);
$email = sanitizeInput($data['email']);
$phone = isset($data['phone']) ? sanitizeInput($data['phone']) : '';
$subject = sanitizeInput($data['subject']);
$message = sanitizeInput($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Recipient email address
$recipientEmail = 'arvind.rya2023@gmail.com';

// Prepare email subject
$emailSubject = "New Contact Form Submission: " . $subject;

// Prepare email body
$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f97316; color: white; padding: 15px; border-radius: 5px 5px 0 0; }
        .content { border: 1px solid #ddd; padding: 20px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #666; }
        .field-value { margin-top: 5px; color: #333; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='field-label'>Name:</div>
                <div class='field-value'>" . htmlspecialchars($name) . "</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Email:</div>
                <div class='field-value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            
            " . (!empty($phone) ? "
            <div class='field'>
                <div class='field-label'>Phone:</div>
                <div class='field-value'>" . htmlspecialchars($phone) . "</div>
            </div>
            " : "") . "
            
            <div class='field'>
                <div class='field-label'>Subject:</div>
                <div class='field-value'>" . htmlspecialchars($subject) . "</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Message:</div>
                <div class='field-value' style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Send email using SMTP (with PHP mail() as fallback)
try {
    $mailSent = false;
    $errorMessage = "";

    try {
        // Try secure SMTP first to prevent email going to Spam
        $mailSent = sendEmailViaSMTP($recipientEmail, $emailSubject, $emailBody, $email);
    } catch (Exception $smtpException) {
        $errorMessage = $smtpException->getMessage();
        error_log("SMTP failed: " . $errorMessage . ". Falling back to mail().");
        
        // Fallback to PHP's standard mail() function
        $mailSent = sendEmailViaMailFunction($recipientEmail, $emailSubject, $emailBody, $email);
    }
    
    if ($mailSent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email sent successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to send email. SMTP Error: ' . $errorMessage
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error sending email: ' . $e->getMessage()
    ]);
}

/**
 * Sanitize user input
 */
function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Send email using secure SMTP socket connection
 */
function sendEmailViaSMTP($to, $subject, $body, $reply_to) {
    $smtp_host = SMTP_HOST;
    $smtp_port = SMTP_PORT;
    $smtp_user = SMTP_USER;
    $smtp_pass = SMTP_PASS;

    // Connect to Hostinger SMTP server
    // For port 465 we must use ssl:// prefix to negotiate SSL at handshake
    $host_connection = ($smtp_port == 465 ? 'ssl://' : '') . $smtp_host;
    $socket = @fsockopen($host_connection, $smtp_port, $errno, $errstr, 15);
    
    if (!$socket) {
        throw new Exception("Could not connect to SMTP server $smtp_host on port $smtp_port: $errstr ($errno)");
    }

    // Helper to read SMTP server responses
    $readResponse = function($socket, $expected) {
        $response = "";
        while (substr($response, 3, 1) != ' ') {
            $line = fgets($socket, 512);
            if ($line === false) break;
            $response .= $line;
        }
        $code = substr($response, 0, 3);
        if ($code != $expected) {
            throw new Exception("SMTP protocol error: Expected $expected, got: " . trim($response));
        }
        return $response;
    };

    $readResponse($socket, 220);

    // HELO/EHLO
    fwrite($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ? $_SERVER['SERVER_NAME'] : 'localhost') . "\r\n");
    $readResponse($socket, 250);

    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    $readResponse($socket, 334);

    fwrite($socket, base64_encode($smtp_user) . "\r\n");
    $readResponse($socket, 334);

    fwrite($socket, base64_encode($smtp_pass) . "\r\n");
    $readResponse($socket, 235);

    // MAIL FROM
    fwrite($socket, "MAIL FROM:<$smtp_user>\r\n");
    $readResponse($socket, 250);

    // RCPT TO
    fwrite($socket, "RCPT TO:<$to>\r\n");
    $readResponse($socket, 250);

    // DATA
    fwrite($socket, "DATA\r\n");
    $readResponse($socket, 354);

    // Format headers and body
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <$smtp_user>\r\n";
    $headers .= "Reply-To: <$reply_to>\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "X-Mailer: PHP-SMTP\r\n";

    // Standard SMTP body normalization (ensuring single dot on new lines is handled)
    $normalized_body = str_replace("\r\n.\r\n", "\r\n..\r\n", $body);
    $smtp_data = $headers . "\r\n" . $normalized_body . "\r\n.\r\n";

    fwrite($socket, $smtp_data);
    $readResponse($socket, 250);

    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return true;
}

/**
 * Send email via PHP mail() function (fallback option)
 */
function sendEmailViaMailFunction($to, $subject, $body, $reply_to) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . SMTP_USER . "\r\n";
    $headers .= "Reply-To: " . $reply_to . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    error_log("Sending email via mail() to: $to");
    
    $result = @mail($to, $subject, $body, $headers);
    if ($result) {
        return true;
    } else {
        throw new Exception("mail() function returned false");
    }
}
?>
