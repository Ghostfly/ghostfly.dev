/// <reference types="node" />
import { LitElement } from 'lit-element';
import { PaperInputElement } from '@polymer/paper-input/paper-input';
declare const Elara: {
    Bootstrap: {
        promise: (loadables: string[], host: ShadowRoot) => Promise<any[]>;
    };
    Constants: {
        modes: {
            default: Elara.Modes;
        };
    };
    Routing: {
        redirect: (url: string, target?: string) => boolean;
        navigate: (route: string) => boolean;
        hashChange: (event: HashChangeEvent, currentRoute: string) => string;
    };
    UI: {
        queries: {
            DARK: string;
            LIGHT: string;
        };
        modes: {
            localStorageKey: string;
        };
        elara: () => Elara.Root;
        mode: () => Elara.Modes;
        nightSwitchClick: (click: Event, host: LitElement) => Promise<boolean>;
        applyVariablesFor: (mode: Elara.Modes) => boolean;
        hasSwitched: () => boolean;
        isSunny: () => boolean;
        dayOrNight: () => Elara.Modes;
        isDarkOS(): boolean;
    };
    Mailing: {
        contact: (fields: {
            submit: HTMLButtonElement;
            name: PaperInputElement;
            email: PaperInputElement;
            message: PaperInputElement;
            form: HTMLElement;
        }, url: string) => Promise<boolean>;
    };
    Errors: {
        GenericError: {
            new (message?: string): {
                elara: boolean;
                continue: boolean;
                reload: boolean;
                underlyingError: Error;
                name: string;
                message: string;
                stack?: string;
            };
            captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
            prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
            stackTraceLimit: number;
        };
        NotFound: {
            new (message?: string): {
                elara: boolean;
                continue: boolean;
                reload: boolean;
                underlyingError: Error;
                name: string;
                message: string;
                stack?: string;
            };
            captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
            prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
            stackTraceLimit: number;
        };
        Prototype: {
            new (message?: string): {
                elara: boolean;
                continue: boolean;
                reload: boolean;
                underlyingError: Error;
                name: string;
                message: string;
                stack?: string;
            };
            captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
            prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
            stackTraceLimit: number;
        };
    };
};
declare namespace Elara {
    type Modes = 'day' | 'night' | null;
    interface Element extends LitElement {
    }
    interface Root extends Elara.Element {
        loadables: ReadonlyArray<string>;
        links: ReadonlyArray<{
            name: string;
            route: string;
        }>;
        menu(isHide: boolean): Promise<void>;
        show(route: string): Promise<void>;
        askModeChange(mode: Elara.Modes): boolean;
    }
    interface LoadableElement extends Elara.Element {
        loaded: boolean;
    }
    interface Page extends Elara.Element {
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
