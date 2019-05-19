import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';

import Elara from '../core/elara';

class Contact extends LitElement implements Elara.Page {
    public static readonly is: string = 'ui-contact';

    public get head(){
        return {
            title: 'Contact',
            description: '',
            type: 'page',
            image: '',
            slug: '#!contact'
        };
    }

	public render(): void | TemplateResult {
        return html`
        <style>
        h1 { user-select: none; font-family: var(--elara-font-display); }
        h1::first-letter { font-size: 1.3em; }

        .contact { height: 100%; }

        paper-input, paper-textarea {
            --paper-input-container-focus-color: var(--elara-primary);
        }

        paper-button {
            background-color: var(--elara-primary);
            color: white;
            margin: 1em 0;
        }

        .send {
            float: right;
            clear: both;
        }
        
        .grid {
            display: flex;
            flex-wrap: wrap;
        }

        .grid > .item {
            display: flex;
            flex: 1 0 5em;
            margin: 0.5em;
            justify-content: center;
        }
        
        .clearfix { clear: both }

        .networks { height: 50%; }

        .networks svg {
            cursor: pointer;
            min-width: 50px;
        }

        .github svg { fill: #24292e }
        .twitter svg { fill: #1da1f2 }
        .youtube svg { fill: #ff0000 }

        .prev { cursor: pointer; font-weight: bold; }
        </style>
        <div class="contact">
            <h1>${this.head.title}</h1>
            <form>
                <paper-input label="Full name"></paper-input>
                <paper-input label="Email"></paper-input>
                <paper-textarea char-counter label="Message"></paper-textarea>
                <paper-button class="send" @click=${() => {
                    throw new Elara.Errors.Prototype('Not implemented.');
                }}>Send</paper-button>
            </form>
            <div class="clearfix"></div>
            <a class="prev" @click=${() => {
                location.hash = '#!about';
            }}>< About</a>
            <div class="grid networks">
                <div class="item github" @click=${() => {
                    window.open('https://github.com/Ghostfly', '_blank');
                }} role="link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>
                </div>
                <div class="item twitter" @click=${() => {
                    window.open('https://twitter.com/gh0std3v', '_blank');
                }} role="link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>
                </div>
                <div class="item youtube" @click=${() => {
                    window.open('https://www.youtube.com/user/xSpirit6/videos', '_blank');
                }} role="link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define(Contact.is, Contact);