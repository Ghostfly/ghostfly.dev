window.polymerSkipLoadingFontRoboto = true;

function dismiss(){
  const handler = document.querySelector('#handler');
  handler.parentElement.removeChild(handler);
}

function reload(){
  location.reload();
}

function makeHandler(error = null){
  const fragment = document.createElement('div');
  fragment.id = fragment.class = "handler";
  fragment.innerHTML = `
  <div class="handler" id="handler">
    ${error !== null ? `
      <h4>
        ${error.continue == true ? `
          Oops.
          ` : `
          Error detected, please reload.
          `}
      </h4>
      <p>${error.message}</p>
      <div class="actions">
        ${error.continue == true ? `<paper-button class="continue" onclick="dismiss()">Dismiss</paper-button>` : ``}
        <paper-button class="reload" onclick="reload()" raised toggles>Reload</paper-button>
      </div>
    ` : `
      <div id="spinner" class="spinner large">
        <div class="spinner-wrapper">
          <div class="rotator">
            <div class="inner-spin"></div>
            <div class="inner-spin"></div>
          </div>
        </div>
      </div>
    `}
  </div>
  `;
  return fragment;
}

(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    if(location.hash.indexOf('redirect') !== -1){
      const loader = document.querySelector('#handler');
      if(loader){
        loader.parentElement.removeChild(loader);
      }
    } else {
      document.body.appendChild(makeHandler());
    }
  });

  window.addEventListener('error', (event) => {
    if(event.error && event.error.elara === true){ 
      console.warn('Elara error ::', event.error);
      event.preventDefault();
      event.stopPropagation();
      return; 
    }
    document.body.appendChild(makeHandler(event.error));
  });

  return customElements.whenDefined('iron-image').then(() => {
      const loader = document.querySelector('#handler');
      if(!loader) return;
      window.requestAnimationFrame(() => {
        const spinner = document.querySelector('#spinner');
        if(spinner){
          spinner.parentElement.removeChild(spinner);
        }
        loader.classList.add('hidden');
        loader.parentElement.removeChild(loader);
      });
  });
})();