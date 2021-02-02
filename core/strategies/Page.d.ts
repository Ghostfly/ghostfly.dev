import { LitElement } from 'lit-element';
export interface ElaraHelmet {
    title: string | null;
    description: string | null;
    type: string | null;
    image: string | null;
    slug: string | null;
}
export default class Page extends LitElement {
    get head(): ElaraHelmet;
    createRenderRoot(): this;
}
