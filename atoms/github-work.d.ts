import { CSSResult, LitElement } from 'lit-element';
import { ElaraSpinner } from './spinner';
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
    _spinner: ElaraSpinner;
    private _sections;
    chunksLength: number;
    private _hideSpinner;
    private _reposByUpdateDate;
    firstUpdated(): Promise<void>;
    private _chunk;
    static get styles(): CSSResult;
    private _cardT;
    render(): import("lit-element").TemplateResult;
    private get _paginationT();
    private _onPrev;
    private _onNext;
    private get _backT();
    private get _nextT();
    private _pulse;
}
declare global {
    interface HTMLElementTagNameMap {
        'github-work': GithubWork;
    }
}
export {};
