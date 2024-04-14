import Link from "next/link";
import { getPageName } from "../_shared/pageProperties";

type BreadcrumbProps = {
    readonly path: string;
};

const Breadcrumb = ({ path }: BreadcrumbProps): JSX.Element => {
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
        <nav>
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
