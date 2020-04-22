import Root from './core/strategies/Root';
import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
export declare class ElaraApp extends Root {
    static readonly is: string;
    get loadables(): any[];
    get bootstrap(): Promise<any[]>;
    show(route: string): Promise<void>;
    menu(isHide: boolean): Promise<void>;
    firstUpdated(): void;
    get links(): {
        route: string;
        name: string;
    }[];
    render(): import("lit-element").TemplateResult;
    private _showMenu;
    private _hideMenu;
}
declare global {
    interface HTMLElementTagNameMap {
        'elara-app': ElaraApp;
    }
}
