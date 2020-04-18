import Page from '../core/strategies/Page';

import '../atoms/github-work';
import '../atoms/profile';
import { html } from 'lit-element';

class Home extends Page {
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

    public render() {
        return html`
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `;
    }
}
customElements.define(Home.is, Home);