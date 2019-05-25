interface ElaraAnimation {
    effect: PropertyIndexedKeyframes;
    options: KeyframeAnimationOptions;
}
declare const _default: {
    pulseWith: (duration: number) => ElaraAnimation;
    fadeWith: (duration: number, enter: boolean) => ElaraAnimation;
};
export default _default;
