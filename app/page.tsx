import { type Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { siteTitle } from "./_shared/const";
import { getChildPages } from "./_shared/pageProperties";
import { TransitionLink } from "./components/pageTransition/transitionLink";
import { classes } from "./util/classes";

const titleFont = Cormorant_Garamond({
    weight: "700",
    subsets: ["latin"],
});

const contentFont = Cormorant_Garamond({
    weight: "500",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteTitle,
};

const Home = (): JSX.Element => {
    return (
        <main className="flex flex-col items-center">
            <h1 className={classes(titleFont.className, "w-full", "text-6xl", "text-center", "border-none", "py-40")}>
                {siteTitle}
            </h1>
            <ul className="mx-0 flex w-full max-w-screen-lg list-none justify-around px-0">
                {getChildPages().map(({ name, path }) => (
                    <li key={name}>
                        <TransitionLink
                            href={path}
                            className={classes(
                                contentFont.className,
                                "relative",
                                "inline-block",
                                "text-3xl",
                                "transition-all",
                                "after:absolute",
                                "after:left-0",
                                "after:bottom-0",
                                "after:w-full",
                                "after:h-[2px]",
                                "after:bg-base-content",
                                "after:transition-all",
                                "after:scale-x-0",
                                "after:origin-top",
                                "after:hover:scale-x-100",
                            )}
                        >
                            {name}
                        </TransitionLink>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
