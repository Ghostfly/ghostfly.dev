import { property, html, LitElement, customElement } from 'lit-element';

import Elara from '../core/elara';

@customElement('ui-menu')
export class MenuElement extends LitElement {
    @property({type: Array, reflect: false})
    public items = [];

    @property({type: String, reflect: true})
    public route = null;

    @property({type: Boolean, reflect: true})
    public shown = false;
	
	createRenderRoot(){
		return this;
	}

	public render() {
        return html`
        <div class="menu-content ${this.shown === true ? 'shown' : ''}">
			${this.items.map(link => this._link(link))}
		</div>
        `;
    }

    private _link({route, name}) {
		return html`
		<a class="item ${this.route === route ? 'active' : ''}" @click=${() => Elara.UI.elara().show(route)}>${name}</a>
		`;
	}
}