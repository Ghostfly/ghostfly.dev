import { CSSResult, LitElement } from 'lit-element';
interface GithubRepository {
    node: {
        description: string;
        forkCount: number;
        name: string;
        stargazers: {
            totalCount: number;
        };
        updatedAt: string;
        url: string;
        primaryLanguage: {
            name: string;
        };
    };
}
export declare class GithubWork extends LitElement {
    static readonly is: string;
    repositories: GithubRepository[][];
    currentPage: GithubRepository[];
    page: number;
    inError: boolean;
    chunksLength: number;
    firstUpdated(): Promise<void>;
    private _chunk;
    static get styles(): CSSResult;
    private _card;
    render(): import("lit-element").TemplateResult;
    private _pulse;
    private get _pagination();
    private get _back();
    private get _next();
    private get _spinner();
}
export {};
