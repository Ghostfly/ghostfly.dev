import { html, TemplateResult } from 'lit-html';
import { property, css, CSSResult, unsafeCSS } from 'lit-element';

import Elara, { Page } from '../core/elara';
import { repeat } from 'lit-html/directives/repeat';

class Contact extends Page {
    public static readonly is: string = 'ui-contact';

    @property({type: Boolean, reflect: true})
    public inError: boolean = false;

    @property({type: Boolean, reflect: true})
    public isSuccess: boolean = false;

    public get head(){
        return {
            title: 'Contact',
            description: '',
            type: 'page',
            image: '',
            slug: '#!contact'
        };
    }

    private get _links(){
        return [
            {
                label: 'Github',
                link: 'https://github.com/Ghostfly',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>`
            },
            {
                label: 'Medium',
                link: 'https://medium.com/@ghostfly1',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>`
            },
            {
                label: 'LinkedIn',
                link: 'https://fr.linkedin.com/in/leonardcherouvrier/en',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>`
            },
            {
                label: 'Facebook',
                link: 'https://www.facebook.com/gh0std3v',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>`
            },
            {
                label: 'Instagram',
                link: 'https://www.instagram.com/gh0stfly_',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"/></g></svg>`
            },
            {
                label: 'Twitter',
                link: 'https://twitter.com/gh0std3v',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>`
            },
            {
                label: 'YouTube',
                link: 'https://www.youtube.com/user/xSpirit6/videos',
                svg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>`
            },
            {
                label: 'Phone',
                link: 'tel:+33668717002',
                svg: html`<iron-icon icon="communication:call"></iron-icon>`
            }
        ];
    }

    public static get styles(): CSSResult[] {
        return [
            ... Page.styles,
            css`
                h1 { user-select: none; font-family: var(--elara-font-display); }
                h1::first-letter { font-size: 1.3em; }

                .contact { height: 100%; }

                paper-input, paper-textarea {
                    --paper-input-container-input-color: var(--elara-font-color);
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
                    align-items: center;
                }
                
                .clearfix { clear: both }

                .networks { height: 50%; }

                .networks svg, .networks iron-icon {
                    cursor: pointer;
                    min-width: 50px;
                }

                .github svg { ${unsafeCSS(`fill: ${Elara.Colors.social.github}`)}}
                .twitter svg { ${unsafeCSS(`fill: ${Elara.Colors.social.twitter}`)}}
                .youtube svg { ${unsafeCSS(`fill: ${Elara.Colors.social.youtube}`)}}
                .linkedin svg { ${unsafeCSS(`fill: ${Elara.Colors.social.linkedin}`)}}
                .facebook svg { ${unsafeCSS(`fill: ${Elara.Colors.social.facebook}`)}}
                .instagram svg { ${unsafeCSS(`fill: ${Elara.Colors.social.instagram}`)}}
                .medium svg { ${unsafeCSS(`fill: ${Elara.Colors.social.medium}`)}}

                .prev { cursor: pointer; font-weight: bold; transition: color .3s; }
                .prev:hover { color: var(--elara-primary); }

                form paper-button[disabled] {
                    opacity: .7;
                }
        `];
    }

	public render(): void | TemplateResult {
        return html`
        <div class="contact">
            <h1>${this.head.title}</h1>
            <form id="form">
                <paper-input id="name" label="Full name" min-length="4" required></paper-input>
                <paper-input id="email" label="Email" min-length="4" required></paper-input>
                <paper-textarea id="message" char-counter label="Message" min-length="4" required></paper-textarea>
                <paper-button class="send" @click=${this._doSend}>Send</paper-button>
            </form>
            ${this.isSuccess ? html`${Elara.Mailing.success}` : html``}
            ${this.inError ? html`${Elara.Mailing.error}` : html``}
            <div class="clearfix"></div>
            <a class="prev" @click=${() => Elara.Routing.navigate('projects')}>< Projects</a>
            <div class="grid networks">
                ${repeat(this._links, (link) => this._makeLink(link.label, link.link, link.svg))}
            </div>
        </div>
        `;
    }

    private _makeLink(label: string, link: string, svg: TemplateResult){
        return html`
            <div aria-label=${label} class="item ${label.toLowerCase()}" @click=${() => {
                Elara.Routing.redirect(link);
            }} role="link">
                ${svg}
            </div>
        `;
    }

    private async _doSend(event: Event){
        const fields = {
            form: this.shadowRoot.querySelector('#form') as HTMLElement,
            submit: event.target as HTMLButtonElement,
            name: this.shadowRoot.querySelector('#name') as Elara.InputElement,
            email: this.shadowRoot.querySelector('#email') as Elara.InputElement,
            message: this.shadowRoot.querySelector('#message') as Elara.InputElement,
        };

        try {
            const sended = await Elara.Mailing.contact(fields, 'https://script.google.com/macros/s/AKfycbzdhNONz-1pGAlOktko4o5riYGErccxRfk8LsqTxq0ws31wKZ0/exec');
            if(!sended){
                this.isSuccess = false;
                this.inError = false;
            } else {
                this.inError = false;
                this.isSuccess = true;
            }
        } catch (err) {
            this.inError = true;
        }
    }
}
customElements.define(Contact.is, Contact);