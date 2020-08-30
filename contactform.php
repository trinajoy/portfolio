<?php

if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = 'info@trina.dev';
    $headers = 'From: ' .$mailFrom;
    $txt = "You have recieved an email from: \n\n" .$name ."\n\n" .$message;

    mail($mailTo, $subject, $txt, $headers);
    header('Location:index.html');
}

?>