import { TemplateResult } from 'lit-html';
import { CSSResult } from 'lit-element';
import PureElement from '../core/strategies/Element';
export declare class MenuElement extends PureElement {
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
