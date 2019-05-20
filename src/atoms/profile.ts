import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';

import Elara from '../core/elara';

class Profile extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-profile';

    public render(): void | TemplateResult {
        return html`
        <style>
        :host {
            cursor: pointer;
        }

        .profile {
            width: 24vw;
            padding: 4vh 3vw;
            height: 92vh;
            z-index: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            background: var(--background-image) center center;
            background-size: cover;
            background-repeat: no-repeat;
            position: fixed;
            color: #fff;
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
        <div role="link" class="profile" @click=${() => { location.hash = '#!home'; }}>
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
}
customElements.define(Profile.is, Profile);