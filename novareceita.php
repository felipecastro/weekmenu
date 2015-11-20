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
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css"/>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="http://weekmenu.felipecastro.com.br/css/dropzone.css">

  <!--[if lt IE 9]>
       <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <link rel="shortcut icon" href="/bootstrap/img/favicon.ico">
</head>
  <body class="mdl-wm mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
<style media="screen">
.img_upload {
  min-height: 50px;
    border: 5px dotted rgba(0, 0, 0, 0.1);
    background: white;
    padding: 0px;
    font-size: 12px;
    font-weight: 100;
    margin-top: -67px;
    margin-left: 32px;
}
</style>
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
<script type="text/javascript">
    tinymce.init({
    selector: "textarea",
            plugins: [
                "autolink autosave link image lists charmap hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars  media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
    ],
    //toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image     | print preview media",
    toolbar1: "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2: "bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image | preview | forecolor backcolor | table  hr removeformat | subscript superscript |  emoticons",
    menubar: false,
    toolbar_items_size: 'small',
    style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],
            max_height: 200,
            min_height: 160,
            height : 180
});
</script>

      <main class="mdl-layout">
        <div class="mdl-layout">
          <section class="section--center mdl-grid mdl-grid--no-spacing section-header">
           <!--  <h5 class="font_100">Adicionar novo prato</h5> -->
           <br>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--8-col mdl-shadow--4dp">
            <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
              <form action="" id="addPrato">
                <div class="mdl-card__supporting-text">

                  <h5 class="font_100">Nome do prato</h5>
                  <div class="mdl-grid mdl-cell--12-col">
                    <div class="mdl-textfield mdl-js-textfield mdl-cell--6-col">
                      <input class="mdl-textfield__input" type="text" id="nome" name="nome"/>

                    </div>
                    <!-- <h5 class="font_100">Imagem</h5> -->
                    <div class="mdl-cell--2-col dropzone dz-clickable text-center img_upload" id="imgupload">
                    </div>
                  </div>

                  <h5 class="font_100">Ingredientes</h5>
                  <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea id="ing" name="ing"></textarea>
                  </div>
                  <h5 class="font_100">Modo de preparo</h5>
                  <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea id="prep" name="prep"></textarea>
                  </div>
                  <h5 class="font_100">Observações</h5>
                  <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea id="obs" name="obs"></textarea>
                  </div>

                  <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="publico">
                      <input type="checkbox" id="publico" class="mdl-switch__input" checked />
                      <span class="mdl-switch__label">Receita visível como pública</span>
                    </label>
                  </div>
                  

                  <!-- <div class="mdl-textfieldx mdl-js-textfieldx mdl-cell--12-col">
                    <label for="ing">Ingredientes</label>
                    <textarea class="mdl-textfield__inputx" id="ingw" name="ingw"></textarea>
                  </div> -->

                <div class="mdl-card__actions">
                  <input id="cancel" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Cancelar">
                  <input id="btn-add" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Salvar prato">

                </div>
              </div>
            </form>
          </section>
         </div>

      </main>
    </div>

<!-- <script src="http://felipecastro.com.br/weekmenu/js/material.min.js"></script> -->
<script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.2.7.min.js"></script>
<script type='text/javascript' src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript">var host = "http://weekmenu.felipecastro.com.br/";</script>
<script type="text/javascript" src="http://weekmenu.felipecastro.com.br/js/functions.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.js"></script>

</body>
<script type="text/javascript">
$( document ).ready(function() {
  
  $( "#nome" ).focus();
  var imgId;
  var imgDropzone = new Dropzone("div#imgupload", {
    url: "/imgupload.php",
    parallelUploads: 1,
    addRemoveLinks: true,
    dictDefaultMessage: '<i class="material-icons" style="font-size: 35px;">image</i><br>Arraste uma imagem ou clique aqui',
    dictRemoveFile: 'Remover',
    autoQueue: false,
    thumbnailWidth: 100,
    thumbnailHeight: 100,
    maxFiles: 1,
    acceptedFiles: 'image/*'

  });

});

$( "#addPrato" ).submit(function( event ) {

    //tinyMCE.triggerSave();
    addPrato();

    event.preventDefault();
});

$('#cancel').click(function(){
    parent.$.fancybox.close();
});

function addPrato() {

  var nome= $( "#nome" ).val();
    var instrucoes = $( "#prep" ).val();
    var ingredientes= $( "#ing" ).val();
    var notas = $( "#obs" ).val();

    imgId = uniqID();

    var Prato = Parse.Object.extend("prato");
    var prato = new Prato();

    prato.set("nome", nome);
    prato.set("instrucoes", instrucoes);
    prato.set("ingredientes", ingredientes);
    prato.set("obs", notas);
    prato.set("owner", Parse.User.current().id);
    prato.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
    prato.set("ativo", true);
    prato.set("ext", false);

    imgDropzone.enqueueFiles(imgDropzone.getFilesWithStatus(Dropzone.ADDED));
    prato.set("capa", "/img/prato/" + imgId + "/"+ imgDropzone.files[0].name);

    prato.save(null, {
        success: function(prato) {

          var PratoMenu = Parse.Object.extend("diamenu");
          var dia = new PratoMenu();

          dia.set("prato", prato.id);
          dia.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": prato.id });
          dia.set("menu", '<?php echo $_GET["menu"] ?>');
          dia.set("menup", { "__type": "Pointer", "className": "menu", "objectId": "<?php echo $_GET["menu"] ?>" });
          dia.set("iddia", <?php echo $_GET["dia"] ?>);
          dia.set("owner", Parse.User.current().id);
          dia.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
          dia.set("ativo", true);

          dia.save(null, {
            success: function(dia) {
              parent.$.fancybox.close();
              $(location).attr('href','<?php echo $host ?>m/<?php echo $_GET["menu"] ?>');
            },
            error: function(grupo, error) {
              console.log('Ocorreu um erro: ' + error.message);
            }
          });

          woopra.track("criou_receita", {
            nome: prato.get("nome"),
            usuario: Parse.User.current().id,
            publico: prato.get("publico"),
            externa: prato.get("ext")
          });

        },
        error: function(grupo, error) {
            console.log('Ocorreu um erro: ' + error.message);
        }
    });
}

imgDropzone.on("sending", function(file, xhr, formData) {
    formData.append('imgId', imgId);
    formData.append('tipo', '');
    formData.append('folder', 'prato');
});


function uniqID(idlength) {

    var charstoformid = '_0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! idlength) {
        idlength = Math.floor(Math.random() * charstoformid.length);
    }
    var uniqid = '';
    for (var i = 0; i < length; i++) {
        uniqid += charstoformid[Math.floor(Math.random() * charstoformid.length)];
    }

    return uniqid;
}
</script>
</html>