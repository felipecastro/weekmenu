<?php
$title = 'Week menu - Prato';
include 'header.php';
include 'head_modal.php';
?>
      <main class="mdl-layout__content">
      	<div class="prato_modal">
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="dadosprato" style="margin-bottom: 0px !important;">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Ingredientes</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="ingredientes" style="margin-bottom: 0px !important;">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Instruções</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="instrucoes" style="margin-bottom: 0px !important;">
          </section>
<section class="section--center mdl-grid mdl-grid--no-spacing section-header">
        <h5 class="font_100">Notas</h5>
        </section>
<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="notas" style="margin-bottom: 0px !important;">
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