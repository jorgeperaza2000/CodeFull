        <?php
        include 'header.php';
        ?>        
        <!-- Quotes -->
        <section id="quotes" class="parallax pt100 pb120" data-overlay-dark="5">
            <div class="background-image">
                <img src="img/backgrounds/bg-10.jpg" title="CodeFull" alt="CodeFull">
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="color">Nuestros <strong>trabajos</strong> recientes</h1>
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
                                       Llenos de profesionalismo y dedicación
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                        Detallistas, apasionados, capacitados
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Quotes -->

        <!-- Portfolio -->
        <section id="works" class="pt100 pb110">
            <div class="container">
                <div class="row text-center">    

                    <div class="col-md-12 text-center pb20">   
                        <h2>Echa un vistazo a<br><strong>algunos de nuestros trabajos</strong></h2>
                        <!--<p class="lead">Wide range of <span class="color">successful</span> digital and print projects.</p>-->
                    </div>
                    
                    <div class="portfolio" data-gap="20">
                            
                        <ul class="vossen-portfolio-filters" data-initial-filter="*">
                            <li data-filter="*">Show All</li>
                            <li data-filter="Branding">Branding</li>
                            <li data-filter="WebSite">Desarrollo Web</li>
                            <li data-filter="WebApp">Aplicaciones Web</li>
                            <li data-filter="WebDesign">Diseño Web</li>
                            <li data-filter="CustomDev">Desarrollo a medida</li>
                        </ul>
                        
                        <div class="vossen-portfolio">
                            
                            <div class="col-md-4 col-sm-12" data-filter="WebSite WebDesign WebApp">
                                <a href="#">
                                    <div class="portfolio-item">
                                        <div class="item-caption">
                                            <h4>Sitio Web y Aplicación Web</h4>
                                            <p>fincaszurita.com</p>
                                            <p>Diseño y desarrollo de sitio web responsive, para agencia de bienes raíces. Posee un módulo de administración el cual permite realizar un seguimiento de demandas y clientes, además de permitir la administración del sitio web.</p>
                                        </div>
                                        <div class="item-image">
                                            <img alt="#" src="img/portfolio/3.jpg" title="CodeFull" alt="CodeFull" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-md-8 col-sm-6" data-filter="WebApp CustomDev WebDesign">
                                <a href="#">
                                    <div class="portfolio-item">
                                        <div class="item-caption">
                                            <h4>Control de Equipajes</h4>
                                            <p>SBA Airlines C.A.</p>
                                            <p>Sistema que controla el flujo de equipajes en aeropuertos mediante un scanner de códigos de barra.</p>
                                        </div>
                                        <div class="item-image">
                                            <img alt="#" src="img/portfolio/1.jpg" title="CodeFull" alt="CodeFull" />
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-md-4 col-sm-6" data-filter="CustomDev WebApp WebDesign">
                                <a href="#">
                                    <div class="portfolio-item">
                                        <div class="item-caption">
                                            <h4>e-Ticketing Call Center</h4>
                                            <p>SBA Airlines C.A. / Aserca Airlines C.A.</p>
                                            <p>Sistema de ventas telefónicas a través de un IVR (VO/IP), sin intervensión humana en el proceso de cobro ni visualización de data sencible por parte de los agentes.</p>
                                        </div>
                                        <div class="item-image">
                                            <img alt="product" src="img/portfolio/9.jpg" title="CodeFull" alt="CodeFull" />
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-md-4 col-sm-6" data-filter="Branding">
                                <a href="#">
                                    <div class="portfolio-item">
                                        <div class="item-caption">
                                            <h4>Imagen Corporativa</h4>
                                            <p>FlyTechSistemas C.A</p>
                                        </div>
                                        <div class="item-image">
                                            <img alt="product" src="img/portfolio/8.jpg" title="CodeFull" alt="CodeFull" />
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        
                    </div>
                    
                    <!--<a href="portfolio-contained.html" class="btn btn-md btn-light btn-appear mt30"><span>View All <i class="ion-arrow-right-c"></i></span></a>-->
                
                </div>
            </div>
        </section>
        <!-- End Portfolio --> 
        
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