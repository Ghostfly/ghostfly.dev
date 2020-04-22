import { LitElement } from 'lit-element';
import { LoadableElement } from '../core/elara';
export declare class Profile extends LitElement implements LoadableElement {
    route: string;
    loaded: boolean;
    private picture;
    private container;
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
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-profile': Profile;
    }
}
