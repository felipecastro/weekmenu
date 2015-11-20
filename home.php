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
    #view-source {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 40px;
      margin-bottom: 40px;
      z-index: 900;
    }
#timeline {
padding-top: 25px;
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
    <div class="page-content">
      <div id="timeline">
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="menuativo">
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing section-header">
          <h5 class="font_100">Programados para hoje</h5>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing" id="menusativos">
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing section-header">
          <h5 class="font_100">Próximos Menus</h5>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing" id="menusproximos">
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing section-header">
          <h5 class="font_100">Menus passados</h5>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing" id="menusanteriores">
        </section>
      </div>
    </div>
    <ul id="menu" class="mfb-component--br mfb-zoomin" data-mfb-toggle="hover">
      <li class="mfb-component__wrap">
        <a href="#" class="mfb-component__button--main">
          <i class="mfb-component__main-icon--resting ion-plus-round"></i>
          <i class="mfb-component__main-icon--active ion-close-round"></i>
        </a>
        <ul class="mfb-component__list">
          <li>
            <a href="/menu/novo" data-mfb-label="Novo Menu" class="mfb-component__button--child">
              <i class="mfb-component__child-icon ion-calendar"></i>
            </a>
          </li>
          <li>
            <a href="/prato/novo" data-mfb-label="Novo Prato" class="mfb-component__button--child">
              <i class="mfb-component__child-icon ion-android-restaurant"></i>
            </a>
          </li>

          <li>
            <a href="/#explore"
               data-mfb-label="Buscar" class="mfb-component__button--child">
              <i class="mfb-component__child-icon ion-ios-search-strong"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <!-- footer -->
<?php
include 'foot.php';
?>
    <!--footer -->
  </main>
</div>

<!-- fim conteudo -->

<?php
include 'footer.php';
?>

</body>
<script type="text/javascript">
$( document ).ready(function() {
  // Handler for .ready() called.
mudaSaudacao();
carregaTimeline();
moment.locale('pt-BR');
new WOW().init();
//carregaEventos();

$(".abre_prato").fancybox({
  'scrolling' : 'auto',
  'preload'   : true,
  'showCloseButton' : false,
    'type'        : 'iframe'
});

});


</script>
</html>