import { LitElement, CSSResult } from 'lit-element';
import Elara from './core/elara';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
export declare class ElaraApp extends LitElement implements Elara.Root {
    static readonly is: string;
    private _onHashChangeListener;
    route: string;
    private _menuFade;
    /**
     * Create the render root
     */
    protected createRenderRoot(): ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    askModeChange(mode: Elara.Modes): boolean;
    readonly loadables: string[];
    readonly bootstrap: Promise<any[]>;
    show(route: string): Promise<void>;
    menu(isHide: boolean): Promise<void>;
    load(route: string): Promise<void>;
    firstUpdated(): void;
    static readonly styles: CSSResult;
    readonly links: {
        route: string;
        name: string;
    }[];
    render(): import("lit-element").TemplateResult;
    private _showMenu;
    private _hideMenu;
    private _onHashChange;
    private readonly _content;
    private readonly _menu;
}
