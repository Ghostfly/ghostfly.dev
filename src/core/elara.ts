import { LitElement } from 'lit-element';

const Elara = {
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
    export type Modes = 'day' | 'night';
    export interface Element extends LitElement {}
    export interface Root extends Elara.Element {
        askModeChange(mode: Elara.Modes): boolean;
    }
    export interface LoadableElement extends Elara.Element {
        loaded: boolean;
    }
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