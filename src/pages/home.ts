import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';
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

    public render(): void | TemplateResult {
        return html`
        <style>
        h1 {
            font-family: var(--elara-font-display);
            user-select: none;
        }
        h1::first-letter { font-size: 1.3em; }
        </style>
        <div class="home">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `;
    }
}
customElements.define(Home.is, Home);