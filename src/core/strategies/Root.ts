import { MenuElement } from '../../atoms/menu';
import { property, LitElement, query } from 'lit-element';
import { load, Router } from '../elara';

export default class Root extends LitElement {
	public router = Router();

	@property({reflect: true, type: String})
	public route: string;

	@query('#content')
	protected _content: HTMLDivElement;

	@query('#menu')
	protected _menu: MenuElement;
	protected _menuFade: Animation;

	private _queries = {
		DARK: '(prefers-color-scheme: dark)',
		LIGHT: '(prefers-color-scheme: light)',
	};

	private _onHashChangeListener: () => void;

	public connectedCallback(){
		super.connectedCallback();

		if(window.matchMedia(this._queries.LIGHT).matches){
			document.body.classList.add('night');
		}

		if(window.matchMedia(this._queries.DARK).matches){
			document.body.classList.add('day');
		}

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

	public switchColors(){
		const isDay = document.body.classList.contains('day');
		const isNight = document.body.classList.contains('night');

		if(isDay){
			document.body.classList.remove('day');
			document.body.classList.add('night');
		}

		if(isNight){
			document.body.classList.remove('night');
			document.body.classList.add('day');
		}
	}

	protected async _onHashChange(event: HashChangeEvent): Promise<void> {
		const route = this.router.hashChange(event);
		this.route = route;

		this._content.innerHTML = '';
		await this.load(route);
	}
		
	public async load(route: string): Promise<void> {
		return load(route, this._content, this._menu, this._menuFade);
	}
}