import { html, customElement, TemplateResult, svg } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import Root from './core/strategies/Root';

import { fadeWith } from './core/animations';

import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
import './atoms/waves';

// lazy import for other components
import(/* webpackChunkName: "mwc" */ './vendors');

import './index.scss';

@customElement('elara-app')
export class ElaraApp extends Root {
  public static readonly is: string = 'elara-app';

  public get loadables(): string[] {
    return [];
  }

  public get links(): { route: string; name: string }[] {
    return [
      { route: 'home', name: 'Home' },
      // { route: 'about', name: 'About' },
      { route: 'projects', name: 'Projects' },
      { route: 'source', name: 'Source' },
      { route: 'contact', name: 'Contact' },
    ];
  }

  public connectedCallback(): void {
    super.connectedCallback();
    if (document.body.classList.contains('night')) {
      this._mode = 'night';
      this.requestUpdate();
    }
  }

  public render(): TemplateResult {
    return html`
      <div class="header">
        <mwc-icon-button
          id="handle"
          class="menu"
          icon="menu"
          aria-label="Menu"
          @click=${this._showMenu}
        ></mwc-icon-button>
        <a href="#!home" class="logo" title="Léonard C. | Full-stack developer">
          ${this._ninja}
        </a>
        <wave-shape
          class="waves"
          position="bottomWave"
          target=".header"
        ></wave-shape>
      </div>
      <div class="content-wrap">
        <main id="content" class="content"></main>
        <div class="footer">
          <nav class="breadcrumbs">
            <div class="breadcrumbs-wrapper">
              ${repeat(this.links, (link) => {
                return html`
                  <a
                    href="#!${link.route}"
                    class="breadcrumb ${this.route === link.route
                      ? 'active'
                      : ''}"
                    >${link.name}</a
                  >
                `;
              })}
            </div>
          </nav>
          <div class="night-switch">
            <mwc-formfield label="Mode">
              <mwc-switch
                .checked=${this._mode === 'day'}
                @change=${async () => {
                  const current = this.switchColors();
                  this._mode = current.day ? 'day' : 'night';
                }}
              ></mwc-switch>
            </mwc-formfield>
            <span class="font-color"
              >&copy; Léonard C. | ${new Date().getFullYear()}</span
            >
          </div>
        </div>
      </div>

      <ui-menu id="menu" .items=${this.links} .route=${this.route}></ui-menu>
    `;
  }

  protected async _showMenu(): Promise<void> {
    if (this._menu.shown) {
      await this.hideMenu();
      return;
    }

    if (this._menuFade) {
      return;
    }

    if (!this._content.classList.contains('hidden')) {
      this._content.classList.add('hidden');
    }

    if (this._menu.shown === false) {
      this._menu.shown = true;
    }

    const animation = fadeWith(300, true);
    this._menuFade = this._menu.animate(animation.effect, animation.options);
    await this._menuFade.finished;
    this._menuFade = null;
  }

  public async hideMenu(): Promise<void> {
    if (this._menuFade) {
      return;
    }

    const animation = fadeWith(300, false);
    this._menuFade = this._menu.animate(animation.effect, animation.options);

    await this._menuFade.finished;

    this._content.classList.remove('hidden');
    this._menu.shown = false;
    this._menuFade = null;
  }

  private get _ninja() {
    return svg`
    <svg class="ninja" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.73 722.04">
        <path class="ninja-color"
            d="M489.1,25.8c-16.12-2-23,16.42-36.57,15.47-35-6-35.28,14.27-64.49,23.42-12.36-10.68,13.66-51,35.24-54,9.82-31-51.23,12.31-48.62,46.58-22.32,24.82-47.83,10.29-21-16.33-2-18.27-15.89,1.52-20.39,8.42-37.58,153.49-22.83-11.61-165.74,82.15-33,26.35-71.76,73.33-55.69,117.19,2.19,6.57,21.05,19.93,6.89,22.25C-35.5,319-23.86,452.07,64.9,328.75,153.52,346.46-6.51,716.51,31.71,722c203-211.16,104.11-183,316.45,0,35.51-18.3-22-91.71-23.42-128.76-31.16-142.49,38-143.88,30-206.95,0,0-6.63-78.94-43.59-92.45-6.2-2.27-7.14-6.94-1.23-10.13,43.85-35.74,60.63-97.08,27.36-142,27.55,9.23,91.45,4.68,104.58-23.4-5.43.17-97.15,33.31-82.05,12.85,15.89-7.32,26.68-26.19,46.53-21.92C442.23,103.7,386.42,92,474.9,73.4c-64.84-21.48-55,35.29-76.52,24.41-7.81-4.65-36.9,28.58-29.07,6.54,23.45-8.88,10.74-24.8,21-28.09,20.55-2.9,30.39-25.5,52.59-23.66,22.66,6.5,33.55-17.39,54.68-15C505.64,35.49,496.65,23.36,489.1,25.8ZM279.58,226.43c-17,45.92-109.46,41.51-117.29-7.64C168.42,158.48,252,222.93,279.58,226.43Zm30.06,168.81c0,103.56-37.77,11.86-31.92,70.5.35,3.53-112.39-37-112.39-37,18.71-41.55,28.46-65.29,28.46-65.29Zm21.3-288.83c-7.46,3-.54-11.17,1.49-14.14,3.55-3.29,4.35,5,7.37,6.26C345.34,104.78,333.35,102.86,330.94,106.41Zm27.55,14.17c-4.84,9.83-10.77,9.54-21.07,6.39C343.71,123.66,361.24,103.15,358.49,120.58ZM354.73,88.4c7.74-9.53,20-20.29,23.29-2.13C373.05,93.48,354.73,100.72,354.73,88.4Z" />
        <path class="ninja-color" d="M187.34,569c-1.25-.91,6.82,6,12.36,10.66C196.08,576.26,193,573.8,187.34,569Z" />
        <path class="ninja-color" d="M218.86,208.78c.29,19.82-30.86,19.82-30.56,0C188,189,219.15,189,218.86,208.78Z" />
        <path class="ninja-color" d="M265.65,224.06c.29,19.83-30.86,19.83-30.57,0C234.79,204.23,265.94,204.23,265.65,224.06Z" />
        <path
            class="ninja-color"
            d="M243.49,419.38a3.34,3.34,0,0,0-2.63,2.59,3.55,3.55,0,0,0,1.18,3.51l-.21.29a9.26,9.26,0,0,1-2.57,2.26,2.16,2.16,0,0,1-2.87-.18,3.88,3.88,0,0,0-3.1-.94,2.17,2.17,0,0,1-2.42-1.4,9.57,9.57,0,0,1-.55-7.05,4.47,4.47,0,0,1,2.78-3.06,3.49,3.49,0,0,1,3.44.45,11.35,11.35,0,0,0,1,.71,1.77,1.77,0,0,0,.77.23,19.88,19.88,0,0,1,2.19.06,3.77,3.77,0,0,1,2.83,2.12C243.39,419.09,243.43,419.22,243.49,419.38Z" />
        <path
            class="ninja-color"
            d="M242.26,413.46a2.93,2.93,0,0,1-1,1.7,3.41,3.41,0,0,1-2.72,1c-.55-.06-.58-.13-.38-.64a3.69,3.69,0,0,1,3.88-2.13Z" />
    </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'elara-app': ElaraApp;
  }
}
