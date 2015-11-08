<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Perfil</title>
<?php
include 'header.php';
?>
<style>
.img-circle_profile {
    border-radius: 40px;
}
.img_avatar_profile {
  margin-left: -15px;
  margin-right: 10px;
}
.img_avatar_container {
    padding: 50px 0 0 50px;
}
.profile_data {
  font-weight: 300;
}
.list_det_profile {
  list-style: none;
    padding-left: 0px !important;
}
.mdl-card__actions {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.lbl_nome {
  font-weight: 300;
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

          <div class="mdl-layout__tab-panel is-active" style="margin-top: 25px;">
            <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="data_profile">
              <div class="mdl-grid mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-500 mdl-color-text--white">
                <div class="mdl-cell mdl-cell--2-col">
                  <div class="img_avatar_container" id="avatar_container">
                  </div>
                </div>
                <div class="mdl-cell mdl-cell--10-col mdl-color--indigo-500 mdl-color-text--white">
                  <div class="mdl-card__supporting-text mdl-color-text--white profile_data">
                    <span id="nome_container"></span>
                    <ul class="list_det_profile" id="list_det_profile">
                    </ul>
                    <button id="menu-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon mn-menu-lower-right">
                      <i class="material-icons">more_vert</i>
                    </button>
                    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="menu-menu-lower-right" id="menu_options">
                    </ul>
                  </div>
                </div>
                <div class="mdl-card__actions menu_header_actions" id="menu_header_actions">
                </div>
              </div>
            </section>
            <section class="section--center mdl-grid mdl-grid--no-spacing" id="stats_profile">
              <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div class="mdl-tabs__tab-bar">
                  <a href="#menu-panel" class="mdl-tabs__tab is-active">Meus menus</a>
                  <a href="#prato-panel" class="mdl-tabs__tab">Meus pratos</a>
                  <!-- <a href="#colecao-panel" class="mdl-tabs__tab">Minhas coleções</a> -->
                </div>
                <div class="mdl-tabs__panel is-active" id="menu-panel">
                </div>
                <div class="mdl-tabs__panel" id="prato-panel">
                </div>
                <!-- <div class="mdl-tabs__panel" id="colecao-panel">
                </div> -->
              </div>
            </section>
         </div>
         <ul id="menu" class="mfb-component--br mfb-zoomin" data-mfb-toggle="hover">
           <li class="mfb-component__wrap">
             <a href="#" class="mfb-component__button--main">
               <i class="mfb-component__main-icon--resting ion-plus-round"></i>
               <i class="mfb-component__main-icon--active ion-close-round"></i>
             </a>
             <ul class="mfb-component__list">
               <li>
                 <a href="<?php host ?>menu/novo" data-mfb-label="Novo Menu" class="mfb-component__button--child">
                   <i class="mfb-component__child-icon ion-calendar"></i>
                 </a>
               </li>
               <li>
                 <a href="<?php host ?>prato/novo" data-mfb-label="Novo Prato" class="mfb-component__button--child">
                   <i class="mfb-component__child-icon ion-android-restaurant"></i>
                 </a>
               </li>

               <li>
                 <a href="<?php host ?>colecao/nova"
                    data-mfb-label="Nova coleção" class="mfb-component__button--child">
                   <i class="mfb-component__child-icon ion-grid"></i>
                 </a>
               </li>
             </ul>
           </li>
         </ul>
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
moment.locale('pt-BR');
mudaSaudacao();
carregaDadosUser('<?php echo $_GET["user"] ?>');
});

</script>
</html>
