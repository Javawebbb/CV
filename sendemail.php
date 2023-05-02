<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'javahiribragimov50@gmail.com';
    $subject = 'New message from '.$name;
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){
        echo 'Your message has been sent successfully.';
    } else{
        echo 'Unable to send email. Please try again.';
    }
}
?>