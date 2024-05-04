"use client";

import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useRef } from "react";
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

const Home = (): JSX.Element => {
    const itemsRef = useRef<Map<string, HTMLElement>>();

    const getMap = (): Map<string, HTMLElement> => {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    };

    useEffect(() => {
        if (itemsRef.current != null) {
            let delay = 0;
            const delayStep = 300;
            const duration = 1500;
            for (const element of itemsRef.current.values()) {
                element.animate(
                    [
                        { transform: "translateY(2em)", opacity: 0 },
                        {
                            transform: "translateY(2em)",
                            opacity: 0,
                            offset: delay / (duration + delay),
                            easing: "ease",
                        },
                        { transform: "translateY(0)", opacity: 1 },
                    ],
                    {
                        duration: duration + delay,
                    },
                );
                delay += delayStep;
            }
        }
    });

    return (
        <main className="flex flex-col items-center">
            <h1
                ref={(node) => {
                    const map = getMap();
                    if (node != null) {
                        map.set("/", node);
                    }
                    return () => {
                        map.delete("/");
                    };
                }}
                className={classes(titleFont.className, "w-full", "text-6xl", "text-center", "border-none", "py-40")}
            >
                {siteTitle}
            </h1>
            <ul className="mx-0 flex w-full max-w-screen-lg list-none justify-around px-0">
                {getChildPages().map(({ name, path }) => (
                    <li
                        key={path}
                        ref={(node) => {
                            const map = getMap();
                            if (node != null) {
                                map.set(path, node);
                            }
                            return () => {
                                map.delete(path);
                            };
                        }}
                    >
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
