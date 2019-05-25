import { LitElement, html, property, css, CSSResult } from 'lit-element';

import Elara from './core/elara';
import { fadeWith, pulseWith } from './core/animations';

import './pages/index';
import './atoms/not-found';
import './atoms/menu';

import { MenuElement } from './atoms/menu';

// lazy import for polymer components
import('./polymer');

export class ElaraApp extends LitElement implements Elara.Root {
	public static readonly is: string = 'elara-app';

	private _onHashChangeListener: () => void;

	@property({reflect: true, type: String})
	public route: string;

	private _menuFade: Animation;

	/**
	 * Create the render root
	 */
	protected createRenderRoot(){
		// @tool: make elara-app in light-dom
		// return this;

		return this.attachShadow({mode: 'open'});
	}

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

	public askModeChange(mode: Elara.Modes): boolean {
		Elara.UI.applyVariablesFor(mode);
		return true;
	}

	public get loadables(){
		return ['ui-profile'];
	}

	public get bootstrap(){
		return Elara.Bootstrap.promise(this.loadables, this.shadowRoot);
	}

	public async show(route: string): Promise<void> {
		Elara.Routing.navigate(route);
		await this._hideMenu();
	}

	public async menu(isHide: boolean): Promise<void> {
		if(isHide){
			return this._hideMenu();
		} else {
			return this._showMenu();
		}
	}

	public async load(route: string){
		const defaultTitle = 'Léonard C.';
		const titleTemplate = '%s | ' + defaultTitle;

		const Component = customElements.get('ui-' + route);

		this.route = route;
		this._content.classList.remove('full-width');

		const NotFound = customElements.get('ui-not-found');

		// @tool : disable shadow-root on pages
		/* Component.prototype.createRenderRoot = function() {
			return this;
		};*/

		const loaded = Component ? new Component() : new NotFound(route);

		if(loaded.head && loaded.head.title){
			document.title = titleTemplate.replace('%s', loaded.head.title);
		} else {
			document.title = defaultTitle;
		}

		if(loaded.isFullWidth === true && !this._content.classList.contains('full-width')){
			this._content.classList.add('full-width');
		} else if(!loaded.isFullWidth) {
			this._content.classList.remove('full-width');
		}
		this._content.appendChild(loaded);
		
		if(loaded instanceof NotFound){
			throw new Elara.Errors.NotFound(route);
		}
		window.scrollTo(0,0);

		if(this._menu.shown && this._menuFade === null){
			await this._hideMenu();
		}

		const handle = window.requestAnimationFrame(() => {
			if(!loaded.shadowRoot){
				cancelAnimationFrame(handle);
				return;
			}

			const pageContent = loaded.shadowRoot.querySelector('div');
			if(!pageContent){
				cancelAnimationFrame(handle);
				return;
			}

			const animation = pulseWith(300);			
			pageContent.animate(animation.effect, animation.options);
		});
	}

	public firstUpdated(){		
		const hashEvent = new HashChangeEvent('hashchange', {
			newURL: location.hash,
			oldURL: null
		});

		this._onHashChange(hashEvent);
	}

	public static get styles(): CSSResult {
		return css`
		.content, .menu-content {
			background: var(--elara-background-color);
			color: var(--elara-font-color);
			display: inline-block;

			font-family: var(--elara-font-primary);
			opacity: 1;
			margin: 0;

			height: 92vh;
			width: 62vw;
			max-width: 100vw;

			padding: 4vh 3vw;
			padding-left: 33vw;
		}

		.content.hidden {
			opacity: 0;
			z-index: 0;
			visibility: hidden;
		}

		.menu {
			position: absolute;
			top: 0;
			right: 0;
			height: 45px;
			width: 45px;
			color: var(--elara-font-color);
			z-index: 0;
		}

		.content.full-width { margin: 0; padding: 0 }

		@media (min-width: 1033px){}
		`;
	  } 

	public get links(){
		return [
			{route: 'home', name: 'Work'},
			{route: 'about', name: 'About'},
			{route: 'projects', name: 'Projects'},
			{route: 'contact', name: 'Contact'}
		];
	}
	
	public render() {
		return html`
			<ui-profile></ui-profile>
			<paper-icon-button id="handle" class="menu" icon="menu" aria-label="Menu" @click=${this._showMenu}></paper-icon-button>
			<div id="content" class="content"></div>
			<ui-menu id="menu" .items=${this.links} .route=${this.route}></ui-menu>
		`;
	}

	private async _showMenu(): Promise<void> {
		if(this._menu.shown){
			await this._hideMenu();
			return;
		}

		if(this._menuFade){
			return;
		}

		if(!this._content.classList.contains('hidden')){
			this._content.classList.add('hidden');
		}

		if(this._menu.shown === false){
			this._menu.shown = true;
		}

		const animation = fadeWith(300, true);
		this._menuFade = this._menu.animate(animation.effect, animation.options);
		await this._menuFade.finished;
		this._menuFade = null;
	}

	private async _hideMenu(): Promise<void> {
		if(this._menuFade){
			return;
		}

		const animation = fadeWith(300, false);
		this._menuFade = this._menu.animate(animation.effect, animation.options);

		await this._menuFade.finished;

		this._content.classList.remove('hidden');
		this._menu.shown = false;
		this._menuFade = null;
	}

	private async _onHashChange(event: HashChangeEvent){
		const route = Elara.Routing.hashChange(event, this.route);

		this._content.innerHTML = '';
		await this.load(route);
	}

	private get _content(){
		return this.shadowRoot.querySelector('#content');
	}

	private get _menu(): MenuElement {
		return this.shadowRoot.querySelector('#menu');
	}
}

customElements.define(ElaraApp.is, ElaraApp);
