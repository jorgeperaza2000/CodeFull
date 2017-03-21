<?php
include 'PHPMailer/class.phpmailer.php';

include 'core/functions.php';
include 'core/db.php';

if ( !empty( $_POST ) ) {

	extract($_POST);

	if ( empty( $txtEmail ) || empty( $txtMotivo ) ) {
		echo "error";
		exit;
	}

	$existeSuscriptor = $db->count("suscripciones", ["email" => $txtEmail]);
	if ( $existeSuscriptor == 0 ) {
		
		echo "no Found";
		exit;

	} else {

		//ARMANDO EMAIL PARA EL CLIENTE
		$asunto = utf8_decode( "Su suscripción cancelada" );
		$to = [strtolower( $txtEmail ) => ""];
		$cuerpo = "Hola, Se ha cancelado su suscripción a codefull.com.ve con éxito.<br>";
		$cuerpo .= "A partir de este momento dejará de recibir información de codefull.com.ve.<br><br>";
		$cuerpo .= "Te extrañaremos!<br><br>";
		$cuerpo .= "www.codefull.com.ve<br>";
		$cuerpo .= "Si tu no realizaste esta operación o deseas volver a recibir mas información de codefull.com.ve, puedes volver a suscribirte en www.codefull.com.ve";
		$cuerpo = utf8_decode( $cuerpo );
		$respuesta = enviaEmail( $to, $asunto, $cuerpo);

		$datos = $db->update("suscripciones", 
							[
							"#fechaBaja"     => "NOW()",
							"estatus"        => "Inactivo",
							"motivoInactivo" => $txtMotivo
							],
							[
							"email"          => strtolower( $txtEmail ),
							]);

		echo $respuesta;

	}

} else {

	echo "No Data";

}