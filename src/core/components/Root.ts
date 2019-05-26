import Elara from '../elara';

import Page from './Page';
import { MenuElement } from '../../atoms/menu';
import { property } from 'lit-element';

export default class Root extends Page {
	protected _menuFade: Animation;

	@property({reflect: true, type: String})
	public route: string;

	private _onHashChangeListener: () => void;

	public connectedCallback(){
		super.connectedCallback();

		Elara.UI.applyVariablesFor(Elara.UI.dayOrNight());

		this._onHashChangeListener = this._onHashChange.bind(this);
		window.addEventListener('hashchange', this._onHashChangeListener, { passive: true });
	}

	public disconnectedCallback(){
		super.disconnectedCallback();
		window.removeEventListener('hashchange', this._onHashChangeListener);
	}
		
		/**
	 * Create the render root
	 */
	protected createRenderRoot(){
		// @tool: make elara-app in light-dom
		// return this;

		return this.attachShadow({mode: 'open'});
	}

	protected async _onHashChange(event: HashChangeEvent){
		const route = Elara.Routing.hashChange(event, this.route);
		this.route = route;

		this._content.innerHTML = '';
		await this.load(route);
	}
		
	public async load(route: string){
		return Elara.Bootstrap.load(route, this._content, this._menu, this._menuFade);
		}
		
	public askModeChange(mode: Elara.Modes): boolean {
		return Elara.UI.applyVariablesFor(mode);
	}
		
	protected get _content(): HTMLDivElement {
		return this.shadowRoot.querySelector('#content');
	}

	protected get _menu(): MenuElement {
		return this.shadowRoot.querySelector('#menu');
	}
}