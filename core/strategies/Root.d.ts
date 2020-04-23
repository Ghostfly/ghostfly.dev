import { MenuElement } from '../../atoms/menu';
import { LitElement } from 'lit-element';
export default abstract class Root extends LitElement {
    router: {
        redirect: (url: string, target?: string) => boolean;
        navigate: (route: string) => boolean;
        hashChange(event: HashChangeEvent): string;
    };
    route: string;
    protected _content: HTMLDivElement;
    protected _menu: MenuElement;
    protected _menuFade: Animation;
    private _queries;
    private _onHashChangeListener;
    abstract get loadables(): string[];
    protected abstract _hideMenu(): void;
    protected abstract _showMenu(): void;
    get bootstrap(): Promise<any[]>;
    show(route: string): Promise<void>;
    menu(isHide: boolean): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    switchColors(): {
        day: boolean;
        night: boolean;
    };
    firstUpdated(): void;
    protected _onHashChange(event: HashChangeEvent): Promise<void>;
    load(route: string): Promise<void>;
}
