import { LitElement, html, property } from 'lit-element';
import Elara from './core/elara';

import './pages/index';
import './atoms/not-found';

// lazy import for polymer components
import('./polymer');

const DARK = '(prefers-color-scheme: dark)';
const LIGHT = '(prefers-color-scheme: light)';


require('matchmedia-polyfill');
require('matchmedia-polyfill/matchMedia.addListener');

class ElaraApp extends LitElement implements Elara.Element {
	public static readonly is: string = 'elara-app';

	private _onHashChangeListener: () => void;

	@property({reflect: true, type: String})
	public route: string;

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

		const darkMediaQuery = matchMedia(DARK);
		darkMediaQuery.addListener(this._queryListener);

		const lightMediaQuery = matchMedia(LIGHT);
		lightMediaQuery.addListener(this._queryListener);
		  
		this._onHashChangeListener = this._onHashChange.bind(this);
		window.addEventListener('hashchange', this._onHashChangeListener, { passive: true });
	}

	public disconnectedCallback(){
		super.disconnectedCallback();
		window.removeEventListener('hashchange', this._onHashChangeListener);
	}

	private _onHashChange(event: HashChangeEvent){
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
		this.load(route);
	}

	public load(route: string){
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
		document.body.scrollTop = 0;
				
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

			pageContent.animate(
				{
					opacity: [.5, 1],
					transform: ['scale(.95)', 'scale(1)'],
				}, 
				{ 
					duration: 600 
				}
			);
		});
	}

	private _queryListener({matches, media}){
		console.warn(media, matches);

		if(!matches) {
			return;
		}

		if(media === DARK) {
			console.warn('is dark');
		} else if (media === LIGHT) {
			console.warn('is light');
		}
	}

	public firstUpdated(){		
		const hashEvent = new HashChangeEvent('hashchange', {
			newURL: location.hash,
			oldURL: null
		});

		this._onHashChange(hashEvent);
	}
	
	public render() {
		return html`
			<style>
			:host {
            	--background-image: url('https://source.unsplash.com/collection/1727869/1366x768');
        	}
				
			.content {
				background-color: var(--elara-background);
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
				margin-right: 1em;
			}

			.content.full-width { margin: 0; padding: 0 }

			@media (min-width: 1033px){}
			</style>
			<ui-profile></ui-profile>
			<div id="content" class="content"></div>
		`;
	}

	private get content(){
		return this.shadowRoot.querySelector('#content');
	}
}

customElements.define(ElaraApp.is, ElaraApp);
