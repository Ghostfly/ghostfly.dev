import { property, css, CSSResult, html } from 'lit-element';

import Elara from '../core/elara';
import PureElement from '../core/strategies/Element';
import { fadeWith } from '../core/animations';

import Page from '../core/strategies/Page';

class Profile extends PureElement implements Elara.LoadableElement {
    public static readonly is: string = 'ui-profile';

    @property({type: String, reflect: true})
    public route: string;

    @property({type: Boolean, reflect: true})
    public loaded = false;

    private _hashChangeListener: () => void;

    public connectedCallback(): void {
        super.connectedCallback();

        this._hashChangeListener = this._onHashChange.bind(this);
        window.addEventListener('hashchange', this._hashChangeListener);
    }

    private _onProfilePictureLoaded(event: CustomEvent){
        const img = event.target as HTMLImageElement;
        if(img){
            const animation = fadeWith(500, true);
            img.animate(animation.effect, animation.options);
            img.classList.add('shown');
            img.removeEventListener('load', this._onProfilePictureLoaded);
        }
    }

    public async firstUpdated(){
        try {
            this.picture.addEventListener('load', this._onProfilePictureLoaded);
            const backgroundURL = await Elara.UI.processing.toDataURL('https://source.unsplash.com/collection/1727869/1366x768');
            this.loaded = true;
            this.container.style.backgroundImage =`url('${backgroundURL}')`;
            if(this.picture.complete){
                this._onProfilePictureLoaded(
                    {
                        target: this.picture, 
                        detail: {
                            value: true
                        }
                    } as unknown as CustomEvent
                );
                return;
            }
        } catch(err){
            const fallbackURL = await Elara.UI.processing.toDataURL('/assets/fallback.jpeg');

            this.container.style.backgroundImage =`url('${fallbackURL}')`;
            this.loaded = true;
        }

    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();

        window.removeEventListener('hashchange', this._hashChangeListener);
    }

    private _onHashChange(event: HashChangeEvent): void {
        const route = Elara.Routing.hashChange(event);
        this.route = route;
    }

    public static get styles(): CSSResult[] {
        return [
        ... Page.styles,
        css`
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

        img, .bio {
            z-index: 1;
        }

        img {
            visibility: hidden;
        }

        img.shown {
            visibility: visible;
        }
        
        .profile > .pic {
            width: 20vw;
            height: 20vw;
            border-radius: 3px;
        }
        svg {
            height: 30px;
            width: 30px;
            fill: white;
        }

        .night-switch {
            position: absolute;
            left: 20px;
            bottom: 20px;
            z-index: 3;
        }

        .day-night{
            cursor: pointer;
        }`];
    }

    public render() {
        return html`
        <div role="link" id="container" class="profile ${this.route === 'home' || !this.route ? '' : 'is-link'}" @click=${() => Elara.Routing.navigate('home')}>
            <img id="pic" class="pic" sizing="contain" src="/assets/me.svg"></img>
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

            <div class="night-switch" @click=${async (click: Event) => Elara.UI.nightSwitchClick(click, this)}>${this._nightToggle()}</div>
        </div>
        `;
    }

    private _nightToggle(){
        return Elara.UI.dayOrNight() === 'day' ? this._day : this._night;
    }

    private get _day(){
        return html`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <g><path d="M715.9,424.2c-18.2-33.3-52.9-67.9-99.8-84.8c-46.4-17.4-104.7-16-153.5,10.3c-49.9,24.7-85.2,80.2-84.9,136.3c-0.7,55.5,30.1,110.2,77.6,131.4c46.7,21.9,98.5,10.9,128.6-13.6c32.3-24.8,40.9-59.6,40.8-80.5c-0.3-39.2-21.3-74.5-52.8-88.1c-30.7-13.6-65.4-7.1-87.1,12.8c-23,19.8-27.9,54.2-13.9,78.8c12.2,26.4,49.8,36.3,72.7,17.6c-26.2,14.1-55.5-1.1-61.8-22.8c-8.3-21.3-0.7-45.6,16.3-57.4c34.6-28,98.6-3.4,97.8,58.7c0,15.2-6.3,40.3-29.7,58.1c-22.6,18.6-62.9,27.2-98.9,10.3c-36-15.6-61.3-59.5-60.9-104.9c0.1-45.9,27.9-90.3,69.6-111.2c41.3-22.3,90.7-23.5,130.1-8.8c39.9,14.5,68.9,43.1,84.9,72.3c34.9,59.1,22.8,104.8,23.7,103.7c-0.2-1.1-1,45.4-47.1,96.2c-43.8,48.5-135.9,104.2-229.3,72.5c-89-29.9-167.9-121.6-159.7-206.4c3.3-86.4,53.1-145.4,77.7-167.6c47.6-43.3,99-58.2,146.9-58c48.4,0.4,94.8,14.1,145.3,40.5c-45.5-34.1-91.4-56-144.3-61.6c-52.3-5.5-113.6,8.9-167.4,57.9c-27.9,25.3-83.1,90-87.1,187.7c-3.2,47.3,14.7,103.4,49.9,142.6c33,40.7,77.6,76.6,130,92.3c52,17.1,108.1,11.4,153-6.9C627.6,712.8,663.4,686,689,658c52.3-57.2,54.3-113.6,54.3-112.1C742.4,547.6,755.9,491.4,715.9,424.2z"/><path d="M858.7,141.3c0,0-48.5,22.6-92.4,66.5c-43.9,43.9-66.5,92.4-66.5,92.4s48.5-22.7,92.4-66.5C836.1,189.8,858.7,141.3,858.7,141.3z"/><path d="M141.3,858.7c0,0,48.5-22.7,92.4-66.5c43.9-43.9,66.5-92.4,66.5-92.4s-48.5,22.6-92.4,66.5C164,810.2,141.3,858.7,141.3,858.7z"/><path d="M886.2,415.4c59.9-16.1,103.8-46.7,103.8-46.7s-53.3-4.6-113.3,11.4c-59.9,16.1-103.8,46.7-103.8,46.7S826.3,431.5,886.2,415.4z"/><path d="M113.8,584.6C53.9,600.6,10,631.3,10,631.3s53.3,4.6,113.3-11.4c60-16.1,103.8-46.7,103.8-46.7S173.8,568.5,113.8,584.6z"/><path d="M772.9,573.1c0,0,43.9,30.7,103.8,46.7c60,16.1,113.3,11.4,113.3,11.4s-43.9-30.7-103.8-46.7C826.3,568.5,772.9,573.1,772.9,573.1z"/><path d="M227.1,426.9c0,0-43.9-30.7-103.8-46.7C63.3,364.1,10,368.7,10,368.7s43.9,30.7,103.8,46.7C173.8,431.5,227.1,426.9,227.1,426.9z"/><path d="M699.8,699.8c0,0,22.7,48.5,66.5,92.4c43.9,43.9,92.4,66.5,92.4,66.5s-22.7-48.5-66.5-92.4C748.3,722.4,699.8,699.8,699.8,699.8z"/><path d="M300.2,300.2c0,0-22.6-48.5-66.5-92.4c-43.9-43.9-92.4-66.5-92.4-66.5s22.6,48.5,66.5,92.4C251.7,277.5,300.2,300.2,300.2,300.2z"/><path d="M573.1,772.9c0,0-4.6,53.3,11.4,113.3c16.1,59.9,46.7,103.8,46.7,103.8s4.6-53.3-11.4-113.3C603.8,816.8,573.1,772.9,573.1,772.9z"/><path d="M426.9,227.1c0,0,4.6-53.3-11.4-113.3C399.4,53.9,368.7,10,368.7,10s-4.6,53.3,11.4,113.3C396.2,183.2,426.9,227.1,426.9,227.1z"/><path d="M380.1,876.7c-16.1,60-11.4,113.3-11.4,113.3s30.7-43.9,46.7-103.8c16.1-60,11.4-113.3,11.4-113.3S396.2,816.8,380.1,876.7z"/><path d="M619.9,123.3C635.9,63.3,631.3,10,631.3,10s-30.7,43.9-46.7,103.8c-16.1,59.9-11.4,113.3-11.4,113.3S603.8,183.2,619.9,123.3z"/></g>
        </svg>`;
    }

    private get _night(){
        return html`
        <svg class="day-night" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1277.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1277.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M6455 11974 c-1577 -130 -2666 -545 -3649 -1390 -336 -289 -783 -767 -981 -1050 -751 -1070 -1060 -2448 -870 -3874 40 -298 138 -727 230 -1010 276 -847 694 -1560 1293 -2207 161 -174 608 -585 767 -705 769 -581 1810 -969 2905 -1082 929 -96 1857 22 2664 341 547 216 1006 499 1516 937 152 130 529 511 650 655 658 793 1031 1650 1194 2746 43 288 62 468 96 910 25 331 25 347 -10 195 -329 -1462 -1508 -2919 -2925 -3615 -811 -398 -1692 -540 -2625 -425 -970 121 -1866 519 -2504 1113 -154 143 -421 429 -543 582 -512 641 -853 1400 -992 2210 -52 302 -65 473 -65 810 0 446 40 776 145 1200 122 492 350 1042 561 1357 700 1048 1337 1655 2082 1984 323 142 703 249 1071 299 257 36 254 41 -10 19z"/>
            </g>
        </svg>
        `;
    }

    private get picture(): HTMLImageElement {
        return this.shadowRoot.querySelector('#pic');
    }

    private get container(): HTMLDivElement {
        return this.shadowRoot.querySelector('#container');
    }
}
customElements.define(Profile.is, Profile);