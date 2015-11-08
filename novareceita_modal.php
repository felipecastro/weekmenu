
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
         
<script type="text/javascript">
$( document ).ready(function() {
$( "#nome" ).focus();
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

$( "#addPrato" ).submit(function( event ) {

    tinyMCE.triggerSave();
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