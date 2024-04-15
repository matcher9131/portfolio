"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, forwardRef } from "react";

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

const PageTransition = (): JSX.Element => {
    // 順に初期化して配列に突っ込んでいるだけだから大丈夫のはず
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refs = new Array(10).fill(0).map(() => useRef<SVGSVGElement | null>(null));

    const pathname = usePathname();

    useEffect(() => {
        for (let i = 0; i < refs.length; ++i) {
            const star = refs[i].current;
            if (star == null) continue;
            star.animate(
                [
                    { transform: `translate(${10 * i}vw, -10vw)`, zIndex: 10 },
                    { transform: `translate(${10 * i}vw, 110vw)`, zIndex: 10 },
                ],
                {
                    duration: 1000,
                    delay: Math.random() * 500,
                },
            );
        }
    }, [pathname, refs]);

    return (
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            {refs.map((_, i) => (
                <Star key={i} ref={refs[i]} />
            ))}
        </div>
    );
};

export default PageTransition;
