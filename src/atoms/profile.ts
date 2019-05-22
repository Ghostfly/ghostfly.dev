import { html, TemplateResult } from 'lit-html';
import { LitElement, property } from 'lit-element';

import Elara from '../core/elara';

class Profile extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-profile';

    @property({type: String, reflect: true})
    public route: string;

    private _hashChangeListener: () => void;

    public connectedCallback(): void {
        super.connectedCallback();
        this.route = location.hash;

        this._hashChangeListener = this._onHashChange.bind(this);
        window.addEventListener('hashchange', this._hashChangeListener);
    }

    public async firstUpdated(){
        const backgroundURL = await this._toDataURL('https://source.unsplash.com/collection/1727869/1366x768');
        this.container.style.backgroundImage =`url('${backgroundURL}')`;
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();

        window.removeEventListener('hashchange', this._hashChangeListener);
    }

    private _toDataURL(src: string): Promise<string> {
        return new Promise((resolve) => {
            const image = new Image();
            image.crossOrigin = 'Anonymous';
         
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = image.naturalHeight;
                canvas.width = image.naturalWidth;
                context.drawImage(image, 0, 0);
                resolve(canvas.toDataURL('image/jpeg'));
            };
        
            image.src = src;
        });
    }

    private _onHashChange(event: HashChangeEvent): void {
        if(!event.newURL){
            this.route = null;
            return;
        }

        this.route = new URL(event.newURL).hash;
    }

    public render(): void | TemplateResult {
        return html`
        <style>
        .profile {
            width: 24vw;
            padding: 4vh 3vw;
            height: 92vh;
            z-index: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            background: var(--elara-darkgray) center center;
            background-size: cover;
            background-repeat: no-repeat;
            position: fixed;
            color: #fff;
            user-select: none;
            z-index: 999;
        }

        .profile.is-link {
            cursor: pointer;
        }

        .profile .bio > div {
            font-weight: bold;
            font-size: 1.2em;
            margin: 1.5vh 0px;
        }

        .profile::after {
            content: '';
            background-color: rgba(0,0,0, .3);
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        iron-image, .bio {
            z-index: 1;
        }
        
        .profile > .pic {
            width: 20vw;
            height: 20vw;
            border-radius: 3px;
        }
        </style>
        <div role="link" id="container" class="profile ${this.route === '#!home' || !this.route ? '' : 'is-link'}" @click=${() => { location.hash = '#!home'; }}>
            <iron-image class="pic" sizing="contain" fade src="/assets/me.svg"></iron-image>
            <div class="bio">
                <div class="username">
                    <span>Léonard C. > @ghostfly</span>
                </div>
                <div class="current-job">Full-stack Developer</div>
                <div class="about">
                    <span>Nice, France</span>
                    <br />
                    <span>Focusing 🎯</span>
                </div>
            </div>
        </div>
        `;
    }

    private get container(): HTMLDivElement {
        return this.shadowRoot.querySelector('#container');
    }
}
customElements.define(Profile.is, Profile);