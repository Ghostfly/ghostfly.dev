import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';
import Elara from '../components/elara';

class Index extends LitElement implements Elara.Page {
    public static readonly is: string = 'ui-index';

    public get head(){
        return {
            title: 'Accueil',
            description: '',
            type: 'page',
            image: '',
            slug: '#!home'
        };
    }

    public render(): void | TemplateResult {
        return html`
        <style>
        </style>
        <div>

        </div>
        `;
    }
}
customElements.define(Index.is, Index);