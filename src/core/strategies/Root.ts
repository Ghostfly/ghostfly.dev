import Elara from '../elara';

import { MenuElement } from '../../atoms/menu';
import { property, LitElement } from 'lit-element';

export default class Root extends LitElement {
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
	
	protected createRenderRoot(){
		return this;
	}

	protected async _onHashChange(event: HashChangeEvent){
		const route = Elara.Routing.hashChange(event);
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
		return this.querySelector('#content');
	}

	protected get _menu(): MenuElement {
		return this.querySelector('#menu');
	}
}