"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Breadcrumb from "./components/breadcrumb";
import { clipRefState, isAnimatingState } from "./components/pageTransition/states";
import { usePageTransitionAnimation } from "./components/pageTransition/usePageTransitionAnimation";

type TemplateProps = {
    readonly children: ReactNode;
};

const Template = ({ children }: TemplateProps): JSX.Element => {
    const ref = useRecoilValue(clipRefState);
    const pathname = usePathname();
    const [, setIsAnimating] = useRecoilState(isAnimatingState);
    const { resetBeforeTransitionAnimation, animateAfterTransition } = usePageTransitionAnimation();

    // URL遷移後のアニメーション
    useEffect(() => {
        setIsAnimating(false);
        resetBeforeTransitionAnimation();
        animateAfterTransition();
    }, [pathname, setIsAnimating]);

    return (
        <div ref={ref}>
            <div className="container mx-auto flex flex-col max-sm:px-4">
                <header className="w-full">
                    <Breadcrumb />
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Template;
