import { MenuElement } from '../../atoms/menu';
import { LitElement } from 'lit-element';
export default class Root extends LitElement {
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
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    switchColors(): void;
    protected _onHashChange(event: HashChangeEvent): Promise<void>;
    load(route: string): Promise<void>;
}
