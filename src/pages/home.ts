import { html, TemplateResult } from 'lit-html';
import { LitElement, CSSResult } from 'lit-element';
import Elara from '../core/elara';

import '../atoms/github-work';
import '../atoms/profile';

class Home extends LitElement implements Elara.Page {
    public static readonly is: string = 'ui-home';

    public get head(){
        return {
            title: 'Work',
            description: '',
            type: 'page',
            image: '',
            slug: '#!home'
        };
    }

    public static get styles(): CSSResult {
        return Elara.UI.typography.heading;
    }

    public render(): void | TemplateResult {
        return html`
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `;
    }
}
customElements.define(Home.is, Home);