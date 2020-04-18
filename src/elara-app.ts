import { html, css, CSSResult } from 'lit-element';

import Elara from './core/elara';
import Root from './core/strategies/Root';
import { fadeWith } from './core/animations';

import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';

// lazy import for other components
import('./vendors');

export class ElaraApp extends Root {
	public static readonly is: string = 'elara-app';

	public get loadables(){
		return [];
	}

	public get bootstrap(){
		return Elara.Bootstrap.promise(this.loadables, this);
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

	public firstUpdated(){
		const hashEvent = new HashChangeEvent('hashchange', {
			newURL: location.hash,
			oldURL: null
		});

		this._onHashChange(hashEvent);
	}

	public static get styles(): CSSResult[] {
		return [css`
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
		`];
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
			<style>
			.content {
				position: absolute;
				width: calc(100% - 25vw - 4vh - 5vw);
				right: 10px;
			}
			</style>
			<ui-profile></ui-profile>
			<mwc-icon-button id="handle" class="menu" offIcon="menu" onIcon="clear" aria-label="Menu" @click=${this._showMenu}></mwc-icon-button>
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
}

customElements.define(ElaraApp.is, ElaraApp);
