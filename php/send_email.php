<?php
// Database connection
$servername = "localhost"; // Usually localhost
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "gurbani"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  // Validate the form data
  if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO gurbani_contact (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    if ($stmt->execute()) {
      // Send the email
      $to = "bhuwansingh886043@gmail.com"; // Replace with your email address
      $subject = "New Enquiry from $name";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
      $headers = "From: $email";

      if (mail($to, $subject, $body, $headers)) {
        echo "Enquiry sent successfully!";
      } else {
        echo "Failed to send enquiry.";
      }
    } else {
      echo "Failed to save enquiry to database.";
    }

    $stmt->close();
  } else {
    echo "Please fill in all fields correctly.";
  }
}

$conn->close();
?>
