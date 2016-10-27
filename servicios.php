<?php
session_start();

$color = getThemeColor();

$video = getVideo();

function getThemeColor(){
    $lastColor = (empty($_SESSION["color"]))?"":$_SESSION["color"];
    $colors = ["blue", "green", "orange", "purple"];

    $colorRand = rand(0,3);
    while ( $colorRand == $lastColor) {
        $colorRand = rand(0,3);
    }
    $_SESSION["color"] = $colorRand;
    $color = $colors[$colorRand];
    return $color;
}

function getVideo(){
    $lastVideo = (empty($_SESSION["video"]))?"":$_SESSION["video"];
    $videos = ["1", "2"];

    $videoRand = rand(0,1);
    while ( $videoRand == $lastVideo) {
        $videoRand = rand(0,1);
    }
    $_SESSION["video"] = $videoRand;
    $video = $videos[$videoRand];
    return $video;
}
?>
<!DOCTYPE html>
<html lang="es">
    
<head>
        <meta charset="UTF-8">
        <title>CodeFull Expreciencia Web</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <link href="img/assets/favicon.png" rel="icon" type="image/png"> 
        <link href="css/init.css" rel="stylesheet" type="text/css">
        <link href="css/ion-icons.min.css" rel="stylesheet" type="text/css">
        <link href="css/etline-icons.min.css" rel="stylesheet" type="text/css">
        <link href="css/theme.css" rel="stylesheet" type="text/css">  
        <link href="css/custom.css" rel="stylesheet" type="text/css">
        <link href="css/colors/<?=$color?>.css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700%7CRaleway:400,100,200,300%7CHind:400,300" rel="stylesheet" type="text/css">
    </head>
    <body data-fade-in="true">

        <div class="pre-loader"><div></div></div>
        
        <!-- Start Header -->
        <nav class="navbar nav-down" data-fullwidth="true" data-menu-style="transparent" data-animation="shrink"><!-- Styles: light, dark, transparent | Animation: hiding, shrink -->
            <div class="container">
                
                <div class="navbar-header">
                    <div class="container">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </button>
                        <a class="navbar-brand to-top" href="#"><img src="img/assets/logo-light.png" class="logo-light" alt="#"><img src="img/assets/logo-dark.png" class="logo-dark" alt="#"></a> 
                    </div>
                </div>

                <div id="navbar" class="navbar-collapse collapse">
                    <div class="container">
                        <ul class="nav navbar-nav menu-right">                            
                            
                            <!-- Each section must have corresponding ID ( #hero -> id="hero" ) -->
                            <li><a href="index.php">Home</a></li>
                            <li><a href="index.php?#about">About</a></li>
                            <li><a href="servicios.php">Services</a></li>
                            <li><a href="#works">Work</a></li>
                            <li class="dropdown megamenu vos">
                                <a class="dropdown-toggle">Elements<i class="ion-ios-arrow-down"></i></a> 
                                <ul class="dropdown-menu fullwidth">
                                    <li class="megamenu-content withdesc">
                                        <div class="col-md-3 mg-col">
                                            <ul>
                                                <li><a href="elements.html#elements-accordion">Accordion</a></li>
                                                <li><a href="elements.html#elements-buttons">Buttons</a></li>
                                                <li><a href="elements.html#elements-features">Icon Features</a></li>
                                                <li><a href="elements.html#elements-bars">Progress Bars</a></li> 
                                                <li><a href="elements.html#elements-pricing">Pricing Options</a></li>
                                                <li><a href="elements.html#elements-lists">Lists</a></li>
                                                <li><a href="elements.html#elements-typography">Typography</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 mg-col">
                                            <ul>
                                                <li><a href="elements.html#elements-tabs">Tabs</a></li> 
                                                <li><a href="elements.html#elements-circles">Progress Circles</a></li>
                                                <li><a href="elements.html#elements-icons">Icon Fonts</a></li>
                                                <li><a href="elements.html#elements-maps">Google Maps</a></li>
                                                <li><a href="elements.html#elements-grid">Grid Columns</a></li>
                                                <li><a href="elements.html#elements-countdown">Countdowns</a></li>
                                                <li><a href="elements.html#elements-testimonials">Testimonials</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 mg-col">
                                            <ul>
                                                <li><a href="elements.html#elements-subscribe">Subscription</a></li>
                                                <li><a href="elements.html#elements-videos">Video Embeds</a></li>
                                                <li><a href="elements.html#elements-twitter">Twitter Feed</a></li>
                                                <li><a href="elements.html#elements-callouts">Callouts</a></li>
                                                <li><a href="portfolio-contained.html">Portfolio</a></li>
                                                <li><a href="portfolio-fullwidth.html">Portfolio Fullwidth</a></li>
                                                <li><a href="project-wide-gallery.html">Project Wide Gallery</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 mg-col">
                                            <ul>
                                                <li><a href="project-slides.html">Project Slides</a></li>
                                                <li><a href="project-gallery.html">Projects Gallery</a></li>
                                                <li><a href="project-video.html">Projects Video</a></li>
                                                <li><a href="project-wide-slides.html">Project Wide Slides</a></li>
                                                <li><a href="project-wide-video.html">Project Wide Video</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul> 
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle">Blog<i class="ion-ios-arrow-down"></i></a> 
                                <ul class="dropdown-menu">
                                    <li><a href="blog-standard.html">Standard Layout</a></li>
                                    <li><a href="blog-list.html">List Layout</a></li>
                                    <li><a href="blog-grid.html">Grid Layout</a></li>
                                    <li><a href="blog-post-standard.html">Standard Post</a></li>
                                    <li><a href="blog-post-gallery.html">Gallery Post</a></li>
                                    <li><a href="blog-post-video.html">Video Post</a></li>
                                    <li><a href="blog-post-fullwidth.html">Fullwidth Post</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                             
                            <li class="nav-separator"></li>
                            <li  class="nav-icon"><a href="http://facebook.com/" target="_blank"><i class="ion-social-facebook"></i></a></li>
                            <li  class="nav-icon"><a href="http://twitter.com/" target="_blank"><i class="ion-social-twitter"></i></a></li>
                            <li  class="nav-icon"><a href="#" target="_blank"><i class="ion-help-buoy"></i></a></li>
                        </ul>
                        
                    </div>
                </div> 
            </div>
        </nav>
        <!-- End Header -->
        
        <!-- Quotes -->
        <section id="quotes" class="parallax pt100 pb120" data-overlay-dark="5">
            <div class="background-image">
                <img src="img/backgrounds/bg-9.jpg" alt="#">
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="color">Nuestros sevicios</h1>
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
                                       La excelencia no tiene precio, tiene responsables...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                            <div>
                                <h3 class="">
                                    <i class="vossen-quote color"></i>
                                        No vendemos productos, te damos soluciones...
                                    <i class="vossen-quote color"></i>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Quotes -->

        <!-- Features -->
        <section id="elements-features" class="pt100 pb100">
            <div class="container">   
                <div class="row">
                    
                    <div class="col-md-12">
                    
                        <div class="col-md-4 col-sm-6 feature-center large">
                            <i class="icon-key size-4x color"></i>
                            <i class="icon-key back-icon"></i> 
                            <div class="feature-left-content">
                                <h4 class="color"><strong>Branding</strong><br>Abrimos las puertas de tu negocio</h4>
                                <div class="row">
                                    <div class="col-md-12">
                                        <ul class="list-icons">
                                            <li><i class="ion-android-checkbox-outline"></i>Identidad visual (Diseño de logo)</li>
                                            <li><i class="ion-android-checkbox-outline"></i>Diseño gráfico (Flyer, poster…)
                                                <ul class="list-icons pl20">
                                                    <li><i class="ion-android-done-all"></i>Volantes</li>
                                                    <li><i class="ion-android-done-all"></i>Posters</li>
                                                    <li><i class="ion-android-done-all"></i>Vallas</li>
                                                    <li><i class="ion-android-done-all"></i>Carnets</li>
                                                </ul>
                                            </li>
                                            <li><i class="ion-android-checkbox-outline"></i>Diseño corporativo
                                                <ul class="list-icons pl20">
                                                    <li><i class="ion-android-done-all"></i>Tarjetas de visita</li>
                                                    <li><i class="ion-android-done-all"></i>Material POP</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-md-4 col-sm-6 feature-center large">
                            <i class="icon-circle-compass size-4x color"></i>
                            <i class="icon-circle-compass back-icon"></i> 
                            <div class="feature-left-content">
                                <h4><strong>Fast &amp; Smooth</strong><br>Fully Customizable</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p> 
                            </div> 
                        </div>
                        <div class="col-md-4 col-sm-6 feature-center large">
                            <i class="icon-genius size-4x color"></i>
                            <i class="icon-genius back-icon"></i> 
                            <div class="feature-left-content">
                                <h4><strong>Free Updates</strong><br>Clean Modern Code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p> 
                            </div> 
                        </div> 
                        
                    </div> 
                
           
                </div>
            </div>
        </section>

        <!-- Start Footer -->
        <footer id="footer" class="footer style-1 dark">

            <a href="index.html"><img src="img/assets/footer-logo.png" alt="#" class="mr-auto img-responsive"></a>
            <ul>
                <li><a href="https://www.twitter.com/" target="_blank" class="color"><i class="ion-social-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" class="color"><i class="ion-social-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" class="color"><i class="ion-social-linkedin"></i></a></li>
                <li><a href="https://www.pinterest.com/" target="_blank" class="color"><i class="ion-social-pinterest"></i></a></li> 
                <li><a href="https://plus.google.com/" target="_blank" class="color"><i class="ion-social-googleplus"></i></a></li> 
            </ul>
            <a href="http://www.codefull.com.ve/"><strong>© CodeFull <?=date("Y")?></strong></a>
            <p>Hecho por grandes personas.</p>
            
            <!-- Back To Top Button -->
            <span><a class="scroll-top"><i class="ion-chevron-up"></i></a></span>
            
        </footer>
        <!-- End Footer -->
        
        <script src="js/jquery.js"></script>
        <script src="js/init.js"></script>
        <script src="js/scripts.js"></script>
       
    </body>

</html>