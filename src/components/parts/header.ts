import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';
import Elara from '../elara';

export class Header extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-header';

    @property({type: String, reflect: true})
    public route: string;
    
    public render(): void | TemplateResult {
        return html`
        <style></style>
        <header id="header"></header>
        `;
    }
}
customElements.define(Header.is, Header);