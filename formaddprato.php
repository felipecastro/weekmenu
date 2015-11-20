<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
        <form action="" id="addPrato">
          <div class="mdl-card__supporting-text" style="width: inherit;">

            <div class="mdl-grid mdl-cell--12-col">
              <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                <input class="mdl-textfield__input" type="text" id="nome" name="nome" required=""/>
                <label class="mdl-textfield__label" for="nome">Nome do prato</label>
              </div>
            </div>

            <div class="mdl-grid mdl-cell--12-col">
              <!-- <h5 class="font_100">Imagens</h5> -->
              <div class="mdl-textfield mdl-js-textfield mdl-cell--12-col dropzone dz-clickable text-center img_upload" id="imgupload">
              </div>
            </div>

            <div class="mdl-grid mdl-cell--12-col cbk_ext" id="div_ext">
              <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="flg_ext">
                <input type="checkbox" id="flg_ext" class="mdl-switch__input" onchange="mudaTipo()"/>
                <span class="mdl-switch__label">Receita externa</span>
              </label>
            </div>
            <div class="mdl-tooltip" for="div_ext">
              Link para receita em outro site
            </div>

            <div class="receita_int" id="dados_receita_ext" style="display: none">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="linkprato" />
                <label class="mdl-textfield__label" for="linkprato">Endereço da receita</label>
              </div>
            </div>
            <div class="receita_int" id="dados_receita_int">
              <!-- <h5 class="font_100">Ingredientes</h5> -->
              <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                <textarea class="mdl-textfield__input" type="text" rows= "8" id="ing" name="ing"></textarea>
                <label class="mdl-textfield__label" for="ing">Ingredientes</label>
              </div>
              <!-- <h5 class="font_100">Modo de preparo</h5> -->
              <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                <textarea class="mdl-textfield__input" type="text" rows= "8" id="prep" name="prep"></textarea>
                <label class="mdl-textfield__label" for="prep">Modo de preparo</label>
              </div>
              <!-- <h5 class="font_100">Observações</h5> -->
              <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col">
                <textarea class="mdl-textfield__input" type="text" rows= "8" id="obs" name="obs"></textarea>
                <label class="mdl-textfield__label" for="obs">Observações</label>
              </div>

              <div class="mdl-grid mdl-textfield mdl-js-textfield mdl-cell--12-col cbk_ext" id="div_publico">
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="publico">
                  <input type="checkbox" id="publico" class="mdl-switch__input" checked />
                  <span class="mdl-switch__label">Receita visível como pública</span>
                </label>
              </div>
              <div class="mdl-tooltip" for="div_publico">
                Sua receita estará visível na busca e poderá ser adicionada em menus de outros usuários.
              </div>
            </div>

            <!-- <div class="mdl-textfieldx mdl-js-textfieldx mdl-cell--12-col">
            <label for="ing">Ingredientes</label>
            <textarea class="mdl-textfield__inputx" id="ingw" name="ingw"></textarea>
          </div> -->

          <div class="mdl-grid mdl-cell--12-col">
            <div class="mdl-card__actions">
              <div class="section-spacer"></div>
              <div style="float: right;">
                <!--<input id="cancel-new" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" value="Cancelar">-->
                <input id="add-new" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Salvar prato" style="margin-left: 25px;">
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
