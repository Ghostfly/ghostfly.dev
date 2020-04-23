import Root from './core/strategies/Root';
import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
export declare class ElaraApp extends Root {
    static readonly is: string;
    get loadables(): string[];
    get links(): {
        route: string;
        name: string;
    }[];
    render(): import("lit-element").TemplateResult;
    protected _showMenu(): Promise<void>;
    hideMenu(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'elara-app': ElaraApp;
    }
}
