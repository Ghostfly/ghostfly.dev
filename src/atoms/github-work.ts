import {
  property,
  css,
  CSSResult,
  html,
  customElement,
  LitElement,
  query,
  queryAll,
  TemplateResult,
} from 'lit-element';

import { pulseWith } from '../core/animations';
import { ElaraSpinner } from './spinner';
import { Elara } from '../core/elara';
import { fromFetch } from 'rxjs/fetch';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
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

@customElement('github-work')
export class GithubWork extends LitElement {
  public static readonly is: string = 'github-work';

  @property({ type: Array })
  public repositories: GithubRepository[][] = [];

  @property({ type: Array })
  public currentPage: GithubRepository[] = null;

  @property({ type: Number, reflect: true })
  public page = 0;

  @property({ type: Boolean, reflect: true })
  public inError = false;

  @query('elara-spinner')
  public _spinner: ElaraSpinner;

  @queryAll('.two-cols section')
  private _sections: NodeListOf<HTMLElement>;

  public chunksLength = 6;

  private _hideSpinner() {
    if (!this._spinner) return;

    this._spinner.active = false;
    const container = this._spinner.parentElement;
    container.removeChild(this._spinner);
    this.shadowRoot.removeChild(container);
  }

  private _reposByUpdateDate(repos: GithubRepository[]) {
    return repos.sort((a: GithubRepository, b: GithubRepository) => {
      return (
        new Date(b.node.updatedAt).getTime() -
        new Date(a.node.updatedAt).getTime()
      );
    });
  }

  public async firstUpdated(): Promise<void> {
    this._spinner.active = true;

    const queryObj = {
      query:
        '{ search(query: "user:ghostfly is:public", type: REPOSITORY, first: 100) { repositoryCount edges { node { ... on Repository { name stargazers { totalCount } description forkCount updatedAt url primaryLanguage {name} }}}}}',
    };

    const headers = new Headers();
    headers.append(
      'Authorization',
      'bearer ' +
        atob('ZDQ0Y2JmYjVlOGRiOTRjMjJkNThlYjg4ZjFlNjIyODM4YzQ1N2Q3Mg==')
    );

    const loading$ = fromFetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify(queryObj),
    }).pipe(
      switchMap((response) => response.json()),
      switchMap((response) => {
        const filtered = this._reposByUpdateDate(response.data.search.edges);

        this.repositories = this._chunk(filtered, this.chunksLength);
        this.currentPage = this.repositories[this.page];

        return this.updateComplete;
      }),
      tap(() => {
        this.inError = false;
        this._hideSpinner();
      }),
      switchMap(() => {
        return this._pulse();
      }),
      catchError(() => {
        this._hideSpinner();
        this.inError = true;

        return EMPTY;
      })
    );

    await loading$.toPromise();
  }

  private _chunk(arr: GithubRepository[], len: number) {
    const chunks = [];
    const n = arr.length;
    let i = 0;

    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }

    return chunks;
  }

  public static get styles(): CSSResult {
    return css`
        .github-card {
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            user-select: none;

            cursor: pointer;
            padding: 10px;

            border-radius: 5px;
            color: var(--elara-font-color);
            transition: 0.4s ease-in-out;
            margin: .5em 0px
            transform: scale(1);
            font-family: var(--elara-font-display);
            box-shadow: var(--box-elevation-1);
            transition: all .3s;
            background-color: rgba(134, 134, 134, 0.2):
        }

        .github-card:hover {
            box-shadow: var(--box-elevation-2);
        }

        .title {
            font-size: 18px;
            font-weight: bold;
            margin: 1vh 0px;
        }

        .description {
            font-size: 14px;
            margin: 2vh 0px;
            font-weight: bold;
        }

        .bottom {
            margin: 1vh 0px;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .bottom > span {
            display: flex;
            align-items: center;
            flex-direction: row;
            font-weight: bold;
        }

        @media (min-width: 575px){
            .two-cols {
                display: grid;
                grid-gap: 20px;
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .pagination {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            user-select: none;
            font-size: 1.2em;
            margin-top: 1em;
        }

        .repos  {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .prev, .next {
            cursor: pointer;
            transition: color .3s;
        }

        .prev:hover, .next:hover {
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

  private _cardT(repository: GithubRepository) {
    return html`
      <section
        class="github-card"
        @click="${() => Elara().router.redirect(repository.node.url)}}"
      >
        <div class="title">${repository.node.name}</div>
        ${repository.node.description
          ? html`<div class="description">${repository.node.description}</div>`
          : html``}
        <div class="bottom">
          <span
            >${repository.node.primaryLanguage
              ? repository.node.primaryLanguage.name
              : ''}</span
          >
          <span
            ><mwc-icon>star</mwc-icon> ${repository.node.stargazers
              .totalCount}</span
          >
          <span
            ><mwc-icon>keyboard_arrow_right</mwc-icon> ${repository.node
              .forkCount}</span
          >
        </div>
      </section>
    `;
  }

  public render(): TemplateResult {
    return html`
      <div class="loader">
        <elara-spinner text="Loading repositories" active></elara-spinner>
      </div>
      ${this.inError
        ? html`<p>
            Can't load GitHub repositories.. 😢 <br />You can check on
            <a class="link" href="https://github.com/ghostfly/">GitHub</a>
            directly !
          </p>`
        : html``}
      ${this.currentPage
        ? html`
            <div class="two-cols">
              ${this.currentPage.map((page) => this._cardT(page))}
            </div>
          `
        : html``}
      <div class="pagination">
        ${this.currentPage ? this._paginationT : html``}
      </div>
    `;
  }

  private get _paginationT() {
    return html` <div class="repos">
      ${this.page + 1} / ${this.repositories.length} ${this._backT}
      ${this._nextT}
    </div>`;
  }

  private async _onPrev() {
    // NOTE: Keyboard but button disabled!
    if (this.page === 0) {
      return;
    }

    this.page--;
    this.currentPage = this.repositories[this.page];
    await this.updateComplete;
  }

  private async _onNext() {
    // NOTE: Keyboard but button disabled!
    if (this.page + 1 === this.repositories.length) {
      return;
    }

    this.page++;
    this.currentPage = this.repositories[this.page];
    await this.updateComplete;
  }

  private get _backT() {
    return html`
      <a
        role="button"
        disabled=${this.page === 0}
        @click=${async () => await this._onPrev()}
      >
        <mwc-icon-button
          aria-label="Previous page"
          icon="keyboard_arrow_left"
        ></mwc-icon-button>
      </a>
    `;
  }

  private get _nextT() {
    return html`
      <a
        role="button"
        disabled=${this.page + 1 === this.repositories.length}
        @click=${async () => await this._onNext()}
      >
        <mwc-icon-button
          aria-label="Next page"
          icon="keyboard_arrow_right"
        ></mwc-icon-button>
      </a>
    `;
  }

  private async _pulse() {
    const sections = Array.from(this._sections);
    const animation = pulseWith(600);
    const toAnimate = sections.sort(() => Math.random() - 0.5).slice(0, 3);

    for (const section of toAnimate) {
      const handle = section.animate(animation.effect, animation.options);
      await handle.finished;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'github-work': GithubWork;
  }
}
