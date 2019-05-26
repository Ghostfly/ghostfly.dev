import { html, TemplateResult } from 'lit-html';
import { css, CSSResult, property } from 'lit-element';

import Elara from '../core/elara';
import { repeat } from 'lit-html/directives/repeat';
import PureElement from '../core/strategies/Element';

export class MenuElement extends PureElement {
    public static readonly is: string = 'ui-menu';

    @property({type: Array, reflect: false})
    public items = [];

    @property({type: String, reflect: true})
    public route = null;

    @property({type: Boolean, reflect: true})
    public shown = false;

    public connectedCallback(): void {
        super.connectedCallback();
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    public static get styles(): CSSResult {
        return css`
        .menu {
			position: absolute;
			top: 0;
			right: 0;
			height: 45px;
			width: 45px;
			color: var(--elara-font-color);
			counter-reset: menuitem;
			z-index: 0;
        }
        
		.menu-content {
			position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
			background-color: #000;
			padding-left: 35vw;
			color: var(--elara-lightgray);
			display: none;
			transition: opacity .4s;
		}

		.menu-content .item {
			cursor: pointer;
			position: relative;
			font-size: 5vw;
			color: var(--elara-lightgray);
			text-transform: lowercase;
			margin: 0.5rem 0;
			padding: 0 0.5rem;
			transition: color 0.3s;
			text-decoration: none;
			user-select: none;
		}

		@media (max-width: 600px){
			.menu-content .item {
				font-size: 10vw;
			}
		}

		.menu-content .item::before {
			counter-increment: menuitem;
			content: counters(menuitem, "");
			position: absolute;
			font-size: 0.85rem;
			top: 25%;
			left: -1.25rem;
			color: var(--elara-darkgray);
		}

		.menu-content .item::after {
			content: '';
			width: 100%;
			top: 50%;
			height: 6px;
			background: #f20c40;
			position: absolute;
			left: 0;
			opacity: 0;
			transform: scale3d(0,1,1);
			transition: transform 0.3s, opacity 0.3s;
			transform-origin: 100% 50%;
		}

		.menu-content .item:hover, .menu-content .item.active {
			color: #5a5a5a;
		}

		.menu-content .item:hover::after, .menu-content .item.active::after {
			opacity: 1;
			transform: scale3d(1,1,1);
		}

		.menu-content.shown {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
        `;
    }

	public render(): void | TemplateResult {
        return html`
        <div id="menu" class="menu-content ${this.shown === true ? 'shown' : ''}">
            <paper-icon-button class="menu" icon="close" aria-label="Close menu" @click=${() => Elara.UI.elara().menu(true)}></paper-icon-button>
            ${repeat(this.items, (link) => this._link(link))}
		</div>
        `;
    }

    private _link({route, name}): TemplateResult {
		return html`
		<a class="item ${this.route === route ? 'active' : ''}" @click=${() => Elara.UI.elara().show(route)}>${name}</a>
		`;
	}
}
customElements.define(MenuElement.is, MenuElement);