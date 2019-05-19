import { html } from 'lit-element';

export const styles = html`
  <style>
      .admin {
        user-select: none;
      }

      .tabs {
        width: 30%;
        height: 100%;
        min-height: 100px;
        padding: 0;
        float: left;
      }

      .tabs paper-item {
        cursor: pointer;
      }

      .content {
        background-color: var(--elara-lightgray);
        float: right;
        width: 70%;
        height: 100%;
        min-height: 85vh;
      }

      @media(min-width: 1033px){
        .tabs {
          width: 20%;
        }
        .content {
          width: 80%;
        }
      }

      .content > .inside {
          padding: 1em;
      }

      .divider {
        border-top: 1px solid var(--elara-primary);
        text-align: center;
        border-bottom: none;
        border-left: none;
        border-right: none;
        width: 100%;
        margin-top: 5em;
      }

      paper-input, paper-textarea {
        --paper-input-container-focus-color: var(--elara-primary);
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

      .align-right {
        float: right;
        clear: both;
      }

      .send {
        margin: 2em;
      }
  </style>
`;