import { html } from 'lit-html';
import { LitElement } from 'lit-element';

import Elara from '../elara';

class Footer extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-footer';

    public render(){
        return html`
        <style></style>
        <footer></footer>
        `;
    }
}
customElements.define(Footer.is, Footer);