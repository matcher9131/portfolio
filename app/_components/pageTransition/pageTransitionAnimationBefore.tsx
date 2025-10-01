"use client";

import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { backgroundRefStates, starRefStates } from "./states";
import { classes } from "@/app/_util/classes";

// eslint-disable-next-line react/display-name
const Star = forwardRef<SVGSVGElement>((_, ref): JSX.Element => {
    return (
        <svg ref={ref} viewBox="-100 -100 200 200" className="absolute -top-[5vw] h-[5vw] w-[5vw] overflow-clip">
            <polygon
                fill="yellow"
                fillRule="nonzero"
                points="0,-100 -58.78,80.90 95.11,-30.90 -95.11,-30.90 58.78,80.90"
            />
            <polygon
                fill="orange"
                points="0,0 -22.45,-30.9 -95.11,-30.9 0,0 -36.33,11.8 -58.78,80.9 0,0 0,38.2 58.78,80.9 0,0 36.33,11.8 95.11,-30.9 0,0 22.45,-30.9 0,-100"
            />
        </svg>
    );
});

// eslint-disable-next-line react/display-name
const Background = forwardRef<HTMLDivElement>((_, ref): JSX.Element => {
    // widthは少し大きめに
    return <div ref={ref} className="absolute -top-[5vw] h-0 w-[6vw] overflow-clip bg-base-100"></div>;
});

const PageTransitionAnimationBefore = (): JSX.Element => {
    const starRefs = useRecoilValue(starRefStates);
    const backgroundRefs = useRecoilValue(backgroundRefStates);

    return (
        <div
            className={classes(
                "fixed",
                "h-full",
                "w-full",
                "z-10",
                "overflow-hidden",
                "bg-transparent",
                "pointer-events-none",
            )}
        >
            {backgroundRefs.map((_, i) => (
                <Background key={i} ref={backgroundRefs[i]} />
            ))}
            {starRefs.map((_, i) => (
                <Star key={i} ref={starRefs[i]} />
            ))}
        </div>
    );
};

export default PageTransitionAnimationBefore;
