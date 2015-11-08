<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week menu - Adicionar novo prato</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="mobile-web-app-capable" content="yes">
  <link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Material Design Lite">
  <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

  <!-- Tile icon for Win8 (144x144 + tile color) -->
  <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileColor" content="#3372DF">

  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-pink.min.css" /> -->
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.pink-indigo.min.css" />
  <link rel="stylesheet" href="http://weekmenu.felipecastro.com.br/css/styles.css">
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

  <!--[if lt IE 9]>
       <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <link rel="shortcut icon" href="/bootstrap/img/favicon.ico">
</head>
  <body class="mdl-wm mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">

      <main>
          <!-- <section class="section--center mdl-grid mdl-grid--no-spacing section-header">
            <h5 class="font_100">Buscar prato</h5>
          </section> -->
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col">
            <div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            	<div class="mdl-grid mdl-cell--12-col" style="height: 70px;">
                <div class="mdl-cell mdl-cell--10-col-desktop mdl-cell--7-col-tablet mdl-cell--10-col-phone">
                 <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--10-col">
    				<input class="mdl-textfield__input mdl-textfield__input_busca" type="text" id="b" />
    				<label class="mdl-textfield__label mdl-textfield__input_busca" for="b">Procure nos pratos já cadastrados por você ou pela comunidade</label>
  				  </div>
                </div>
                <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--2-col-phone">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="padding-top: 47px;">
                    <button id="btn-busca" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" data-upgraded=",MaterialButton,MaterialRipple" style="padding-top: 6px;">
                    	<i class="material-icons">search</i>
                    	<span class="mdl-button__ripple-container">
                        <span class="mdl-ripple"></span>
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone" id="pratos_result">
            </div>
          </section>
      </main>

<script src="http://felipecastro.com.br/weekmenu/js/material.min.js"></script>
<script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.2.7.min.js"></script>
<script type='text/javascript' src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript">var host = "http://weekmenu.felipecastro.com.br/";</script>
<script type="text/javascript" src="http://weekmenu.felipecastro.com.br/js/functions.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>

</body>
<script type="text/javascript">
$( document ).ready(function() {
mudaSaudacao();
});

$('#btn-busca').click(function(){
    buscaPrato($('#b').val().toLowerCase());
});

$('#cancel').click(function(){
    parent.$.fancybox.close();
});

$( "#b" ).keyup(function( event ) {
  if ( event.which == 13 ) {
   event.preventDefault();
  }
  buscaPrato($('#b').val().toLowerCase());
});

function addPrato(pratoID) {

	if (Parse.User.current()) {

		var PratoMenu = Parse.Object.extend("diamenu");
        var dia = new PratoMenu();

        dia.set("prato", pratoID);
        dia.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": pratoID });
        dia.set("menu", '<?php echo $_GET["menu"] ?>');
        dia.set("menup", { "__type": "Pointer", "className": "menu", "objectId": "<?php echo $_GET['menu'] ?>" });
        dia.set("iddia", <?php echo $_GET["dia"] ?>);
        dia.set("owner", Parse.User.current().id);
        dia.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
        dia.set("ativo", true);

        dia.save(null, {
        	success: function(dia) {
              parent.$(location).attr('href','<?php echo $host ?>m/<?php echo $_GET["menu"] ?>');
              parent.$.fancybox.close();
            },
            error: function(grupo, error) {
              console.log('Ocorreu um erro: ' + error.message);
            }
         });
	}
};

</script>
</html>
