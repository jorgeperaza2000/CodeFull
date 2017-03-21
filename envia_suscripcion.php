<?php
include 'PHPMailer/class.phpmailer.php';

include 'core/functions.php';
include 'core/db.php';

if ( !empty( $_POST ) ) {

	extract($_POST);

	if ( empty( $txtEmail ) ) {
		echo "error";
		exit;
	}

	$existeSuscriptor = $db->count("suscripciones", ["email" => $txtEmail]);
	
	if ( $existeSuscriptor > 0 ) {
		
		$datos = $db->get("suscripciones", "*", ["email" => $txtEmail]);
		
		if ( $datos["estatus"] == "Inactivo" ) {
			
			//ARMANDO EMAIL PARA EL CLIENTE
			$asunto = utf8_decode( "Gracias por tu suscripción" );
			$to = [strtolower( $txtEmail ) => ""];
			$cuerpo = "Hola, hemos recibido tu suscripción a nuestras publicaciones periódicas.<br><br>";
			$cuerpo .= "Puedes confiar en nosotros, sólo te enviaremos cosas buenas...<br><br>";
			$cuerpo .= "Gracias por preferirnos!<br><br>";
			$cuerpo .= "www.codefull.com.ve";
			$cuerpo .= "Si no desea recibir mas información, puede presionar el siguiente enlace www.codefull.com.ve/unsubscribe.php?email=" . strtolower( $txtEmail );
			$cuerpo = utf8_decode( $cuerpo );
			$respuesta = enviaEmail( $to, $asunto, $cuerpo);

			$datos = $db->update("suscripciones", 
							[
							"#fechaSuscripcion" => "NOW()",
							"#fechaBaja"        => "",
							"motivoInactivo"    => "",
							"estatus"           => "Activo"
							],
							[
							"email"             => strtolower( $txtEmail ),
							]);
			
		} else {
			echo "duplicate";
			exit;
		}

	} else {

		//ARMANDO EMAIL PARA EL CLIENTE
		$asunto = utf8_decode( "Gracias por tu suscripción" );
		$to = [strtolower( $txtEmail ) => ""];
		$cuerpo = "Hola, hemos recibido tu suscripción a nuestras publicaciones periódicas.<br><br>";
		$cuerpo .= "Puedes confiar en nosotros, sólo te enviaremos cosas buenas...<br><br>";
		$cuerpo .= "Gracias por preferirnos!<br><br>";
		$cuerpo .= "www.codefull.com.ve";
		$cuerpo .= "Si no desea recibir mas información, puede presionar el siguiente enlace www.codefull.com.ve/unsubscribe.php?email=" . strtolower( $txtEmail );
		$cuerpo = utf8_decode( $cuerpo );
		$respuesta = enviaEmail( $to, $asunto, $cuerpo);

		$datos = $db->insert("suscripciones", 
							[
							"email"             => strtolower( $txtEmail ),
							"#fechaSuscripcion" => "NOW()",
							"estatus"           => "Activo"
							]);

		echo $respuesta;

	}

} else {

	echo "No Data";

}