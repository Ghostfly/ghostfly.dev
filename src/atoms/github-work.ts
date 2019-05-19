import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';

import Elara from '../core/elara';
import { repeat } from 'lit-html/directives/repeat';
import { PaperSpinnerElement } from '@polymer/paper-spinner/paper-spinner';

import GithubConfig from '../core/github';

interface GithubRepository {
    name: string;
    description: string;
    stargazers_count: number;
    fork: boolean;
    forks: number;
    html_url: string;
    language: string;
    created_at: string;
}

class GithubWork extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-github-work';

    @property({type: Array})
    public repositories: GithubRepository[][] = [];

    @property({type: Array})
    public currentPage: GithubRepository[] = [];

    @property({type: Number, reflect: true})
    public page: number = 0;

    @property({type: Boolean, reflect: true})
    public inError: boolean = false

    public chunksLength = 6;

    public async firstUpdated(): Promise<void> {
        this._spinner.active = true;

        const request = new XMLHttpRequest();

        request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.github.com/users/ghostfly/repos', true);

        request.setRequestHeader('type', GithubConfig.type);
        request.setRequestHeader('key', GithubConfig.key);
        request.setRequestHeader('secret', GithubConfig.secret);
        request.send();

        request.onerror = async () => {
            this._spinner.active = false;
            this.shadowRoot.removeChild(this._spinner);
            this.inError = true;
        };
        request.onreadystatechange = async () => {
            if (request.readyState == 4 && request.status == 200) {
                    const repos = JSON.parse(request.responseText);
                    this.repositories = this._chunk(repos.filter((repo:  GithubRepository) => !repo.fork)
                                            .sort((a: GithubRepository, b: GithubRepository) => { 
                                                // @ts-ignore
                                                return new Date(b.created_at) - new Date(a.created_at);
                                            })/*.sort((a, b) => b.stargazers_count - a.stargazers_count)*/, this.chunksLength);

                    this.currentPage = this.repositories[this.page];
                    await this.requestUpdate();

                    this._spinner.active = false;
                    this.shadowRoot.removeChild(this._spinner);
            }
        };
    }

    private _chunk(arr: Record<string, object>[], len: number) {
        const chunks = [];
        const n = arr.length;
        let i = 0;
      
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
      
        return chunks;
    }

	public render(): void | TemplateResult {
        return html`
        <style>
        .github-card {
            cursor: pointer;
            width: 85%;
            padding: 2.5vh 5%;
            display: inline-block;
            border-radius: 5px;
            color: var(--text-color);
            border: 1px solid rgb(0, 0, 0, 0.08);
            box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
            transition: 0.4s ease-in-out;
            margin: 2vh 0px;
            transform: scale(1);
            font-family: var(--elara-font-display);
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            margin: 1vh 0px;
        }

        .description {
            font-size: 18px;
            margin: 2vh 0px;
            font-weight: bold;
        }

        .bottom {
            margin: 1vh 0px;
            font-size: 14px;
        }

        .bottom > span {
            margin-right: 20px;
            font-weight: bold;
        }

        @media (min-width: 500px){
            .two-cols {
                columns: 2;
            }
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;
        }

        .next {
            cursor: pointer;
            font-weight: bold;
        }
        </style>
        <paper-spinner></paper-spinner>
        <div class="two-cols">
            ${this.inError ? html`Can't load GitHub repositories.. 😢` : html``}
            ${repeat(this.currentPage, (repository: GithubRepository) => {
                return html`
                <section class="github-card" @click=${() => { window.open(repository.html_url);}}>
                    <div class="title">${repository.name}</div>
                    <div class="description">${repository.description}</div>
                    <div class="bottom">
                        <span>${repository.language}</span>
                        <span><iron-icon icon="stars"></iron-icon> ${repository.stargazers_count}</span>
                        <span><iron-icon icon="subdirectory-arrow-right"></iron-icon> ${repository.forks}</span>
                    </div>
                </section>
                `;
            })}
        </div>
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this.page < this.repositories.length && this.page !== 0 ? html`
                <a @click=${() => {
                    this.page--;
                    this.currentPage = this.repositories[this.page];
                }}><paper-icon-button icon="arrow-back"></paper-icon-button></a>
                ${this.page !== this.repositories.length -1 ? html`
                <a @click=${() => {
                    this.page++;
                    this.currentPage = this.repositories[this.page];
                }}><paper-icon-button icon="arrow-forward"></paper-icon-button></a>
                ` : html``}
                ` : html`
                <a @click=${() => {
                    this.page++;
                    this.currentPage = this.repositories[this.page];
                }}><paper-icon-button icon="arrow-forward"></paper-icon-button></a>
            `}
            <a class="next" @click=${() => {
                location.hash = '#!about';
            }}>> About</a>
        </div>
        `;
    }

    private get _spinner(): PaperSpinnerElement {
        return this.shadowRoot.querySelector('paper-spinner');
    }
}
customElements.define(GithubWork.is, GithubWork);