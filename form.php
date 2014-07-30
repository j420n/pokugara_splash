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
