import { pulseWith } from './animations';
import { MenuElement } from '../atoms/menu';
import { css } from 'lit-element';

// Elara
const Elara = {
    Bootstrap: {
        promise: (loadables: string[], host: ShadowRoot) => {
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
            const defaultTitle = 'Léonard C.';
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
    },
    Constants: {
        modes: {
            default: 'day' as Elara.Modes
        }
    },
    Routing: {
        redirect: (url: string, target: string = '_blank'): boolean => {
           return !!window.open(url, target);
        },
        navigate: (route: string): boolean => {
            location.hash = `#!${route}`;
            return true;
        },
        hashChange: (event: HashChangeEvent, currentRoute: string): string | null => {
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
            
            if(currentRoute === route){
                return null;
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
                return new Promise((resolve) => {
                    const image = new Image();
                    image.crossOrigin = 'Anonymous';
                    
                    image.onload = () => {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = image.naturalHeight;
                        canvas.width = image.naturalWidth;
                        context.drawImage(image, 0, 0);
                        resolve(canvas.toDataURL('image/jpeg'));
                    };
                
                    image.src = src;
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
        mode: (): Elara.Modes => {
            return localStorage.getItem(Elara.UI.modes.localStorageKey) as Elara.Modes;
        },
        nightSwitchClick: async (click: Event, host: Elara.UpdatableElement): Promise<boolean> => {
            click.preventDefault();
            click.stopPropagation();
            const hasNightMode = !Elara.UI.isSunny();
            const future = !hasNightMode ? 'night' : 'day';
            localStorage.setItem(Elara.UI.modes.localStorageKey, future);

            await host.requestUpdate();
            
            return Elara.UI.elara().askModeChange(future);
        },
        applyVariablesFor: (mode: Elara.Modes): boolean => {
            const root = document.documentElement;

            if(mode === 'night'){
                root.style.setProperty('--elara-background-color', '#373737');
                root.style.setProperty('--elara-font-color', '#f0f0f0');
                root.style.setProperty('--elara-font-hover', '#9e9e9e');
            } else {
                root.style.removeProperty('--elara-background-color');
                root.style.removeProperty('--elara-font-color');
                root.style.removeProperty('--elara-font-hover');
            }

            return true;
        },
        hasSwitched: (): boolean => {
            return Elara.UI.mode() !== null;
        },
        isSunny: (): boolean => {
            return Elara.UI.mode() === 'day';
        },
        dayOrNight: (): Elara.Modes => {
            if(!Elara.UI.hasSwitched()){
                if(Elara.UI.isDarkOS()){
                    return 'day';
                } else {
                    return 'night';
                }
            } else {
                if(Elara.UI.isSunny()){
                    return 'day';
                } else {
                    return 'night';
                }
            }
        },
        isDarkOS(): boolean {
            if(!window.matchMedia){
                console.warn('Elara:: Night mode not supported at the moment');

                return false;
            }
    
            return window.matchMedia(Elara.UI.queries.DARK).matches;
        }
    },
    Mailing: {
        error: 'An error occured, please retry later. 😔',
        success: 'Thanks for your message ! I will try to reply as soon as possible 😀',
        contact: async (fields: {
                submit: HTMLButtonElement;
                name: Elara.InputElement;
                email: Elara.InputElement;
                message: Elara.InputElement;
                form: HTMLElement;
            }, url: string): Promise<boolean> => {
            let isValid = true;

            const check = (input: Elara.InputElement) => {
                return input.validate();
            };

            // Check each
            const inputs = [fields.name, fields.email, fields.message];
            inputs.forEach((input: Elara.InputElement) => check(input) ? input.invalid = false : input.invalid = true);
            inputs.forEach((input) => {
                if(input.invalid && isValid){
                    isValid = false;
                }
            });

            if(!isValid){
                return isValid;
            }
            
            // disable everyone
            fields.submit.disabled = true;
            inputs.forEach((input) => input.disabled = true);

            const formData = new FormData();
            formData.append('name', fields.name.value);
            formData.append('email', fields.email.value);
            formData.append('message', fields.message.value);

            // @tool: uncomment to disable mail sending
            // if(location.hostname.indexOf('localhost') !== -1) { form.classList.add('sended'); return; }

            // Send through Gmail

            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.onreadystatechange = () => {
                    if (xhr.status === 200) {
                        fields.form.classList.add('sended');
                        resolve(true);
                    }
                };
                xhr.onerror = () => {
                    reject(false);
                };
                xhr.send(formData);
            });
        }
    },
    Errors: {
        GenericError: class GenericError extends Error {
            public elara: boolean = false;
            public continue: boolean = true;
            public reload: boolean = true;
            public underlyingError: Error;
        },
        NotFound: class NotFound extends Error {
            public elara: boolean = true;
            public continue: boolean = true;
            public reload: boolean = false;
            public underlyingError: Error;
        },
        Prototype: class PrototypeError extends Error {
            public elara: boolean = false;
            public continue: boolean = true;
            public reload: boolean = false;
            public underlyingError: Error;
        }
    },
    Colors: {
        social: {
            github: '#24292e',
            twitter: '#1da1f2',
            youtube: '#ff0000',
            linkedin: '#0073b0',
            facebook: '#3b5998',
            instagram: '#333',
            medium: '#3CB371'
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
        askModeChange(mode: Elara.Modes): boolean;
    }

    // Loadable element
    export interface LoadableElement extends Elara.Element {
        loaded: boolean;
    }

    // Page with helmet
    export interface Page extends Elara.Element {
        head: {
            title: string;
            description: string;
            type: string;
            image?: string;
            slug: string;
        };
    }

    export interface UpdatableElement extends HTMLElement {
        requestUpdate(name?: PropertyKey, oldValue?: unknown): Promise<unknown>;
    }

    export interface InputElement extends HTMLInputElement {
        invalid: boolean;
        validate(): boolean;
    }
}

export default Elara;