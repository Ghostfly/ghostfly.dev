import Page from '../core/strategies/Page';
import '../atoms/github-work';
import '../atoms/profile';
export declare class Home extends Page {
    get head(): {
        title: string;
        description: string;
        type: string;
        image: string;
        slug: string;
    };
    render(): import("lit-element").TemplateResult;
}
