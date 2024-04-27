import { type Metadata } from "next";
import { getWorksPages } from "../_shared/pageProperties";
import { TransitionLink } from "../components/pageTransition/transitionLink";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const Works = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <h2>GitHub</h2>
            <iframe
                title="matcher9131/MultiTimer"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>Lineup</h2>
            <section className="flex gap-x-4">
                {getWorksPages().map((page) => (
                    <TransitionLink
                        key={page.path}
                        href={page.path}
                        className="card card-compact w-72 transition-all hover:-translate-y-1 hover:bg-base-200"
                    >
                        <figure>ここに画像</figure>
                        <div className="card-body">
                            <h2>{page.name}</h2>
                            <p>{page.description}</p>
                        </div>
                    </TransitionLink>
                ))}
            </section>
        </article>
    );
};

export default Works;
