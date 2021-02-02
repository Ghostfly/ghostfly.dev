import { LitElement, CSSResult, TemplateResult } from 'lit-element';
export declare class ElaraSpinner extends LitElement {
    active: boolean;
    text: string;
    static get styles(): CSSResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elara-spinner': ElaraSpinner;
    }
}
