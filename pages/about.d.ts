import { TemplateResult } from 'lit-element';
import Page, { ElaraHelmet } from '../core/strategies/Page';
import './contact';
export declare class About extends Page {
    get head(): ElaraHelmet;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-about': About;
    }
}
