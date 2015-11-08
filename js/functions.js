$(document).ready(function() {
Parse.initialize("exBh8S9ob5zIyNPb4oLr43jGioYU1ZWmoJhWvHyX", "6BcNRShe5exO3pFtYJP4wwJ9gETZIFWlP1xeI0rA");

    window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
      appId      : '503562453134872',
      xfbml      : true,
      cookie     : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

(function(){
        var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/t/5.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
    domain: 'weekmenu.felipecastro.com.br'
});
woopra.track();

mudaSaudacao();
});


function loga(){

    Parse.FacebookUtils.logIn("user_likes,email", {
      success: function(user) {
          if (!user.existed()) {
            console.log("User signed up and logged in through Facebook!");
          } else {
              console.log("User logged in through Facebook!");

          }

          var fbid = user.attributes.authData.facebook.id;

          //Parse.User.current.set('facebookid', fbid);
          //Parse.User.current.save;

          var uquery = new Parse.Query(Parse.User);
          uquery.get(Parse.User.current().id, {

            success: function(object) {
              // object is an instance of Parse.Object.
              object.set("facebookid", fbid);
              object.save(null, {
                success: function(object) {
                  // Execute any logic that should take place after the object is saved.
                },
                error: function(object, error) {
                  // Execute any logic that should take place if the save fails.
                  // error is a Parse.Error with an error code and message.
                  console.log('erro ao setar facebookid: ' + error.message);
                }
              });
            },
            error: function(object, error) {
                   // error is an instance of Parse.Error.
            }
          });

          FB.api('/me', function(response) {
          });

          if (!Parse.FacebookUtils.isLinked(user)) {
              Parse.FacebookUtils.link(user, null, {
                success: function(user) {
                  console.log("Woohoo, user logged in with Facebook!");
                },
                error: function(user, error) {
                  console.log("User cancelled the Facebook login or did not fully authorize.");
                }
              });
            }

      },
      error: function(user, error) {
          console.log("User cancelled the Facebook login or did not fully authorize.");
                gotologin();
        }
  });

mudaSaudacao();
 };

function logaFB(){

    Parse.FacebookUtils.logIn("user_likes,email", {
      success: function(user) {
        console.log(user);

        if (!user.existed()) {
          console.log("User signed up and logged in through Facebook!");

          var fbid = user.attributes.authData.facebook.id;

          console.log(user);

          FB.api("/me?fields=id,name,cover,picture,email",
            function (response) {

              console.log("entrou no /me");
              if (response && !response.error) {
                /* handle the result */
                console.log("/me response");
                console.log(response.name);

                var uquery = new Parse.Query(Parse.User);
                uquery.get(Parse.User.current().id, {
                  success: function(object) {
                    object.set("facebookid", fbid);
                    object.set("fbid", response.id);
                    object.set("nomecompleto", response.name);
                    object.set("avatar", response.picture.data.url);
                    object.set("email", response.email);
                    object.save(null, {
                      success: function(object) {
                        console.log("user atualizado com link com o fb");
                      },
                      error: function(object, error) {
                        console.log('erro ao setar facebookid: ' + error.message);
                      }
                    });
                  },
                  error: function(object, error) {
                    console.log("Erro com get user");
                  }
                });

                if (!Parse.FacebookUtils.isLinked(user)) {
                  Parse.FacebookUtils.link(user, null, {
                    success: function(user) {
                      gotoperfil();
                    },
                    error: function(user, error) {
                      console.log("User cancelled the Facebook login or did not fully authorize.");
                      gotologin();
                    }
                  });
                };

                mudaSaudacao();
                gotoperfil();
              }
            }
          );

          //Parse.User.current.set('facebookid', fbid);
          //Parse.User.current.save;

        }
      },
      error: function(user, error) {
          console.log("User cancelled the Facebook login or did not fully authorize.");
                gotologin();
        }
  });
};

function logaParse(email,secret){

    escondeAlert();

    var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("email", email);
    query.find({

        success: function(user) {

            console.log('user retorno');
            console.log(user);

            if (user.length > 0){
                Parse.User.logIn(user[0].attributes.username, secret, {
                  success: function(user) {
                    // Do stuff after successful login.
                      //console.log("logou");
                      mudaSaudacao();
                      gotoperfil();

                  },
                  error: function(user, error) {
                    // The login failed. Check error to see why.
                      console.log("Error: " + error.code + " " + error.message);
                      exibeAlert('Login inválido, verifique seus dados e tente novamente');
                  }
                });
            } else {
                console.log('Usuário não encontrado');
                //$('#login-alert').html('Usuário não encotrado');
                exibeAlert('Login inválido, verifique seus dados e tente novamente');
            }
        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
            exibeAlert('Ocorreu um erro, tente novamente. ' + error.code + " " + error.message);
        }
    });
}

function criaUserParse(userF){

    var user = new Parse.User();
    user = userF;

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            //logaParse(user.get("email"), user.get("password"));
            $('#signupsucess').html('Usuário criado com sucesso! Faça login na sua conta.');
            $('#signupsucess').css( "display", "block" );
            $(location).attr('href',host);
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            console.log("Error: " + error.code + " " + error.message);

            if (error.code == 203) {
                exibeAlertS('Este cadastro já existe! Tente efetuar login.');
            } else {
                exibeAlertS('Ocorreu um erro. Verifique as informações e tente novamente.');
            }
        }
    });
}

function desloga(){
    Parse.User.logOut();
    mudaSaudacao();
    gotologin();
 };

function gotologin() {
    $(location).attr('href',host+'login');
}

function gotoperfil() {
    $(location).attr('href',host+'perfil');
}

function mudaSaudacao(){
    console.log('muda saudacao');
    console.log(Parse.User.current());

    if (!Parse.User.current()){
        //$('#userprofile').html('<p class="navbar-text navbar-right">Clique <a href="#" onclick="loga();">aqui</a> para logar.</p>');
        //$('#userprofile').html('<a href="http://weekmenu.felipecastro.com.br/login"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Logar</button></a><a href="http://felipecastro.com.br/weekmenu/signup"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Criar conta</button></a>');
        //$('#userprofile-menu').html('<a href="#/login"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Logar</button></a><a href="#/signup"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Criar conta</button></a>');

                var ret = '';

                ret += '    <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">';
                ret += '      <i class="material-icons">more_vert</i>';
                ret += '    </button>';
                ret += '    <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">';
                ret += '      <li class="mdl-menu__item"><a href="'+host+'login">Efetuar Login</a></li>';
                ret += '      <div class="np-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item"><a href="'+host+'signup">Criar conta</a></li>';
                ret += '    </ul>';
                //console.log(ret);

                $('#userprofile').html(ret);
                $('#userprofile-menu').html(ret);

        $('#profile_image').html('');
    } else {

        var User = Parse.Object.extend("User");
        var query = new Parse.Query(User);
        query.get(Parse.User.current().id, {

            success: function(user) {

                //console.log('user retorno');
                //console.log(user);

                var ret = '';

                ret += '    <span id="profile_image">';
                ret += '        <img width="30" heigth="30" class="img-circle" src="'+user.get("avatar")+'">';
                ret += '    </span>';
                ret += '    <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">';
                ret += '      <i class="material-icons">more_vert</i>';
                ret += '    </button>';
                ret += '    <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">';
                ret += '      <li class="mdl-menu__item">'+user.get("nomecompleto")+'</li>';
                ret += '      <div class="wm-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item" onclick="gotoperfil();">Perfil</li>';
                ret += '      <div class="np-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item" onclick="desloga();">Sair</li>';
                ret += '    </ul>';
                //console.log(ret);
                $('#userprofile').html(ret);
                $('#userprofile-menu').html(ret);

                woopra.identify({
                      email: user.get("email"),
                      name: user.get("nomecompleto"),
                      company: user.get("blog"),
                      avatar: host + user.get("avatar")
                  });

                // track
                woopra.track();
            },
            error: function(error) {
                console.log("Error: " + error.code + " " + error.message);
                gotologin();
            }
        });

    };
 };

function exibeAlert(msg){
    $('#login-alert').html(msg);
    $('#login-alert').css( "display", "block" );
}

function exibeAlertS(msg){
    $('#signupalert').html(msg);
    $('#signupalert').css( "display", "block" );
}

function escondeAlert(){
    $('#login-alert').html('');
    $('#login-alert').css( "display", "none" );
}

function carregaTimeline(){

  if (Parse.User.current()) {

    $('#menuativo').html( '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-400 mdl-color-text--white menuativo-card" style="margin-top: 2px;" id="card-prato">'+
                          ' <div class="mdl-card__supporting-text menudia">'+
                          '   <span class="font_100">Hoje é dia de </span>'+
                          '   <h3 id="pratodesc"></h3>'+
                          ' </div>'+
                          ' <div class="mdl-card__actions home_banner_act">'+
                          '   Amanhã <span id="pratodescnext"></span>'+
                          ' </div>'+
                          '</div>');

    $('#menusativos').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');
    $('#menusproximos').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');
    $('#menusanteriores').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');
    $('#menusnaoprogramados').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');

    var MenuAtivo = Parse.Object.extend("menudatas");

    var query = new Parse.Query(MenuAtivo);

    query.equalTo("user", Parse.User.current().id);
    query.equalTo("ativo", true);
    query.descending("createdAt");

    var d = new Date();
    query.lessThanOrEqualTo("dtinicio", d);
    query.greaterThanOrEqualTo("dtfim", d);

    query.include("menup");

    query.find({
      success: function(results) {

        var ctr = [];
        var dados = '';

        if (results.length>0){

            getPratos(results, getDiadaSemana(0), 'pratodesc');
            getPratos(results, getDiadaSemana(1), 'pratodescnext');

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Nenhum menu encotrado. <a href="#">Cadastar menu</a></div>'};

            for (var i = 0; i < results.length; i++) {

              var data = results[i];
              var menu = results[i].attributes.menup;

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
              dados += '    <div class="mdl-grid mdl-grid--no-spacing mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--1-col">';
              dados += '        <div class="mdl-card__supporting-text" style="padding: 10px;">';
              dados += '          <span id="avatar_'+menu.id+'" style="padding-left: 10px;"><img width="25" heigth="25" class="img-circle" src="img/assets/user.png"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--8-col">';
              dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--7-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span>iniciado a '+moment(data.get('dtinicio')).toNow(true)+'</span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span id="dadosextras_'+menu.id+'"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
              dados += '          <i class="material-icons">more_vert</i>';
              dados += '        </button>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'m/'+menu.id+'">Detalhes</a></li>';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'agendar/menu/'+menu.id+'">Agendar nova data</a></li>';
              dados += '    </ul>';
              dados += '  </div>';

              getDadosExtraMenu(menu.id);

            }

            dados += '</div>';

            $('#menusativos').html(dados);

        } else {$('#menusativos').html('<div class="alert alert-danger" role="alert">Nenhum menu encotrado. <a href="#">Cadastar menu</a></div>')};

      },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

      var MenusProx = Parse.Object.extend("menudatas");
      var queryProx = new Parse.Query(MenusProx);
      queryProx.equalTo("user", Parse.User.current().id);
      queryProx.include("menup")
      queryProx.equalTo("ativo", true);

      var dp = new Date();
      queryProx.greaterThan("dtinicio", dp);

      queryProx.ascending("dtinicio");

      queryProx.find({
          success: function(results) {

            var dados = '';

            //console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Nenhum menu encotrado. <a href="#">Cadastar menu</a></div>'};

            for (var i = 0; i < results.length; i++) {

              var data = results[i];
              var menu = results[i].attributes.menup;

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
              dados += '    <div class="mdl-grid mdl-grid--no-spacing mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--1-col">';
              dados += '        <div class="mdl-card__supporting-text" style="padding: 10px;">';
              dados += '          <span id="avatar_'+menu.id+'" style="padding-left: 10px;"><img width="25" heigth="25" class="img-circle" src="img/assets/user.png"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--8-col">';
              dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--7-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span>daqui a '+moment(data.get('dtinicio')).fromNow(true)+'</span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span id="dadosextras_'+menu.id+'"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
              dados += '          <i class="material-icons">more_vert</i>';
              dados += '        </button>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'m/'+menu.id+'">Detalhes</a></li>';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'agendar/menu/'+menu.id+'">Agendar nova data</a></li>';
              dados += '    </ul>';
              dados += '  </div>';

              getDadosExtraMenu(menu.id);
            }

            dados += '</div>';

            $('#menusproximos').html(dados);

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

      var MenusAnt = Parse.Object.extend("menudatas");
      var queryAnt = new Parse.Query(MenusAnt);
      queryAnt.equalTo("user", Parse.User.current().id);
      queryAnt.equalTo("ativo", true);
      queryAnt.include("menup");
      var da = new Date();
      queryAnt.lessThan("dtfim", da);

      queryAnt.descending("dtfim");

      queryAnt.find({
          success: function(results) {

            var dados = '';

            //console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Nenhum menu encotrado. <a href="#">Cadastar menu</a></div>'};

            for (var i = 0; i < results.length; i++) {

              var data = results[i];
              var menu = results[i].attributes.menup;

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
              dados += '    <div class="mdl-grid mdl-grid--no-spacing mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--1-col">';
              dados += '        <div class="mdl-card__supporting-text" style="padding: 10px;">';
              dados += '          <span id="avatar_'+menu.id+'" style="padding-left: 10px;"><img width="25" heigth="25" class="img-circle" src="img/assets/user.png"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--8-col">';
              dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--7-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span>fechou a '+moment(data.get('dtinicio')).toNow(true)+'</span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span id="dadosextras_'+menu.id+'"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
              dados += '          <i class="material-icons">more_vert</i>';
              dados += '        </button>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'m/'+menu.id+'">Detalhes</a></li>';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'agendar/menu/'+menu.id+'">Agendar nova data</a></li>';
              dados += '    </ul>';
              dados += '  </div>';

              getDadosExtraMenu(menu.id);
            }

            dados += '</div>';

            $('#menusanteriores').html(dados);

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

      var MenusNP = Parse.Object.extend("menu");
      var queryMNP = new Parse.Query(MenusNP);
      queryMNP.equalTo("owner", Parse.User.current().id);
      queryMNP.equalTo("ativo", true);
      queryMNP.doesNotExist("dtsugerida");
      queryMNP.descending("createdAt");

      queryMNP.find({
          success: function(results) {

            var dados = '';

            console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Nenhum menu encotrado. <a href="#">Cadastar menu</a></div>'};

            for (var i = 0; i < results.length; i++) {

              var menu = results[i];
              //var menu = results[i].attributes.menup;

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
              dados += '    <div class="mdl-grid mdl-grid--no-spacing mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--1-col">';
              dados += '        <div class="mdl-card__supporting-text" style="padding: 10px;">';
              dados += '          <span id="avatar_'+menu.id+'" style="padding-left: 10px;"><img width="25" heigth="25" class="img-circle" src="img/assets/user.png"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--8-col">';
              dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--7-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              //dados += '          <span>fechou a '+moment(data.get('dtinicio')).toNow(true)+'</span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span id="dadosextras_'+menu.id+'"></span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
              dados += '          <i class="material-icons">more_vert</i>';
              dados += '        </button>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'m/'+menu.id+'">Detalhes</a></li>';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'agendar/menu/'+menu.id+'">Agendar nova data</a></li>';
              dados += '    </ul>';
              dados += '  </div>';

              getDadosExtraMenu(menu.id);
            }

            dados += '</div>';

            $('#menusnaoprogramados').html(dados);

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

    carregaEventos();

    var btn_add = '<button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent btn-add btn-add-menu" data-upgraded=",MaterialButton,MaterialRipple">'+
                            '<i class="material-icons mdl-color-text--white" role="presentation">add</i>'+
                            '<span class="visuallyhidden">add</span>'+
                            '<span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 160.391918985787px; height: 160.391918985787px; transform: translate(-50%, -50%) translate(35px, 46px);"></span></span></button>';

    $('#complemento').html(btn_add);
    $('#complemento2').html(btn_add);
    $('#complemento3').html(btn_add);

    $('.btn-add-menu').click(function(){
        $(location).attr('href',host+'menu/novo');
      });

  } else {

    $(location).attr('href',host + 'sobre/comofaz');
  }

}

function carregaTimeline2 () {

  if (Parse.User.current()) {

    var Menus = Parse.Object.extend("menudatas");
    var query = new Parse.Query(Menus);
    query.equalTo("user", Parse.User.current().id);
    query.include("menup")
    query.equalTo("ativo", true);

    query.ascending("dtinicio");

    query.find({
        success: function(results) {

          var dados = '';

          var dtini = '';

          for (var i = 0; i < results.length; i++) {

            var data = results[i];
            var menu = results[i].attributes.menup;

            if (moment().isBetween(data.get('dtinicio'), data.get('dtfim'))) {
              dados += '<div class="cd-timeline-block ini_'+moment(data.get('dtinicio')).format("DD_MM_YY")+'" id="menu__atual"> ';
              dados += '  <div class="cd-timeline-img cd-present"> ';
            } else {
              dados += '<div class="cd-timeline-block ini_'+moment(data.get('dtinicio')).format("DD_MM_YY")+'"> ';
              if (moment().isBefore(data.get('dtinicio'))) {
                dados += '  <div class="cd-timeline-img cd-future"> ';
              } else {
                dados += '  <div class="cd-timeline-img cd-past"> ';
              }
            }
            //dados += '<div class="cd-timeline-block"> ';

            dados += '    <i class="material-icons tl-icon">event</i> ';
            dados += '  </div> ';

            dados += '  <div class="cd-timeline-content" id="menu-tl-'+menu.id+'"> ';
            dados += '    <h2>'+menu.get('nome')+'</h2> ';
            dados += '    <p>'+menu.get('desc')+'</p> ';
            dados += '    <div id="extra-menu-tl-'+menu.id+'"></div> ';
            dados += '          <span id="avatar_'+menu.id+'" style="padding-left: 10px;"><img width="25" heigth="25" class="img-circle" src="img/assets/user.png"></span>';
            dados += '    <a href="#0" class="cd-read-more">Ver pratos</a> ';
            dados += '    <span class="cd-date">Agendado entre '+moment(data.get('dtinicio')).format('ll')+' e '+moment(data.get('dtfim')).format('ll')+'</span> ';
            dados += '  </div> ';
            dados += '</div> ';

            getDadosExtraMenuTL(menu.id);
          }


          $('#cd-timeline').html(dados);

          if (document.getElementById('menu__atual')) {
            //alert($('#menu__atual').offset().top);
            scrollToElement('#menu__atual', 1000, 0);
          }

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

  } else {

    $(location).attr('href',host + 'login');
  }

}

function getParameterByName( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

  if (name.indexOf("?") > 0) {

    var regexS = "[\\?&]"+name+"=([^&#]*)",
      regex = new RegExp( regexS ),
      results = regex.exec( window.location.href );
    if( results == null ){
      return "";
    } else{
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  } else {

    var regexS = name+"/([^&#]*)",
      regex = new RegExp( regexS ),
      results = regex.exec( window.location.href );
  if( results == null ){
    return "";
  } else{
    return decodeURIComponent(results[1].replace(/menu\/+/g, " "));
  }

  }
}

function getDadosExtraMenu(menu){

  var menuid = menu;
  //console.log(menuid);
  var el = '#dadosextras_'+menuid;
  var elimg = '#avatar_'+menuid;
  var ret = '';
  var retimg = '';
  //console.log(el);

  var PM = Parse.Object.extend("diamenu");
  var query = new Parse.Query(PM);
  query.equalTo("ativo", true);
  query.equalTo("menu", menuid);
  query.include("pratop");

  query.find({
    success: function(results) {

      ret = '<div id="qtd_pratos_'+menuid+'" class="material-icons mdl-badge" data-badge="'+results.length+'" style="top: -4px;"></div>';
      ret += '<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="qtd_pratos_'+menuid+'">';
      //ret += '<div class="mdl-tooltip" for="qtd_pratos_'+menuid+'"><ul class="mdl-menu">';

      if (results.length > 0){


        for (var i = 0; i < results.length; i++) {

          var prato = results[i].attributes.pratop;

          if (prato) {ret += ' <li class="mdl-menu__item"><a class="abre_prato iframe" href="'+host+'p/'+prato.id+'">'+prato.get('nome')+'</a></li>';};
        };

      } else {

        ret += ' <li class="mdl-menu__item"><a href="'+host+'m/'+menuid+'">Adicionar prato</a></li>';

      }

      ret += '</ul>';

      $(el).html(ret);
    },
    error: function(error) {
      $(el).html('nenhum prato ');
    }
  });

  var PI = Parse.Object.extend("menu");
  var queryImg = new Parse.Query(PI);
  queryImg.include("ownerp");

  queryImg.get(menuid, {
    success: function(menu) {

      var owner = menu.attributes.ownerp;
      retimg = '<img width="25" heigth="25" class="img-circle" src="'+owner.get('avatar')+'" id="img_'+menuid+'"><span class="mdl-tooltip" for="img_'+menuid+'">Criado por '+owner.get('nomecompleto')+'</span>';
      $(elimg).html(retimg);

    },
    error: function(error) {
      //$(el).html('nenhum prato ');
      console.log(error);
    }
  });
}

function getDadosExtraMenuTL(menu){

  var menuid = menu;
  //console.log(menuid);
  var el = '#extra-menu-tl-'+menuid;
  var elimg = '#avatar_'+menuid;
  var ret = '';
  var retimg = '';
  //console.log(el);

  var PM = Parse.Object.extend("diamenu");
  var query = new Parse.Query(PM);
  query.equalTo("ativo", true);
  query.equalTo("menu", menuid);
  query.include("pratop");

  query.find({
    success: function(results) {

      ret = '<div id="qtd_pratos_'+menuid+'" class="material-icons mdl-badge" data-badge="'+results.length+'" style="top: -4px;"></div>';
      //ret += '<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="qtd_pratos_'+menuid+'">';
      //ret += '<div class="mdl-tooltip" for="qtd_pratos_'+menuid+'"><ul class="mdl-menu">';

      /*if (results.length > 0){


        for (var i = 0; i < results.length; i++) {

          var prato = results[i].attributes.pratop;

          if (prato) {ret += ' <li class="mdl-menu__item"><a class="abre_prato iframe" href="'+host+'p/'+prato.id+'">'+prato.get('nome')+'</a></li>';};
        };

      } else {

        ret += ' <li class="mdl-menu__item"><a href="'+host+'m/'+menuid+'">Adicionar prato</a></li>';

      }*/

      //ret += '</ul>';

      $(el).html(ret);
    },
    error: function(error) {
      $(el).html('nenhum prato ');
    }
  });

  var PI = Parse.Object.extend("menu");
  var queryImg = new Parse.Query(PI);
  queryImg.include("ownerp");

  queryImg.get(menuid, {
    success: function(menu) {

      var owner = menu.attributes.ownerp;
      retimg = '<img width="25" heigth="25" class="img-circle" src="'+owner.get('avatar')+'" id="img_'+menuid+'"><span class="mdl-tooltip" for="img_'+menuid+'">Criado por '+owner.get('nomecompleto')+'</span>';
      $(elimg).html(retimg);

    },
    error: function(error) {
      //$(el).html('nenhum prato ');
      console.log(error);
    }
  });
}

function carregaMenu(menu){

  var menuid = menu;
  console.log(menu);

  if (Parse.User.current()) {

   var dados = '';

    var Menu = Parse.Object.extend("menu");
    var query = new Parse.Query(Menu);
    query.equalTo("owner", Parse.User.current().id);
    query.equalTo("ativo", true);
    query.include("ownerp");

    query.get(menuid, {
      success: function(menu) {

        var dono = menu.attributes.ownerp;

/*console.log(menu.get('dtsugerida'));

var curr_date = menu.get('dtsugerida').getDate();
var curr_month = menu.get('dtsugerida').getMonth();
curr_month++;
var curr_year = menu.get('dtsugerida').getFullYear();

var dt = moment(curr_date + "/" + curr_month + "/" + curr_year, "DD/MM/YYYY");
console.log(dt);*/

        dados = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp animated slideInLeft" id="dadosmenu">';

        dados += '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-500 mdl-color-text--white">';
        dados += '<div class="mdl-card__supporting-text menudia">';
        //dados += '<span class="font_100">Menu </span>';
        dados += '<h2>'+menu.get('nome')+'</h2>';
        dados += '<h6 class="font_100">'+menu.get('desc')+'</h6>';

        dados += '<button id="menu-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon mn-menu-lower-right">';
        dados += '  <i class="material-icons">more_vert</i>';
        dados += '</button>';

        dados += '<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="menu-menu-lower-right">';
        dados += '  <li class="mdl-menu__item">Editar</li>';
        dados += '  <li class="mdl-menu__item">Compartilhar</li>';
        dados += '</ul>';

        dados += '</div>';
        dados += '<div class="mdl-card__actions menu_header_actions">';
        dados += '<div><img width="25" heigth="25" class="img-circle img_avatar_menu" src="'+dono.get('avatar')+'"><span class="menu_head_extra"> '+dono.get('nomecompleto')+'</span></div><div class="mdl-layout-spacer"></div><div><span class="menu_head_extra menu_head_extra_tempo">criado a '+moment(menu.createdAt).toNow(true)+'</span></div>';
        dados += '</div>';
        dados += '</div>';
        dados += '</section>';
        dados += '<section class="section--center mdl-grid mdl-grid--no-spacing animated slideInRight" id="diasmenu">';

        //$('#dadosmenu').html(dados);
        //** carrega dias menu

        var dados_dia = '';
        //var diassemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
        var diassemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

        for (var i = 1; i < diassemana.length+1; i++) {

          //console.log('entrou no loop');
          //console.log(i);

          dados_dia = '<section class="section--center mdl-grid--no-spacing section-header">';
          dados_dia += '  <h2 class="font_100 dia_label">'+diassemana[i-1]+'</h2>';
          dados_dia += '</section>';

          dados_dia += '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
          dados_dia += '  <div class="mdl-card mdl-cell mdl-cell--12-col menu_receita_lista">';
          dados_dia += '    <div id="dia_menu_'+i+'" class="mdl-grid mdl-cell--12-col">';

          dados_dia += '<div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">';
          dados_dia += '  <div class="mdl-card mdl-shadow--2dp wm-card-event">';
          dados_dia += '    <div class="mdl-card__title mdl-card--expand">';
          dados_dia += '      <a class="actions_link iframe add_prato" id="add_prato" href="'+host+'prato/novo/'+menu.id+'/'+i+'"> ';
          dados_dia += '        <h4 class="actions">';
          dados_dia += '          <i class="material-icons actions">add</i>';
          dados_dia += '          <br>';
          dados_dia += '          Adicionar prato';
          dados_dia += '        </h4>';
          dados_dia += '     </a>';
          dados_dia += '   </div>';
          dados_dia += '  </div>';
          dados_dia += '</div>';

          dados_dia += '    </div>';
          dados_dia += '  </div>';
          dados_dia += '</section>';

          //$('#diasmenu').append(dados_dia);
          dados += dados_dia;

        }


        dados += '</section>';
        dados += '<section class="section--center mdl-grid mdl-grid--no-spacing">';
        dados += '</section>';

        //$('#diasmenu').html(dados_dia);
        $('#conteudo').html(dados);

        for (var t = 1; t < diassemana.length+1; t++) {

          var DiasMenu = Parse.Object.extend("diamenu");
          var queryDia = new Parse.Query(DiasMenu);
          queryDia.equalTo("menu", menuid);
          queryDia.equalTo("owner", Parse.User.current().id);
          queryDia.equalTo("ativo", true);
          queryDia.equalTo("iddia", t);
          queryDia.include("menup");
          queryDia.include("pratop");

          queryDia.find({
            success: function(dias) {

              if (dias.length>0){

                var ret = '';

                for (var z = 0; z < dias.length; z++) {

                      var dia = dias[z];
                      var prato = dia.get("pratop");


                      var url = prato.get("ext") ? '<a class="menu_link" href="'+prato.get("url")+'">' : '<a class="abre_prato menu_link" href="'+host+'p/'+prato.id+'/'+menu.id+'">';
                      //var url = prato.get("ext") ? '<a class="menu_link" href="'+prato.get("url")+'">' : '<a class="abre_prato menu_link" href="'+host+'p/'+prato.id+'/'+menu.id+'">';
                      //var url = prato.get("ext") ? '<a class="menu_link mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone" href="'+prato.get("url")+'">' : '<a class="abre_prato iframe menu_link mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone" href="'+host+'p/'+prato.id+'">';
                      //var ret = '<li class="link_prato">'+url+'<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-col"><img width="50" heigth="50" class="img-circle lista_prato_img" src="http://weekmenu.imagefly.io/w_80,f_png/'+host+prato.get("capa")+'">'+
                      //          '</div><div class="mdl-cell mdl-cell--10-col"><span class="list_prato">'+prato.get("nome")+'</span></div></div></a></li>';

                      var img = 'http://weekmenu.imagefly.io/w_300,f_png/'+encodeURI(host+prato.get("capa"));

                      ret += '<div id="card_prato_'+prato.id+'" class="receita-card-image mdl-card mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-shadow--4dp" style="background: url('+img+') center / cover !important;">'+
                                ' <div class="mdl-card__title mdl-card--expand"></div>'+
                                ' <div class="mdl-card__actions">'+
                                '   <span class="receita-card-image__filename">'+url+prato.get("nome")+'</a></span>'+
                                ' </div>'+
                                '</div>';

                      //$( '#dia_menu_'+dia.get("iddia") ).append( ret );
                      //dados_dia += ret;

                      $("card_prato_"+prato.id).click(function(){
                          alert('oie');
                      });

                  }

                  ret += '<div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">';
                  ret += '  <div class="mdl-card mdl-shadow--2dp wm-card-event">';
                  ret += '    <div class="mdl-card__title mdl-card--expand">';
                  ret += '      <a class="actions_link iframe add_prato" id="add_prato" href="'+host+'prato/novo/'+menu.id+'/'+(dias[0].attributes.iddia)+'"> ';
                  ret += '        <h4 class="actions">';
                  ret += '          <i class="material-icons actions">add</i>';
                  ret += '          <br>';
                  ret += '          Adicionar prato';
                  ret += '        </h4>';
                  ret += '     </a>';
                  ret += '   </div>';
                  ret += '  </div>';
                  ret += '</div>';
                  $( '#dia_menu_'+(dias[0].attributes.iddia)).html( ret );

                }
            },
            error: function(error) {
              console.log('erro '+error.message);
            }
          });

        }


      },
      error: function(error) {
        console.log('erro '+error.message);
      }
    });
  }

}

function carregaPrato(prato, menu){

  var pratoid = prato;
  var menuid= menu;

  if (Parse.User.current()) {

   var dados = '';

    var Prato = Parse.Object.extend("prato");
    var query = new Parse.Query(Prato);
    //query.equalTo("owner", Parse.User.current().id);
    query.equalTo("ativo", true);
    query.include("ownerp");

    query.get(pratoid, {
      success: function(prator) {

    //console.log('prator');
    //console.log(prator);

        var dono = prator.attributes.ownerp;
        var imgcover = (prator.get("capa") ? 'http://weekmenu.imagefly.io/w_800,f_png/'+host+prator.get("capa") : 'http://weekmenu.imagefly.io/w_800,f_png/http://weekmenu.felipecastro.com.br/img/assets/pratodefault.png');

        $("body").css("background", "url('"+imgcover+"') center / cover");
        //$("#body").attr('data-before',"background-image: url('"+imgcover+"') center / cover");

        dados =  '<div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col animated fadeInUp" id="conteudo">';
        dados += '<div class="mdl-card__media mdl-color-text--grey-50 mdl-color--indigo-500" id="dadosprato" >';
        dados += '  <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-500 mdl-color-text--white">';
        dados += '    <div class="mdl-card__supporting-text receita_head">';
        dados += '      <h3>'+prator.get('nome')+'</h3>';
        dados += '    </div>';
        dados += '    <div class="mdl-card__actions menu_header_actions">';
        dados += '      <div><img width="30" heigth="30" class="img-circle" src="'+dono.get("avatar")+'"><span class="dononome">'+dono.get("nomecompleto")+'</span></div><div class="mdl-layout-spacer"></div><div class="datacriado">criado a '+moment(prator.createdAt).toNow(true)+'</div>';
        dados += '    </div>';
        dados += '  </div>';
        dados += '</div>';

        dados += '<div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">';
        dados += '  <div>';
        dados += '    <span>Compartilhar</span>';
        dados += '  </div>';
        dados += '  <div class="section-spacer"></div>';
        dados += '  <div class="meta__favorites">';
        dados += '     425 <i class="material-icons" role="presentation">favorite</i>';
        dados += '    <span class="visuallyhidden">favorites</span>';
        dados += '  </div>';
        dados += '  <div>';
        dados += '    <i class="material-icons" role="presentation">bookmark</i>';
        dados += '    <span class="visuallyhidden">bookmark</span>';
        dados += '  </div>';
        dados += '  <div>';
        dados += '    <i class="material-icons" role="presentation">share</i>';
        dados += '    <span class="visuallyhidden">share</span>';
        dados += '  </div>';
        dados += '</div>';
        dados += '<div class="sect_title">';
        dados += '  <p>Ingredientes</p>';
        dados += '</div>';
        dados += '<div class="mdl-color-text--grey-700 mdl-card__supporting-text" id="ingredientes" >';
        dados += prator.get('ingredientes');
        dados += '</div>';
        dados += '<div class="sect_title">';
        dados += '  <p>Instruções</p>';
        dados += '</div>';
        dados += '<div class="mdl-color-text--grey-700 mdl-card__supporting-text" id="instrucoes" >';
        dados += prator.get('instrucoes');
        dados += '</div>';
        dados += '<div class="sect_title">';
        dados += '  <p>Notas</p>';
        dados += '</div>';
        dados += '<div class="mdl-color-text--grey-700 mdl-card__supporting-text" id="notas" >';
        dados += prator.get('obs');
        dados += '</div>';
        dados += '</div>';

        $('#conteudo').html(dados);

        //buscaRelacionados(prator);

        //dados = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
        //dados += '<div class="mdl-card mdl-cell mdl-cell--12-col">';
        //dados += '<div class="mdl-card__supporting-text">';
        //dados += prator.get('ingredientes');
        //dados += '</div>';
        //dados += '</div>';
        //dados += '</section>';

        //$('#ingredientes').html(prator.get('ingredientes'));

        /*dados = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
        dados += '<div class="mdl-card mdl-cell mdl-cell--12-col">';
        dados += '<div class="mdl-card__supporting-text">';
        //dados_dia += '<h4>Features</h4>';
        dados += prator.get('instrucoes');
        dados += '</div>';
        dados += '</div>';
        dados += '</section>';*/

        //$('#instrucoes').html(prator.get('instrucoes'));

        /*dados = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
        dados += '<div class="mdl-card mdl-cell mdl-cell--12-col">';
        dados += '<div class="mdl-card__supporting-text">';
        //dados_dia += '<h4>Features</h4>';
        dados += prator.get('obs');
        dados += '</div>';
        dados += '</div>';
        dados += '</section>';*/

        //$('#notas').html(prator.get('obs'));
      },
      error: function(error) {
        console.log('erro '+error.message);
              }
      });

    var Menu = Parse.Object.extend("menu");
    var querym = new Parse.Query(Menu);

    querym.get(menuid, {
      success: function(menur) {
        //$('#botao_back').html('<a href="'+host+'m/'+menuid+'/"><i class="material-icons" role="presentation">arrow_back</i> '+menur.get("nome")+'</a>');
$('#botao_back').html('<a href="'+host+'m/'+menuid+'/"><i class="material-icons botao_back_i" role="presentation">arrow_back</i> Voltar</a>');
      },
      error: function(error) {
        console.log('erro '+error.message);

      }
    });
  }

}

function getDiadaSemana(add) {
    var d = new Date();
    d = moment(d).add(add, 'days');
    var n = d.day();
    //console.log("dia da semana " + n);
    return n;
}

function carregaEventos() {

 if (Parse.User.current()) {

    var menus = [];
    var menusarray = [];
    var eventos = [];

    var Datas = Parse.Object.extend("menudatas");
    var query = new Parse.Query(Datas);
    query.equalTo("user", Parse.User.current().id);
    query.equalTo("ativo", true);
    query.include("menup");
    //query.include("pratop");
    //query.ascending("menu");
    //query.ascending("iddia");

    query.find({
      success: function(datas) {

        //console.log(menus);
        var menuidctrl = '0';

        for (var i = 0; i < datas.length; i++) {

          var data = datas[i];
          var menu = datas[i].attributes.menup;

          //var dtiniciomenu = moment(data.get("dtinicio"));
          //var dtfimmenu = moment(data.get("dtfim"));

          var dtiniteste = data.get("dtinicio");
          var dtfimteste = data.get("dtfim");

          evm = {};
          evm.title = 'Menu '+menu.get("nome");
          evm.start = moment(dtiniteste.getFullYear()+'-'+(dtiniteste.getMonth()+1)+'-'+dtiniteste.getDate(), "YYYY-MM-DD");
          evm.end = moment(dtfimteste.getFullYear()+'-'+(dtfimteste.getMonth()+1)+'-'+(dtfimteste.getDate()+1), "YYYY-MM-DD");
          evm.id = menu.id;
          evm.url = host+'m/'+menu.id;
          evm.allDay = true;
          evm.backgroundColor = menu.get("cat_color");
          evm.borderColor = menu.get("cat_color");
          evm.className = 'fc-event-menu';

          eventos.push(evm);

          mo = {};
          mo.id = menu.id;
          mo.data = moment(dtiniteste.getFullYear()+'-'+(dtiniteste.getMonth()+1)+'-'+dtiniteste.getDate(), "YYYY-MM-DD");
          menus.push(mo);
          menusarray.push(menu.id);

        }

          var Pratos = Parse.Object.extend("diamenu");
          var query = new Parse.Query(Pratos);
          query.containedIn("menu", menusarray);
          query.equalTo("owner", Parse.User.current().id);
          query.equalTo("ativo", true);
          query.include("menup");
          query.include("pratop");

          query.find({
            success: function(dias) {

              for (var t = 0; t < dias.length; t++) {

                var dia = dias[t];
                var prato = dias[t].attributes.pratop;
                var menup = dias[t].attributes.menup;

                var dtprato;

                for (var x = 0; x < menus.length; x++) {

                  if (menus[x].id == menup.id) {
                      dtprato = moment(menus[x].data).add(dia.get("iddia")-1, 'days');
                  }
                };

                if (prato) {
                  evd = {};
                  evd.start = dtprato;
                  evd.end = dtprato;
                  evd.title = prato.get("nome");
                  evd.id = prato.id;
                  evd.url = host+'p/'+prato.id;
                  evd.allDay = true;
                  evd.backgroundColor = menup.get("cat_color");
                  evd.borderColor = menup.get("cat_color");
                  evd.className = 'fc-event-menu';

                  eventos.push(evd);
                }

              }


              $('#calendar').fullCalendar({

                header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,basicWeek'
                },
                defaultView: 'month',
                events: eventos
              });

            },
            error: function(object, error) {
                                // The object was not retrieved successfully.
                                // error is a Parse.Error with an error code and message.
            }
          });


      },
      error: function(object, error) {
                          // The object was not retrieved successfully.
                          // error is a Parse.Error with an error code and message.
      }
    });

  } else {

    $(location).attr('href',host + 'login');
  }
}

function getPratos(menusativos, ds, el){

  var menus = [];
  for (var i = 0; i < menusativos.length; i++) {
    menus.push(menusativos[i].attributes.menu);
  };

  var Pratos = Parse.Object.extend("diamenu");
  var query = new Parse.Query(Pratos);
  query.equalTo("owner", Parse.User.current().id);
  query.equalTo("ativo", true);
  query.descending("createdAt");
  query.include("pratop");
  query.include("menup");
  query.containedIn("menu", menus);

  query.equalTo("iddia", ds);

  query.find({
    success: function(results) {

      var ret = '';
      var ad = '';

      for (var i = 0; i < results.length; i++) {

        var dia = results[i];
        var prato = results[i].attributes.pratop;

        if (i==results.length-1) {ad =''} else if (i==results.length-2) {ad =' e '} else {ad =', '};

        ret += '<a class="abre_prato iframe" href="'+host+'p/'+prato.id+'">'+prato.get('nome')+'</a>' + ad;
      };

      $('#'+el).html(ret);
    },
    error: function(object, error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });

}

function buscaMenu(termo) {

  console.log(termo);

  var toLowerCase = function(w) { return w.toLowerCase(); };
  var words = termo.split(/\b/);
  console.log(words);
  words = _.map(words, toLowerCase);
  var stopWords = ["o", "em", "de", "no"]
  words = _.filter(words, function(w) {
    return w.match(/^\w+$/) && !   _.contains(stopWords, w);
  });

  var Prato = Parse.Object.extend("menu");
  var query = new Parse.Query(Prato);
  query.containsAll("words", words);
  query.equalTo("ativo", true);
  query.equalTo("publico", true);
  query.include("ownerp");
  query.find().then(function(results) {
    // Request succeeded
    console.log('results da busca');
    console.log(results);

    parseMenuBusca(results);

  }, function(error) {
    // Request failed
  });

}

function parseMenuBusca(results) {

  var dados = '';

    dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

    if (results.length<1){dados = '<div>Sua busca não retornou resultados</div>'};

    for (var i = 0; i < results.length; i++) {

      var menu = results[i];
      var owner = results[i].attributes.ownerp;

      dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
      dados += '    <div class="mdl-cell mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
      dados += '      <div class="mdl-card__supporting-text list_title" href="'+host+'m/'+menu.id+'">';
      dados += '        <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
      dados += '      </div>';
      dados += '    </div>';
      dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
      dados += '      <div class="mdl-cell mdl-cell--7-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
      dados += '        <div class="mdl-card__supporting-text list_extra">';
      dados += '          <span>por '+owner.get("nomecompleto")+'</span>';
      dados += '        </div>';
      dados += '      </div>';
      dados += '      <div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
      dados += '        <div class="mdl-card__supporting-text list_extra">';
      dados += '          <span id="dadosextras_'+menu.id+'"></span>';
      dados += '        </div>';
      dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
      dados += '      </div>';
      dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
      dados += '          <i class="material-icons">more_vert</i>';
      dados += '        </button>';
      dados += '      </div>';
      dados += '    </div>';
      dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
      dados += '      <li class="mdl-menu__item">Detalhes</li>';
      dados += '      <li class="mdl-menu__item">Agendar nova data</li>';
      dados += '    </ul>';
      dados += '  </div>';

      getDadosExtraMenu(menu.id);
    }

    dados += '</div>';

    $('#menubuscaresult').html(dados);

}

function parsePratoBusca(results) {

  var dados = '';

    dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

    if (results.length<1){dados = '<div>Sua busca não retornou resultados</div>'};

    for (var i = 0; i < results.length; i++) {

      var prato = results[i];
      var owner = results[i].attributes.ownerp;

      dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list">';
      dados += '    <div class="mdl-cell mdl-cell--6-col mdl-color-text--grey-700">';
      dados += '      <div class="mdl-cell mdl-cell--10-col mdl-color-text--grey-700">';
      dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'p/'+prato.id+'">';
      dados += '          <a href="'+host+'p/'+prato.id+'" class="mdl-color-text--grey-600">'+prato.get('nome')+'</a>';
      dados += '        </div>';
      dados += '      </div>';
      dados += '      <div class="mdl-cell mdl-cell--3-col mdl-color-text--grey-700">';
      dados += '        <div class="mdl-card__supporting-text list_extra_busca">';
      dados += '          <span>por '+owner.get("nomecompleto")+'</span>';
      dados += '        </div>';
      dados += '      </div>';
      dados += '    </div>';
      dados += '    <div class="mdl-cell mdl-cell--2-col mdl-color-text--grey-700">';
      dados += '        <div class="mdl-card__supporting-text list_extra_busca_add">';
      dados += '          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="addPrato(\'' +prato.id+'\');">';
      dados += '            Adicionar ao menu';
      dados += '          </button>';
      dados += '        </div>';
      dados += '    </div>';
      dados += '  </div>';

      //getDadosExtraMenu(menu.id);
    }

    dados += '</div>';

    $('#pratos_result').html(dados);

}

function buscaPrato(termo) {

  //console.log(termo);

  var toLowerCase = function(w) { return w.toLowerCase(); };
  var words = termo.split(/\b/);
  console.log(words);
  words = _.map(words, toLowerCase);
  var stopWords = ["o", "em", "de", "no"]
  words = _.filter(words, function(w) {
    return w.match(/^\w+$/) && !   _.contains(stopWords, w);
  });

  var PratoOwner = Parse.Object.extend("prato");
  var querypo = new Parse.Query(PratoOwner);
  querypo.containsAll("words", words);
  querypo.equalTo("ativo", true);
  querypo.equalTo("owner", Parse.User.current().id);
  querypo.include("ownerp");

  var PratoPublic = Parse.Object.extend("prato");
  var querypp = new Parse.Query(PratoPublic);
  querypp.containsAll("words", words);
  querypp.equalTo("ativo", true);
  querypp.equalTo("ext", false);
  querypp.equalTo("publico", true);
  querypp.include("ownerp");

  var query = Parse.Query.or(querypo, querypp);
  query.include("ownerp");

  query.find().then(function(results) {
    // Request succeeded
    console.log('results da busca');
    console.log(results);

    parsePratoBusca(results);
  }, function(error) {
    // Request failed
  });

}

function buscaRelacionados(prato) {

  console.log(prato.get('words'));
  console.log(prato.get('words')[1]);

  var PratoPublic = Parse.Object.extend("prato");
  var query = new Parse.Query(PratoPublic);
  query.containedIn(prato.get('words')[1], "words");
  query.equalTo("ativo", true);
  query.equalTo("ext", false);
  query.equalTo("publico", true);
  query.include("ownerp");

  query.find({
    success: function(results) {

      console.log(results);
    },
    error: function(object, error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });

}

function buscaMenusPrato(prato) {

  var MenuOwner = Parse.Object.extend("diamenu");
  var querymo = new Parse.Query(MenuOwner);
  querymo.equalTo("ativo", true);
  querymo.equalTo("prato", prato.id);
  querymo.equalTo("owner", Parse.User.current().id);
  querymo.include("menup");
  querymo.include("ownerp");

  var PratoPublic = Parse.Object.extend("prato");
  var querypp = new Parse.Query(PratoPublic);
  querypp.containsAll("words", words);
  querypp.equalTo("ativo", true);
  querypp.equalTo("ext", false);
  querypp.equalTo("publico", true);
  querypp.include("ownerp");

  var query = Parse.Query.or(querypo, querypp);
  query.include("ownerp");

  query.find().then(function(results) {
    // Request succeeded
    console.log('results da busca');
    console.log(results);

    parsePratoBusca(results);
  }, function(error) {
    // Request failed
  });

}

function chamaTeste(user, menu) {
  Parse.Cloud.run('getMenusProgramados', {}, {
    success: function(menus) {
      console.log('chegou js');
      console.log(menus);
    },
    error: function(error) {
    }
  });

  Parse.Cloud.run('getMenusPublicosUser', { user: user }, {
    success: function(menus) {
      console.log('chegou js 2');
      console.log(menus);
    },
    error: function(error) {
    }
  });

  Parse.Cloud.run('getMenu', { menu: menu }, {
    success: function(menu) {
      console.log('chegou js 3');
      console.log(menu);
    },
    error: function(error) {
    }
  });
}

function carregaMenusUser(userid){

  if (Parse.User.current()) {


    $('#menu-panel').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');

    var Menus = Parse.Object.extend("menu");

    var query = new Parse.Query(Menus);

    query.equalTo("owner", (userid == null) ? Parse.User.current().id : userid);

    if (userid === undefined || userid == null || userid.length <= 0) {
      query.equalTo("ativo", true);
    } else {
      query.equalTo("ativo", true);
      query.equalTo("publico", true);
    }
    query.descending("createdAt");

    query.find({
          success: function(results) {

            if (results.length>0) {

            var dados = '';

            //console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col">';

            for (var i = 0; i < results.length; i++) {

              var menu = results[i];

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list  mdl-shadow--2dp">';
              dados += '    <div class="mdl-grid mdl-grid--no-spacing mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--12-col">';
              dados += '        <div class="mdl-card__supporting-text list_title" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('nome')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--12-col">';
              dados += '        <div class="mdl-card__supporting-text list_subtitle" href="'+host+'>m/'+menu.id+'">';
              dados += '          <a href="'+host+'m/'+menu.id+'" class="mdl-color-text--grey-600">'+menu.get('desc')+'</a>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-grid mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-grid--no-spacing mdl-color-text--grey-700">';
              dados += '      <div class="mdl-cell mdl-cell--10-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '        <div class="mdl-card__supporting-text list_extra">';
              dados += '          <span>criado a '+moment(menu.createdAt).toNow(true)+'</span>';
              dados += '        </div>';
              dados += '      </div>';
              dados += '      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '        <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon" style="top: 9px;right: 5px;">';
              dados += '          <i class="material-icons">more_vert</i>';
              dados += '        </button>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'m/'+menu.id+'">Detalhes</a></li>';
              dados += '      <li class="mdl-menu__item"><a href="'+host+'agendar/menu/'+menu.id+'">Agendar nova data</a></li>';
              dados += '    </ul>';
              dados += '  </div>';

              //getDadosExtraMenu(menu.id);
            }

            dados += '</div>';

            $('#menu-panel').html(dados);

          } else {

            $('#menu-panel').html(addLinkPlaceholder('Nenhum menu', 'menu/novo'));
          }

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });



  } else {

    //$(location).attr('href',host + 'sobre/comofaz');
  }

}

function carregaPratosUser(userid){

  if (Parse.User.current()) {


    $('#prato-panel').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');

    var Pratos = Parse.Object.extend("prato");

    var query = new Parse.Query(Pratos);

    query.equalTo("owner", (userid == null) ? Parse.User.current().id : userid);

    if (userid === undefined || userid == null || userid.length <= 0) {
      query.equalTo("ativo", true);
    } else {
      query.equalTo("ativo", true);
      query.equalTo("publico", true);
      query.equalTo("ext", false);
    }
    query.descending("createdAt");

    query.find({
          success: function(results) {

            if (results.length > 0) {

              var dados = '';

              //console.log(results);

              //dados =  '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
              dados =  '<div class="mdl-grid mdl-cell mdl-cell--12-col menu_receita_lista">';

              if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Nenhum prato cadastrado ainda. <a href="#">Cadastar prato</a></div>'};

              for (var i = 0; i < results.length; i++) {

                var prato = results[i];

                var url = '<a class="abre_prato menu_link" href="'+host+'p/'+prato.id+'">';

                var img = 'http://weekmenu.imagefly.io/w_300,f_png/'+encodeURI(host+prato.get("capa"));

                dados += '<div id="card_prato_'+prato.id+'" class="receita-card-image mdl-card mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-shadow--4dp" style="background: url('+img+') center / cover !important;">'+
                          ' <div class="mdl-card__title mdl-card--expand"></div>'+
                          ' <div class="mdl-card__actions">'+
                          '   <span class="receita-card-image__filename">'+url+prato.get("nome")+'</a></span>'+
                          ' </div>'+
                          '</div>';

                //getDadosExtraMenu(menu.id);
              }

              dados += '</div>';
              //dados += '</section>';

              $('#prato-panel').html(dados);

          } else {

            $('#prato-panel').html(addLinkPlaceholder('Nenhum prato', 'prato/novo'));
          }

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });



  } else {

    //$(location).attr('href',host + 'sobre/comofaz');
  }

}

function carregaColecoesUser(userid){

  if (Parse.User.current()) {


    $('#colecao-panel').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');

    var Colecoes = Parse.Object.extend("colecao");

    var query = new Parse.Query(Colecoes);

    query.equalTo("owner", (userid == null) ? Parse.User.current().id : userid);
    if (userid === undefined || userid == null || userid.length <= 0) {
      query.equalTo("ativo", true);
    } else {
      query.equalTo("ativo", true);
      query.equalTo("publico", true);
    }
    query.descending("createdAt");

    query.find({
          success: function(results) {

            if (results.length > 0) {

              var dados = '';

              //console.log(results);

              dados =  '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
              dados =  '<div class="mdl-grid mdl-cell mdl-cell--12-col menu_receita_lista">';

              for (var i = 0; i < results.length; i++) {

                var colecao = results[i];

                var url = '<a class="abre_prato menu_link" href="'+host+'p/'+colecao.id+'">';

                var img = 'http://weekmenu.imagefly.io/w_300,f_png/'+encodeURI(host+colecao.get("capa"));

                dados += '<div id="card_prato_'+colecao.id+'" class="receita-card-image mdl-card mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-shadow--4dp" style="background: url('+img+') center / cover !important;">'+
                          ' <div class="mdl-card__title mdl-card--expand"></div>'+
                          ' <div class="mdl-card__actions">'+
                          '   <span class="receita-card-image__filename">'+url+colecao.get("nome")+'</a></span>'+
                          ' </div>'+
                          '</div>';

                //getDadosExtraMenu(menu.id);
              }

              dados += '</div>';
              dados += '</section>';

              $('#colecao-panel').html(dados);

          } else {

            $('#colecao-panel').html(addLinkPlaceholder('Nenhuma coleção', 'colecao/novo'));
          }

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });



  } else {

    //$(location).attr('href',host + 'sobre/comofaz');
  }

}

function carregaDadosUser(slug){

  if (Parse.User.current()) {

    if (slug === undefined || slug == null || slug.length <= 0) {

      var uquery = new Parse.Query(Parse.User);
      uquery.get(Parse.User.current().id, {

        success: function(user) {

          (user.get('avatar')) ? $('#avatar_container').html('<img width="75" heigth="75" class="img-circle_profile img_avatar_profile" src="'+user.get('avatar')+'">') : $('#avatar_container').html('<img width="75" heigth="75" class="img-circle_profile img_avatar_profile" src="http://weekmenu.felipecastro.com.br/img/assets/user.png">');
          (user.get('nomecompleto')) ? $('#nome_container').html('<h2 class="lbl_nome animated pulse">'+user.get('nomecompleto')+'</h2>') : $('#nome_container').html('<h2 class="lbl_nome">Usuário não encontrado</h2>');

          var ret = "";
          ret += (user.get('email')) ? '<li class="font_100 icon ion-android-mail animated pulse"> '+user.get('email')+'</li>' : '';
          ret += (user.get('blog')) ? '<li class="font_100 icon ion-android-compass animated pulse"> '+user.get('blog')+'</li>' : '';
          ret += (user.get('facebookid')) ? '<li class="font_100 icon ion-social-facebook animated pulse"> logado via facebook</li>' : '';
          if (ret.length>1) {$('#list_det_profile').html(ret);}

          $('#menu_options').html('<li class="mdl-menu__item">Editar</li>');

          ret = '      <div>';
          ret += '        <span class="menu_head_extra">17 Menus</span>';
          ret += '      </div>';
          ret += '      <div class="mdl-layout-spacer"></div>';
          ret += '      <div>';
          ret += '        <span class="menu_head_extra menu_head_extra_tempo">cadastrado a '+moment(user.createdAt).toNow(true)+'</span>';
          ret += '      </div>';
          ret += '    </div>';

          $('#menu_header_actions').html(ret);

          carregaMenusUser();
          carregaPratosUser();
          carregaColecoesUser();
        },

        error: function(object, error) {
        }
      });
    } else {

      var query = new Parse.Query(Parse.User);
      query.equalTo("ativo", true);
      query.equalTo("publico", true);
      query.equalTo("slug", slug);

      query.find({
        success: function(results) {

          var user = results[0];

          (user.get('avatar')) ? $('#avatar_container').html('<img width="75" heigth="75" class="img-circle_profile img_avatar_profile" src="'+user.get('avatar')+'">') : $('#avatar_container').html('<img width="75" heigth="75" class="img-circle_profile img_avatar_profile" src="http://weekmenu.felipecastro.com.br/img/assets/user.png">');
          (user.get('nomecompleto')) ? $('#nome_container').html('<h2 class="lbl_nome animated pulse">'+user.get('nomecompleto')+'</h2>') : $('#nome_container').html('<h2 class="lbl_nome">Usuário não encontrado</h2>');

          var ret = "";
          ret += (user.get('email')) ? '<li class="font_100 icon ion-android-mail animated pulse"> '+user.get('email')+'</li>' : '';
          ret += (user.get('blog')) ? '<li class="font_100 icon ion-android-compass animated pulse"> '+user.get('blog')+'</li>' : '';
          ret += (user.get('facebookid')) ? '<li class="font_100 icon ion-social-facebook animated pulse"> logado via facebook</li>' : '';
          if (ret.length>1) {$('#list_det_profile').html(ret);}

          $('#menu_options').html('<li class="mdl-menu__item">Editar</li>');

          ret = '      <div>';
          ret += '        <span class="menu_head_extra">17 Menus</span>';
          ret += '      </div>';
          ret += '      <div class="mdl-layout-spacer"></div>';
          ret += '      <div>';
          ret += '        <span class="menu_head_extra menu_head_extra_tempo">cadastrado a '+moment(user.createdAt).toNow(true)+'</span>';
          ret += '      </div>';
          ret += '    </div>';

          $('#menu_header_actions').html(ret);

          carregaMenusUser(user.id);
          carregaPratosUser(user.id);
          carregaColecoesUser(user.id);
        },

        error: function(object, error) {
        }
      });
    }

  } else {

    $(location).attr('href',host + 'login');
  }

}


function addLinkPlaceholder(texto, link) {

  var ret = '';

  ret =  '<div class="mdl-grid mdl-cell mdl-cell--12-col add_placeholder_div">';
  ret += '<div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">';
  ret += '  <span class="add_placeholder_inner">';
  ret += '    <h3>'+texto+' ainda :(</h3>';
  ret += '    <a href="'+host+link+'" class="icon ion-ios-plus-outline add_button"></a>';
  ret += '  </span>';
  ret += '  </div></div>';

  return ret;

}
