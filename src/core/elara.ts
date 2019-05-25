import { LitElement } from 'lit-element';

// Elara
const Elara = {
    Constants: {
        modes: {
            default: 'day' as Elara.Modes
        }
    },
    Routing: {
        navigate: (route: string) => {
            location.hash = `#!${route}`;
        },
        hashChange: (event: HashChangeEvent, currentRoute: string) => {
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
        mode: () => {
            return localStorage.getItem(Elara.UI.modes.localStorageKey);
        },
        hasSwitched: () => {
            return Elara.UI.mode() !== null;
        },
        isSunny: () => {
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
        isDarkOS(){
            if(!window.matchMedia){
                return false;
            }
    
            return window.matchMedia(Elara.UI.queries.DARK).matches;
        },
        modes: {
            localStorageKey: 'night-mode'
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
    export type Modes = 'day' | 'night';

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