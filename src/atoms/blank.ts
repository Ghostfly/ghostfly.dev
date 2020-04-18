import { html, css, CSSResult } from 'lit-element';

import PureElement from '../core/strategies/Element';

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

	public render() {
        return html`
        <div></div>
        `;
    }
}
customElements.define(Blank.is, Blank);