"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { useRecoilState } from "recoil";
import Breadcrumb from "./components/breadcrumb";
import { isAnimatingState } from "./components/pageTransition/states";

type TemplateProps = {
    readonly children: ReactNode;
};

const Template = ({ children }: TemplateProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [, setIsAnimating] = useRecoilState(isAnimatingState);

    // URL遷移後のフェードイン
    useEffect(() => {
        setIsAnimating(false);
        if (ref?.current == null) return;
        ref.current.animate([{ opacity: 0 }, { opacity: 1 }], 200);
    }, [pathname, setIsAnimating]);

    return (
        <div ref={ref} className="container mx-auto flex flex-col max-sm:px-4">
            <header className="w-full">
                <Breadcrumb />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Template;
