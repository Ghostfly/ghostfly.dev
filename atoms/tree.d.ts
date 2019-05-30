import { TemplateResult, CSSResult } from 'lit-element';
import PureElement from '../core/strategies/Element';
/**
 * @class Tree
 * @extends {PureElement}
 */
export declare class Tree extends PureElement {
    static readonly is: string;
    height: number;
    width: number;
    firstUpdated(): void;
    static readonly styles: CSSResult;
    render(): void | TemplateResult;
    private _tree;
    private readonly _canvas;
}
