import Page, { ElaraHelmet } from '../core/strategies/Page';

import { html, customElement, TemplateResult, query } from 'lit-element';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);

import Code from '../assets/presentation.txt';

@customElement('ui-home')
export class Home extends Page {
  public isFullWidth = false;

  @query('pre code')
  public codeBlock!: HTMLElement;

  public get head(): ElaraHelmet {
    return {
      title: 'Home',
      description: '',
      type: 'page',
      image: '',
      slug: '#!home',
    };
  }

  public connectedCallback(): void {
    super.connectedCallback();
  }

  public firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    hljs.highlightBlock(this.codeBlock);
  }

  public render(): TemplateResult {
    return html`
      <div class="home code-block">
        <div class="workbench">
          <div class="red circle"></div>
          <div class="yellow circle"></div>
          <div class="green circle"></div>
          <p class="file-name">Home.ts</p>
        </div>
        <pre><code class="typescript">${Code}</code></pre>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-home': Home;
  }
}
