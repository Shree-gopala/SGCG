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
define('SMTP_PORT', 587); // Use 587 for TLS or 465 for SSL
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

// Send email using PHP's mail() function
try {
    $mailSent = sendEmailViaMailFunction($recipientEmail, $emailSubject, $emailBody, $email);
    
    if ($mailSent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email sent successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to send email via mail function'
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
 * Send email via PHP mail() function
 * Works better on most shared hosting like Hostinger
 */
function sendEmailViaMailFunction($to, $subject, $body, $reply_to) {
    // Prepare headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . SMTP_USER . "\r\n";
    $headers .= "Reply-To: " . $reply_to . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    error_log("Sending email via mail() to: $to");
    error_log("From: " . SMTP_USER);
    error_log("Subject: $subject");
    
    // Send email
    $result = @mail($to, $subject, $body, $headers);
    
    if ($result) {
        error_log("Email sent successfully via mail()");
        return true;
    } else {
        error_log("mail() function failed");
        throw new Exception("mail() function returned false");
    }
}
?>
