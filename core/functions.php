<?php
function enviaEmail($emailTo, $subject, $body) {

	date_default_timezone_set('Europe/Madrid');

	require_once 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;


	//$mail->isSMTP();

	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = 0;

	$mail->Debugoutput = 'html';

	
	$mail->Host       = 'smtp.zoho.com'; // SMTP host
	$mail->Port       = 587; // SMTP open port
	$mail->SMTPAuth   = 'tls';
	$mail->SMTPSecure = false;
	$mail->Username   = 'jperaza@codefull.com.ve'; // SMTP username
	$mail->Password   = 'Cucu0101**';

	$mail->setFrom("jperaza@codefull.com.ve", "CodeFull");

	if ( !empty( $emailTo ) ) {
		foreach($emailTo as $email => $name) {
			if ( !empty( $name ) )  {
				$mail->addAddress($email, $name);
			} else {
				$mail->addAddress($email);
			}
		}
	}

	$mail->Subject = $subject;

	if ( !empty( $body ) ){
		$mail->msgHTML($body);
	}

	if (!$mail->send()) {
	    return "error";
	} else {
		return "ok";
	}
}


function pr($val){
    echo '<pre>';
    print_r($val);
    echo  '</pre>';
}

function seo_url($toClean) {
	$chars = array(
        '?' => 'S', '?' => 's', 'Ð' => 'Dj','?' => 'Z', '?' => 'z', 'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A',
        'Å' => 'A', 'Æ' => 'A', 'Ç' => 'C', 'È' => 'E', 'É' => 'E', 'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I',
        'Ï' => 'I', 'Ñ' => 'N', 'Ò' => 'O', 'Ó' => 'O', 'Ô' => 'O', 'Õ' => 'O', 'Ö' => 'O', 'Ø' => 'O', 'Ù' => 'U', 'Ú' => 'U',
        'Û' => 'U', 'Ü' => 'U', 'Ý' => 'Y', 'Þ' => 'B', 'ß' => 'Ss','à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a',
        'å' => 'a', 'æ' => 'a', 'ç' => 'c', 'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i',
        'ï' => 'i', 'ð' => 'o', 'ñ' => 'n', 'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o', 'ù' => 'u',
        'ú' => 'u', 'û' => 'u', 'ý' => 'y', 'ý' => 'y', 'þ' => 'b', 'ÿ' => 'y', 'ƒ' => 'f', ',' => '',  '.' => '',  ':' => '',
        ';' => '',  '_' => '',  '<' => '',  '>' => '',  '\\'=> '',  'ª' => '',  'º' => '',  '!' => '',  '|' => '',  '"' => '',
        '@' => '',  '·' => '',  '#' => '',  '$' => '',  '~' => '',  '%' => '',  '€' => '',  '&' => '',  '¬' => '',  '/' => '',
        '(' => '',  ')' => '',  '=' => '',  '?' => '',  '\''=> '',  '¿' => '',  '¡' => '',  '`' => '',  '+' => '',  '´' => '',
        'ç' => '',  '^' => '',  '*' => '',  '¨' => '',  'Ç' => '',  '[' => '',  ']' => '',  '{' => '',  '}' => '',  '? '=> '-',
    );
	$toClean = str_replace('&', '-and-', $toClean);
	$toClean = str_replace('.', '', $toClean);
	$toClean = strtolower(strtr($toClean, $chars));
	$toClean = str_replace(' ', '-', $toClean);
	$toClean = str_replace('--', '-', $toClean);
	$toClean = str_replace('--', '-', $toClean);
	$toClean = preg_replace('/[^\w\d_ -]/si', '', $toClean);
	return trim("p-" . $toClean);
}