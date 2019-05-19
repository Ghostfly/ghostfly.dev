import { LitElement, TemplateResult } from 'lit-element';
/**
 * @class Tree
 * @extends {LitElement}
 */
export declare class Tree extends LitElement {
    static readonly is: string;
    firstUpdated(): void;
    render(): void | TemplateResult;
    private _tree;
    private readonly _canvas;
}
