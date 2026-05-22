<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $subject_type = strip_tags(trim($data["subject"]));
    $message = strip_tags(trim($data["message"]));

    // Email Settings
    $recipient = "your-email@shreegopalagroup.com"; // Apni email yahan likhein
    $subject = "New Contact Inquiry: $subject_type";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Subject: $subject_type\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Success"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error"]);
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission.";
}
?>