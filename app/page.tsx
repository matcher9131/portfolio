import { type Metadata } from "next";
import { siteTitle } from "./_shared/const";
import { TransitionLink } from "./components/pageTransition/transitionLink";

export const metadata: Metadata = {
    title: siteTitle,
};

const Home = (): JSX.Element => {
    return (
        <main>
            <TransitionLink href="/works">Works</TransitionLink>
        </main>
    );
};

export default Home;
