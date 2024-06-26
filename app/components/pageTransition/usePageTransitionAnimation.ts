"use client";

import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { getKeyframesFactory } from "./pageTransitionKeyframes";
import { backgroundRefStates, numStars, starRefStates, clipRefState } from "./states";

const beforeTransitionDuration = 350;
const delayStep = 25;
const starUnit = 100 / numStars;

const afterTransitionClipPath = `polygon(${new Array(5)
    .fill(0)
    .map(
        (_, i) =>
            `calc(${-Math.sin(0.8 * i * Math.PI)} * max(100vw, 100vh) + 50vw) calc(${-Math.cos(0.8 * i * Math.PI)} * max(100vw, 100vh) + 50vh)`,
    )
    .join(", ")})`;

type UsePageTransitionAnimationReturnType = {
    readonly animateBeforeTransition: () => Promise<void>;
    readonly animateAfterTransition: () => Promise<void> | undefined;
    readonly resetBeforeTransitionAnimation: () => Promise<void>;
};

export const usePageTransitionAnimation = (): UsePageTransitionAnimationReturnType => {
    const starRefs = useRecoilValue(starRefStates);
    const backgroundRefs = useRecoilValue(backgroundRefStates);
    const clipRef = useRecoilValue(clipRefState);

    const animateBeforeTransition = useCallback((): Promise<void> => {
        const delays = starRefs
            .map((_, i) => ({ index: i, value: Math.random() }))
            .toSorted((a, b) => a.value - b.value)
            .map(({ index }) => index * delayStep);
        const keyframesProvider = getKeyframesFactory(Math.random());
        return Promise.all([
            ...starRefs.map(
                (ref, i) =>
                    ref?.current?.animate(keyframesProvider.getStarKeyframes(i), {
                        duration: beforeTransitionDuration,
                        delay: delays[i],
                        fill: "forwards",
                    })?.finished,
            ),
            ...backgroundRefs.map(
                (ref, i) =>
                    ref?.current?.animate(keyframesProvider.getBackgroundKeyframes(i), {
                        duration: beforeTransitionDuration,
                        delay: delays[i],
                        fill: "forwards",
                    })?.finished,
            ),
        ]).then(() => {});
    }, [backgroundRefs, starRefs]);

    const animateAfterTransition = useCallback((): Promise<void> | undefined => {
        return clipRef?.current
            ?.animate(
                [
                    {
                        clipPath: "polygon(50vw 50vh, 50vw 50vh, 50vw 50vh, 50vw 50vh, 50vw 50vh)",
                    },
                    {
                        clipPath: afterTransitionClipPath,
                        offset: 0.99,
                    },
                    {
                        clipPath: "none",
                    },
                ],
                {
                    duration: 150,
                    fill: "forwards",
                    easing: "ease-in",
                },
            )
            ?.finished?.then(() => {});
    }, [clipRef]);

    // 単にHTMLElement.styleを設定するだけでは効かないのでanimateさせる
    const resetBeforeTransitionAnimation = useCallback((): Promise<void> => {
        return Promise.all([
            ...starRefs.map(
                (ref) =>
                    ref?.current?.animate([{ left: 0, top: `${-starUnit}vw` }], {
                        duration: 1,
                        fill: "forwards",
                    })?.finished,
            ),
            ...backgroundRefs.map(
                (ref) =>
                    ref?.current?.animate([{ left: 0, top: `${-starUnit}vw`, height: 0 }], {
                        duration: 1,
                        fill: "forwards",
                    })?.finished,
            ),
        ]).then(() => {});
    }, [backgroundRefs, starRefs]);

    return {
        animateBeforeTransition,
        animateAfterTransition,
        resetBeforeTransitionAnimation,
    };
};
