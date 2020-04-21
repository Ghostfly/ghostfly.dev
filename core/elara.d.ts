/// <reference types="node" />
import { MenuElement } from '../atoms/menu';
declare const Elara: {
    Bootstrap: {
        promise: (loadables: string[], host: HTMLElement) => Promise<any[]>;
        load: (route: string, content: HTMLElement, menu: MenuElement, menuFade: Animation) => Promise<void>;
    };
    Constants: {
        modes: {
            default: Elara.Modes;
        };
    };
    Routing: {
        redirect: (url: string, target?: string) => boolean;
        navigate: (route: string) => boolean;
        hashChange(event: HashChangeEvent): string;
    };
    UI: {
        processing: {
            /**
             * Convert a remote url to an image data-url
             *
             * @param src remote url
             */
            toDataURL(src: string): Promise<string>;
        };
        queries: {
            DARK: string;
            LIGHT: string;
        };
        modes: {
            localStorageKey: string;
        };
        typography: {
            heading: import("lit-element").CSSResult;
        };
        elara: () => Elara.Root;
        nightSwitchClick: (click: Event, host: Elara.UpdatableElement) => Promise<void>;
        toggleMode: () => boolean;
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
            captureStackTrace(targetObject: object, constructorOpt?: Function): void;
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
            captureStackTrace(targetObject: object, constructorOpt?: Function): void;
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
            captureStackTrace(targetObject: object, constructorOpt?: Function): void;
            prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
            stackTraceLimit: number;
        };
    };
};
declare namespace Elara {
    type Modes = 'day' | 'night' | null;
    interface Element extends HTMLElement {
    }
    interface Root extends Elara.Element {
        loadables: ReadonlyArray<string>;
        links: ReadonlyArray<{
            name: string;
            route: string;
        }>;
        menu(isHide: boolean): Promise<void>;
        show(route: string): Promise<void>;
        askModeChange(): void;
    }
    interface LoadableElement extends Elara.Element {
        loaded: boolean;
    }
    interface Page extends Elara.Element {
    }
    interface UpdatableElement extends HTMLElement {
        requestUpdate(name?: PropertyKey, oldValue?: unknown): Promise<unknown>;
    }
    interface InputElement extends HTMLInputElement {
        invalid: boolean;
        validate(): boolean;
    }
}
export default Elara;
