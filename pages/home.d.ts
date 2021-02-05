import Page, { ElaraHelmet } from '../core/strategies/Page';
import { TemplateResult } from 'lit-element';
export declare class Home extends Page {
    isFullWidth: boolean;
    codeBlock: HTMLElement;
    get head(): ElaraHelmet;
    connectedCallback(): void;
    firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-home': Home;
    }
}
