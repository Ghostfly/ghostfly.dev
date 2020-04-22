import { html, customElement } from 'lit-element';

import Elara from '../core/elara';
import Page from '../core/strategies/Page';
import { fadeWith } from '../core/animations';

interface Project {
    name: string;
    slug: string;
    image: string;
    repository: null | string;
    status: 'Work in progress' | 'published' | '...';
    url: string | null;
    tags: string[];
};

@customElement('ui-projects')
export class Projects extends Page {
    public get head(){
        return {
            title: 'Projects',
            description: '',
            type: 'page',
            image: '',
            slug: '#!projects'
        };
    }

    private images: NodeListOf<HTMLImageElement>;

    private get projects(): ReadonlyArray<Project> {
        return [
            {
                name: 'Dandy Costard',
                slug: 'dandy',
                image: '/assets/projects/dandy.svg',
                repository: null,
                status: 'Work in progress',
                url: null,
                tags: ['E-Commerce', 'Elara', 'Custom menswear']
            },
            {
                name: 'Persin Conseil',
                slug: 'persin',
                image: '/assets/projects/persin.jpg',
                status: 'published',
                repository: 'https://github.com/Ghostfly/persin-conseil',
                url: 'https://www.persin.fr',
                tags: ['Lit-Element', 'Offline ready', 'structured data', 'PWA 100%']
            },
            {
                name: 'Ghostfly.dev',
                slug: 'ghostfly',
                image: '/assets/me.svg',
                repository: 'https://github.com/Ghostfly/ghostfly.dev/tree/master',
                status: 'published',
                url: 'https://www.ghostfly.dev',
                tags: ['Elara', 'LitElement', 'Github Pages']
            },
            {
                name: 'Cheno',
                slug: 'cheno',
                image: '/assets/projects/cheno.svg',
                status: 'published',
                repository: 'https://github.com/ghostfly/cheno-website',
                url: 'https://www.cheno.fr',
                tags: ['Elara', 'HTML5', 'CSS3', 'TypeScript']
            },
            {
                name: 'Dobrunia Design',
                slug: 'dobrunia',
                image: '/assets/projects/dobrunia.png',
                status: 'published',
                repository: 'https://github.com/ghostfly/dobrunia-design',
                url: 'https://www.dobruniadesign.com',
                tags: ['Élara', 'WordPress', 'Design']
            }
        ];
    }

    private async _onImageLoaded(event: CustomEvent){
        const img = event.target as HTMLImageElement;
        if(img){
            const animationConfig = fadeWith(500, true);
            img.classList.add('shown');
            const animation = img.animate(animationConfig.effect, animationConfig.options);
            await animation.finished;
            img.removeEventListener('load', this._onImageLoaded);
        }
    }

    public async connectedCallback(): Promise<void> {
        super.connectedCallback();
        await this.updateComplete;
        this.images = this.querySelectorAll('img');
        this.images.forEach((image) => {
            image.addEventListener('load', this._onImageLoaded);
        });
    }

    private _card(project: Project) {
        return html`
        <section class="project">
            <div class="hidden-content project-grid">
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
                    <div class="status ${project.repository ? 'enabled': 'disabled'}" @click=${() => {
                        if(project.repository){
                            Elara.Routing.redirect(project.repository);
                        }
                    }}>
                        ${project.repository ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" fill="none" width="24" height="24"/><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>` : html``}
                        ${project.status}
                    </div>
                </div>
                <div class="right ${project.image ? 'enabled': 'disabled'}" @click=${() => {
                    if(project.url){
                        Elara.Routing.redirect(project.url);
                    }
                }}>
                    ${project.image ? html`<img sizing="contain" src="${project.image}"></img>` : html``}
                </div>
            </div>
        </section>`;
    }

	public render() {
        return html`
        <div class="projects">
            <h1>${this.head.title}</h1>
            ${this.projects.map(project => this._card(project))}

            <a class="prev" @click=${() => Elara.Routing.navigate('about')}>< About</a>
            <a class="next" @click=${() => Elara.Routing.navigate('contact')}>> Contact</a>
        </div>
        `;
    }
}