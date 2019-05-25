import { html, TemplateResult } from 'lit-html';
import { LitElement, css, CSSResult } from 'lit-element';

import Elara from '../core/elara';

class Blank extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-blank';

    public connectedCallback(): void {
        super.connectedCallback();
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    public static get styles(): CSSResult {
        return css``;
    }

	public render(): void | TemplateResult {
        return html`
        <div></div>
        `;
    }
}
customElements.define(Blank.is, Blank);