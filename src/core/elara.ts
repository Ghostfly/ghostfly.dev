import { LitElement } from 'lit-element';

// Elara
const Elara = {
    Constants: {
        modes: {
            default: 'day'
        }
    },
    Routing: {
        navigate: (route: string) => {
            location.hash = `#!${route}`;
        }
    },
    UI: {
        queries: {
          DARK: '(prefers-color-scheme: dark)',
          LIGHT: '(prefers-color-scheme: light)',
        },
        isDarkOS(){
            if(!window.matchMedia){
                return false;
            }
    
            return window.matchMedia(Elara.UI.queries.DARK).matches;
        },
        mode: {
            default: 'day' as Elara.Modes,
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