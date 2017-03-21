<?php
include 'PHPMailer/class.phpmailer.php';

include 'core/functions.php';

if ( !empty( $_POST ) ) {

	extract($_POST);

	if ( empty( $txtNombre ) || empty( $txtEmail ) || empty( $txtMensaje ) ) {
		echo "error";
		exit;
	}

	if ( empty( $txtTelefono ) ) {
		$txtTelefono = "No Suministrado";
	}

	//ARMANDO EMAIL PARA CODEFULL
	$asunto = utf8_decode( "Contacto desde la web - " . ucwords($txtNombre) );
	$to = ["jperaza@codefull.com.ve" => "CodeFull"];
	$cuerpo = "Hola " . ucwords($txtNombre) . " te ha escrito desde la web<br><br>";
	$cuerpo .= "Nombre: " . ucwords($txtNombre) . "<br>";
	$cuerpo .= "Telefono: " . $txtTelefono . "<br>";
	$cuerpo .= "Email: " . strtolower($txtEmail) . "<br>";
	$cuerpo .= "Mensaje: " . ucfirst($txtMensaje) . "<br>";
	$cuerpo = utf8_decode( $cuerpo );
	enviaEmail( $to, $asunto, $cuerpo);

	//ARMANDO EMAIL PARA EL CLIENTE
	$asunto = utf8_decode( "Gracias " . ucwords($txtNombre) . " por contactarnos" );
	$to = [strtolower($txtEmail) => ucwords($txtNombre)];
	$cuerpo = "Hola " . ucwords($txtNombre) . ", hemos recibido tu contacto.<br><br>";
	$cuerpo .= "Nos pondremos en contacto contigo lo antes posible.<br><br>";
	$cuerpo .= "Gracias por preferirnos!<br><br>";
	$cuerpo .= "www.codefull.com.ve";
	$cuerpo = utf8_decode( $cuerpo );
	echo enviaEmail( $to, $asunto, $cuerpo);

} else {

	echo "No Data";

}