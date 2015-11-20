<body class="mdl-wm mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
<!-- conteudo -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title"><a href="<?php host ?>/"> Week menu</a></span>
        <div class="mdl-layout-spacer"></div>
<!--         <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="<?php host ?>hoje">Hoje</a>
          <a class="mdl-navigation__link" href="<?php host ?>timeline">Timeline</a>
          <a class="mdl-navigation__link" href="<?php host ?>calendario">Calendário</a>
          <a class="mdl-navigation__link" href="<?php host ?>explorar">Explorar</a>
        </nav> -->
<nav class="mdl-navigation" id="nav_actions">
        </nav>
    </div>
    <!-- Tabs -->
<!--     <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#timeline" class="mdl-layout__tab is-active">Timeline</a>
        <a href="#calendario" class="mdl-layout__tab">Calendário</a>
        <a href="#explore" class="mdl-layout__tab">Explorar</a>
    </div> -->
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Week menu</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="<?php host ?>hoje">Hoje</a>
      <a class="mdl-navigation__link" href="<?php host ?>timeline">Timeline</a>
      <a class="mdl-navigation__link" href="<?php host ?>calendario">Calendário</a>
      <a class="mdl-navigation__link" href="<?php host ?>explorar">Explorar</a>
      <div class="wm-drawer-separator"></div>
        <a class="mdl-navigation__link" onclick="gotoperfil();">Perfil</a>
        <a class="mdl-navigation__link" onclick="desloga();">Sair</a>
    </nav>
  </div>