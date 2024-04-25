import { type Metadata } from "next";
import { siteTitle } from "./_shared/const";
import { getChildPages } from "./_shared/pageProperties";
import { TransitionLink } from "./components/pageTransition/transitionLink";

export const metadata: Metadata = {
    title: siteTitle,
};

const Home = (): JSX.Element => {
    return (
        <main className="flex gap-x-3">
            {getChildPages().map(({ name, path }) => (
                <TransitionLink key={name} href={path}>
                    {name}
                </TransitionLink>
            ))}
        </main>
    );
};

export default Home;
