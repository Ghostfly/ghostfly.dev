import { pulseWith } from './animations';
import { MenuElement } from '../atoms/menu';
import { css } from 'lit-element';

// Elara
const Elara = {
    Bootstrap: {
        promise: (loadables: string[], host: HTMLElement) => {
            const loadPromises = [];
            for(const element of loadables){
                const load = new Promise((resolve) => {
                    const elem = host.querySelector(element) as Elara.LoadableElement;
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
        },
        load: async (route: string, content: HTMLElement, menu: MenuElement, menuFade: Animation | null) => {
            const defaultTitle = 'Léonard Cherouvrier';
            const titleTemplate = '%s | ' + defaultTitle;
    
            const Component = customElements.get('ui-' + route);
            content.classList.remove('full-width');
    
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
    
            if(loaded.isFullWidth === true && !content.classList.contains('full-width')){
                content.classList.add('full-width');
            } else if(!loaded.isFullWidth) {
                content.classList.remove('full-width');
            }
            content.appendChild(loaded);
            
            if(loaded instanceof NotFound){
                throw new Elara.Errors.NotFound(route);
            }
            window.scrollTo(0,0);
    
            if(menu.shown && menuFade === null){
                await Elara.UI.elara().menu(true);
            }
    
            const handle = window.requestAnimationFrame(() => {
                const pageContent = loaded.querySelector('div');
                if(!pageContent){
                    cancelAnimationFrame(handle);
                    return;
                }
    
                const animation = pulseWith(300);			
                pageContent.animate(animation.effect, animation.options);
            });
        }
    },
    Constants: {
        modes: {
            default: 'day' as Elara.Modes
        }
    },
    Routing: {
        redirect: (url: string, target = '_blank'): boolean => {
           return !!window.open(url, target);
        },
        navigate: (route: string): boolean => {
            location.hash = `#!${route}`;
            return true;
        },
        hashChange(event: HashChangeEvent): string | null {
            const routeWithPrefix = event.newURL.replace(location.origin + location.pathname, '');

            const routingParams = routeWithPrefix.split('#!').filter(Boolean);
            let route = null;
            if(routingParams.length === 0){
                route = routingParams.shift();
            } else {
                route = routingParams.pop();
            }

            const defaultRoute = 'home';
        
             // if same has current, no.
            if(event.oldURL === event.newURL){
                return null;
            }
        
            // If loaded component has routing, let him decide
            const current = customElements.get('ui-'+route);
            if(current && current.hasRouting === true){
                return route;
            }
        
            // if index asked, go to default or if nothing asked, go to default
            if(event.newURL === location.origin + location.pathname || !route){
                return defaultRoute;
            }
        
            return route;
         }
    },
    UI: {
        processing: {
            /**
             * Convert a remote url to an image data-url
             * 
             * @param src remote url
             */
            toDataURL(src: string): Promise<string> {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.crossOrigin = 'Anonymous';
                    image.src = src;

                    setTimeout(() => {
                        if(image.complete === false){
                            // abort image loading if exceeds 500ms : https://stackoverflow.com/questions/5278304/how-to-cancel-an-image-from-loading
                            console.warn('Elara ::: Image loading was too slow, rejecting');
                            image.src = '';
                            reject();
                        }
                    }, 1200);
                    
                    image.onload = () => {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = image.naturalHeight;
                        canvas.width = image.naturalWidth;
                        context.drawImage(image, 0, 0);
                        resolve(canvas.toDataURL('image/jpeg'));
                    };

                    image.onerror = () => {
                        reject();
                    };
                });
            }
        },
        queries: {
          DARK: '(prefers-color-scheme: dark)',
          LIGHT: '(prefers-color-scheme: light)',
        },

        modes: {
            localStorageKey: 'night-mode'
        },

        typography: {
            heading: css`h1, h2 { user-select: none; font-family: var(--elara-font-display); } h1::first-letter { font-size: 1.3em; } h2::first-letter { font-size: 1.2em }`
        },

        // Day-night handling
        elara: (): Elara.Root => {
            return document.querySelector('elara-app');
        },
        nightSwitchClick: async (click: Event, host: Elara.UpdatableElement): Promise<void> => {
            click.preventDefault();
            click.stopPropagation();
            await host.requestUpdate();
            
            Elara.UI.elara().askModeChange();
        },
        toggleMode: (): boolean => {
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

            return true;
        }
    },
    Errors: {
        GenericError: class GenericError extends Error {
            public elara = false;
            public continue = true;
            public reload = true;
            public underlyingError: Error;
        },
        NotFound: class NotFound extends Error {
            public elara = true;
            public continue = true;
            public reload = false;
            public underlyingError: Error;
        },
        Prototype: class PrototypeError extends Error {
            public elara = false;
            public continue = true;
            public reload = false;
            public underlyingError: Error;
        }
    }
};

namespace Elara {
    // UI modes
    export type Modes = 'day' | 'night' | null;
    // Element interfaces
    export interface Element extends HTMLElement {}
    // Elara-app public-api
    export interface Root extends Elara.Element {
        loadables: ReadonlyArray<string>;
        links: ReadonlyArray<{name: string; route: string}>;
        menu(isHide: boolean): Promise<void>;
        show(route: string): Promise<void>;
        askModeChange(): void;
    }

    // Loadable element
    export interface LoadableElement extends Elara.Element { loaded: boolean }

    // Page with helmet
    export interface Page extends Elara.Element {}

    export interface UpdatableElement extends HTMLElement {
        requestUpdate(name?: PropertyKey, oldValue?: unknown): Promise<unknown>;
    }

    export interface InputElement extends HTMLInputElement {
        invalid: boolean;
        validate(): boolean;
    }
}

export default Elara;