$(document).ready(function() {
Parse.initialize("exBh8S9ob5zIyNPb4oLr43jGioYU1ZWmoJhWvHyX", "6BcNRShe5exO3pFtYJP4wwJ9gETZIFWlP1xeI0rA");

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '503562453134872',
      xfbml      : true,
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

mudaSaudacao();
  carregaListas();

});


function loga(){

    Parse.FacebookUtils.logIn("user_likes,email,user_groups", {
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

    Parse.FacebookUtils.logIn("user_likes,email,user_groups", {
      success: function(user) {
          if (!user.existed()) {
            console.log("User signed up and logged in through Facebook!");
          } else {
              console.log("User logged in through Facebook!");
              gotoperfil();
                    mudaSaudacao();
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
                     gotoperfil();
                    },
                   error: function(user, error) {
                        console.log("User cancelled the Facebook login or did not fully authorize.");
                              gotologin();
                    }
                  });
             }

            gotoperfil();
            mudaSaudacao();
      },
      error: function(user, error) {
          console.log("User cancelled the Facebook login or did not fully authorize.");
                gotologin();
        }
  });

mudaSaudacao();
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
            $(location).attr('href','./home');
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
    $(location).attr('href','./login');
}

function gotoperfil() {
    $(location).attr('href','./perfil');
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
                ret += '      <li class="mdl-menu__item"><a href="./login">Efetuar Login</a></li>';
                ret += '      <div class="np-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item"><a href="./signup">Criar conta</a></li>';
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
                ret += '      <div class="np-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item">Perfil</li>';
                ret += '      <li class="mdl-menu__item">Minhas listas</li>';
                ret += '      <div class="np-drawer-separator"></div>';
                ret += '      <li class="mdl-menu__item" onclick="desloga();">Sair</li>';
                ret += '    </ul>';
                //console.log(ret);
                $('#userprofile').html(ret);
                $('#userprofile-menu').html(ret);
            },
            error: function(error) {
                console.log("Error: " + error.code + " " + error.message);
                gotologin();
            }
        });

    };

    carregaListas();
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

function carregaListas(){

  if (!Parse.User.current()){

        $('#minhaslistas').html('<a class="mdl-navigation__link" href="#/novalista" ui-sref="novalista">+ nova lista</a>');

    } else {

      var ret = '';

      var myList = Parse.Object.extend("lista");
      var query = new Parse.Query(myList);
      query.equalTo("userp", { "__type": "Pointer", "className": "_User", "objectId": Parse.User.current().id });
      query.equalTo("ativa", true);
      //query.equalTo("objectId", $stateParams.prestId);
      query.descending('updatedAt');

      query.find({
        success: function(listas) {

          for (var i = 0; i < listas.length; i++) {

            var lista = listas[i];

            ret += '<a class="mdl-navigation__link" href="#/l/'+lista.id+'">'+lista.get('nome')+'</a>';
          }

          ret += '<a class="mdl-navigation__link" href="#/novalista" ui-sref="novalista">+ nova lista</a>';

          $('#minhaslistas').html(ret);

          },
          error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
          }
      });
    }
}

function carregaTimeline(){

  if (Parse.User.current()) {

    $('#menuativo').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');
    $('#menusproximos').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');
    $('#menusanteriores').html('<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>');

    var MenuAtivo = Parse.Object.extend("menu");
    var DiaMenu= Parse.Object.extend("diamenu");

    var innerQuery = new Parse.Query(MenuAtivo);

    innerQuery.equalTo("owner", Parse.User.current().id);
    innerQuery.equalTo("ativo", true);
    innerQuery.descending("createdAt");

    var d = new Date();
    innerQuery.lessThanOrEqualTo("dtsugerida", d);
    innerQuery.greaterThanOrEqualTo("dtfim", d);

    var query = new Parse.Query(DiaMenu);

    //query.equalTo("menu", menu.id);
    query.matchesKeyInQuery("menu", "objectId", innerQuery);
    query.equalTo("iddia", getDiadaSemana());
    query.equalTo("ativo", true);
    query.include("menup");
    query.include("pratop");
    //query.ascending("menup");

    query.find({
      success: function(results) {

        var ctr = [];
        var ret = '';
        $('#menuativo').html('');

        if (results.length>0){

          for (var i = 0; i < results.length; i++) {

            var menu = results[i].attributes.menup;
            var prato = results[i].attributes.pratop;

            if (ctr.indexOf(menu.id) < 0) {
              ctr.push(menu.id);

              ret = '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-400 mdl-color-text--white menuativo-card" style="margin-top: 2px;" id="card-prato_'+menu.id+'">';
              ret += '<div class="mdl-card__supporting-text menudia">';
              ret += '<span class="font_100">Hoje é dia de </span>';
              ret += '<h3 id="pratodesc_'+menu.id+'">Nenhum prato :(</h3>';
              ret += '</div>';
              ret += '<div class="mdl-card__actions">';
              ret += '<a href="./m/'+menu.id+'" class="mdl-button">Menu '+menu.get('nome')+'</a>';
              ret += '</div>';
              ret += '</div>';
              ret += '<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon more_dia" id="btn'+menu.id+'">';
              ret += '<i class="material-icons">more_vert</i>';
              ret += '</button>';
              ret += '<ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn'+menu.id+'">';
              ret += '<li class="mdl-menu__item">Detalhes</li>';
              ret += '<li class="mdl-menu__item">Não estou fazendo</li>';
              ret += '<li class="mdl-menu__item">Editar</li>';
              ret += '</ul>';

              $('#menuativo').append(ret);
              $('#pratodesc_'+menu.id).html(prato.get("nome"));
            } else {
              $('#pratodesc_'+menu.id).append(', '+prato.get("nome"));
            }

          };
          
        } else {$('#menuativo').html('<div class="alert alert-danger" role="alert">Não foi possível retornar dados</div>')};

      },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

      var MenusProx = Parse.Object.extend("menu");
      var queryProx = new Parse.Query(MenusProx);
      queryProx.equalTo("owner", Parse.User.current().id);
      queryProx.equalTo("ativo", true);

      var dp = new Date();
      queryProx.greaterThan("dtsugerida", dp);

      queryProx.ascending("dtsugerida");

      queryProx.find({
          success: function(results) {

            var dados = '';

            //console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';
            //dados = '<div class="mdl-card mdl-cell mdl-cell--12-col table-container">';
            //dados += '<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col">';
            //dados += '  <tbody>';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Não foi possível retornar dados</div>'};

            for (var i = 0; i < results.length; i++) {

              var menu = results[i];


              /*dados += '<tr>';
              dados += '  <th class="mdl-data-table__cell--non-numeric table_link" href="./m/'+menu.id+'" width="80%">'+menu.get('nome')+'</th>';
              dados += '  <th class="mdl-data-table__cell--non-numeric table_link" href="./m/'+menu.id+'" style="min-width: 10%;"><span id="dadosextras_'+menu.id+'"></span></th>';
              dados += '  <th class="mdl-data-table__cell--non-numeric table_link" href="./m/'+menu.id+'" style="min-width: 15%;"><span>daqui a '+moment(menu.get('dtsugerida')).fromNow(true)+'</span></th>';
              dados += '</tr>';*/
              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list" href="./m/'+menu.id+'">';
              dados += '    <div class="mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_title">';
              dados += menu.get('nome');
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-cell mdl-cell--1-col-desktop mdl-cell--6-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_extra">';
              dados += '        <span id="dadosextras_'+menu.id+'"></span>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_extra">';
              dados += '        <span>daqui a '+moment(menu.get('dtsugerida')).fromNow(true)+'</span>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-cell mdl-cell--1-col-desktop mdl-cell--6-col-tablet mdl-cell--1-col-phone mdl-color-text--grey-700 menu-list_action">';
              dados += '      <button id="list_action_'+menu.id+'" class="mdl-button mdl-js-button mdl-button--icon">';
              dados += '        <i class="material-icons">more_vert</i>';
              dados += '      </button>';
              dados += '    </div>';
              dados += '    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="list_action_'+menu.id+'">';
              dados += '      <li class="mdl-menu__item">Some Action</li>';
              dados += '      <li class="mdl-menu__item">Another Action</li>';
              dados += '      <li disabled class="mdl-menu__item">Disabled Action</li>';
              dados += '      <li class="mdl-menu__item">Yet Another Action</li>';
              dados += '    </ul>';

              dados += '  </div>';

              getDadosExtraMenu(menu.id);
            }

            //dados += '</tbody>';
            //dados += '</table>';

            dados += '</div>';

            $('#menusproximos').html(dados);

            Array.prototype.forEach.call(document.querySelectorAll('.menus_list'), function(el) {
              /*var link = el.querySelector('th');
              console.log(link);
              if(!link) {
                return;
              }*/
              var target = el.getAttribute('href');
              if(!target) {
                return;
              }
              el.addEventListener('click', function() {
                location.href = target;
              });
            });

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });

      var MenusAnt = Parse.Object.extend("menu");
      var queryAnt = new Parse.Query(MenusAnt);
      queryAnt.equalTo("owner", Parse.User.current().id);
      queryAnt.equalTo("ativo", true);

      var da = new Date();
      queryAnt.lessThan("dtfim", da);

      queryAnt.descending("dtsugerida");

      queryAnt.find({
          success: function(results) {

            var dados = '';

            //console.log(results);

            dados =  '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';

            if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Não foi possível retornar dados</div>'};

            for (var i = 0; i < results.length; i++) {

              var menu = results[i];

              dados += '  <div class="mdl-grid mdl-grid--no-spacing menus_list" href="./m/'+menu.id+'">';
              dados += '    <div class="mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_title">';
              dados += menu.get('nome');
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_extra">';
              dados += '        <span id="dadosextras_'+menu.id+'"></span>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '    <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone mdl-color-text--grey-700">';
              dados += '      <div class="mdl-card__supporting-text list_extra">';
              dados += '        <span>encerrado a '+moment(menu.get('dtfim')).toNow(true)+'</span>';
              dados += '      </div>';
              dados += '    </div>';
              dados += '  </div>';

              getDadosExtraMenu(menu.id);
            }

            dados += '</div>';

            $('#menusanteriores').html(dados);

            Array.prototype.forEach.call(document.querySelectorAll('.menus_list'), function(el) {
              var target = el.getAttribute('href');
              if(!target) {
                return;
              }
              el.addEventListener('click', function() {
                location.href = target;
              });
            });

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

    $('.btn-add-menu').click(function(){
        $(location).attr('href','http://weekmenu.felipecastro.com.br/menu/novo');
      });

  } else {

      var Servicos = Parse.Object.extend("servico");
      var query = new Parse.Query(Servicos);
      query.equalTo("ativo", true);
      query.include("cadastropor");
      query.include("fornecp");
      query.descending('updatedAt');
      query.limit(10);

      query.find({
          success: function(results) {

              console.log(results);

              var dados = '';

              dados += '<div class="mdl-cell mdl-cell--12-col">';
              dados += '<h4>Atualizados recentemente</h4>';
              //dados += '<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" data-upgraded=",MaterialButton,MaterialRipple">';
              //dados += '<i class="material-icons">more_vert</i>';
              //dados += '<span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 92.5096679918781px; height: 92.5096679918781px; -webkit-transform: translate(-50%, -50%) translate(10px, 22px); transform: translate(-50%, -50%) translate(10px, 22px);"></span></span></button>';
              dados += '</div>';

              //var linkimage = 'http://naplanta.imagefly.io/w_300,h_155,f_png/http://naplanta.felipecastro.com.br';
              //var linkavatar = 'http://naplanta.imagefly.io/w_30,h_30,f_png/http://naplanta.felipecastro.com.br';

              if (results.length<1){dados = '<div class="alert alert-danger" role="alert">Não foi possível retornar dados</div>'};

              for (var i = 0; i < results.length; i++) {
                      var servico = results[i];
                      //var fornec = results[i].attributes.fornecp;

                      var user = results[i].attributes.cadastropor;
                      var fornec = results[i].attributes.fornecp;

                      var linkimage = 'http://naplanta.imagefly.io/w_800,h_300,f_png/http://naplanta.felipecastro.com.br'+encodeURI(servico.get("capa"));
                      //var linkavatar = 'http://naplanta.imagefly.io/w_180,h_180,f_png/http://naplanta.felipecastro.com.br'+encodeURI(servico.get("avatar"));
                      var linkavatar = user.get("avatar");


                      dados += '<div class=" mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp np-card-square">';
                      dados += '<div class="mdl-card__title mdl-card--expand" style="background: url('+linkimage+') no-repeat center center;-webkit-background-size: cover;">';

                      dados += '<h3 class="mdl-card__title-text" style="text-shadow: 1px 1px 1px #000;"><img src="'+linkavatar+'" class="img-circle">'+user.get('nomecompleto')+'</h3>';
                      dados += '</div>';
                      dados += '<div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">';
                      dados += '<div><h5>'+servico.get('desc')+'</h5></div>';
                      dados += '<div class="section-spacer"></div>';
                      dados += '<div class="meta__favorites"><span id="nota'+servico.id+'">'+servico.get('nota')+'</span> <i class="material-icons actbutton">mood</i></div>';
                      dados += '<div class="mdl-tooltip" for="nota'+servico.id+'">Nota do serviço</div>';
                      dados += '<div class="meta__favorites"><span id="qtdfavoritos">12</span> <i class="material-icons actbutton">favorite</i></div>';
                      dados += '</div>';
                      dados += '<div class="mdl-card__actions mdl-card--border">';
                      dados += '<a href="#/servico/'+servico.id+'" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">';
                      dados += 'Veja mais';
                      dados += '</a>';
                      dados += '</div>';
                      dados += '</div>';
                  }


                  $('#timeline').html(dados);

        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
            console.log("Erro: " + error.message);
        }
      });
  }
}

function carregaLista(listaid) {

  var Lista= Parse.Object.extend("lista");
  var lista = new Parse.Query(Lista);
  lista.equalTo("ativa", true);

  lista.get(listaid, {
      success: function(lista) {

      // detalhes lista
      var dados = '<div class="mdl-cell mdl-cell--12-col"><h2>Não há dados</h2></div>';

      var linklogo = 'http://naplanta.imagefly.io/w_30,h_30,f_png/http://naplanta.felipecastro.com.br';

      var ServicosList= Parse.Object.extend("listaservico");
      var Servicos = Parse.Object.extend("servico");

      var querySL = new Parse.Query(ServicosList);
      querySL.equalTo("lista", listaid);
      querySL.equalTo("ativa", true);

      var servicos = new Parse.Query(Servicos);
      servicos.matchesKeyInQuery('objectId', 'servico', querySL);
      //servicos.equalTo("ativa", true);
      servicos.include("cadastropor");
      servicos.include("fornecp");
      servicos.descending('updatedAt');

      servicos.find({
          success: function(results) {

              dados = '<div class="mdl-cell mdl-cell--12-col"><h2>'+lista.get("nome")+'</h2></div>';
              //console.log(results.length);

              for (var i = 0; i < results.length; i++) {
                      var servico = results[i];

                      var cliente = servico.get("cadastropor");
                      var fornec = servico.get("fornecp");

                      var linkimage = 'http://naplanta.imagefly.io/w_800,h_300,f_png/http://naplanta.felipecastro.com.br'+encodeURI(servico.get("capa"));
                      var linkavatar = 'http://naplanta.imagefly.io/w_180,h_180,f_png/http://naplanta.felipecastro.com.br'+encodeURI(cliente.get("avatar"));

                      dados += '<div class=" mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp np-card-square">';
                      dados += '<div class="mdl-card__title mdl-card--expand" style="background: url('+linkimage+') no-repeat center center;-webkit-background-size: cover;">';

                      dados += '<h3 class="mdl-card__title-text" style="text-shadow: 1px 1px 1px #000;"><img src="'+linkavatar+'" class="img-circle">'+cliente.get('nomecompleto')+'</h3>';
                      dados += '</div>';
                      dados += '<div class="mdl-card__supporting-text">';
                      dados += '<h5>'+servico.get('desc')+'</h5>';
                      dados += '</div>';
                      dados += '<div class="mdl-card__actions mdl-card--border">';
                      dados += '<a href="#/servico/'+servico.id+'" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">';
                      dados += 'Veja mais';
                      dados += '</a>';
                      dados += '</div>';
                      dados += '</div>';
                  }

               $('#listservicos').html(dados);


          },
          error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
          }
      });
      //

      },
      error: function(error) {
              console.log("Error: " + error.code + " " + error.message);
              $state.go('home');
      }
  });
}

function carregaServico(servicoid){

  var ret;
  var Servico= Parse.Object.extend("servico");
  var query = new Parse.Query(Servico);
  query.include("fornecp");
  query.include("cadastropor");

  query.get(servicoid, {
      success: function(servico) {

          var fornec = servico.attributes.fornecp;
          var cliente = servico.attributes.cadastropor;
          var qtdrealizados = 0;
          var qtdfavoritos = 0;

          var linkimage = encodeURI('http://naplanta.imagefly.io/w_1200,f_png/http://naplanta.felipecastro.com.br'+servico.get("capa"));
          var linkavatar = encodeURI('http://naplanta.imagefly.io/w_800,f_png/http://naplanta.felipecastro.com.br'+fornec.get("logo"));
          var linkuseravatar = encodeURI('http://naplanta.imagefly.io/w_60,h_60,f_png/http://naplanta.felipecastro.com.br'+cliente.get("avatar"));

          ret =  '<div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">';
          ret += '    <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url('+linkimage+');">';
          ret += '        <h3>'+servico.get("desc")+'</h3>';
          ret += '    </div>';
          ret += '    <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">';
          ret += '        <div class="minilogo" style="background-image: url('+linkuseravatar+'); background-size: 100%;"></div>';
          ret += '        <div>';
          ret += '            <strong>'+cliente.get("nomecompleto")+'</strong>';
          ret += '            <span>em '+servico.createdAt.getDate()+'/'+servico.createdAt.getMonth()+'/'+servico.createdAt.getFullYear()+'</span>';
          ret += '        </div>';
          ret += '        <div class="section-spacer"></div>';
          ret += '        <div class="meta__favorites"><span id="qtdfavoritos">0</span> <button onclick="tooglefav(\''+servicoid+'\');" class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons actbutton" id="fav">favorite</i></button></div>';
          ret += '        <div><i class="material-icons">share</i></div>';
          ret += '        <button id="servico-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">';
          ret += '            <i class="material-icons">more_vert</i>';
          ret += '        </button>';
          ret += '        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="servico-menu-lower-right">';
          ret += '            <li class="mdl-menu__item">Editar</li>';
          ret += '            <li class="mdl-menu__item">Reportar abuso</li>';
          ret += '        </ul>';
          ret += '    </div>';
          ret += '</div>';
          ret += '<div class=" mdl-cell mdl-cell--3-col mdl-card mdl-shadow--4dp fornec-card" style="background-image: url('+linkavatar+');">';
          ret += '    <div class="mdl-card__title mdl-card--expand"></div>';
          ret += '    <div class="mdl-card__actions">';
          ret += '        <a href="#/prest/'+fornec.id+'"><span class="fornec-card-image_nome">'+fornec.get("nome")+' <i class="material-icons">arrow_forward</i></span></a>';
          ret += '    </div>';
          ret += '</div>';
          ret += '<div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">';
          ret += '    <div class="mdl-color-text--grey-700 mdl-card__supporting-text">';
          ret += '        <p>'+servico.get("resumo")+'</p>';
          ret += '    </div>';
          ret += '</div>';

          // dados adicionais
          ret +=  '<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col card-specs">';
          ret += '    <div class="mdl-card__title mdl-card--expand">';
          ret += '        <h4>R$ '+servico.get('preco')+'</h4>';
          ret += '    </div>';
          ret += '    <div class="mdl-card__actions mdl-card--border">';
          ret += '        <p>';
          ret += '            Preço médio';
          ret += '        </p>';
          ret += '    </div>';
          ret += '</div>';
          ret +=  '<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col card-specs">';
          ret += '    <div class="mdl-card__title mdl-card--expand">';
          ret += '        <h4>'+servico.get('reputacao')+'</h4>';
          ret += '    </div>';
          ret += '    <div class="mdl-card__actions mdl-card--border">';
          ret += '        <p>';
          ret += '            Nota média';
          ret += '        </p>';
          ret += '    </div>';
          ret += '</div>';
          ret +=  '<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col card-specs">';
          ret += '    <div class="mdl-card__title mdl-card--expand">';
          ret += '        <h4 id="qtdrealizados">0</h4>';
          ret += '    </div>';
          ret += '    <div class="mdl-card__actions mdl-card--border">';
          ret += '        <p>';
          ret += '            Serviços executados';
          ret += '        </p>';
          ret += '    </div>';
          ret += '</div>';
          ret +=  '<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col card-specs">';
          ret += '    <div class="mdl-card__title mdl-card--expand">';
          ret += '        <h4>'+fornec.get("tel")+'</h4>';
          ret += '    </div>';
          ret += '    <div class="mdl-card__actions mdl-card--border">';
          ret += '        <p>';
          ret += '            Contato';
          ret += '        </p>';
          ret += '    </div>';
          ret += '</div>';

          //imagens
          /*ret += '<div>';
          ret += '<h4>Imagens</h4>';
          ret += '</div>';*/

          ret +=  '<div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col" style="min-height: 0px !important;">';
          ret += '    <div class="mdl-card__title mdl-card--expand">';
          ret += '        <h4>Imagens</h4>';
          ret += '        <div id="imagens"></div>';
          ret += '    </div>';
          ret += '</div>';

          ret += '<div>';
          ret += '<h4>Serviços executados</h4>';
          ret += '        <div class="section-spacer"></div>';
          ret += '</div>';
          ret += '        <div class="section-spacer"></div>';
          ret +=  '<div class="demo-grid-1 mdl-grid" id="negocios">';
          ret += '</div>';

          $('#dadosservico').html(ret);

          $('#resumo').html(servico.get("resumo"));

          //***** imagens
          var Images = Parse.Object.extend("fotos_servico");
          var query = new Parse.Query(Images);
          query.equalTo("servico", servicoid);
          query.equalTo("ativa", true);
          query.descending('updatedAt');

          query.find({
              success: function(imagens) {
                  // The object was retrieved successfully.
                      var dados = '<div>Nenhuma imagem cadastrada ainda</div>';

                      if (imagens.length > 0 ) {

                          dados = '<div id="links">';

                          for (var i = 0; i < imagens.length; i++) {

                              var linkimage = encodeURI('http://naplanta.imagefly.io/f_png/http://naplanta.felipecastro.com.br'+imagens[i].get("img"));
                              var linktumb = encodeURI('http://naplanta.imagefly.io/w_75,h_75,f_png/http://naplanta.felipecastro.com.br'+imagens[i].get("img"));

                              dados += '<a href="'+linkimage+'" title="'+imagens[i].get("desc")+'" data-gallery class="a-gallerry">';
                              dados += '  <img src="'+linktumb+'" alt="'+imagens[i].get("label")+'" class="img-circle img-carroussel">';
                              dados += '</a>';
                          }

                          dados += '</div>';

                      }

                      $('#imagens').html(dados);
              },
              error: function(object, error) {
                          // The object was not retrieved successfully.
                          // error is a Parse.Error with an error code and message.
              }
          });

          //***** tags
          var Tags = Parse.Object.extend("servicotags");
          var query = new Parse.Query(Tags);
          query.equalTo("servico", servicoid);
          query.equalTo("ativo", true);
          query.descending('updatedAt');

          query.find({
              success: function(tags) {
                  // The object was retrieved successfully.

                  console.log(tags);
                      var dados = '';

                      for (var i = 0; i < tags.length; i++) {

                          dados += '<p class="label label-primary">'+tags[i].get("tag")+'</p> ';
                      }

                      $('#tags').html(dados);
              },
              error: function(object, error) {
                          // The object was not retrieved successfully.
                          // error is a Parse.Error with an error code and message.
              }
          });

          //***** favoritos
          var Favs = Parse.Object.extend("userwatch");
          var query = new Parse.Query(Favs);
          query.equalTo("servico", servicoid);
          query.equalTo("ativo", true);

          query.count({
              success: function(count) {
                  qtdfavoritos = count;
                  $('#qtdfavoritos').html(qtdfavoritos);
              },
              error: function(error) {
                  // The request failed
                  qtdfavoritos = 0;
              }
          });

          var btnF = '<button onclick="tooglefav(\''+servicoid+'\');" class="btn btn-info btn-sm btn-block" role="button">Incluir em Favoritos</button >';

           if (Parse.User.current()) {

              query.equalTo("user", Parse.User.current().id);

              query.count({
                  success: function(count) {

                      if (count > 0) {
                          btnF = '<button onclick="tooglefav(\''+servicoid+'\');" class="btn btn-danger btn-sm btn-block" role="button">Remover de Favoritos</button >';
                          };

                      $('#btnFav').html(btnF);

                  },
                  error: function(error) {

                  }
              });
          } else {

              $('#btnFav').html(btnF);
          }

              },
              error: function(error) {
                      console.log("Error: " + error.code + " " + error.message);
              }
          });

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
  //console.log(el);

          var PM = Parse.Object.extend("diamenu");
          var query = new Parse.Query(PM);
          query.equalTo("menu", menuid);
          query.equalTo("ativo", true);

          query.count({
              success: function(count) {
                  $(el).html(count +' pratos ');
              },
              error: function(error) {
                  // The request failed
                  $(el).html('nenhum prato ');
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

        dados = '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--indigo-500 mdl-color-text--white">';
        dados += '<div class="mdl-card__supporting-text menudia">';
        dados += '<span class="font_100">Menu </span>';
        dados += '<h3>'+menu.get('nome')+'</h3>';
        dados += '<h4 class="font_100">'+moment(menu.get('dtsugerida')).format("dddd, D MMM")+' - '+moment(menu.get('dtfim')).format("dddd, D MMM")+'</h4>';
        dados += '</div>';
        dados += '<div class="mdl-card__actions menu_header_actions">';
        dados += '<div>por '+dono.get('nomecompleto')+'</div><div class="mdl-layout-spacer"></div><div>criado a '+moment(menu.createdAt).toNow(true)+'</div>';
        dados += '</div>';
        dados += '</div>';

        $('#dadosmenu').html(dados);


        //** carrega dias menu

        var dados_dia = '';
        var diassemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

        for (var i = 1; i < 8; i++) {

          dados_dia += '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-cell--12-col mdl-shadow--4dp">';
          dados_dia += '<header class=" mdl-cell mdl-cell--2-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">';
          dados_dia += '<span class="dia_label">'+diassemana[i-1]+'</span>';
          dados_dia += '</header>';
          dados_dia += '<div class="mdl-card mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">';
          dados_dia += '<div class="mdl-card__supporting-text">';
          //dados_dia += '<h4>Features</h4>';
          dados_dia += '<ul id="dia_menu_'+i+'"></ul>';
          dados_dia += '</div>';
          dados_dia += '<div class="mdl-card__actions">';
          dados_dia += '<a href="../prato/novo/'+menu.id+'/'+i+'" class="mdl-button">Adicionar prato</a>';
          dados_dia += '</div>';
          dados_dia += '</div>';
          dados_dia += '</section>';
        }

        $('#diasmenu').html(dados_dia);

        var DiasMenu = Parse.Object.extend("diamenu");
        var queryDia = new Parse.Query(DiasMenu);
        queryDia.equalTo("menu", menuid);
        queryDia.equalTo("owner", Parse.User.current().id);
        queryDia.equalTo("ativo", true);
        queryDia.include("menup");
        queryDia.include("pratop");
        queryDia.ascending("iddia");

        queryDia.find({
              success: function(dias) {

                  console.log(dias);

                  //var dados = '';

                  for (var i = 0; i < dias.length; i++) {

                      var dia = dias[i];
                      var prato = dia.get("pratop");

                          //dados += '<p class="label label-primary">'+tags[i].get("tag")+'</p> ';
                      $( '#dia_menu_'+dia.get("iddia") ).append( '<a href="/p/'+prato.id+'"><h5>'+prato.get("nome")+'</h5></a>' );
                  }

                  //$('#tags').html(dados);

              },
              error: function(object, error) {
                          // The object was not retrieved successfully.
                          // error is a Parse.Error with an error code and message.
              }
          });

        //** dias menu

      },
      error: function(error) {
        console.log('erro '+error.message);
              }
      });
  }

}

function getDiadaSemana() {
    var d = new Date();
    var n = d.getDay()
    return n;
}

function carregaEventos() {

  if (Parse.User.current()) {

    var Pratos = Parse.Object.extend("diamenu");
    var query = new Parse.Query(Pratos);
    query.equalTo("owner", Parse.User.current().id);
    query.equalTo("ativo", true);
    query.include("menup");
    query.include("pratop");
    query.ascending("menu");
    //query.ascending("iddia");

    query.find({
      success: function(pratos) {

        //console.log(menus);

        var eventos = [];
        var menuidctrl = '0';

        for (var i = 0; i < pratos.length; i++) {

          var ev = {};
          var prato = pratos[i].attributes.pratop;
          var menu = pratos[i].attributes.menup;

          var dtiniciomenu = moment(menu.get("dtsugerida"));
          var dtfimmenu = moment(menu.get("dtfim")).add(1, 'days');
          var dtprato = moment(menu.get("dtsugerida")).add(pratos[i].get("iddia")-1, 'days');
          ev.title = prato.get("nome");
          ev.start = dtprato;
          ev.end = dtprato;
          ev.id = pratos[i].id;
          ev.url = './m/'+menu.id+'/d/'+pratos[i].get("iddia");
          ev.allDay = true;
          ev.backgroundColor = menu.get("cat_color");
          ev.borderColor = menu.get("cat_color");
          ev.className = 'fc-event-prato';

          eventos.push(ev);

          if (menuidctrl != menu.id){

            evm = {};
            evm.title = 'Menu '+menu.get("nome");
            evm.start = dtiniciomenu;
            evm.end = dtfimmenu;
            evm.id = menu.id;
            evm.url = './m/'+menu.id;
            evm.allDay = true;
            evm.backgroundColor = menu.get("cat_color");
            evm.borderColor = menu.get("cat_color");
            evm.className = 'fc-event-menu';

            eventos.push(evm);

            menuidctrl = menu.id;
          }
        }

        console.log('events pase');
        console.log(JSON.stringify(eventos));

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

  }

}

