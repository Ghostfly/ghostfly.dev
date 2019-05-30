import { CSSResult } from 'lit-element';
import Root from './core/strategies/Root';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
export declare class ElaraApp extends Root {
    static readonly is: string;
    readonly loadables: string[];
    readonly bootstrap: Promise<any[]>;
    show(route: string): Promise<void>;
    menu(isHide: boolean): Promise<void>;
    firstUpdated(): void;
    static readonly styles: CSSResult[];
    readonly links: {
        route: string;
        name: string;
    }[];
    render(): import("lit-element").TemplateResult;
    private _showMenu;
    private _hideMenu;
}
