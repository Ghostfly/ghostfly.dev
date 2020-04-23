import { html, customElement } from 'lit-element';

import Root from './core/strategies/Root';
import { fadeWith } from './core/animations';

import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';

// lazy import for other components
import(/* webpackChunkName: "mwc" */'./vendors');

@customElement('elara-app')
export class ElaraApp extends Root {
	public static readonly is: string = 'elara-app';

	public get loadables(){
		return [
			// note: on every app part thus the only loadable
			'ui-profile',
			// @tool: enforce global load
			// ''
		];
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
			<mwc-icon-button id="handle" class="menu" icon="menu" aria-label="Menu" @click=${this._showMenu}></mwc-icon-button>
			<main id="content" class="content"></main>
			<ui-menu id="menu" .items=${this.links} .route=${this.route}></ui-menu>
		`;
	}

	protected async _showMenu(): Promise<void> {
		if(this._menu.shown){
			await this.hideMenu();
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

	public async hideMenu(): Promise<void> {
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

declare global {
	interface HTMLElementTagNameMap {
		'elara-app': ElaraApp;
	}
}