import {
    LitElement,
    html,
    property,
    TemplateResult
} from 'lit-element';
import { styles } from './login-styles';

import { PaperToastElement} from '@polymer/paper-toast/paper-toast';
import { PaperSpinnerElement} from '@polymer/paper-spinner/paper-spinner';

import '../components/atoms/google-connect';

import Elara from '../components/elara';

import { GoogleConnect } from '../components/atoms/google-connect';

/**
 * Login view
 *
 * @class Login
 * @extends {LitElement}
 */
class Login extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-login';

    @property({ type: String })
    private toastText: string;

    public get head(){
        return {
            title: 'Connexion',
            description: '',
            type: 'page',
            image: '',
            slug: '#!login'
        };
    }

    public constructor() {
        super();
    }

    private async _redirectIfLogged(){
        // if user redirect to admin
    }

    public async firstUpdated() {
        if(!location.hash || location.hash === '#!login'){
            await this._redirectIfLogged();
            return;
        }

        if (location.hash === '#!login/redirect') {
            this._spinner.active = true;
            this._googleConnect.disabled = true;

            await this._redirectIfLogged();

            /* const checking = setTimeout(() => {
                this.toast.duration = 0;
                this.toastText = 'La connexion semble anormalement longue, réessayer?';
                const icon = document.createElement('paper-icon-button');
                icon.icon = 'refresh';
                icon.onclick = this._redirectListener;
                this.toast.appendChild(icon);
                this.toast.open();
            }, 10000);

            const force = setTimeout(() => {
                this._redirectListener(null);
            }, 20000);
            */

            /* let credential = await firebase.auth().getRedirectResult();
            if (credential && credential.user !== null) {
                clearTimeout(checking);
                clearTimeout(force);
                requestAnimationFrame(() => {
                    location.hash = '#!admin';
                    credential = null;
                });
            } else if (credential && credential.user === null) {
                this._reload();
            }
            */
        }
    }

    public connectedCallback(): void {
        super.connectedCallback();
    }

    public render(): void | TemplateResult {
        return html `
            ${styles}
            <div class="login">
                <google-connect id="google-connect" @click=${this._onGConnect}></google-connect>
                <paper-toast id="toast" text="${this.toastText}" duration="5000"></paper-toast>
                <paper-spinner id="spinner"></paper-spinner>
            </div>
        `;
    }

    private async _onGConnect(event: Event) {
        const target = event.target as GoogleConnect;
        if (target.disabled) {
            return;
        }

        this._spinner.active = true;

        this._googleConnect.disabled = true;
        location.hash = '#!login/redirect';

        try {
            // do sign-in
            this._spinner.active = false;
        } catch (error) {
            this._invalidate(error.message);
        }
    }

    private _invalidate(message: string) {
        this._spinner.active = false;
        this._openToast(message);
    }

    private _openToast(text: string): void {
        this.toastText = text;
        this._toast.opened = true;
    }

    /* 
        Elements 
    */
    private get _toast(): PaperToastElement {
        return this.shadowRoot.querySelector('#toast');
    }

    private get _spinner(): PaperSpinnerElement {
        return this.shadowRoot.querySelector('#spinner');
    }

    private get _googleConnect(): GoogleConnect {
        return this.shadowRoot.querySelector('#google-connect');
    }
}

customElements.define(Login.is, Login);