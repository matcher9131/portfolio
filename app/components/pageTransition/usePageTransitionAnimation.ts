"use client";

import { useRecoilValue } from "recoil";
import { backgroundRefsAtom, starRefsAtom } from "../../_models/pageTransitionAnimation/atoms";

type UsePageTransitionAnimationReturnType = {
    readonly animate: () => Promise<void>;
};

export const usePageTransitionAnimation = (): UsePageTransitionAnimationReturnType => {
    const starRefs = useRecoilValue(starRefsAtom);
    const backgroundRefs = useRecoilValue(backgroundRefsAtom);
    const animate = (): Promise<void> => {
        const delays = starRefs.map(() => Math.random() * 500);
        // TODO: delayのばらつきにより先に初期位置へ戻ってしまうものがあるので終わりを合わせる
        return Promise.all([
            ...starRefs.map(
                (ref, i) =>
                    ref?.current?.animate(
                        [
                            { transform: `translate(${10 * i}vw, -10vw)`, zIndex: 10 },
                            { transform: `translate(${10 * i}vw, 110vw)`, zIndex: 10 },
                        ],
                        {
                            duration: 1000,
                            delay: delays[i],
                        },
                    )?.finished,
            ),
            ...backgroundRefs.map((ref, i) =>
                ref?.current?.animate(
                    [
                        { left: `${i * 10}vw`, height: 0, zIndex: 9 },
                        { left: `${i * 10}vw`, height: "120vw", zIndex: 9 },
                    ],
                    {
                        duration: 1000,
                        delay: delays[i],
                    },
                ),
            ),
        ]).then(() => {});
    };

    return { animate };
};
