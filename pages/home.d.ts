import Page, { ElaraHelmet } from '../core/strategies/Page';
import '../atoms/github-work';
import '../atoms/profile';
import { TemplateResult } from 'lit-element';
export declare class Home extends Page {
    get head(): ElaraHelmet;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-home': Home;
    }
}
