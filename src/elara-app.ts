import { LitElement, html, property } from 'lit-element';
import { styles } from './elara-app-styles';
import Elara from './components/elara';

import './pages';

// Parts
import './components/parts';

// lazy import for polymer components
import('./polymer');

class ElaraApp extends LitElement implements Elara.Element {
	public static readonly is: string = 'elara-app';

	private _onHashChangeListener: () => void;

	@property({reflect: false, type: Boolean})
	public isMobile: boolean;

	@property({reflect: true, type: String})
	public route: string;
	@property({reflect: false, type: Boolean})
	public isAnonymous: boolean;
	@property({reflect: true, type: Boolean})
	public connected: boolean;

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

	private _onHashChange(event: HashChangeEvent){
		const defaultTitle = 'Léonard C.';
		const titleTemplate = '%s | ' + defaultTitle;
		const split = event.newURL.replace(location.origin + '/', '').split('/');
		if(event.newURL.indexOf('admin') !== -1 && split[1] && this.content.innerHTML.length > 0){ return; }

		this.content.classList.add('transiting');
		const newURL = split[0];

		let route = null;
		const defaultRoute = 'index';

		if(!newURL){
			route = defaultRoute;
		} else {
			const asked = new URL(location.origin+'/'+newURL).hash.replace('#!', '');
			route = asked ? asked : defaultRoute;
		}
		
		if(this.route === route){
			this.content.classList.remove('transiting');
			return;
		}

		this.content.innerHTML = '';

		const Component = customElements.get('ui-' + route);

		window.requestAnimationFrame(() => {
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

			this.content.classList.remove('transiting');
			
			if(loaded instanceof NotFound){
				throw new Elara.Errors.NotFound(route);
			}
		});
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
			${styles}
			<div class="app">
				<ui-header .route=${this.route}></ui-header>
				<div id="content" class="content">

				</div>
				<ui-footer .connected=${null} .photoURL=${null ? null : null}></ui-footer>
			</div>
		`;
	}

	private get content(){
		return this.shadowRoot.querySelector('#content');
	}
}

customElements.define(ElaraApp.is, ElaraApp);
