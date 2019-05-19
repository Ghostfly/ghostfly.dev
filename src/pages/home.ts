import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';
import Elara from '../core/elara';

import '../atoms/github-work';
import '../atoms/profile';

import './about';

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
        </style>
        <div class="work-blog-about">
            <h1>Work</h1>
            <ui-github-work></ui-github-work>
        </div>
        `;
    }
}
customElements.define(Home.is, Home);