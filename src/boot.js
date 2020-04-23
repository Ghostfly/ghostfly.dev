// @ts-check

function makeGenericHandler(){
  const handler = document.createElement('div');
  handler.id = handler.className = 'handler';
  handler.innerHTML = '<div class="handler-content">Error detected, please reload.</div>';
  return handler;
}

function _onDomLoaded(){
  let willRemove = false;
  let handler = null;

  if(location.hash.indexOf('redirect') !== -1){
    handler = document.querySelector('#handler');
    if(handler){
      willRemove = true;
    }
  } else {
    willRemove = false;
    document.body.appendChild(makeGenericHandler());
  }

  if(willRemove && handler){
    // Remove load handler immediatly on redirect
    handler.parentElement.removeChild(handler);
  }

  const loadingPromises = [];
  const neededElements = [];

  const elara = document.querySelector('elara-app');
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  loadingPromises.push(elara.bootstrap);

  for(const elementName of neededElements){
    loadingPromises.push(customElements.whenDefined(elementName));
  }

  return Promise.all(loadingPromises).then(() => {
    if(!handler){
      handler = document.querySelector('#handler');
    }
    
    window.requestAnimationFrame(() => {
      const spinner = document.querySelector('#spinner');
      if(spinner){
        spinner.parentElement.removeChild(spinner);
      }
      if(handler){
        handler.classList.add('hidden');
        handler.parentElement.removeChild(handler);
      }
    });
  });
}

/**
 * On error, catch in a nice handler
 *
 * @param {ErrorEvent} event
 * @returns
 */
function _onGenericError(event) {
  if(event.error){ 
    console.warn('Elara error ::', event.error);
    event.preventDefault();
    event.stopPropagation();
    return; 
  }

  document.body.appendChild(makeGenericHandler());
}

function _onUnload(){
  window.removeEventListener('error', _onGenericError);
}

(() => {
  document.addEventListener('DOMContentLoaded', _onDomLoaded);
  document.addEventListener('unload', _onUnload);
  window.addEventListener('error', _onGenericError);
})();