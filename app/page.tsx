import { type Metadata } from "next";
import Link from "next/link";
import { siteTitle } from "./_shared/const";

export const metadata: Metadata = {
    title: siteTitle,
};

const Home = (): JSX.Element => {
    return (
        <main>
            <Link href="/works">Works</Link>
        </main>
    );
};

export default Home;
