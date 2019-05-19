import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';

import Elara from '../elara';

import '../atoms/tree';

class NotFound extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-not-found';

    @property({type: String, reflect: true})
    public asked: string;

    public constructor(asked: string){
        super();
        this.asked = asked;
    }

	public render(): void | TemplateResult {
        return html`
		<style>
            h1, p {
                user-select: none;
                z-index: 1;
            }

            ui-tree {
                position: absolute;
                z-index: 0;
                bottom: 0;
            }

            a {
                color: var(--elara-link);
                text-decoration: none;
                cursor: pointer;
            }
        </style>
        <div>
            <h1>Page non trouvée</h1>
            <p>Vous aviez demandé à lire : ${this.asked}.</p>
        </div>
        `;
    }
}
customElements.define(NotFound.is, NotFound);