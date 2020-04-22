import { html, customElement } from 'lit-element';

import Page from '../core/strategies/Page';

import './contact';
import { Elara } from '../core/elara';

@customElement('ui-about')
export class About extends Page {
    public get head(){
        return {
            title: 'About',
            description: '',
            type: 'page',
            image: '',
            slug: '#!about'
        };
    }

	public render() {
        return html`
        <div class="about">
            <h1>${this.head.title}</h1>
            <div class="row">
                <h2>Passionate since my childhood</h2>
                <div>When I was about six years old, I tried to bring back to life abandoned computers, often succeeding which allowed me to present myself in a computer store for internship opening my eyes on IT in general and offering me a significant view on reality." </div>
            </div>
            <div class="row">
                <h2>And after 12 years old</h2>
                <div>I realized the importance of IT for me, created my first website (Cheno.fr) which has been refurbished since, and discovered gradually that creation / design of interfaces, websites, apps and any other creative project was what I always sought, setting my future goals in life. After that, I tried as much as possible to learn by myself the computer science logic." </div>
            </div>
            <div class="row">
                <h2>Towards studies</h2>
                <div>
                    <p>After a rather unusual path, I ended up in a post baccalauréat IT diploma called BTS SIO, successfully validated. Bringing me to Miage, combining my computer aspirations, and my attraction for entrepreneurship. I've always dreamed of building my own business, in Nice, Holland.. Giving me the opportunity to create my own job and keep my creativity as sharp as possible. Just stayin' motivated.</p><p>Besides if you want to read it, here is my current 
                    <a role="link" class="cv" @click=${() => Elara().router.redirect('/assets/resume.pdf')}>CV</a> (Update in progress).</p>
                </div>
            </div>
            <div class="pagination">
                <a class="prev" @click=${() => Elara().router.navigate('home')}>< Work</a>
                <a class="next" @click=${() => Elara().router.navigate('projects')}>> Projects</a>
            </div>
        </div>
        `;
    }
}

declare global {
	interface HTMLElementTagNameMap {
		'ui-about': About;
	}
}