/**
 * Custom element pour générer les vagues sous le header
 *
 * Creator grafikart
 */
export declare class Waves extends HTMLElement {
    static readonly is: string;
    target: HTMLElement;
    root: HTMLElement;
    position: string;
    container: HTMLElement;
    waves: Element;
    constructor();
    connectedCallback(): void;
    backgroundImage(): string | null;
    matchTarget(): void;
    onResize(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'wave-shape': Waves;
    }
}
