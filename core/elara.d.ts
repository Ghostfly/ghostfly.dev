import { MenuElement } from '../atoms/menu';
export interface Root extends HTMLElement {
    loadables: ReadonlyArray<string>;
    links: ReadonlyArray<{
        name: string;
        route: string;
    }>;
    menu(isHide: boolean): Promise<void>;
    show(route: string): Promise<void>;
}
export interface UpdatableElement extends HTMLElement {
    requestUpdate(name?: PropertyKey, oldValue?: unknown): Promise<unknown>;
}
export interface LoadableElement extends UpdatableElement {
    loaded: boolean;
}
export declare function Elara(): import("../elara-app").ElaraApp;
export declare function bootstrap(loadables: string[], host: HTMLElement): Promise<any[]>;
export declare function load(route: string, content: HTMLElement, menu: MenuElement, menuFade: Animation | null): Promise<void>;
export declare function Router(): {
    redirect: (url: string, target?: string) => boolean;
    navigate: (route: string) => boolean;
    hashChange(event: HashChangeEvent): string;
};
/**
* Convert a remote url to an image data-url
*
* @param src remote url
*/
export declare function toDataURL(src: string): Promise<string>;
