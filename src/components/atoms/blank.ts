import { html, TemplateResult } from "lit-html";
import { LitElement } from "lit-element";

import Elara from "../elara";

class Blank extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-blank';

    public connectedCallback(): void {
        super.connectedCallback();
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

	public render(): void | TemplateResult {
        return html`
        <style></style>
        <div></div>
        `;
    }
}
customElements.define(Blank.is, Blank);