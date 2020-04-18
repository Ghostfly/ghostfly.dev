import { CSSResult } from 'lit-element';
import PureElement from '../core/strategies/Element';
export declare class MenuElement extends PureElement {
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
