import { type Metadata } from "next";
import { Fragment } from "react";
import { getWorksPages } from "../_shared/pageProperties";
import { TransitionLink } from "../components/pageTransition/transitionLink";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const Works = (): JSX.Element => {
    return (
        <>
            <article className="main-article">
                <h1>{pageProperties.name}</h1>
                <h2>GitHub</h2>
                <iframe
                    title="matcher9131/MultiTimer"
                    src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131"
                    className="w-full max-w-screen-sm"
                ></iframe>

                <h2>作品一覧</h2>
                <dl className="leading-8 [&_dd]:pl-4">
                    {getWorksPages().map((page) => (
                        <Fragment key={page.path}>
                            <dt>
                                <TransitionLink href={page.path} className="link">
                                    {page.name}
                                </TransitionLink>
                            </dt>
                            <dd>{page.description}</dd>
                        </Fragment>
                    ))}
                </dl>
            </article>
        </>
    );
};

export default Works;
