import { html, TemplateResult } from 'lit-html';
import { LitElement, css, CSSResult } from 'lit-element';

import Elara from '../core/elara';
import { fadeWith } from '../core/animations';

import { repeat } from 'lit-html/directives/repeat';
import { IronImageElement } from '@polymer/iron-image';

interface Project {
    name: string;
    slug: string;
    image: string;
    repository: null | string;
    status: 'Work in progress' | 'published' | '...';
    url: string | null;
    tags: string[];
};

class Projects extends LitElement implements Elara.Page {
    public static readonly is: string = 'ui-projects';

    public get head(){
        return {
            title: 'Projects',
            description: '',
            type: 'page',
            image: '',
            slug: '#!projects'
        };
    }

    private images: NodeListOf<IronImageElement>;

    private get projects(): ReadonlyArray<Project> {
        return [
            {
                name: 'Listen With Me',
                slug: 'lwm',
                image: null,
                repository: null,
                status: 'Work in progress',
                url: 'https://lwm.io',
                tags: ['YouTube', 'Collaborative', 'Listening']
            },
            {
                name: 'Dandy Costard',
                slug: 'dandy',
                image: '/assets/projects/dandy.svg',
                repository: null,
                status: 'Work in progress',
                url: null,
                tags: ['E-Commerce', 'Elara', 'Custom menswear', 'ThreeJS']
            },
            {
                name: 'Ghostfly.dev',
                slug: 'ghostfly',
                image: '/assets/me.svg',
                repository: 'https://github.com/Ghostfly/ghostfly.dev/tree/master',
                status: 'Work in progress',
                url: null,
                tags: ['Elara', 'LitElement', 'Github Pages']
            },
            {
                name: 'Persin Conseil',
                slug: 'persin',
                image: '/assets/projects/persin.jpg',
                status: 'published',
                repository: 'https://github.com/Ghostfly/persin-conseil',
                url: 'https://www.persin.fr',
                tags: ['Lit-Element', 'Elara', 'Workbox']
            },
            {
                name: 'Dobrunia Design',
                slug: 'react',
                image: '/assets/projects/dobrunia.png',
                status: 'published',
                repository: null,
                url: 'https://www.dobruniadesign.com',
                tags: ['React', 'HapiJS', 'Material-UI']
            },
            {
                name: 'Cheno',
                slug: 'cheno',
                image: '/assets/projects/cheno.svg',
                status: 'published',
                repository: null,
                url: 'https://www.cheno.fr',
                tags: ['Slim Framework', 'HTML5', 'CSS3']
            },
            {
                name: 'Renouveau Sociétal',
                slug: 'rs',
                image: '/assets/projects/rs.png',
                status: 'published',
                repository: null,
                url: 'https://www.renouveausocietal.fr',
                tags: ['WordPress', 'Handmade template']
            },
            {
                name: 'G-Addiction',
                slug: 'g-addiction',
                image: '/assets/projects/g-addiction.png',
                status: 'published',
                repository: null,
                url: 'https://www.g-addiction.com',
                tags: ['WordPress', 'chosen template']
            },
            {
                name: 'Who?',
                slug: 'who',
                status: '...',
                repository: null,
                url: null,
                image: '/assets/projects/who.svg',
                tags: ['?']
            },
        ];
    }

    private async _onIronImageLoaded(event: CustomEvent){
        if(!event.detail){
            return;
        }

        const ironImage = event.target as IronImageElement;
        const loaded = event.detail.value;
        if(loaded){
            const animationConfig = fadeWith(500, true);
            ironImage.classList.add('shown');
            const animation = ironImage.animate(animationConfig.effect, animationConfig.options);
            await animation.finished;
            ironImage.removeEventListener('loaded-changed', this._onIronImageLoaded);
        }
    }

    public async connectedCallback(): Promise<void> {
        super.connectedCallback();
        await this.updateComplete;
        this.images = this.shadowRoot.querySelectorAll('iron-image');
        this.images.forEach((image) => {
            image.addEventListener('loaded-changed', this._onIronImageLoaded);
        });
    }

    public disconnectedCallback(){
        super.disconnectedCallback();
    }

    public static get styles(): CSSResult[] {
        return [
            Elara.UI.typography.heading,
            css`
                .prev, .next { cursor: pointer; font-weight: bold; transition: color .3s;}
                .next { float: right }
                .prev:hover, .next:hover {
                    color: var(--elara-primary);
                }

                .projects { margin-bottom: 2em; }
                .project h3 {
                    font-family: var(--elara-font-display); 
                    font-weight: bold;
                }

                .project {
                    display: flex;
                    flex-direction: column;
                    min-height: 50px;
                    margin: 1em;
                    padding: .5em;
                    cursor: default;
                    user-select: none;
                    border-bottom: 1px solid var(--elara-darkgray)
                }

                .with-link {
                    color: var(--elara-font-color);
                    cursor: pointer;
                    transition: color .3s;
                }

                .with-link:hover {
                    color: var(--elara-font-hover);
                }

                .project .hidden-content {
                    position: relative;
                    min-height: 100px;
                }

                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    margin: -0.5em;
                }

                .grid > div {
                    flex: 1 0 5em;
                    margin: 0.5em;
                }

                .hidden-content .right {
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                .hidden-content iron-image {
                    height: 150px;
                    width: 150px;
                    visibility: hidden;
                }

                iron-image.shown {
                    visibility: visible;
                }

                .hidden-content svg {
                    height: 1em;
                    width: 1em;
                }

                .hidden-content .left > .tags, .hidden-content .left > .status {
                    opacity: 0;
                    transition: opacity .4s;
                }

                .hidden-content:hover .left > .tags, .hidden-content:hover .left > .status  {
                    opacity: 1;
                }

                .project.who {
                    border-bottom: none;
                }
        `];
    }

    private _card(project: Project): TemplateResult {
        return html`
        <section class="project">
            <div class="hidden-content grid">
                <div class="left">
                    <h3 class="${project.slug} ${project.url ? 'with-link' : 'normal'}" role="${project.url ? 'link' : 'title'}"  @click=${() => {
                        if(project.url){
                            Elara.Routing.redirect(project.url);
                        }
                    }}>${project.name}</h3>
                    <div class="tags">
                        ${project.tags.join(', ')}
                    </div>
                    <br />
                    <div class="status">
                        ${project.repository ? html`<svg @click=${() => { Elara.Routing.redirect(project.repository); }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>` : html``}
                        ${project.status}
                    </div>
                </div>
                <div class="right">
                    ${project.image ? html`
                    <iron-image sizing="contain" src="${project.image}"></iron-image>
                    ` : html``}
                </div>
            </div>
        </section>`;
    }

	public render(): void | TemplateResult {
        return html`
        <div class="projects">
            <h1>${this.head.title}</h1>
            ${repeat(this.projects, this._card)}
            <a class="prev" @click=${() => Elara.Routing.navigate('about')}>< About</a>
            <a class="next" @click=${() => Elara.Routing.navigate('contact')}>> Contact</a>
        </div>
        `;
    }
}
customElements.define(Projects.is, Projects);