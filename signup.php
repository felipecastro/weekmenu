<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Nova conta</title>
<?php
$title = 'Week menu - Login';
include 'header.php';
?>
<script>
(function(){
        var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/t/5.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
    domain: 'weekmenu.felipecastro.com.br'
});

woopra.track();
</script>
</head>
<?php
include 'head.php';
?>
 <main class="mdl-layout__content">
        <div class="page-content">
          <section class="section--center mdl-grid mdl-grid--no-spacing section-header center_menor">
            <h4 class="font_100">Criar nova conta</h4>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp center_menor">
            <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
              <form id="signupform" action="">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                  <input class="mdl-textfield__input" type="email" id="email" required/>
                  <label class="mdl-textfield__label" for="email">Email</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                  <input class="mdl-textfield__input" type="text" id="nome"  required/>
                  <label class="mdl-textfield__label" for="nome">Nome completo</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                  <input class="mdl-textfield__input" type="password" id="pass1"  required/>
                  <label class="mdl-textfield__label" for="pass1">Senha</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                  <input class="mdl-textfield__input" type="password" id="pass2"  required/>
                  <label class="mdl-textfield__label" for="pass2">Confirme a senha</label>
                </div>

                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="termos">
                    <input type="checkbox" id="termos" class="mdl-checkbox__input"  required/>
                    <span class="mdl-checkbox__label">Eu aceito os <a href="..." target="_blank">termos e condições</a></span>
                  </label>
                </div>

                <div class="mdl-card__actions actions_add" style="padding-top: 25px;">
                    <input id="btn-add" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored button_add_act" value="Criar conta" data-upgraded=",MaterialButton,MaterialRipple"></input>
                </div>
                <div class="mdl-card__actions actions_add" style="padding-top: 25px;">
                    <button id="btn-fblogin" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Usar conta do  Facebook</button>
                </div>
              </form>
            </div>
            </div>
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
<script type="text/javascript">
$( document ).ready(function() {
  // Handler for .ready() called.
mudaSaudacao();
});

$( "#signupform" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
    //var user = $( "#login-username" ).val().toLowerCase();
    //var secr = $( "#login-password" ).val();

    if ($('.form-error').css( "display") != 'block'){
        var user = new Parse.User();

        user.set("username", $( "#email" ).val().toLowerCase());
        user.set("password", $( "#pass2" ).val());
        user.set("email", $( "#email" ).val().toLowerCase());
        user.set("nomecompleto", $( "#nome" ).val());
        user.set("avatar", "img/assets/user.png");

        criaUserParse(user);
    }

    event.preventDefault();
});

$( "#btn-fblogin" ).click(function() {

  logaFB();
});
</script>
</html>
