import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';

import { styles } from './admin-styles';
import { repeat } from 'lit-html/directives/repeat';
import Elara from '../components/elara';

interface Section {
    number: number;
    name: string | TemplateResult;
    id: string; 
    content?: TemplateResult;
    hiddenTitle?: boolean; 
}

/**
 * Admin layout
 *
 * @class Admin
 * @extends {LitElement}
 * 
 * @implements {Elara.Element}
 */
class Admin extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-admin';

    @property({type: Boolean})
    public isFullWidth: boolean = true;

    @property({type: Object})
    private _sections: Section[];
    @property({type: Object})
    private _selected: Section;

    public constructor() {
        super();

        const subComponents = [];

        Promise.all(subComponents).then(() => {
            if(location.hash !== '#!login'){
                console.warn('loaded admin components', location.hash);
            }
        }).catch((err) => {
            const error = new Elara.Errors.GenericError('Elara:: load error');
            error.underlyingError = err;
            throw new Error('Elara::' + err.message);
        });
        
        this._sections = [
            {
                number: 0,
                name: 'Profil',
                id: 'profile',
                content: html`<ui-profile></ui-profile>`
            },
            {
                number: 1,
                name: 'Fichiers',
                id: 'files',
                content: html`<ui-files></ui-files>`
            },
            {
                number: 2,
                name: html`<iron-icon icon="lock-outline"></iron-icon>`,
                id: 'disconnect'
            }

        ];
        this._selected = this._sections[0];
    }

    public connectedCallback(): void {
        /* this._firebaseSub = Firebase.auth().onAuthStateChanged((user) => {
            if(user && !user.isAnonymous){
                this.user = user;
                super.connectedCallback();
            }
            if(user === null){
                location.hash = '#!login';
            }
        });
        */
        const parse = location.hash.split('/');
        if(parse.length > 1){
            const section = this._sections.find((section) => section.id === parse[1]);
            this._selected = section;
        }

        window.addEventListener('hashchange', (hashchange) => {
            if(hashchange.newURL.indexOf('admin') === -1){
                return;
            }
            const sectionName = hashchange.newURL.split('/').pop();
            const section = this._sections.find((section) => section.id === sectionName);
            if(section){
                this._selected = section;
            }
        });
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    public render(): TemplateResult {
        return html`
		${styles}
        <div class="admin">
            <paper-listbox id="tabs" class="tabs section" selected=${this._selected ? this._selected.number : 0} @selected-changed=${this._onTabSelect}>
                ${repeat(this._sections, (section) => html`<paper-item>${section.name}</paper-item>`)}
            </paper-listbox>
            <div class="content section">
                <div class="inside">
                    ${this._selected ? html`
                        <section>
                            ${this._selected.hiddenTitle !== true ? html`
                                <h3>${this._selected.name}</h3>
                            ` : html``}
                            ${this._selected.content}
                        </section>
                    ` : html``}
                </div>
            </div>
        </div>
        `;
    }

    private _onTabSelect(event: CustomEvent): void {
        const selected = event.detail ? event.detail.value : null;
        if(selected === null){return;}
        const section = this._sections.find((section) => section.number === parseInt(selected, 10));

        this._selected = section;

        if(section.id === 'disconnect'){
            return;
        }

        if(location.hash.indexOf(section.id) === -1){
            const split = location.hash.split('/');
            if(split.length === 1){
                location.hash = location.hash.concat('/'+section.id);
            } else if(split.length === 2) {
                location.hash = location.hash.replace(split[1], section.id);
            }
        }
    }
}
customElements.define(Admin.is, Admin);