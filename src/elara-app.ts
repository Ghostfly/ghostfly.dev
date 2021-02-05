import { html, customElement, TemplateResult } from 'lit-element';
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
        <a href="#!home" class="logo">
          // .
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
}

declare global {
  interface HTMLElementTagNameMap {
    'elara-app': ElaraApp;
  }
}
