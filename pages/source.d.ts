import Page, { ElaraHelmet } from '../core/strategies/Page';
import { TemplateResult } from 'lit-element';
import '../atoms/github-work';
export declare class OpenSource extends Page {
    get head(): ElaraHelmet;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-source': OpenSource;
    }
}
