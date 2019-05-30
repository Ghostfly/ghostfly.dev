/// <reference types="node" />
import { MenuElement } from '../atoms/menu';
declare const Elara: {
    Bootstrap: {
        promise: (loadables: string[], host: ShadowRoot) => Promise<any[]>;
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
        hashChange: (event: HashChangeEvent, currentRoute: string) => string;
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
        mode: () => Elara.Modes;
        nightSwitchClick: (click: Event, host: Elara.UpdatableElement) => Promise<boolean>;
        applyVariablesFor: (mode: Elara.Modes) => boolean;
        hasSwitched: () => boolean;
        isSunny: () => boolean;
        dayOrNight: () => Elara.Modes;
        isDarkOS(): boolean;
    };
    Mailing: {
        error: string;
        success: string;
        contact: (fields: {
            submit: HTMLButtonElement;
            name: Elara.InputElement;
            email: Elara.InputElement;
            message: Elara.InputElement;
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
    Colors: {
        social: {
            github: string;
            twitter: string;
            youtube: string;
            linkedin: string;
            facebook: string;
            instagram: string;
            medium: string;
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
    interface UpdatableElement extends HTMLElement {
        requestUpdate(name?: PropertyKey, oldValue?: unknown): Promise<unknown>;
    }
    interface InputElement extends HTMLInputElement {
        invalid: boolean;
        validate(): boolean;
    }
}
export default Elara;
