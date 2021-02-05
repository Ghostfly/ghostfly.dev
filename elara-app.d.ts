import { TemplateResult } from 'lit-element';
import Root from './core/strategies/Root';
import './atoms/spinner';
import './pages/index';
import './atoms/not-found';
import './atoms/menu';
import './atoms/waves';
import './index.scss';
export declare class ElaraApp extends Root {
    static readonly is: string;
    get loadables(): string[];
    get links(): {
        route: string;
        name: string;
    }[];
    connectedCallback(): void;
    render(): TemplateResult;
    protected _showMenu(): Promise<void>;
    hideMenu(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'elara-app': ElaraApp;
    }
}
