interface ElaraAnimation {
    effect: PropertyIndexedKeyframes;
    options: KeyframeAnimationOptions;
}
export declare function pulseWith(duration: number): ElaraAnimation;
export declare function fadeWith(duration: number, enter: boolean): ElaraAnimation;
declare const _default: {
    pulseWith: typeof pulseWith;
    fadeWith: typeof fadeWith;
};
export default _default;
