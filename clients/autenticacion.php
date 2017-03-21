<?php
session_start();
include '../core/db.php';
include '../core/functions.php';

if ( !empty( $_POST ) ) {
	
	extract( $_POST );

	if ( !empty( $txtEmail ) || !empty( $txtPassword ) ) {

		$datos = $db->get("mp_usuarios", "*", ["AND" => ["email" => $txtEmail, "secret" => $txtPassword]]);

		if ( !empty( $datos ) ) {

			if ( $datos["estatus"] == "Activo" ) {

				$_session["usuario"]["nombre"] = $datos["nombre"];
				$_session["usuario"]["email"] = $datos["email"];
				$_session["usuario"]["interno"] = $datos["interno"];
				$_session["usuario"]["idCliente"] = $datos["idCliente"];

				if ( !empty( $datos["idCliente"] ) ) {
					
					//$cliente = $db->get("mp_clientes", "*", ["id" => $datos["idCliente"]]);
					$_session["usuario"]["cliente"] = $cliente["razon_social"];

				} else {
					
					$_session["usuario"]["cliente"] = 0;

				}

				echo "Ok";

			} else {

				"UserInactive";

			}

		} else {

			echo "NoUsers";

		}

	} else {

		echo "NoData";

	}


} else {

	echo "NoData";

}
