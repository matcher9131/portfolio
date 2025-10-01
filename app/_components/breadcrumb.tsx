"use client";

import { usePathname } from "next/navigation";
import { getPageName } from "../_shared/pageProperties";
import { TransitionLink } from "./pageTransition/transitionLink";

const Breadcrumb = (): JSX.Element | null => {
    const path = usePathname();
    // rootにはBreadcrumbを表示しない
    if (path === "/") return null;

    const segments = ["", ...path.split("/").filter((s) => s !== "")];
    const paths = segments.map(
        (
            (parent) => (child) =>
                (parent += child + "/")
        )(""),
    );

    return (
        <nav className="breadcrumbs w-full">
            <ol className="ml-0 pl-0">
                {paths.map((element) => {
                    const text = getPageName(element) ?? element;
                    return (
                        <li key={element}>
                            {element !== path ? (
                                <TransitionLink href={element}>{text}</TransitionLink>
                            ) : (
                                <span>{text}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
