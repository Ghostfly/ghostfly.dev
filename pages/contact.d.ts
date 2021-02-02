import { TemplateResult } from 'lit-element';
import Page, { ElaraHelmet } from '../core/strategies/Page';
export declare class Contact extends Page {
    get head(): ElaraHelmet;
    private get _links();
    render(): TemplateResult;
    private _makeLink;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-contact': Contact;
    }
}
