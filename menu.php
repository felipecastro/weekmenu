<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu</title>
<?php
include 'header.php';
?>
<style>
  .wm-card-event.mdl-card {
    width: 268px;
    height: 300px;
    //background: #3E4EB8;
background: #f5f5f5;
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
    //color: white;
color: #b5b5b5;
  }

  .material-icons.actions {
    font-size: 65px;
    padding: 25px;
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
<?php
include 'head.php';
?>
      <main class="mdl-layout__content">
      	<div class="mdl-layout__tab-panel is-active" id="conteudo">

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
  // Handler for .ready() called.
moment.locale('pt-BR');
mudaSaudacao();
carregaMenu('<?php echo $_GET["id"] ?>');

/*$(".abre_prato").fancybox({
  'scrolling' : 'auto',
  'preload'   : true,
  'showCloseButton' : false,
    'type'        : 'iframe'
  });*/

$(".add_prato").fancybox({
  'scrolling' : 'auto',
  'preload'   : true,
  'showCloseButton' : false,
  'type'        : 'iframe',
  afterClose: function() {
              carregaMenu('<?php echo $_GET["id"] ?>');
        }
  });

});

$(".receita-card-image").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$( "div.mdl-card" ).mouseover(function() {
  $( this ).switchClass( "mdl-shadow--2dp", "mdl-shadow--4dp", 1000, "easeInOutQuad" );
});

</script>
</html>
