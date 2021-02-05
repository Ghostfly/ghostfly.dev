/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-check

function _onDomLoaded() {
  const loadingPromises = [];
  const neededElements = [];

  const elara = document.querySelector('elara-app');
  // @ts-ignore
  loadingPromises.push(document.fonts.ready);
  // @ts-ignore
  loadingPromises.push(elara.bootstrap);

  for (const elementName of neededElements) {
    loadingPromises.push(customElements.whenDefined(elementName));
  }

  return Promise.all(loadingPromises).then(() => {
    window.requestAnimationFrame(() => {
      const spinner = document.querySelector('#spinner');
      if (spinner) {
        spinner.parentElement.removeChild(spinner);
      }

      const handler = document.querySelector('#handler');

      handler.classList.add('hidden');
      handler.parentElement.removeChild(handler);
    });
  });
}

(() => {
  document.addEventListener('DOMContentLoaded', _onDomLoaded);
})();
