"use client";

import { Cormorant_Garamond } from "next/font/google";
import { usePathname } from "next/navigation";
import { getPageName } from "../_shared/pageProperties";
import { classes } from "../util/classes";
import { TransitionLink } from "./pageTransition/transitionLink";

const contentFont = Cormorant_Garamond({
    weight: "500",
    subsets: ["latin"],
});

const Breadcrumb = (): JSX.Element | null => {
    const path = usePathname();
    // rootにはBreadcrumbを表示しない
    if (path === "/") return null;

    const segments = path.split("/").filter((s) => s !== "");
    const paths = [
        "/",
        ...segments.map(
            (
                (parent) => (child) =>
                    (parent += "/" + child)
            )(""),
        ),
    ];

    return (
        <nav className="breadcrumbs w-full">
            <ol className="ml-0 pl-0">
                {paths.map((element) => (
                    <li key={element}>
                        {element !== path ? (
                            <TransitionLink href={element} className={classes(contentFont.className, "text-xl")}>
                                {getPageName(element) ?? element}
                            </TransitionLink>
                        ) : (
                            <span className={classes(contentFont.className, "text-xl")}>
                                {getPageName(element) ?? element}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
