"use client";

import { useRecoilValue } from "recoil";
import { backgroundRefStates, numStars, starRefStates, clipRefState } from "./states";

const beforeTransitionDuration = 500;
const delayStep = 25;
const starUnit = 100 / numStars;
const backgroundTop = (-(1 + Math.cos((72 / 180) * Math.PI)) / 2) * starUnit;

const afterTransitionClipPath = new Array(5)
    .fill(0)
    .map(
        (_, i) =>
            `calc(${-Math.sin(0.8 * i * Math.PI)} * max(100vw, 100vh) + 50vw) calc(${Math.cos(0.8 * i * Math.PI)} * max(100vw, 100vh) + 50vh)`,
    )
    .join(", ");

type UsePageTransitionAnimationReturnType = {
    readonly animateBeforeTransition: () => Promise<void>;
    readonly animateAfterTransition: () => Promise<void> | undefined;
    readonly resetBeforeTransitionAnimation: () => Promise<void>;
    // readonly resetAfterTransitionAnimation: () => Promise<void> | undefined;
};

export const usePageTransitionAnimation = (): UsePageTransitionAnimationReturnType => {
    const starRefs = useRecoilValue(starRefStates);
    const backgroundRefs = useRecoilValue(backgroundRefStates);
    const clipRef = useRecoilValue(clipRefState);

    const animateBeforeTransition = (): Promise<void> => {
        const delays = starRefs
            .map((_, i) => ({ index: i, value: Math.random() }))
            .toSorted((a, b) => a.value - b.value)
            .map(({ index }) => index * delayStep);
        return Promise.all([
            ...starRefs.map((ref, i) => {
                const x = i * starUnit;
                return ref?.current?.animate(
                    [
                        {
                            left: `${x}vw`,
                            top: `${-starUnit}vw`,
                        },
                        {
                            left: `${x}vw`,
                            top: `100vh`,
                        },
                    ],
                    {
                        duration: beforeTransitionDuration,
                        delay: delays[i],
                        fill: "forwards",
                    },
                )?.finished;
            }),
            ...backgroundRefs.map((ref, i) => {
                const x = i * starUnit;
                return ref?.current?.animate(
                    [
                        {
                            left: `${x - 0.5}vw`,
                            top: `${backgroundTop}vw`,
                            height: 0,
                        },
                        {
                            left: `${x - 0.5}vw`,
                            top: `${backgroundTop}vw`,
                            height: `calc(100vh + ${starUnit}vw)`,
                        },
                    ],
                    {
                        duration: beforeTransitionDuration,
                        delay: delays[i],
                        fill: "forwards",
                    },
                )?.finished;
            }),
        ]).then(() => {});
    };

    const animateAfterTransition = (): Promise<void> | undefined => {
        return clipRef?.current
            ?.animate(
                [
                    {
                        // clipPath: "polygon(50vw 50vh, 50vw 50vh, 50vw 50vh, 50vw 50vh, 50vw 50vh)",
                        clipPath: "circle(0vw at 50vw 50vh)",
                    },
                    {
                        // clipPath: afterTransitionClipPath,
                        clipPath: "circle(max(100vw, 100vh) at 50vw 50vh)",
                        offset: 0.99,
                    },
                    {
                        clipPath: "none",
                    },
                ],
                {
                    duration: 500,
                    fill: "forwards",
                },
            )
            ?.finished?.then(() => {});
    };

    // 単にHTMLElement.styleを設定するだけでは効かないのでanimateさせる
    const resetBeforeTransitionAnimation = (): Promise<void> => {
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
    };

    // const resetAfterTransitionAnimation = (): Promise<void> | undefined => {
    //     return clipRef?.current
    //         ?.animate([{ clipPath: "none" }], { duration: 1, fill: "forwards" })
    //         ?.finished?.then(() => {});
    // };

    return {
        animateBeforeTransition,
        animateAfterTransition,
        resetBeforeTransitionAnimation,
        // resetAfterTransitionAnimation,
    };
};
