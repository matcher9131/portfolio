"use client";

import { useRecoilValue } from "recoil";
import { backgroundRefStates, numStars, starRefStates } from "./states";

const duration = 500;
const delayStep = 25;
// const wholeDuration = duration + numStars * delayStep;
const unit = 100 / numStars;
const backgroundTop = (-(1 + Math.cos((72 / 180) * Math.PI)) / 2) * unit;

type UsePageTransitionAnimationReturnType = {
    readonly animate: () => Promise<void>;
    readonly reset: () => Promise<void>;
};

export const usePageTransitionAnimation = (): UsePageTransitionAnimationReturnType => {
    const starRefs = useRecoilValue(starRefStates);
    const backgroundRefs = useRecoilValue(backgroundRefStates);

    const animate = (): Promise<void> => {
        const delays = starRefs
            .map((_, i) => ({ index: i, value: Math.random() }))
            .toSorted((a, b) => a.value - b.value)
            .map(({ index }) => index * delayStep);
        return Promise.all([
            ...starRefs.map((ref, i) => {
                const x = i * unit;
                return ref?.current?.animate(
                    [
                        {
                            left: `${x}vw`,
                            top: `${-unit}vw`,
                            // offset: 0,
                        },
                        {
                            left: `${x}vw`,
                            top: `100vh`,
                            // offset: duration / (wholeDuration - delays[i]),
                        },
                        // {
                        //     left: `${x}vw`,
                        //     top: `100vh`,
                        //     offset: 1,
                        // },
                    ],
                    {
                        // duration: wholeDuration - delays[i],
                        duration,
                        delay: delays[i],
                        fill: "forwards",
                    },
                )?.finished;
            }),
            ...backgroundRefs.map((ref, i) => {
                const x = i * unit;
                return ref?.current?.animate(
                    [
                        {
                            left: `${x}vw`,
                            top: `${backgroundTop}vw`,
                            height: 0,
                            // offset: 0,
                        },
                        {
                            left: `${x}vw`,
                            top: `${backgroundTop}vw`,
                            height: `calc(100vh + ${unit}vw)`,
                            // offset: duration / (wholeDuration - delays[i]),
                        },
                        // {
                        //     left: `${x}vw`,
                        //     top: `${backgroundTop}vw`,
                        //     height: `calc(100vh + ${unit}vw)`,
                        //     offset: 1,
                        // },
                    ],
                    {
                        // duration: wholeDuration - delays[i],
                        duration,
                        delay: delays[i],
                        fill: "forwards",
                    },
                )?.finished;
            }),
        ]).then(() => {});
    };

    const reset = (): Promise<void> => {
        return Promise.all([
            ...starRefs.map(
                (ref) =>
                    ref?.current?.animate([{ left: 0, top: `${-unit}vw` }], {
                        duration: 10,
                        fill: "forwards",
                    })?.finished,
            ),
            ...backgroundRefs.map(
                (ref) =>
                    ref?.current?.animate([{ left: 0, top: `${-unit}vw`, height: 0 }], {
                        duration: 10,
                        fill: "forwards",
                    })?.finished,
            ),
        ]).then(() => {});
    };

    return { animate, reset };
};
