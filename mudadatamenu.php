
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Agendamento</title>
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
  <link rel="stylesheet" href="http://weekmenu.felipecastro.com.br/css/material-dtp.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/fullcalendar.min.css">
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.css"/>
  <link rel="stylesheet" href="http://weekmenu.felipecastro.com.br/css/mfb.css">
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

</head>
<body class="mdl-wm mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
<!-- conteudo -->
     <main class="mdl-layout__content">
        <div class="page-content">
          <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
            <h3 class="font_100">Novo agendamento</h3>
            <h3 class="font_100">Menu XPTO</h3>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp center_menor">
            <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <form action="" id="addMenu">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                    <input class="mdl-textfield__input" type="text" id="dataini" name="" class="fieldset__input "/>
                    <label class="mdl-textfield__label" for="dataini">Data de início</label>
                  </div>
                  <div class="mdl-card__actions actions_add" style="padding-top: 25px;">
                    <div class="mdl-layout-spacer"></div>
                    <input id="btn-add" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored button_add_act" value="Salvar">
                  </div>
              </div>
              </form>
            </div>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
          </section>
         </div>
           </main>
         </div>
         
<!-- <script src="http://felipecastro.com.br/weekmenu/js/material.min.js"></script> -->
<script type="text/javascript" src="https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js"></script>
<script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.2.7.min.js"></script>
<script type='text/javascript' src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript">var host = "http://weekmenu.felipecastro.com.br/";</script>
<script type="text/javascript" src="http://weekmenu.felipecastro.com.br/js/functions.js"></script>
<script type="text/javascript" src="http://weekmenu.felipecastro.com.br/js/mfb.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/pt-br.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/fullcalendar.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/lang/pt-br.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="http://weekmenu.felipecastro.com.br/js/material-dtp.js"></script>


<script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
    try {
    var pageTracker = _gat._getTracker("UA-8694092-2");
    pageTracker._setDomainName("none");
    pageTracker._setAllowLinker(true);
    pageTracker._trackPageview();
    } catch(err) {}</script>
    <script type="text/javascript">
      var rpxJsHost = (("https:" == document.location.protocol) ? "https://" : "http://static.");
      document.write(unescape("%3Cscript src='" + rpxJsHost +
    "rpxnow.com/js/lib/rpx.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
      RPXNOW.overlay = true;
      RPXNOW.language_preference = 'en';


</script>

         </body>

<script type="text/javascript">
$( document ).ready(function() {

$('#dataini').bootstrapMaterialDatePicker
      ({
        time: false,
        format: 'DD/MM/YYYY',
        lang: 'pt-BR',
        weekStart: 1,
        cancelText : 'Cancelar'
      });

});

$( "#addMenu" ).submit(function( event ) {

   // addMenu();

    event.preventDefault();
});

function addMenu() {

    var nome = $( "#nome" ).val();
    var data = $( "#dataini" ).val();
    var desc = $( "#desc" ).val();

    var dataparse = moment(data, "DD-MM-YYYY");

    var Menu = Parse.Object.extend("menu");
    var menu = new Menu();

    menu.set("nome", nome);
    menu.set("desc", desc);

    if (data !== "") {
      menu.set("dtsugerida", dataparse.toDate());
      menu.set("dtfim", moment(dataparse).add(7, 'days').toDate());
    }
//menu.set("dtfim", data+7);
    menu.set("owner", Parse.User.current().id);
    menu.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
    menu.set("ativo", true);

    menu.save(null, {
        success: function(menu) {

          if (data === undefined || data == "") {

            $(location).attr('href','http://weekmenu.felipecastro.com.br/m/'+menu.id);
          } else {

            var Data = Parse.Object.extend("menudatas");
            var data = new Data();

            data.set("menu", menu.id);
            data.set("menup", { "__type": "Pointer", "className": "menu", "objectId": menu.id });
            data.set("dtinicio", dataparse.toDate());
            data.set("dtfim", moment(dataparse).add(6, 'days').toDate());
            data.set("user", Parse.User.current().id);
            data.set("userp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
            data.set("ativo", true);

            data.save(null, {
              success: function(data) {

                $(location).attr('href','http://weekmenu.felipecastro.com.br/m/'+menu.id);
              },
              error: function(grupo, error) {
                console.log('Ocorreu um erro: ' + error.message);
              }
            });

          }

        },
        error: function(grupo, error) {
            console.log('Ocorreu um erro: ' + error.message);
        }
    });
}
</script>
</html>
