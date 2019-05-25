import { TemplateResult } from 'lit-html';
import { LitElement, CSSResult } from 'lit-element';
import Elara from '../core/elara';
export declare class MenuElement extends LitElement implements Elara.Element {
    static readonly is: string;
    items: any[];
    route: any;
    shown: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static readonly styles: CSSResult;
    render(): void | TemplateResult;
    private _link;
}
