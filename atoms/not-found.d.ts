import { CSSResult } from 'lit-element';
import PureElement from '../core/strategies/Element';
import './tree';
export declare class NotFound extends PureElement {
    asked: string;
    constructor(asked: string);
    static get styles(): CSSResult;
    render(): import("lit-element").TemplateResult;
}
