import {
  property,
  html,
  LitElement,
  customElement,
  query,
  TemplateResult,
} from 'lit-element';

import { fadeWith } from '../core/animations';
import { Elara, toDataURL, LoadableElement } from '../core/elara';

@customElement('ui-profile')
export class Profile extends LitElement implements LoadableElement {
  @property({ type: String, reflect: true })
  public route: string;

  @property({ type: Boolean, reflect: true })
  public loaded = false;

  @query('#pic')
  private picture: HTMLImageElement;
  @query('#container')
  private container: HTMLDivElement;

  private _hashChangeListener: () => void;

  public connectedCallback(): void {
    super.connectedCallback();

    this._hashChangeListener = this._onHashChange.bind(this);
    window.addEventListener('hashchange', this._hashChangeListener);
  }

  private async _onProfilePictureLoaded(event: CustomEvent): Promise<void> {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.removeEventListener('load', this._onProfilePictureLoaded);
      img.classList.add('shown');

      const animation = fadeWith(500, true);
      const fade = img.animate(animation.effect, animation.options);
      await fade.finished;
    }
  }

  public async firstUpdated(): Promise<void> {
    try {
      this.picture.addEventListener('load', this._onProfilePictureLoaded);

      const backgroundURL = await toDataURL(
        'https://source.unsplash.com/collection/1727869/1366x768'
      );
      this.container.style.backgroundImage = `url('${backgroundURL}')`;

      if (this.picture.complete) {
        await this._onProfilePictureLoaded(({
          target: this.picture,
          detail: {
            value: true,
          },
        } as unknown) as CustomEvent);
      }

      this.loaded = true;
    } catch (err) {
      // Loading to slow, cancelled.
      const fallbackURL = await toDataURL('/assets/fallback.jpeg');

      this.container.style.backgroundImage = `url('${fallbackURL}')`;
      this.loaded = true;
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();

    window.removeEventListener('hashchange', this._hashChangeListener);
  }

  private _onHashChange(event: HashChangeEvent): void {
    this.route = Elara().router.hashChange(event);
  }

  public render(): TemplateResult {
    return html`
        <div role="link" id="container" class="profile ${
          this.route === 'home' || this.route === undefined ? '' : 'is-link'
        }" @click=${() => Elara().router.navigate('home')}>
            <div class="bio">
                <div class="username">
                    <span>Léonard C. > @ghostfly</span>
                </div>
                <div class="current-job">Full-stack Developer</div>
                <div class="where">
                    <span>Nice, France</span>
                    <br />
                    <span>Focusing 🎯</span>
                </div>
            </div>
            <div id="overlay"></div>
        </div>
        `;
  }

  public createRenderRoot(): this {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-profile': Profile;
  }
}
