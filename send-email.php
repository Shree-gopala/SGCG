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
$recipientEmail = 'info@shreegopalagroup.com';

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

    // Client auto-responder subject
    $clientSubject = "Thank you for contacting SGSC";
    $clientBody = getClientEmailBody($name, $subject, $email, $phone, $message);

    try {
        // Try secure SMTP first to prevent email going to Spam
        $mailSent = sendEmailViaSMTP($recipientEmail, $emailSubject, $emailBody, $email);
        
        // If admin notification succeeds, try sending confirmation to customer in isolated try-catch
        if ($mailSent) {
            try {
                sendEmailViaSMTP($email, $clientSubject, $clientBody, $recipientEmail);
            } catch (Exception $clientSmtpEx) {
                error_log("Client SMTP auto-responder failed: " . $clientSmtpEx->getMessage());
                // Fallback to mail() for client
                try {
                    sendEmailViaMailFunction($email, $clientSubject, $clientBody, $recipientEmail);
                } catch (Exception $clientMailEx) {
                    error_log("Client Mail auto-responder fallback failed: " . $clientMailEx->getMessage());
                }
            }
        }
    } catch (Exception $smtpException) {
        $errorMessage = $smtpException->getMessage();
        error_log("SMTP failed: " . $errorMessage . ". Falling back to mail().");
        
        // Fallback to PHP's standard mail() function
        $mailSent = sendEmailViaMailFunction($recipientEmail, $emailSubject, $emailBody, $email);
        
        if ($mailSent) {
            try {
                sendEmailViaMailFunction($email, $clientSubject, $clientBody, $recipientEmail);
            } catch (Exception $clientMailEx) {
                error_log("Client Mail auto-responder fallback failed: " . $clientMailEx->getMessage());
            }
        }
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
 * Get Client auto-responder HTML body
 */
function getClientEmailBody($name, $subject, $email, $phone, $message) {
    $phoneLine = !empty($phone) ? "<span style='color: #555;'>Phone:</span> " . htmlspecialchars($phone) . "<br />" : "";
    return "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f97316; color: white; padding: 15px; border-radius: 5px 5px 0 0; text-align: center; }
            .content { border: 1px solid #ddd; padding: 20px; border-radius: 0 0 5px 5px; }
            .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
            .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; border: 1px solid #eee; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin: 0;'>Shree Gopala Sanwaria Chemicals</h2>
            </div>
            <div class='content'>
                <p>Dear " . htmlspecialchars($name) . ",</p>
                <p>Thank you for reaching out to us. We have received your query regarding <strong>\"" . htmlspecialchars($subject) . "\"</strong> and our team will get back to you shortly.</p>
                
                <div class='details'>
                    <strong>Your Submitted Inquiry Details:</strong><br />
                    <span style='color: #555;'>Name:</span> " . htmlspecialchars($name) . "<br />
                    <span style='color: #555;'>Email:</span> " . htmlspecialchars($email) . "<br />
                    " . $phoneLine . "
                    <span style='color: #555;'>Message:</span><br />
                    <p style='white-space: pre-wrap; margin: 5px 0 0 0; color: #444;'>" . htmlspecialchars($message) . "</p>
                </div>
                
                <p>Best regards,<br /><strong>Technical Sales & Support Team</strong><br />Shree Gopala Sanwaria Chemicals</p>
            </div>
            <div class='footer'>
                <p>Unit – 1: Delhi Road, Hisar, Haryana – 125001<br />Unit – 2: Murabba No. 136, Khasra Nos. 1/1, 2/1, 2/2 & 1/2, Tehsil Hisar, District Hisar, Haryana – 125044, India</p>
            </div>
        </div>
    </body>
    </html>
    ";
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

    // Connect to Hostinger SMTP server forcing IPv4 to prevent IPv6 hangs
    $ip = gethostbyname($smtp_host);
    
    // Create socket context to disable SSL peer verification (CA bundle issues)
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
            'peer_name' => $smtp_host
        ]
    ]);

    // Use stream_socket_client to apply the SSL stream context (port is required in the connection string)
    $host_connection = ($smtp_port == 465 ? 'ssl://' : 'tcp://') . $ip . ':' . $smtp_port;
    
    // Set connection timeout to 5 seconds
    $socket = @stream_socket_client($host_connection, $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);
    
    if (!$socket) {
        throw new Exception("Could not connect to SMTP server $smtp_host ($ip) on port $smtp_port: $errstr ($errno)");
    }

    // Set read/write stream timeout to 5 seconds to prevent hanging
    stream_set_timeout($socket, 5);

    // Helper to read SMTP server responses with timeout checks
    $readResponse = function($socket, $expected) {
        $response = "";
        while (true) {
            $line = fgets($socket, 512);
            if ($line === false) {
                $info = stream_get_meta_data($socket);
                if ($info['timed_out']) {
                    throw new Exception("SMTP connection timed out waiting for response.");
                }
                break;
            }
            $response .= $line;
            if (substr($line, 3, 1) === ' ') {
                break;
            }
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
