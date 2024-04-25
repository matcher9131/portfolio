"use client";

import { useRef, useEffect } from "react";
import { delayStep } from "./const";

const Star = ({ refCallback }: { readonly refCallback: (instance: SVGSVGElement) => void }): JSX.Element => {
    return (
        <svg ref={refCallback} viewBox="-100 -100 200 200" className="w-6">
            <polygon
                fill="yellow"
                fillRule="nonzero"
                points="0,-100 -58.78,80.90 95.11,-30.90 -95.11,-30.90 58.78,80.90"
            />
        </svg>
    );
};

const animationTimeOffset = 150;

type SkillGroupProps = {
    readonly groupName: string;
    readonly skills: readonly { readonly name: string; readonly value: number }[];
    readonly animationStartTime: number;
};

const SkillGroup = ({ groupName, skills, animationStartTime }: SkillGroupProps): JSX.Element => {
    const starsRef = useRef<Map<string, SVGSVGElement> | null>(null);

    const getStarRefMap = (): Map<string, SVGSVGElement> => {
        if (starsRef.current == null) {
            starsRef.current = new Map();
        }
        return starsRef.current;
    };

    useEffect(() => {
        let delay = 0;
        for (const [, star] of getStarRefMap()) {
            star.animate(
                [
                    { transform: "scale(0)" },
                    {
                        transform: "scale(0)",
                        offset:
                            (animationTimeOffset + animationStartTime + delay) /
                            (animationTimeOffset + animationStartTime + delay + 500),
                    },
                    { transform: "scale(1)" },
                ],
                { duration: animationTimeOffset + animationStartTime + delay + 500 },
            );
            delay += delayStep;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // ページ読み込みのたびにアニメーションさせるので依存配列は空にする

    return (
        <>
            <h2>{groupName}</h2>
            <table className="table">
                <tbody>
                    {skills.map(({ name, value }) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td className="flex gap-x-1">
                                {new Array(value).fill(0).map((_, i) => (
                                    <Star
                                        key={i}
                                        refCallback={(node) => {
                                            const map = getStarRefMap();
                                            const key = `${name}-${i}`;
                                            map.set(key, node);

                                            return () => {
                                                map.delete(key);
                                            };
                                        }}
                                    />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default SkillGroup;
