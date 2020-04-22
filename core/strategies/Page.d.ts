import { LitElement } from 'lit-element';
export default class Page extends LitElement {
    get head(): {
        title: any;
        description: any;
        type: any;
        image: any;
        slug: any;
    };
    createRenderRoot(): this;
}
