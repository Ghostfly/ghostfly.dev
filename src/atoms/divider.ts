import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';

import Elara from '../core/elara';

class Divider extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-divider';

	public render(): void | TemplateResult {
        return html`
        <style>
        .divider {
            border-top: 1px solid var(--elara-primary);
            text-align: center;
            border-bottom: none;
            border-left: none;
            border-right: none;
            width: 100%;
            margin-top: 5em;
        }

        .divider::after {
            content: 'X';
            display: inline-block;
            position: relative;
            top: -15px;
            padding: 0 10px;
            color: var(--elara-primary);
            font-size: 18px;
            transform: rotate(60deg);
        }
        </style>
        <hr class="divider" />
        `;
    }
}
customElements.define(Divider.is, Divider);