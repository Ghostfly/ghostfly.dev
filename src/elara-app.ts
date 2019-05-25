import { LitElement, html, property, css, CSSResult, TemplateResult } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import Elara from './core/elara';
import { fadeWith, pulseWith } from './core/animations';

import './pages/index';
import './atoms/not-found';

// lazy import for polymer components
import('./polymer');

export class ElaraApp extends LitElement implements Elara.Element {
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
		  
		this._onHashChangeListener = this._onHashChange.bind(this);
		window.addEventListener('hashchange', this._onHashChangeListener, { passive: true });
	}

	public disconnectedCallback(){
		super.disconnectedCallback();
		window.removeEventListener('hashchange', this._onHashChangeListener);
	}

	private async _onHashChange(event: HashChangeEvent){
		const split = event.newURL.replace(location.origin + '/', '').split('/');

		const newURL = split[0];

		let route = null;
		const defaultRoute = 'home';

		if(!newURL){
			route = defaultRoute;
		} else {
			const asked = new URL(location.origin+'/'+newURL).hash.replace('#!', '');
			route = asked ? asked : defaultRoute;
		}
		
		if(this.route === route){
			return;
		}

		this.content.innerHTML = '';
		await this.load(route);
	}

	public async load(route: string){
		const defaultTitle = 'Léonard C.';
		const titleTemplate = '%s | ' + defaultTitle;

		const Component = customElements.get('ui-' + route);

		this.route = route;
		this.content.classList.remove('full-width');

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

		if(loaded.isFullWidth === true && !this.content.classList.contains('full-width')){
			this.content.classList.add('full-width');
		} else if(!loaded.isFullWidth) {
			this.content.classList.remove('full-width');
		}
		this.content.appendChild(loaded);
		
		if(loaded instanceof NotFound){
			throw new Elara.Errors.NotFound(route);
		}
		window.scrollTo(0,0);

		if(this.menu.classList.contains('shown') && this._menuFade === null){
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
			background: var(--elara-lightgray);
			color: var(--elara-darkgray);
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

		.menu {
			position: absolute;
			top: 0;
			right: 0;
			height: 45px;
			width: 45px;
			counter-reset: menuitem;
			z-index: 0;
		}

		.menu-content {
			position: fixed;
			top: 0;
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

		.content.hidden {
			opacity: 0;
			z-index: 0;
			visibility: hidden;
		}

		.content.full-width { margin: 0; padding: 0 }

		@media (min-width: 1033px){}
		`;
	  } 

	private get _links(){
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
			<div id="menu" class="menu-content">
				<paper-icon-button class="menu" icon="close" aria-label="Close menu" @click=${this._hideMenu}></paper-icon-button>
				${repeat(this._links, (link) => this._link(link))}
			</div>
		`;
	}

	private _link({route, name}): TemplateResult {
		return html`
		<a class="item ${this.route === route ? 'active' : ''}" @click=${() => this._showLink(route)}>${name}</a>
		`;
	}

	private get loadableElements(){
		return ['ui-profile'];
	}

	public get bootstrap(){
		const loadPromises = [];
		for(const element of this.loadableElements){
			const load = new Promise((resolve) => {
				const elem = this.shadowRoot.querySelector(element) as Elara.LoadableElement;
				const config = { attributes: true };
				const observer = new MutationObserver((mutation) => {
					if(!mutation.length){ return; }
					if (mutation[0].type == 'attributes' && mutation[0].attributeName === 'loaded') {
						observer.disconnect();
						resolve();
					}
				});
				observer.observe(elem, config);
			});
			loadPromises.push(load);
		}
		
		return Promise.all(loadPromises);
	}

	private async _showLink(route: string): Promise<void> {
		location.hash = '#!'+route;
		await this._hideMenu();
	}

	private async _showMenu(): Promise<void> {
		if(this.menu.classList.contains('shown')){
			await this._hideMenu();
			return;
		}

		if(this._menuFade){
			return;
		}

		if(!this.content.classList.contains('hidden')){
			this.content.classList.add('hidden');
		}

		if(!this.menu.classList.contains('hidden')){
			this.menu.classList.add('shown');
		}

		const animation = fadeWith(300, true);
		this._menuFade = this.menu.animate(animation.effect, animation.options);
		await this._menuFade.finished;
		this._menuFade = null;
	}

	private async _hideMenu(): Promise<void> {
		if(this._menuFade){
			return;
		}

		const animation = fadeWith(300, false);
		this._menuFade = this.menu.animate(animation.effect, animation.options);

		await this._menuFade.finished;

		this.content.classList.remove('hidden');
		this.menu.classList.remove('shown');
		this._menuFade = null;
	}

	private get content(){
		return this.shadowRoot.querySelector('#content');
	}

	private get menu(){
		return this.shadowRoot.querySelector('#menu');
	}
}

customElements.define(ElaraApp.is, ElaraApp);
