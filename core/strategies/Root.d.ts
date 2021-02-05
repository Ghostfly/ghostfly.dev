import { MenuElement } from '../../atoms/menu';
import { LitElement } from 'lit-element';
/**
 * Abtract <*-app> component strategy
 *
 * @export
 * @abstract
 * @class Root
 * @extends {LitElement}
 */
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
    protected _mode: 'day' | 'night';
    private _onHashChangeListener;
    abstract get loadables(): string[];
    abstract hideMenu(): void;
    protected abstract _showMenu(): void;
    get bootstrap(): Promise<unknown[]>;
    /**
     * Show a page and hide menu
     *
     * @param {string} route
     * @returns {Promise<void>}
     * @memberof Root
     */
    show(route: string): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    /**
     * Togglee dark|light (lightswitch)
     *
     * @returns
     * @memberof Root
     */
    switchColors(): {
        day: boolean;
        night: boolean;
    };
    firstUpdated(): void;
    protected _onHashChange(event: HashChangeEvent): Promise<void>;
    load(route: string): Promise<void>;
}
