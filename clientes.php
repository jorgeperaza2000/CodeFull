        <?php
        include 'header.php';
        ?>        
        <!-- Quotes -->
        <section id="quotes" class="parallax pt100 pb120" data-overlay-dark="5">
            <div class="background-image">
                <img src="img/backgrounds/bg-12.jpg" title="CodeFull" alt="CodeFull">
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="color">Área para nuestros <strong>clientes</strong></h1>
                    </div>
                </div>
                
            </div>

            <div class="container">   
                
                <div class="row">
                    <div class="col-md-12">   
                        <div class="quote-slider navigation-thin container white text-center" data-autoplay="true" data-speed="8000">
                            
                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                       Queremos que estes al tanto de todo lo que pasa con tu proyecto...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>

                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                       Maneja tu proyecto junto a nosotros...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                            
                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                        Visualiza en tiempo real los avances...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                            
                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                        Comenta, opina, reporta fallas, todo desde nuestro manejador de proyectos...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
        <!-- End Quotes -->

        <!-- Title Projets Manager -->
        <section class="pt0 pb0">
            <div class="container">
                <div class="row text-center">
                    
                    <div class="col-md-12 text-center mb40"> 
                        <h2><strong>Manejador de proyectos</strong></h2>
                        <h3>Una herramienta <strong class="color">gratuita</strong> para nuestros clientes...</h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Title Projets Manager -->

        <!-- Projets Manager -->
        <section class="pt10 pb10">
            <div class="container">
                <div class="row text-center">
                    
                    <div class="col-md-6 col-md-offset-1 text-left mb40"> 
                        <h4><strong>CodeFull</strong> te brinda una herramienta gratuita para administrar los procesos de proyecto.</h4>
                        <div class="col-md-12 col-sm-6 feature-left large">
                            <div class="feature-left-content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <ul class="list-icons">
                                            <li><i class="ion-android-checkbox-outline"></i>Gestión de tareas</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Aprobación parcial o completa de propuestas</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Control de tiempos de ejecución</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Debate de ideas</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Informes y seguimiento de errores</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Colaboración de documentos</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Estatus en tiempo real</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Informes personalizados</li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-1 text-center mb40"> 
                        <h3><strong>Area de clientes</strong></h3>
                        <h4>Inicia sesión</h4>                        
                        <div class="col-md-12 contact box-style"> 
                            <!-- Forms can be functional only on server. Upload to your server when testing. -->
                            <form name="loginClientes" id="loginClientes" action="#" method="post" autocomplete="off"> 
                                <div id="message-info"></div>
                                <div class="col-sm-12">
                                    <input type="email" required="true" name="txtEmail" id="txtEmail" value="" placeholder="Email"/>
                                </div>
                                <div class="col-sm-12">
                                    <input type="password" required="true" name="txtPassword" id="txtPassword" value="" autocomplete="off" placeholder="Contraseña"/>
                                </div>
                                <div class="col-sm-12 text-right">
                                    <a href="#" class="color">Olvidé mi contraseña</a>
                                </div>
                                <div class="col-md-12">
                                    <input type="submit" class="submit btn btn-lg btn-primary" id="btnLoginCliente" value="Entrar"/>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Project Manager --> 
        
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