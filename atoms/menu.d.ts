import { LitElement, TemplateResult } from 'lit-element';
export declare class MenuElement extends LitElement {
    items: any[];
    route: any;
    shown: boolean;
    createRenderRoot(): this;
    render(): TemplateResult;
    private _link;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-menu': MenuElement;
    }
}
