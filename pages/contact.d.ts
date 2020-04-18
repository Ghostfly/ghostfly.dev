import Page from '../core/strategies/Page';
export declare class Contact extends Page {
    get head(): {
        title: string;
        description: string;
        type: string;
        image: string;
        slug: string;
    };
    private get _links();
    render(): import("lit-element").TemplateResult;
    private _makeLink;
}
