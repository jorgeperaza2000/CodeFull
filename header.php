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
        <title>CodeFull - Experiencia Web - Diseño web, Desarrollo web, Desarrollo de aplicaciones, Hacemos tu web, Diseño de logos</title>
        <meta name="description" content="CodeFull - Diseño web y Desarrollo de aplicaciones web" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="T3KFYr2k0YgfVKIDHMXgtRCeuw5_CkM67Guv0MsdGEs" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <link href="img/assets/favicon.png" rel="icon" type="image/png"> 
        <link href="css/init.css" rel="stylesheet" type="text/css">
        <link href="css/ion-icons.min.css" rel="stylesheet" type="text/css">
        <link href="css/etline-icons.min.css" rel="stylesheet" type="text/css">
        <link href="css/theme.css" rel="stylesheet" type="text/css">  
        <link href="css/custom.css" rel="stylesheet" type="text/css">
        <link href="css/colors/<?=$color?>.css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700%7CRaleway:400,100,200,300%7CHind:400,300" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet"> 
        <?php
        include 'analyticstracking.php';
        ?>
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
                        <a class="navbar-brand to-top" href="#"><img src="img/assets/logo-light.png" class="logo-light" alt="Logo CodeFull" title="Logo CodeFull" ><img src="img/assets/logo-dark.png" class="logo-dark" alt="Logo CodeFull" title="Logo CodeFull"></a> 
                    </div>
                </div>

                <div id="navbar" class="navbar-collapse collapse">
                    <div class="container">
                        <ul class="nav navbar-nav menu-right">                            
                            
                            <!-- Each section must have corresponding ID ( #hero -> id="hero" ) -->
                            <li><a href="home">_Home</a></li>
                            <li><a href="portafolio">_Portafolio</a></li>
                            <li><a href="servicios">_Servicios</a></li>
                            <li><a href="blog">_Blog</a></li>
                            <li><a href="clientes">_Area de clientes</a></li>
                            <li><a href="#contact">_Contacto</a></li>
                            <li class="nav-separator"></li>
                            <!--<li class="nav-icon"><a href="http://facebook.com/" target="_blank"><i class="ion-social-facebook"></i></a></li>-->
                            <li class="nav-icon"><a href="http://twitter.com/codefullVE" target="_blank"><i class="ion-social-twitter"></i></a></li>
                            <!--<li class="nav-icon"><a href="#" target="_blank"><i class="ion-help-buoy"></i></a></li>-->
                        </ul>
                        
                    </div>
                </div> 
            </div>
        </nav>
        <!-- End Header -->