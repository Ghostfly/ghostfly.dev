/*
*/
import { html, TemplateResult } from 'lit-html';
import { LitElement } from 'lit-element';

import Elara from '../core/elara';

class About extends LitElement implements Elara.Element {
    public static readonly is: string = 'ui-about';

	public render(): void | TemplateResult {
        return html`
        <style>
        .about {
            margin-bottom: 2em;
        }
        </style>
        <div class="about">
            <h1>About</h1>
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
                    <p>After a rather unusual path, I ended up in a post baccalauréat IT diploma called BTS SIO, successfully validated. Bringing me to Miage, combining my computer aspirations, and my attraction for entrepreneurship. I've always dreamed of building my own business, in Nice, Holland.. Giving me the opportunity to create my own job and keep my creativity as sharp as possible. Just stayin' motivated.</p><p>Besides if you want to read it, here is my current <a href="/static/media/resume.240b6f64.pdf">CV</a>.</p>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define(About.is, About);