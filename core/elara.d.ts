/// <reference types="node" />
import { LitElement } from 'lit-element';
declare const Elara: {
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
    type Modes = 'day' | 'night';
    interface Element extends LitElement {
    }
    interface Root extends Elara.Element {
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
