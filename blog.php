        <?php
        include 'core/functions.php';
        include 'header.php';
        ?>        
        <!-- Quotes -->
        <section id="quotes" class="parallax pt100 pb120" data-overlay-dark="5">
            <div class="background-image">
                <img src="img/backgrounds/bg-11.jpg" title="CodeFull" alt="CodeFull">
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="color">
                        Nuestro blog<br><strong>Temas de interés</strong></h1>
                    </div>
                </div>

            </div>
        </section>
        <!-- End Quotes -->

        <article class="pt110 pb50">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-10 text-left mb40"> 
                        <h3><a href="<?=seo_url('¿Hacer tú mismo tu web o contratar un profesional?')?>">¿Hacer tú mismo tu web o contratar un profesional?</a></h3>
                        <p>¿Cuál es la mejor opción? <br> Depende de muchos factores, en este post te mostraremos los dos más importantes.<br>
                    </div>

                </div>
            </div>
        </article>
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