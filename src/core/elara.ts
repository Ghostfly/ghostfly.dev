import { LitElement } from 'lit-element';
import { PaperInputElement } from '@polymer/paper-input/paper-input';

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
        queries: {
          DARK: '(prefers-color-scheme: dark)',
          LIGHT: '(prefers-color-scheme: light)',
        },

        modes: {
            localStorageKey: 'night-mode'
        },

        // Day-night handling
        elara: (): Elara.Root => {
            return document.querySelector('elara-app');
        },
        mode: (): Elara.Modes => {
            return localStorage.getItem(Elara.UI.modes.localStorageKey) as Elara.Modes;
        },
        nightSwitchClick: async (click: Event, host: LitElement): Promise<boolean> => {
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
        contact: async (fields: {
                submit: HTMLButtonElement;
                name: PaperInputElement;
                email: PaperInputElement;
                message: PaperInputElement;
                form: HTMLElement;
            }, url: string): Promise<boolean> => {
            let isValid = true;

            const check = (input: PaperInputElement) => {
                return input.validate();
            };

            // Check each
            const inputs = [fields.name, fields.email, fields.message];
            inputs.forEach((input: PaperInputElement) => check(input) ? input.invalid = false : input.invalid = true);
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
    }
};

namespace Elara {
    // UI modes
    export type Modes = 'day' | 'night' | null;

    // Element interfaces
    export interface Element extends LitElement {}
    // Elara-app public-api
    export interface Root extends Elara.Element {
        loadables: ReadonlyArray<string>;
        links: ReadonlyArray<{name: string; route: string}>;
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
}

export default Elara;