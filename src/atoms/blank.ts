import { html, TemplateResult } from 'lit-html';
import { css, CSSResult } from 'lit-element';

import Elara from '../core/elara';
import PureElement from '../core/components/Element';

class Blank extends PureElement {
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