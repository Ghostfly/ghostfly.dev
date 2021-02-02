import { TemplateResult } from 'lit-element';
import Page, { ElaraHelmet } from '../core/strategies/Page';
export declare class Projects extends Page {
    get head(): ElaraHelmet;
    private images;
    private get projects();
    private _onImageLoaded;
    connectedCallback(): Promise<void>;
    private _card;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-projects': Projects;
    }
}
