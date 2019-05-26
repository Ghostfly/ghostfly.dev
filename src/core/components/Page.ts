import { LitElement } from 'lit-element';
import Elara from '../elara';

export default class Page extends LitElement implements Elara.Page {
    public get head(){
        return {
            title: null,
            description: null,
            type: null,
            image: null,
            slug: null
        };
    }

    public static get styles(){
        return [Elara.UI.typography.heading];
    }
}