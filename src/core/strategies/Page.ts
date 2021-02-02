import { LitElement } from 'lit-element';

export interface ElaraHelmet {
    title: string | null;
    description: string | null;
    type: string | null;
    image: string | null;
    slug: string | null;
}

export default class Page extends LitElement {
    public get head(): ElaraHelmet {
        return {
            title: null,
            description: null,
            type: null,
            image: null,
            slug: null
        };
    }

    createRenderRoot(): this {
        return this;
    }
}