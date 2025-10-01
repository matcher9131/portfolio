import { type Metadata } from "next";
import { TransitionLink } from "../_components/pageTransition/transitionLink";
import ImgWithBasePath from "../_shared/imgWithBasePath";
import { getWorksPages } from "../_shared/pageProperties";
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
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {getWorksPages().map((page) => (
                    <TransitionLink
                        key={page.path}
                        href={page.path}
                        className="card card-compact w-full min-w-72 transition-all hover:-translate-y-1 hover:bg-base-200"
                    >
                        <figure className="py-4">
                            <ImgWithBasePath src={`${page.path}/icon.png`} alt="アイコン" width={96} height={96} />
                        </figure>
                        <div className="card-body">
                            <h2 className="no-decoration">{page.name}</h2>
                            <p>{page.description}</p>
                        </div>
                    </TransitionLink>
                ))}
            </section>
        </article>
    );
};

export default Works;
