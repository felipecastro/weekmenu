<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Novo menu</title>
  <?php
  include 'header.php';
  ?>
  <style>
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  th {
    text-align: left;
  }
  td, th {
    padding: 0;
  }
  .table>caption+thead>tr:first-child>td,
  .table>caption+thead>tr:first-child>th,
  .table>colgroup+thead>tr:first-child>td,
  .table>colgroup+thead>tr:first-child>th,
  .table>thead:first-child>tr:first-child>td,
  .table>thead:first-child>tr:first-child>th {
    border-top: 0;
  }
  .table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }
  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .dtp table.dtp-picker-days tr > td {
    font-weight: 700;
    font-size: 1.0rem;
    text-align: center;
    padding: 0.6rem 0.3rem;
  }
  #dtp-date {
    line-height: 1.42857143;
  }
  </style>
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
<?php
include 'head.php';
?>
<main class="mdl-layout__content">
  <div class="page-content">
    <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
      <h3 class="font_100">Adicionar novo menu</h3>
    </section>
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp center_menor">
      <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <form action="" id="addMenu">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
              <input class="mdl-textfield__input" type="text" id="nome" name="nome" required/>
              <label class="mdl-textfield__label" for="nome">Nome do menu</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
              <textarea class="mdl-textfield__input" type="text" rows= "5" id="desc" name="desc" required></textarea>
              <label class="mdl-textfield__label" for="desc">Descrição</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
              <input class="mdl-textfield__input" type="text" id="dataini" name="" class="fieldset__input "/>
              <label class="mdl-textfield__label" for="dataini">Data de início</label>
            </div>
            <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
              <div class="mdl-layout-spacer"></div>
              <input type="checkbox" id="switch-1" class="mdl-switch__input" checked />
              <span class="mdl-switch__label">Menu público </span>
            </label>
            <div class="mdl-card__actions actions_add" style="padding-top: 25px;">
              <div class="mdl-layout-spacer"></div>
              <input id="btn-add" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored button_add_act" value="Salvar e adicionar pratos">
            </div>
          </div>
        </form>
      </div>
    </section>
    <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
    </section>
  </div>
  <?php
  include 'foot.php';
  ?>
</main>
</div>
<?php
include 'footer.php';
?>

</body>

<script type="text/javascript">
$( document ).ready(function() {
  mudaSaudacao();

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

  addMenu();

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

        $(location).attr('href','<?php echo $host ?>m/'+menu.id);
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

            $(location).attr('href','<?php echo $host ?>m/'+menu.id);
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
