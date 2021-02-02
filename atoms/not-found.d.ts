import { CSSResult, LitElement, TemplateResult } from 'lit-element';
export declare class NotFound extends LitElement {
    asked: string;
    constructor(asked: string);
    static get styles(): CSSResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-not-found': NotFound;
    }
}
