import { html } from 'lit-element';

export const styles = html`
  <style>
    .content {
      overflow-x: scroll;
      overflow-y: hidden;
      transition: opacity .6s;
      opacity: 1;
      margin: 0 10px;
    }

    .content.scroll-top {
      margin-top: 100px;
    }

    .content.full-width {
      margin: 0;
      padding: 0;
    }

    .content.transiting {
      opacity: 0;
    }

    @media (min-width: 1033px){}
  </style>
`;