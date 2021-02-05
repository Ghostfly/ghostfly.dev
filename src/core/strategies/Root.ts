import { MenuElement } from '../../atoms/menu';
import { property, LitElement, query } from 'lit-element';
import { load, Router, bootstrap } from '../elara';

/**
 * Abtract <*-app> component strategy
 *
 * @export
 * @abstract
 * @class Root
 * @extends {LitElement}
 */
export default abstract class Root extends LitElement {
  public router = Router();

  @property({ reflect: true, type: String })
  public route: string;

  @query('#content')
  public content: HTMLDivElement;

  @query('#menu')
  protected _menu: MenuElement;
  protected _menuFade: Animation;

  private _queries = {
    DARK: '(prefers-color-scheme: dark)',
    LIGHT: '(prefers-color-scheme: light)',
  };

  @property({ type: String, reflect: false, noAccessor: true })
  protected _mode: 'day' | 'night' = 'day';

  private _onHashChangeListener: () => void;

  public abstract get loadables(): string[];
  public abstract hideMenu(): void;
  protected abstract _showMenu(): void;

  public get bootstrap(): Promise<unknown[]> {
    return bootstrap(this.loadables, this);
  }

  /**
   * Show a page and hide menu
   *
   * @param {string} route
   * @returns {Promise<void>}
   * @memberof Root
   */
  public async show(route: string): Promise<void> {
    this.router.navigate(route);
    this.hideMenu();
  }

  public connectedCallback(): void {
    super.connectedCallback();

    const matchDark = window.matchMedia(this._queries.DARK);
    const matchLight = window.matchMedia(this._queries.LIGHT);

    if(matchDark.matches){ document.body.classList.add('night'); }
    if(matchLight.matches){ document.body.classList.add('day'); }

    matchDark.addEventListener('change', e => {
      if(e.matches){
        this._mode = 'night';
        document.body.classList.remove('day');
        document.body.classList.add(this._mode);
        this.requestUpdate('_mode');
      }
    });

    matchLight.addEventListener('change', e => {
      if(e.matches){
        this._mode = 'day';
        document.body.classList.remove('night');
        document.body.classList.add(this._mode);
        this.requestUpdate('_mode');
      }
    });

    this._onHashChangeListener = this._onHashChange.bind(this);
    window.addEventListener('hashchange', this._onHashChangeListener, {
      passive: true,
    });
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this._onHashChangeListener);
  }

  protected createRenderRoot(): this {
    return this;
  }

  /**
   * Togglee dark|light (lightswitch)
   *
   * @returns
   * @memberof Root
   */
  public switchColors(): {
    day: boolean;
    night: boolean;
  } {
    const day = document.body.classList.contains('day');
    const night = document.body.classList.contains('night');

    if (day) {
      document.body.classList.remove('day');
      document.body.classList.add('night');
    }

    if (night) {
      document.body.classList.remove('night');
      document.body.classList.add('day');
    }

    return {
      day,
      night,
    };
  }

  public firstUpdated(): void {
    const hashEvent = new HashChangeEvent('hashchange', {
      newURL: location.hash,
      oldURL: null,
    });

    this._onHashChange(hashEvent);
  }

  protected async _onHashChange(event: HashChangeEvent): Promise<void> {
    const route = this.router.hashChange(event);
    this.route = route;

    this.content.innerHTML = '';
    await this.load(route);
  }

  public async load(route: string): Promise<void> {
    this.content.scrollTop = 0;

    return load(route, this.content, this._menu, this._menuFade);
  }
}
