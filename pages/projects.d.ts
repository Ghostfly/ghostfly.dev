import Page from '../core/strategies/Page';
export declare class Projects extends Page {
    get head(): {
        title: string;
        description: string;
        type: string;
        image: string;
        slug: string;
    };
    private images;
    private get projects();
    private _onImageLoaded;
    connectedCallback(): Promise<void>;
    private _card;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-projects': Projects;
    }
}
