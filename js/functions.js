$(document).ready(function(){

	if ( $("#loginClientes").length ) {
		$("#loginClientes").on("submit", function(){
			var txtEmail = $("#txtEmail").val();
			var txtPassword = $("#txtPassword").val();
			$("#btnLoginCliente").attr("disabled", true);
			$("#message-info").removeClass();

			$.post( "clients/autenticacion.php", { txtEmail: txtEmail, txtPassword: txtPassword })
				.done(function( data ) {
					if ( data == "Ok") {
						$("#message-info").html("Iniciando sesión...").addClass("alert alert-success").show();
						$("#btnLoginCliente").attr("disabled", false);
						$(location).attr('href', 'clients/dashboard');
					} else if ( data == "NoData") {
						$("#message-info").html("Disculpe, faltaron datos.").addClass("alert alert-danger").show();
						$("#btnLoginCliente").attr("disabled", false);
					} else if ( data == "NoUsers") {
						$("#message-info").html("Disculpe, usuario o clave invalida.").addClass("alert alert-danger").show();
						$("#btnLoginCliente").attr("disabled", false);
					} else if ( data == "UserInactive") {
						$("#message-info").html("Disculpe, el usuario se encuentra inactivo.").addClass("alert alert-info").show();
						$("#btnLoginCliente").attr("disabled", false);
					}
			  	});
			return false;
		});
	}

	if ( $("#frmContacto").length ) {
		$("#frmContacto").on("submit", function(){
			var txtNombre = $("#txtNombre").val();
			var txtEmail = $("#txtEmail").val();
			var txtTelefono = $("#txtTelefono").val();
			var txtMensaje = $("#txtMensaje").val();
			$("#btnContacto").attr("disabled", true);
			$("#message-info").removeClass();

			$.post( "envia_contacto.php", { txtNombre: txtNombre, txtEmail: txtEmail, txtTelefono: txtTelefono, txtMensaje: txtMensaje })
				.done(function( data ) {
					if ( data == "ok" ) {
						$("#message-info").html("Gracias! Pronto te contactaremos...").addClass("alert alert-success").show();
						$("#btnContacto").attr("disabled", false);
					} else if ( data == "error") {
						$("#message-info").html("Upss! Ocurrio un error... Intenta nuevamente").addClass("alert alert-danger").show();
						$("#btnContacto").attr("disabled", false);
					}
			  	});
			return false;
		});
	}

	if ( $("#frmSuscripcion").length ) {
		$("#frmSuscripcion").on("submit", function(){
			var txtEmail = $("#txtEmailSubscribe").val();
			$("#btnSuscripcion").attr("disabled", true);
			$("#message-subscribe-info").removeClass();

			$.post( "envia_suscripcion.php", { txtEmail: txtEmail })
				.done(function( data ) {
					if ( data == "ok" ) {
						$("#message-subscribe-info").html("Gracias! Tu suscripción vale mucho para nosotros...").addClass("alert alert-success").show();
						$("#btnSuscripcion").attr("disabled", false);
					} else if ( data == "duplicate") {
						$("#message-subscribe-info").html("Su email ya esta registrado... Muchas gracias por ser parte de nuestro equipo.").addClass("alert alert-info").show();
						$("#btnSuscripcion").attr("disabled", false);
					} else if ( data == "error") {
						$("#message-subscribe-info").html("Upss! Ocurrio un error... Intenta nuevamente").addClass("alert alert-danger").show();
						$("#btnSuscripcion").attr("disabled", false);
					}
			  	});
			return false;
		});
	}

	if ( $("#frmUnSubscribe").length ) {
		$("#frmUnSubscribe").on("submit", function(){
			var txtEmail = $("#txtEmail").val();
			var txtMotivo = $("#txtMotivo").val();
			$("#btnUnSubscribe").attr("disabled", true);
			$("#message-info").removeClass();

			$.post( "dejar_suscripcion.php", { txtEmail: txtEmail, txtMotivo: txtMotivo })
				.done(function( data ) {
					if ( data == "ok" ) {
						$("#message-info").html("Suscripción cancelada con éxito... te extrañaremos!").addClass("alert alert-success").show();
						$("#btnUnSubscribe").attr("disabled", false);
					} else if ( data == "no Found") {
						$("#message-info").html("No se pudo realizar la operación... Suscriptor no encontrado...").addClass("alert alert-info").show();
						$("#btnUnSubscribe").attr("disabled", false);
					} else if ( data == "error") {
						$("#message-info").html("Upss! Ocurrio un error... Intenta nuevamente").addClass("alert alert-danger").show();
						$("#btnUnSubscribe").attr("disabled", false);
					}
			  	});
			return false;
		});
	}
	

});