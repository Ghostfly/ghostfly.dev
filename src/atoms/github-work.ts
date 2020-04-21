import { property, css, CSSResult, html, customElement, LitElement } from 'lit-element';

import Elara from '../core/elara';
import { pulseWith } from '../core/animations';
import { ElaraSpinner } from './spinner';

interface GithubRepository {
    node: {
        description: string;
        forkCount: number;
        name: string;
        stargazers: {
            totalCount: number;
        };
        createdAt: string;
        url: string;
        primaryLanguage: {
            name: string;
        };
    };
}

@customElement('ui-github-work')
export class GithubWork extends LitElement {
    public static readonly is: string = 'ui-github-work';

    @property({type: Array})
    public repositories: GithubRepository[][] = [];

    @property({type: Array})
    public currentPage: GithubRepository[] = null;

    @property({type: Number, reflect: true})
    public page = 0;

    @property({type: Boolean, reflect: true})
    public inError = false;

    public chunksLength = 6;

    public async firstUpdated(): Promise<void> {
        this._spinner.active = true;

        const request = new XMLHttpRequest();

        const queryObj = {query: '{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount createdAt url primaryLanguage {name} }}}}}'};
        request.open('POST', 'https://api.github.com/graphql', true);
        request.setRequestHeader('Authorization', 'bearer ' + atob('ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg=='));
        request.send(JSON.stringify(queryObj));

        const hideSpinner = () => {
            if(!this._spinner) return;

            this._spinner.active = false;
            const container = this._spinner.parentElement;
            container.removeChild(this._spinner);
            this.shadowRoot.removeChild(container);
        };

        const onError = () => {
            hideSpinner();
            this.inError = true;
        };

        request.onerror = onError;

        request.onreadystatechange = async () => {
            if (request.readyState == 4 && request.status == 200) {
                const repos = JSON.parse(request.responseText);
                const filtered = repos.data.search.edges.sort((a: GithubRepository, b: GithubRepository) => { 
                    return new Date(b.node.createdAt).getTime() - new Date(a.node.createdAt).getTime();
                });

                this.repositories = this._chunk(filtered, this.chunksLength);

                this.currentPage = this.repositories[this.page];
                hideSpinner();
                await this.updateComplete;
                this._pulse();
            }

            if(request.status === 403){
                onError();
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

    public static get styles(): CSSResult {
        return css`
        .github-card {
            cursor: pointer;
            width: 85%;
            padding: 2.5vh 5%;
            display: inline-block;
            border-radius: 5px;
            color: var(--elara-font-color);
            border: 1px solid var(--elara-font-color);
            box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
            transition: 0.4s ease-in-out;
            margin: 2vh 0px;
            transform: scale(1);
            font-family: var(--elara-font-display);
            transition: transform, border .3s;
        }

        .github-card:hover {
            border: 1px solid var(--elara-font-hover);
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
            display: flex;
            cursor: pointer;
            justify-content: flex-end;
            font-weight: bold;
            transition: color .3s;
        }

        .next:hover {
            color: var(--elara-primary);
        }

        .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
        }

        .link {
            color: var(--elara-secondary);
            text-decoration: none;
            transition: color .3s;
        }
        .link:hover {
            color: var(--elara-primary);
        }
        a[disabled='true'] {
            pointer-events: none;
            opacity: .7;
        }
        `;
    }

    private _card(repository: GithubRepository) {
        return html`
        <section class="github-card" @click=${() => Elara.Routing.redirect(repository.node.url)}}>
            <div class="title">${repository.node.name}</div>
            ${repository.node.description ? html`<div class="description">${repository.node.description}</div>` : html``}
            <div class="bottom">
                <span>${repository.node.primaryLanguage ? repository.node.primaryLanguage.name : ''}</span>
                <span><mwc-icon>star</mwc-icon> ${repository.node.stargazers.totalCount}</span>
                <span><mwc-icon>keyboard_arrow_right</mwc-icon> ${repository.node.forkCount}</span>
            </div>
        </section>
        `;
    }

	public render() {
        return html`
        <div class="loader">
            <elara-spinner active></elara-spinner>
        </div>
        ${this.inError ? html`<p>Can't load GitHub repositories.. 😢 <br />You can check on <a class="link" href="https://github.com/ghostfly/">GitHub</a> directly !</p>` : html``}
        ${this.currentPage ? html`
        <div class="two-cols">
            ${this.currentPage.map(page => this._card(page))}
        </div>
        ${this._pagination}
        ` : html``}
        <a class="next" @click=${() => Elara.Routing.navigate('about')}>> About</a>
        `;
    }

    private _pulse(){
        const sections = this.shadowRoot.querySelectorAll('.two-cols section');
        const animation = pulseWith(600);
        sections.forEach((section) => {
            section.animate(animation.effect, animation.options);
        });
    }

    private get _pagination(){
        return html`
        <div class="pagination">
            ${this.page+1} / ${this.repositories.length}
            ${this._back} 
            ${this._next}
        </div>`;
    }

    private get _back(){
        return html`
        <a role="button" disabled=${this.page === 0} @click=${async () => {
            this.page--;
            this.currentPage = this.repositories[this.page];
            await this.updateComplete;
            this._pulse();
        }}>
            <mwc-icon-button aria-label="Previous page" icon="keyboard_arrow_left"></mwc-icon-button>
        </a>
        `;
    }

    private get _next(){
        return html`
        <a role="button" disabled=${this.page+1 === this.repositories.length} @click=${async () => {
            this.page++;
            this.currentPage = this.repositories[this.page];
            await this.updateComplete;
            this._pulse();
        }}>
            <mwc-icon-button aria-label="Next page" icon="keyboard_arrow_right"></mwc-icon-button>
        </a>
        `;
    }

    private get _spinner(): ElaraSpinner {
        return this.shadowRoot.querySelector('elara-spinner');
    }
}