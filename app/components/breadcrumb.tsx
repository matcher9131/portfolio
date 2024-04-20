"use client";

// import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageName } from "../_shared/pageProperties";
import { TransitionLink } from "./pageTransition/transitionLink";

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
        <nav className="breadcrumb w-full">
            <ol className="ml-0 flex list-none pl-0">
                {paths.map((element) => (
                    <li
                        key={element}
                        className="before:mx-3 before:content-['>'] first-of-type:before:mx-0 first-of-type:before:content-['']"
                    >
                        {element !== path ? (
                            <TransitionLink href={element} className="link">
                                {getPageName(element) ?? element}
                            </TransitionLink>
                        ) : (
                            <span>{getPageName(element) ?? element}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
