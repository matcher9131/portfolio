"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Breadcrumb from "./_components/breadcrumb";
import { clipRefState, isAnimatingState } from "./_components/pageTransition/states";
import { usePageTransitionAnimation } from "./_components/pageTransition/usePageTransitionAnimation";

type TemplateProps = {
    readonly children: ReactNode;
};

const Template = ({ children }: TemplateProps): JSX.Element => {
    const ref = useRecoilValue(clipRefState);
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useRecoilState(isAnimatingState);
    const { resetBeforeTransitionAnimation, animateAfterTransition } = usePageTransitionAnimation();

    // ページ遷移後のアニメーション
    useEffect(() => {
        // ページ遷移前アニメーションをしていないときはページ遷移後アニメーションもしない
        if (!isAnimating) return;

        setIsAnimating(false);
        resetBeforeTransitionAnimation();
        animateAfterTransition();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, setIsAnimating, animateAfterTransition, resetBeforeTransitionAnimation]); // isAnimatingには依存しない

    return (
        <div ref={ref}>
            <div className="container mx-auto flex flex-col px-4">
                <header className="w-full">
                    <Breadcrumb />
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Template;
