import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';

import Elara from '../core/elara';

import './tree';

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

            a {
                color: var(--elara-primary);
                text-decoration: none;
                cursor: pointer;
            }
        </style>
        <div>
            <h1>You are lost !</h1>
            <p>You asked for : ${this.asked}.</p>
            <a @click=${() => { location.hash ='#!home'; }}><iron-icon icon="home"></iron-icon> Homepage</a>
            <ui-tree .width=${1366} .height=${768}></ui-tree>
        </div>
        `;
    }
}
customElements.define(NotFound.is, NotFound);