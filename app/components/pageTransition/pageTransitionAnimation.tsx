"use client";

import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { backgroundRefsAtom, starRefsAtom } from "../../_models/pageTransitionAnimation/atoms";

// eslint-disable-next-line react/display-name
const Star = forwardRef<SVGSVGElement>((_, ref): JSX.Element => {
    return (
        <svg ref={ref} viewBox="-100 -100 200 200" className="absolute -top-[10vw] h-[10vw] w-[10vw]">
            <polygon
                fill="yellow"
                fillRule="nonzero"
                points="0,-100 -58.78,80.90 95.11,-30.90 -95.11,-30.90 58.78,80.90"
            />
        </svg>
    );
});

// eslint-disable-next-line react/display-name
const Background = forwardRef<HTMLDivElement>((_, ref): JSX.Element => {
    return <div ref={ref} className="absolute -top-[10vw] h-0 w-[10vw] bg-base-100"></div>;
});

const PageTransitionAnimation = (): JSX.Element => {
    const starRefs = useRecoilValue(starRefsAtom);
    const backgroundRefs = useRecoilValue(backgroundRefsAtom);

    return (
        <>
            {starRefs.map((_, i) => (
                <Star key={i} ref={starRefs[i]} />
            ))}
            {backgroundRefs.map((_, i) => (
                <Background key={i} ref={backgroundRefs[i]} />
            ))}
        </>
    );
};

export default PageTransitionAnimation;
