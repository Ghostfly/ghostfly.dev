import { LitElement } from 'lit-element';

// Elara
const Elara = {
    Constants: {
        modes: {
            default: 'day' as Elara.Modes
        }
    },
    Routing: {
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
        
        mode: (): Elara.Modes => {
            return localStorage.getItem(Elara.UI.modes.localStorageKey) as Elara.Modes;
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