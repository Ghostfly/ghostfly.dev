import {
    html, customElement, css, property, LitElement
} from 'lit-element';

@customElement('elara-spinner')
export class ElaraSpinner extends LitElement {
    @property({type: Boolean, reflect: false})
    public active = true;

    public static get styles(){
        return css`
        :host {
          height: 100%;
          width: 100%;
        }

        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
        }

        .dots {
          width: 6px;
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          grid-column-gap: 5px;
          animation: ellipsis steps(3, end) 1.8s infinite;
          overflow: hidden;
        }

        .text {
          position: absolute;
          left: 9.5em;
          font-size: 1.5em;
        }

        .dot {
          background: #1f1300;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        @keyframes ellipsis {
          to {
            width: 40px;
          }
        }        
        `;
    }

    public render() {
        return this.active ? html`
        <div class="container">
          <span class="text">Loading</span>
          <span class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </div>` : html``;
    }
}