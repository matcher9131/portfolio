import { type Metadata } from "next";
import Link from "next/link";
import { siteTitle } from "../page";
import { description as multiTimerDescription } from "./multitimer/page";
import { description as slideDescription } from "./slide/page";

export const metadata: Metadata = {
    title: `Wokrs - ${siteTitle}`,
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
                <dt>
                    <Link href="/works/multitimer" className="link">
                        MultiTimer
                    </Link>
                </dt>
                <dd>{multiTimerDescription}</dd>
                <dt>
                    <Link href="/works/slide" className="link">
                        Slide
                    </Link>
                </dt>
                <dd>{slideDescription}</dd>
            </dl>
        </article>
    );
};

export default Works;