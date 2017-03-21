        <?php
        include 'header.php';
        include 'core/db.php';
        include 'core/functions.php';
        ?>        
        <!-- Quotes -->
        <section id="quotes" class="parallax pt100 pb120" data-overlay-dark="5">
            <div class="background-image">
                <img src="img/backgrounds/bg-11.jpg" title="CodeFull" alt="CodeFull">
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="color">Te extrañaremos...</h1>
                    </div>
                </div>

            </div>
        </section>
        <!-- End Quotes -->

        <!-- Subscription Form -->
        <section class="pt110 pb50">
            <div class="container">
                <div class="row text-center">
                    
                    <?php
                    $email = empty($_GET["email"])?"":$_GET["email"];
                    if ( !empty( $email ) ) {
                        $datos = $db->get("suscripciones", "*", ["email" => $email]);
                        if ( !empty( $datos ) ) {
                            if ( $datos["estatus"] == "Inactivo" ) {
                            ?>
                                <div class="col-md-12 text-center mb40"> 
                                    <p>La cuenta <strong><?=$datos["email"]?></strong> se encuentra desactiva.</p>
                                </div>
                            <?php
                            } else {
                            ?>
                                <div class="col-md-12 text-center mb40"> 
                                    <p>Para nosotros es importante tu opinión... queremos saber el motivo por el cual dejas la suscripción.</p>
                                    <h2>Cuentanos...<strong>¡queremos ser mejores!</strong></h2>
                                </div>

                                <div class="subscription">
                                    <div class="input-group">
                                        <form action="#" method="post" id="frmUnSubscribe" role="form">
                                            <div class="form-validation alert"></div>
                                            <div class="form-group subscribe-form-input">
                                                <span class="input-group-btn subscribe-top">
                                                     <input type="hidden" name="txtEmail" id="txtEmail" value="<?=$email?>" /> 
                                                    <input type="text" required="true" name="txtMotivo" id="txtMotivo" class="top-subscribe-input" placeholder="Indica un breve motivo..."/>  
                                                </span>
                                                <span class="input-group-btn sign-btn">
                                                    <button type="submit" id="btnUnSubscribe" class="subscribe-form-submit btn btn-primary" data-loading-text="Loading...">Dejar</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="message-info"></div>
                            <?php
                            }
                        } else {
                        ?>
                            <div class="col-md-12 text-center mb40"> 
                                <p>- Error 404 -</p>
                                <h2><strong>Suscriptor</strong> no encontrado</h2>
                            </div>
                        <?php    
                        }
                    } else {
                    ?>
                        <div class="col-md-12 text-center mb40"> 
                            <p>- Error 404 -</p>
                            <h2><strong>Suscriptor</strong> no encontrado</h2>
                        </div>
                    <?php 
                    }
                    ?>

                </div>
            </div>
        </section>
        <!-- Subscription Form --> 

        <!-- Twitter Feed -->
        <section id="elements-twitter" class="pt10 pb10">
            <div class="container">
                <div class="row">
                
                    <div class="col-md-12 text-center"> 
                        <h4><strong><span class="color">@CodeFullVE</span> en Twitter</strong></h4>
                        <div data-twitter-widget-id="792538533424750596" data-max-tweets="6" data-slider-speed="4000" id="twitter-feed-slider" class="col-md-10 mr-auto"></div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- End Twitter Feed -->

        <!-- Contact Form -->    
        <section id="contact" class="pt40 pb100">
            <div class="container">
                <div class="row">     
                    
                    <div class="col-md-12 text-center pb20">   
                        <p class="lead">¡Queremos que estes con nosotros!</p>
                        <h2><strong>Contáctanos</strong></h2>
                    </div>
                    
                    <div class="col-md-8 col-md-offset-2 contact box-style"> 
                        <div id="message-info"></div>

                        <form name="frmContacto" id="frmContacto" method="post" autocomplete="off"> 

                            <div class="col-sm-12">
                                <input type="text" required="true" name="txtNombre" id="txtNombre" value="" placeholder="Como te llamas? *"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="email" required="true" name="txtEmail" id="txtEmail" value="" placeholder="Necesitamos un email para contactarte *"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="tel" name="txtTelefono" id="txtTelefono" placeholder="Si dejas tu número de teléfono y te llamamos?"/>
                            </div>
                            <div class="col-sm-12"> 
                                <textarea name="txtMenjaje" required="true" rows="9" id="txtMensaje" placeholder="Cuentanos brevemente lo que tienes en mente... *"></textarea>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="submit btn btn-lg btn-primary" id="btnContacto" value="Listo"/>
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Contact Form -->

        <!-- Start Footer -->
        <?php
        include 'footer.php';
        ?>