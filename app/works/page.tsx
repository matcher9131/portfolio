import { type Metadata } from "next";
import Link from "next/link";
import { getWorks } from "../_shared/pageSummaries";
import { siteTitle } from "@/app/_shared/const";

export const metadata: Metadata = {
    title: `Works - ${siteTitle}`,
};

const Works = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>Works</h1>
            <h2>GitHub</h2>
            <iframe
                title="matcher9131/MultiTimer"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>作品一覧</h2>
            <dl className="leading-8 [&_dd]:pl-4">
                {getWorks().map((work) => (
                    <>
                        <dt>
                            <Link href={work.path} className="link">
                                {work.name}
                            </Link>
                        </dt>
                        <dd>{work.description}</dd>
                    </>
                ))}
            </dl>
        </article>
    );
};

export default Works;
