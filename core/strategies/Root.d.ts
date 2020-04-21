import Elara from '../elara';
import { MenuElement } from '../../atoms/menu';
import { LitElement } from 'lit-element';
export default class Root extends LitElement {
    protected _menuFade: Animation;
    route: string;
    private _onHashChangeListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    protected _onHashChange(event: HashChangeEvent): Promise<void>;
    load(route: string): Promise<void>;
    askModeChange(mode: Elara.Modes): boolean;
    protected get _content(): HTMLDivElement;
    protected get _menu(): MenuElement;
}
