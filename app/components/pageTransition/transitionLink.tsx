"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { useRecoilState } from "recoil";
import { isAnimatingAtom } from "../../_models/pageTransitionAnimation/atoms";
import { usePageTransitionAnimation } from "./usePageTransitionAnimation";

// なぜnext.jsはこっちのほうをexportしないのか…
type TransitionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & { readonly children: ReactNode };

export const TransitionLink = ({ children, href, ...props }: TransitionLinkProps): JSX.Element => {
    const router = useRouter();
    const { animate } = usePageTransitionAnimation();
    const [isAnimating, setIsAnimating] = useRecoilState(isAnimatingAtom);
    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>): Promise<void> => {
        e.preventDefault();
        if (isAnimating) return;

        setIsAnimating(true);
        await animate();
        router.push(href.toString());
        setIsAnimating(false);
    };

    return (
        <Link {...props} href={href} onClick={handleClick}>
            {children}
        </Link>
    );
};
