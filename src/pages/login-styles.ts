import { html } from 'lit-element';

export const styles = html`
  <style>
    paper-toast {
        z-index: 999;
    }

    [hidden]{
        display: none;
    }

    .login {
        display: flex;
        font-family: var(--elara-font-primary);
        flex-direction: column;
        justify-content: center;
        
        --paper-input-container-color: var(--elara-input-container);
        --paper-input-container-focus-color: var(--elara-input-focus);
        --paper-input-container-input-color: black;
    }

    @media (min-width: 1033px){
        .login {
            padding-right: 25%;
            padding-left: 25%;
        }
    }

    .login google-connect {
        margin-top: 1em;
    }

    .login paper-button {
        margin-top: 2em;
        color: white;
        background-color: var(--elara-primary);
        text-transform: none;
    }

    .login paper-button[disabled] {
        background-color: var(--elara-primary);
        opacity: .5;
    }

    .login paper-spinner {
        margin-top: 2em;
        margin-bottom: 2em;
        align-self: center;
    }

    .login .center {
        align-self: center;
    }

    .divider {
        border-top: 1px solid var(--elara-primary);
        text-align: center;
        border-bottom: none;
        border-left: none;
        border-right: none;
        width: 100%;
    }

    .divider::after {
        content: '§';
        display: inline-block;
        position: relative;
        top: -14px;
        padding: 0 10px;
        color: var(--elara-primary);
        font-size: 18px;
        transform: rotate(60deg);
    }
  </style>
`;