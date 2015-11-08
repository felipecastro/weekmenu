<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Week Menu - Login</title>
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

        <div class="mdl-layout__tab-panel is-active">
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--4-col mdl-shadow--4dp" style="margin-bottom: 50px;">

            <div class="mdl-card mdl-cell mdl-cell--12-col lbl_login_card">
              <h3 class="lbl_login ">Login</h3>
            </div>
            <div class="mdl-card mdl-cell mdl-cell--12-col input_login_card">
              <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12-col"></div>

              <form id="loginform" class="" role="form" action="">

              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt_field_login">
                <input class="mdl-textfield__input form-control" type="email" id="login-username" name="email" data-validation="required" data-validation-error-msg="Digite o email"/>
                <label class="mdl-textfield__label" for="login-username">Email</label>
              </div>

              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt_field_login">
                <input class="mdl-textfield__input form-control" type="password" id="login-password" name="password" data-validation="required" data-validation-error-msg="Digite a senha"/>
                <label class="mdl-textfield__label" for="login-password">Senha</label>
              </div>
            </div>

            <div class="mdl-card mdl-cell mdl-cell--12-col" style="padding: 5% 0 0 14%; min-height: 60px; height: 60px;">
              <input id="btn-login" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Efetuar Login" style="max-width: 300px;">
            </div>

            <div class="mdl-card mdl-cell mdl-cell--12-col" style="padding: 0 0 0 44%; min-height: 60px; height: 60px;">
              <h6 style="font-weight: 100;">--ou--</h6>
            </div>

            <div class="mdl-card mdl-cell mdl-cell--12-col" style="padding: 0 0 0 14%; min-height: 85px; height: 85px;">
              <button id="btn-fblogin" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="max-width: 300px;">Logar com Facebook</button>
            </div>

            <div class="mdl-card mdl-cell mdl-cell--12-col" style="padding: 5% 0 0 11%; min-height: 85px; height: 85px;">
              <div style="font-size:85%" >
                Eu não tenho uma conta!
                <a href="<?php echo $host ?>signup">
                  Crie uma conta clicando aqui
                </a>
              </div>
            </div>
          </form>


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

$( "#btn-fblogin" ).click(function() {

  logaFB();
});
/*$( "#btn-login" ).click(function() {
var user = $( "#login-username" ).val();
var secr = $( "#login-password" ).val();
logaParse(user,secr);

});*/

$( "#loginform" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
    var user = $( "#login-username" ).val().toLowerCase();
    var secr = $( "#login-password" ).val();

    if ($('.form-error').css( "display") != 'block'){logaParse(user,secr);}

    event.preventDefault();
});
</script>
</html>
