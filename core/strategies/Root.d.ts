import Elara from '../elara';
import Page from './Page';
import { MenuElement } from '../../atoms/menu';
export default class Root extends Page {
    protected _menuFade: Animation;
    route: string;
    private _onHashChangeListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
 * Create the render root
 */
    protected createRenderRoot(): ShadowRoot;
    protected _onHashChange(event: HashChangeEvent): Promise<void>;
    load(route: string): Promise<void>;
    askModeChange(mode: Elara.Modes): boolean;
    protected readonly _content: HTMLDivElement;
    protected readonly _menu: MenuElement;
}
