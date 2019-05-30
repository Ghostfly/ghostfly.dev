import { LitElement } from 'lit-element';
import Elara from '../elara';
export default class Page extends LitElement implements Elara.Page {
    readonly head: {
        title: any;
        description: any;
        type: any;
        image: any;
        slug: any;
    };
    static readonly styles: import("lit-element").CSSResult[];
}