<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Novo prato</title>
  <?php
  include 'header.php';
  ?>
  <style>
  #view-source {
    position: fixed;
    display: block;
    right: 0;
    bottom: 0;
    margin-right: 40px;
    margin-bottom: 40px;
    z-index: 900;
  }

  .img_upload {
    min-height: 50px;
    border: 5px dotted rgba(0, 0, 0, 0.1);
    background: white;
    padding: 0px;
    font-size: 12px;
    font-weight: 100;
    /*margin-top: -67px;
    margin-left: 32px;*/
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
<style>
.wm-card-event.mdl-card {
  width: 268px;
  height: 268px;
  background: #3E4EB8;
}
.wm-card-event > .mdl-card__actions {
  border-color: rgba(255, 255, 255, 0.2);
}
.wm-card-event > .mdl-card__title {
  align-items: flex-start;
}
.wm-card-event > .mdl-card__title > h4 {
  margin-top: 0;
}
.wm-card-event > .mdl-card__actions {
  display: flex;
  box-sizing:border-box;
  align-items: center;
}
.wm-card-event > .mdl-card__title,
.wm-card-event > .mdl-card__actions,
.wm-card-event > .mdl-card__actions > .mdl-button {
  color: #fff;
}

.actions {
  font-size: 40px;
  font-weight: 200;
  line-height: 47px;
  text-align: center;
}

.actions_link {
  text-decoration: inherit;
  color: white;
}

.material-icons.actions {
  font-size: 65px;
  padding: 25px;
}

.cbk_ext {
  //font-size: 65px;
  padding: 35px 0 30px 0px;
}
</style>
<?php
include 'head.php';
?>
<main class="mdl-layout__content">
  <div class="page-content">
    <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
      <h3 class="font_100">Adicionar novo prato <span id="dados_menu"></span></h3>
    </section>
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp" style="margin-bottom: 25px;">

      <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="mdl-tabs__tab-bar">
        <a href="#cria-prato" class="mdl-tabs__tab is-active">Cadastrar prato</a>
        <a href="#busca-prato" class="mdl-tabs__tab">Buscar prato</a>
    </div>
    <div class="mdl-tabs__panel is-active" id="cria-prato">
      <?php
      include 'formaddprato.php';
      ?>
    </div>
    <div class="mdl-tabs__panel" id="busca-prato">
      <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                <div class="mdl-card__supporting-text" style="width: inherit;">

                   <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                      <label class="mdl-button mdl-js-button mdl-button--icon" for="b" id="btn-busca">
                        <i class="material-icons">search</i>
                      </label>
                      <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" id="b">
                        <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
                      </div>
                    </div>
                    <div id="pratos_result"></div>
                  </div>
                </div>
    </div>

  </section>
  <?php
  include 'foot.php';
  ?>
</main>
</div>
<?php
include 'footer.php';
?>
<script type="text/javascript">

$( document ).ready(function() {

  mudaSaudacao();

  var iddia = '<?php echo $_GET["dia"] ?>';
  var idmenu = '<?php echo $_GET["menu"] ?>';

  if ((idmenu != '') && (iddia != '')) {
    getDescMenuDia(idmenu, iddia, 'dados_menu');
  }

  var imgId;

  Dropzone.autoDiscover = false;
});

$( "#add_ext" ).submit(function( event ) {

  addPratoExt();

  event.preventDefault();
});

$('#btn-busca').click(function(){
  buscaPrato($('#b').val().toLowerCase());
});

$('#cancel-add').click(function(){
  parent.$.fancybox.close();
});

$('#cancel-ext').click(function(){
  parent.$.fancybox.close();
});

$( "#b" ).keyup(function( event ) {
  if ( event.which == 13 ) {
    event.preventDefault();
  }
  buscaPrato($('#b').val().toLowerCase());
});

var imgDropzone = new Dropzone("div#imgupload", {
  url: "/imgupload.php",
  parallelUploads: 5,
  addRemoveLinks: true,
  dictDefaultMessage: '<i class="material-icons" style="font-size: 35px;">image</i><br>Arraste uma imagem ou clique aqui',
  dictRemoveFile: 'Remover',
  autoQueue: false,
  thumbnailWidth: 100,
  thumbnailHeight: 100,
  //maxFiles: 1,
  acceptedFiles: 'image/*'

});

$( "#addPrato" ).submit(function( event ) {

  addPrato();

  event.preventDefault();
});


function addPrato() {

  var iddia = '<?php echo $_GET["dia"] ?>';
  var idmenu = '<?php echo $_GET["menu"] ?>';

  var nome= $( "#nome" ).val();
  var instrucoes = $( "#prep" ).val();
  var ingredientes= $( "#ing" ).val();
  var notas = $( "#obs" ).val();
  var link = $( "#linkprato" ).val();

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
  prato.set("url", link);
  prato.set("ext", $("#flg_ext")[0].checked);
  prato.set("publico", ($("#flg_ext")[0].checked) ? false : $("#publico")[0].checked);


  //imgDropzone = $("div#imgupload").dropzone;

  imgDropzone.enqueueFiles(imgDropzone.getFilesWithStatus(Dropzone.ADDED));
  prato.set("capa", (imgDropzone.files[0].name.length>0) ? "/img/prato/" + imgId + "/"+ imgDropzone.files[0].name : "/img/assets/pratodefault.png");

  prato.save(null, {
    success: function(prato) {

      if (imgDropzone.files.length>1) {

        for (var i = 0; i < imgDropzone.files.length; i++) {

          var PratoFoto = Parse.Object.extend("prato_fotos");
          var foto = new PratoFoto();

          foto.set("prato", prato.id);
          foto.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": prato.id });
          foto.set("foto", "/img/prato/" + imgId + "/"+ imgDropzone.files[i].name);
          foto.set("ordem", i);
          foto.set("ativo", true);
          foto.save(null, {
            success: function(foto) {
              console.log('gravou foto: ' + foto.id);
            },
            error: function(grupo, error) {
              console.log('Ocorreu um erro: ' + error.message);
            }
          });

        }
      }

      if ((idmenu != '') && (iddia != '')) {

        var PratoMenu = Parse.Object.extend("diamenu");
        var dia = new PratoMenu();

        dia.set("prato", prato.id);
        dia.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": prato.id });
        dia.set("menu", idmenu);
        dia.set("menup", { "__type": "Pointer", "className": "menu", "objectId": idmenu });
        dia.set("iddia", parseInt(iddia));
        dia.set("owner", Parse.User.current().id);
        dia.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
        dia.set("ativo", true);

        dia.save(null, {
          success: function(dia) {
            parent.$.fancybox.close();
            $(location).attr('href','<?php echo $host ?>m/'+idmenu);
          },
          error: function(grupo, error) {
            console.log('Ocorreu um erro: ' + error.message);
          }
        });
      }

      woopra.track("criou_receita", {
        nome: prato.get("nome"),
        usuario: Parse.User.current().id,
        publico: prato.get("publico"),
        externa: prato.get("ext")
      });

      parent.$.fancybox.close();
      $(location).attr('href','<?php echo $host ?>hoje');

    },
    error: function(grupo, error) {
      console.log('Ocorreu um erro: ' + error.message);
    }
  });

  imgDropzone.on("sending", function(file, xhr, formData) {
    formData.append('imgId', imgId);
    formData.append('tipo', '');
    formData.append('folder', 'prato');
  });
}

function vincPrato(idprato) {

  var iddia = '<?php echo $_GET["dia"] ?>';
  var idmenu = '<?php echo $_GET["menu"] ?>';

  if ((idmenu != '') && (iddia != '')) {

    var PratoMenu = Parse.Object.extend("diamenu");
    var dia = new PratoMenu();

    dia.set("prato", idprato);
    dia.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": idprato });
    dia.set("menu", idmenu);
    dia.set("menup", { "__type": "Pointer", "className": "menu", "objectId": idmenu });
    dia.set("iddia", parseInt(iddia));
    dia.set("owner", Parse.User.current().id);
    dia.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
    dia.set("ativo", true);

    dia.save(null, {
      success: function(dia) {

        woopra.track("vinculou_receita", {
          usuario: Parse.User.current().id,
          prato: idprato,
          menu: idmenu,
          dia: iddia
        });

        parent.$.fancybox.close();
        $(location).attr('href','<?php echo $host ?>m/'+idmenu);
      },
      error: function(grupo, error) {
        console.log('Ocorreu um erro: ' + error.message);
      }
    });
  }

}

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

function mudaTipo(){
  $( "#dados_receita_ext" ).toggle();
  $( "#dados_receita_int" ).toggle();

}
</script>
</html>
