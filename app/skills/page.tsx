"use client";

import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { skillDictionary, delayStep } from "./models";
import { pageProperties } from "./properties";
import SkillGroup from "./skillGroup";
import { skillStarsRefState } from "./states";

const animationTimeOffset = 150;

const Skills = (): JSX.Element => {
    const starsMap = useRecoilValue(skillStarsRefState);

    useEffect(() => {
        const stars = [...starsMap.values()];
        stars.sort((a, b) => {
            const aRect = a.getBoundingClientRect();
            const bRect = b.getBoundingClientRect();
            return aRect.top === bRect.top ? aRect.left - bRect.left : aRect.top - bRect.top;
        });
        stars.forEach((star, i) => {
            star.animate(
                [
                    { transform: "scale(0)", opacity: 1 },
                    {
                        transform: "scale(0)",
                        opacity: 1,
                        offset: (animationTimeOffset + i * delayStep) / (animationTimeOffset + i * delayStep + 500),
                    },
                    { transform: "scale(1)", opacity: 1 },
                ],
                { duration: animationTimeOffset + i * delayStep + 500, fill: "forwards" },
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // ページ読み込みのたびにアニメーションさせるので依存配列は空にする

    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <div className="mx-auto grid max-w-screen-md md:grid-cols-2">
                {skillDictionary.map((props) => (
                    <SkillGroup key={props.groupName} {...props} />
                ))}
            </div>
        </article>
    );
};

export default Skills;
