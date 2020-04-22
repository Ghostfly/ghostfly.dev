import { LitElement } from 'lit-element';
export declare class ElaraSpinner extends LitElement {
    active: boolean;
    text: string;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elara-spinner': ElaraSpinner;
    }
}
