import Page from '../core/strategies/Page';

import '../atoms/github-work';
import '../atoms/profile';
import { html, customElement } from 'lit-element';

@customElement('ui-home')
export class Home extends Page {
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
