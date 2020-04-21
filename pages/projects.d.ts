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
    disconnectedCallback(): void;
    private _card;
    render(): import("lit-element").TemplateResult;
}
