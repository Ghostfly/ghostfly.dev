import { LitElement } from 'lit-element';
import Elara from './core/elara';
import './pages/index';
import './atoms/not-found';
export declare class ElaraApp extends LitElement implements Elara.Element {
    static readonly is: string;
    private _onHashChangeListener;
    route: string;
    /**
     * Create the render root
     */
    protected createRenderRoot(): ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onHashChange;
    load(route: string): void;
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
    private readonly loadableElements;
    readonly bootstrap: Promise<any[]>;
    private _showLink;
    private _showMenu;
    private _hideMenu;
    private readonly content;
    private readonly menu;
}
