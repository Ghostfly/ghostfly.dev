import Page, { ElaraHelmet } from '../core/strategies/Page';

import { html, customElement, TemplateResult } from 'lit-element';

import '../atoms/github-work';

@customElement('ui-source')
export class OpenSource extends Page {
  public get head(): ElaraHelmet {
    return {
      title: 'Source',
      description: '',
      type: 'page',
      image: '',
      slug: '#!source',
    };
  }

  public render(): TemplateResult {
    return html`
      <div class="source">
        <a
          rel="noopener"
          title="Source"
          target="_blank"
          href="https://github.com/Ghostfly"
        >
          <h1>Source</h1>
        </a>

        <github-work></github-work>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-source': OpenSource;
  }
}
