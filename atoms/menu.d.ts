import { CSSResult, LitElement } from 'lit-element';
export declare class MenuElement extends LitElement {
    static readonly is: string;
    items: any[];
    route: any;
    shown: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get styles(): CSSResult;
    render(): import("lit-element").TemplateResult;
    private _link;
}
