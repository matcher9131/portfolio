"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { useRecoilState } from "recoil";
import { isAnimatingState } from "./states";
import { usePageTransitionAnimation } from "./usePageTransitionAnimation";

// なぜNext.jsはこっちのほうをexportしないのか…
type TransitionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & { readonly children: ReactNode };

export const TransitionLink = ({ children, href, ...props }: TransitionLinkProps): JSX.Element => {
    const router = useRouter();
    const { animate, reset } = usePageTransitionAnimation();
    const [isAnimating, setIsAnimating] = useRecoilState(isAnimatingState);
    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>): Promise<void> => {
        e.preventDefault();
        if (isAnimating) return;

        await reset();
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
