import { LitElement, CSSResult, TemplateResult } from 'lit-element';
import Elara from './core/elara';
import './pages/index';
import './atoms/not-found';
export declare class ElaraApp extends LitElement implements Elara.Root {
    static readonly is: string;
    private _onHashChangeListener;
    route: string;
    mode: Elara.Modes;
    private _menuFade;
    askModeChange(mode: Elara.Modes): boolean;
    /**
     * Create the render root
     */
    protected createRenderRoot(): ShadowRoot;
    private _switch;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onHashChange;
    load(route: string): Promise<void>;
    firstUpdated(): void;
    static readonly styles: CSSResult;
    readonly links: {
        route: string;
        name: string;
    }[];
    render(): TemplateResult;
    private _link;
    readonly loadables: string[];
    readonly bootstrap: Promise<any[]>;
    private _showLink;
    private _showMenu;
    private _hideMenu;
    private readonly content;
    private readonly menu;
}
