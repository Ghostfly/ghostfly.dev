import { LitElement, TemplateResult, CSSResult } from 'lit-element';
import Elara from '../core/elara';
/**
 * @class Tree
 * @extends {LitElement}
 */
export declare class Tree extends LitElement implements Elara.Element {
    static readonly is: string;
    height: number;
    width: number;
    firstUpdated(): void;
    static readonly styles: CSSResult;
    render(): void | TemplateResult;
    private _tree;
    private readonly _canvas;
}
