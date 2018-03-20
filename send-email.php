<?php 
    if (isset($_POST['submit'])) {
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "hello@ryancain.info";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$firstName." ".$lastName.".\n\n".$message;

        mail($mailTo, $txt, $headers);
    }
?>