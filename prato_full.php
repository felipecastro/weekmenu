<?php
$title = 'Week menu - Prato';
include 'header.php';
include 'head.php';
?>
      <main class="mdl-layout__content">
      	<div class="mdl-layout__tab-panel is-active">
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="dadosprato">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Ingredientes</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="ingredientes">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Instruções</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="instrucoes">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Notas</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="notas">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          </section>
        </div>


<?php
include 'footer.php';
?>
<script type="text/javascript">
$( document ).ready(function() {
  // Handler for .ready() called.
mudaSaudacao();
carregaPrato('<?php echo $_GET["id"] ?>');
});
</script>
</html>