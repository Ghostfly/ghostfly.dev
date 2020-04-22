import Page from '../core/strategies/Page';
import './contact';
export declare class About extends Page {
    get head(): {
        title: string;
        description: string;
        type: string;
        image: string;
        slug: string;
    };
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-about': About;
    }
}
