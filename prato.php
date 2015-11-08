<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week menu - Prato</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="mobile-web-app-capable" content="yes">
  <link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Week Menu">
  <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

  <!-- Tile icon for Win8 (144x144 + tile color) -->
  <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileColor" content="#3372DF">

  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-pink.min.css" /> -->
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.5/material.pink-indigo.min.css" />
  <link rel="stylesheet" href="http://weekmenu.felipecastro.com.br/css/styles.css">
  <link rel="stylesheet" type="text/css" href="http://weekmenu.felipecastro.com.br/css/animate.min.css" />
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/fullcalendar.min.css">
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

  <!--[if lt IE 9]>
       <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <style>
  body {
   background-size: cover;
    background-attachment: fixed;
    content: '';
    will-change: transform;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: fixed;
}
    #view-source {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 40px;
      margin-bottom: 40px;
      z-index: 900;
    }
.mdl-layout__header {display: block; !important}
.prato-layout-transparent .mdl-layout__header,
.prato-layout-transparent .mdl-layout__drawer-button {
  /* This background is dark, so we set text to white. Use 87% black instead if
     your background is light. */
  color: white;
}

.header-row_text {
  color: white;
  background: rgba(0, 0, 0, 0.2);
}

.prato-det .prato-det__info {

  max-width: 900px;
  padding: 350px 0 200px 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) {

  .prato-det .prato-det__info {
  max-width: 900px;
  padding: 200px 0 100px 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) {

  .prato-det .prato-det__info {
  max-width: 900px;
  padding: 50px 0 500px 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 568px) and (orientation : landscape) {

  .prato-det .prato-det__info {
  max-width: 900px;
  padding: 150px 0 500px 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  }
}

@media only screen and (min-device-width : 414px) and (max-device-width : 736px) and (orientation : landscape) {

  .prato-det .prato-det__info {
  max-width: 900px;
  padding: 130px 0 500px 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  }
}

.prato-det.mdl-layout .mdl-layout__content {
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.prato-det .mdl-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 160px;
}
.prato-det .mdl-card__title {
  padding: 16px;
  flex-grow: 1;
}

.sect_title {
  padding: 0 5%;
}

.sect_title p {
  font-weight: 100;
  font-size: 180%;
}
.datacriado {
  padding: 10px 0 0 0;
}
.datacriado {
  padding: 0 0 0 10px;
}
.botao_back_i {
    top: -3px;
    position: absolute;
    left: -50px;
    font-size: 1.2em;
}
.menu_header_actions {
  font-size: 0.9em !important;
}
.mdl-card__supporting-text {
    width: 100%;
    padding: 16px;
    min-height: 64px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.meta {
    box-sizing: border-box;
    padding: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: auto;
}

.meta > .meta__favorites {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 0 8px;
    font-size: 13px;
    font-weight: 500;
}
.section-spacer {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
  </style>
  <!-- Start of Woopra Code -->
  <script>
  (function(){
          var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/t/5.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
  })("woopra");

  woopra.config({
      domain: 'weekmenu.felipecastro.com.br'
  });

  woopra.track();
  </script>
  <!-- End of Woopra Code -->
</head>
<!-- <script src="https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js"></script> -->
  <body class="mdl-wm mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
    <div class="prato-det prato-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row header-row_text">
      <!-- Title -->
      <span class="mdl-layout-title" id="botao_back"><a href="http://weekmenu.felipecastro.com.br/"><i class="material-icons botao_back_i" role="presentation">arrow_back</i> Voltar</a></span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation -->
      <nav class="mdl-navigation">
        <div id="userprofile"></div>
      </nav>
    </div>
  </header>
      <main class="mdl-layout__content">
        <div>
          <!-- aqui -->
          <div class="prato-det__info mdl-grid" id="conteudo">

          </div>

          <!-- sss -->

        </div>


<?php
include 'foot.php';
include 'footer.php';
?>
<script type="text/javascript">
$( document ).ready(function() {
  // Handler for .ready() called.
mudaSaudacao();
carregaPrato('<?php echo $_GET["id"] ?>', '<?php echo $_GET["menu"] ?>');
});

$( "#imgview" ).click(function() {

if ($( "#conteudo" ).hasClass( "movido" )) {
$( "#conteudo" ).animate({ "left": "0px" }, "slow" );
$( "#conteudo" ).removeClass( "movido" );} else {
  $( "#conteudo" ).animate({ "left": "+=95%" }, "slow" );
$( "#conteudo" ).addClass( "movido" );
}
});
</script>
</html>
