import { html, TemplateResult } from 'lit-html';
import Elara, { Page } from '../core/elara';

import '../atoms/github-work';
import '../atoms/profile';

class Home extends Page implements Elara.Page {
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