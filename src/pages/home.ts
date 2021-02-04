import Page, { ElaraHelmet } from '../core/strategies/Page';

import '../atoms/github-work';
import '../atoms/profile';
import { html, customElement, TemplateResult } from 'lit-element';

@customElement('ui-home')
export class Home extends Page {
  public get head(): ElaraHelmet {
    return {
      title: 'Work',
      description: '',
      type: 'page',
      image: '',
      slug: '#!home',
    };
  }

  public render(): TemplateResult {
    return html`
      <div class="home">
        <a
          rel="noopener"
          title="Open-source"
          target="_blank"
          href="https://github.com/Ghostfly"
        >
          <svg
            version="1.1"
            viewBox="0 0 512 512"
            style="height: 50px; width: 50px; fill: var(--elara-font-color);"
          >
            <path
              d="M256,8.144c-141.152,0-256,114.848-256,256C0,369.456,66.016,465.36,164.224,502.768c4.096,1.632,8.704,1.376,12.672-0.544c3.968-1.952,6.976-5.408,8.288-9.632l48-153.28c2.272-7.264-0.864-15.136-7.52-18.784C204.896,309.072,192,287.472,192,264.144c0-35.296,28.704-64,64-64s64,28.704,64,64c0,23.328-12.896,44.928-33.664,56.416c-6.656,3.648-9.824,11.52-7.52,18.784l48,153.28c1.312,4.224,4.32,7.68,8.288,9.632c2.208,1.056,4.608,1.6,6.976,1.6c1.92,0,3.872-0.352,5.696-1.056C446.016,465.36,512,369.456,512,264.144C512,122.992,397.152,8.144,256,8.144z"
            />
          </svg>
          Open-source
        </a>

        <github-work></github-work>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-home': Home;
  }
}
