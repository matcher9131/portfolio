"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageName } from "../_shared/pageProperties";

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
        <nav className="breadcrumb">
            <ol className="ml-0 flex list-none flex-row">
                {paths.map((element) => (
                    <li key={element} className="before:mx-3 before:content-['>'] first-of-type:before:content-['']">
                        {element !== path ? (
                            <Link href={element} className="link">
                                {getPageName(element) ?? element}
                            </Link>
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
