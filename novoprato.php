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
    margin-top: -67px;
    margin-left: 32px;
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
</style>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
  <header class="mdl-layout__header">
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#novo" class="mdl-layout__tab is-active">Novo prato</a>
      <a href="#busca" class="mdl-layout__tab">Pesquisar</a>
      <a href="#externo" class="mdl-layout__tab">Prato externo</a>
    </div>
  </header>
  <main class="mdl-layout__content">
    <section class="mdl-layout__tab-panel is-active" id="novo">
      <div class="page-content">
        <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
              <form action="" id="addPrato">
                <div class="mdl-card__supporting-text" style="width: inherit;">

                  <h5 class="font_100">Digite os dados da receita</h5>
                  <div class="mdl-grid mdl-cell--12-col">
                    <div class="mdl-textfield mdl-js-textfield mdl-cell--6-col">
                      <input class="mdl-textfield__input" type="text" id="nome" name="nome"/>
                      <label class="mdl-textfield__label" for="nome">Nome do prato</label>
                    </div>
                    <!-- <h5 class="font_100">Imagem</h5> -->
                    <div class="mdl-cell--2-col dropzone dz-clickable text-center img_upload" id="imgupload">
                    </div>
                  </div>

                  <!-- <h5 class="font_100">Ingredientes</h5> -->
                  <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea class="mdl-textfield__input" type="text" rows= "8" id="ing" name="ing"></textarea>
                    <label class="mdl-textfield__label" for="ing">Ingredientes</label>
                  </div>
                  <!-- <h5 class="font_100">Modo de preparo</h5> -->
                  <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea class="mdl-textfield__input" type="text" rows= "8" id="prep" name="prep"></textarea>
                    <label class="mdl-textfield__label" for="prep">Modo de preparo</label>
                  </div>
                  <!-- <h5 class="font_100">Observações</h5> -->
                  <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                    <textarea class="mdl-textfield__input" type="text" rows= "8" id="obs" name="obs"></textarea>
                    <label class="mdl-textfield__label" for="obs">Observações</label>
                  </div>

                  <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col" style="padding: 35px;">
                    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="publico">
                      <input type="checkbox" id="publico" class="mdl-switch__input" checked />
                      <span class="mdl-switch__label">Receita visível como pública</span>
                    </label>
                  </div>


                  <!-- <div class="mdl-textfieldx mdl-js-textfieldx mdl-cell--12-col">
                    <label for="ing">Ingredientes</label>
                    <textarea class="mdl-textfield__inputx" id="ingw" name="ingw"></textarea>
                  </div> -->

                  <div class="mdl-grid mdl-cell--12-col">
                    <div class="mdl-card__actions">
                      <div class="section-spacer"></div>
                      <div style="float: right;">
                        <input id="cancel-new" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Cancelar">
                        <input id="add-new" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Salvar prato" style="margin-left: 25px;">
                      </div>
                    </div>
                  </div>

              </div>
            </form>
      </div>
    </section>
    <section class="mdl-layout__tab-panel" id="busca">
      <div class="page-content">
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
      </div>
    </section>
    <section class="mdl-layout__tab-panel" id="externo">
      <div class="page-content">
        <div>
          <form id="add_ext" method="post" action="">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="nomeprato" />
            <label class="mdl-textfield__label" for="nomeprato">Nome do prato</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="linkprato" />
            <label class="mdl-textfield__label" for="linkprato">Endereço da receita</label>
          </div>
          <div class="mdl-card__actions">
                          <input id="cancel-ext" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Cancelar">
                          <input id="add-ext" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Salvar prato">

                        </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</div>
<?php
include 'footer.php';
?>
<script type="text/javascript">

$( document ).ready(function() {
  mudaSaudacao();
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

/*var imgDropzone = new Dropzone("div#imgupload", {
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

};*/

$( "#addPrato" ).submit(function( event ) {

    addPrato();

    event.preventDefault();
});


function addPratoExt() {

    var nome= $( "#nomeprato" ).val();
    var link = $( "#linkprato" ).val();

    var Prato = Parse.Object.extend("prato");
    var prato = new Prato();

    prato.set("nome", nome);
    prato.set("url", link);
    prato.set("ext", true);
    prato.set("ativo", true);

    prato.save(null, {
        success: function(prato) {

          var PratoMenu = Parse.Object.extend("diamenu");
          var dia = new PratoMenu();

          dia.set("prato", prato.id);
          dia.set("pratop", { "__type": "Pointer", "className": "prato", "objectId": prato.id });
          dia.set("menu", '<?php echo $_GET["menu"] ?>');
          dia.set("menup", { "__type": "Pointer", "className": "menu", "objectId": "<?php echo $_GET['menu'] ?>" });
          dia.set("iddia", <?php echo $_GET["dia"] ?>);
          dia.set("owner", Parse.User.current().id);
          dia.set("ownerp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
          dia.set("ativo", true);

          dia.save(null, {
            success: function(dia) {
              $(location).attr('href','<?php echo $host ?>m/<?php echo $_GET["menu"] ?>');
            },
            error: function(grupo, error) {
              console.log('Ocorreu um erro: ' + error.message);
            }
          });

        },
        error: function(grupo, error) {
            console.log('Ocorreu um erro: ' + error.message);
        }
    });
}

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
    prato.set("capa", (imgDropzone.files[0].length>0) ? "/img/prato/" + imgId + "/"+ imgDropzone.files[0].name) : "/img/assets/pratodefault.png";

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
