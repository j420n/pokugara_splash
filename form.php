<?php

$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$tel = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');

require "vendor/autoload.php";

use Guzzle\Http\Client;

$client = new Client();

$request = $client->post('https://script.google.com/macros/s/AKfycbxBodnzSduWj3ah55EFIziHgJitPvOmBNfbfb45fpe_Pjcmf_5f/exec')
    ->setPostField('name', $name)
    ->setPostField('email', $email)
    ->setPostField('tel', $tel)
    ->setPostField('timestamp', date("d/m/Y H:i:s"));

$response = $request->send();

echo $response->getStatusCode();

//Sent to $email variable

$subject = 'Thank you for your Interest';

$message = '
<html>
<head>
  <title>Thank you for registering your interest with Pokugara Residential Estate.</title>
</head>
<body>
  <p>You will be the first to know about any news or events at Pokugara.</p>
  <p>Follow us on Twitter. <a href="http://twitter.com/pokugara">CLICK HERE</a></p>
  <p>Check out our Facebook page. <a href="http://facebook.com/pokugara">CLICK HERE</a> </p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From: Pokugara Residential Estate <webmaster@pokugara.co.zw>' . "\r\n";

// Mail it to the Interested Person
mail($email, $subject, $message, $headers);

//Change the subject and message

$subject1 = 'Someone is interested in Pokugara';

$message1 = '
<html>
<head>
  <title>Pokugara Residential Estate.</title>
</head>
<body>
  <p>Someone has registered their interest at pokugara.co.zw</p>
  <p>To look at the full list of people who are interested click here(You must be signed into google)<a href="https://docs.google.com/spreadsheets/d/1RK1fflxvcjHWl5XT7DkpV1q7093w3RHdZw4HycPlYwM/edit#gid=0">CLICK HERE</a></p>

</body>
</html>
';


// Mail it to the Kerry Stubbs
$Kerry = "kstubbs@westpropertyzim.com";

mail($Kerry, $subject1, $message1, $headers);

// Mail it to the Rachel
$Rachel = "rachel@west.co.zw";

mail($Rachel, $subject1, $message1, $headers);