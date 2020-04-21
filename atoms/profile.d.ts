import { LitElement } from 'lit-element';
import Elara from '../core/elara';
export declare class Profile extends LitElement implements Elara.LoadableElement {
    route: string;
    loaded: boolean;
    private _hashChangeListener;
    connectedCallback(): void;
    private _onProfilePictureLoaded;
    firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    private _onHashChange;
    render(): import("lit-element").TemplateResult;
    createRenderRoot(): this;
    private _nightToggle;
    private get _day();
    private get _night();
    private get picture();
    private get container();
}
