import {
    html, customElement, css, property, LitElement
} from 'lit-element';

@customElement('elara-spinner')
export class ElaraSpinner extends LitElement {
    @property({type: Boolean, reflect: false})
    public active = true;

    public static get styles(){
        return css`
        html, body {
            margin:0;
            padding:0;
            height: 100%;
          }
          
          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .spinner.sm {
              width: 1rem;
              height: 1rem;
          }
          .spinner.md {
              width: 2rem;
              height: 2rem;
          }
          .spinner.lg {
              width: 3rem;
              height: 3rem;
          }
          .spinner.xl {
              width: 4rem;
              height: 4rem;
          }
          
          .spinner {
            -webkit-animation: rotator 1.4s linear infinite;
                    animation: rotator 1.4s linear infinite;
          }
          
          @-webkit-keyframes rotator {
            0% {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(270deg);
                      transform: rotate(270deg);
            }
          }
          
          @keyframes rotator {
            0% {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(270deg);
                      transform: rotate(270deg);
            }
          }
          .path {
            stroke-dasharray: 187;
            stroke-dashoffset: 0;
            -webkit-transform-origin: center;
                    transform-origin: center;
            -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
                    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
          }
          
          @-webkit-keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          
          @keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          @-webkit-keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              -webkit-transform: rotate(135deg);
                      transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              -webkit-transform: rotate(450deg);
                      transform: rotate(450deg);
            }
          }
          @keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              -webkit-transform: rotate(135deg);
                      transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              -webkit-transform: rotate(450deg);
                      transform: rotate(450deg);
            }
          }
          
        `;
    }

    public render() {
        return this.active ? html`
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>` : html``;
    }
}