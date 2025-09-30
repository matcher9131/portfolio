import { useRecoilValue } from "recoil";
import { classes } from "../_util/classes";
import { type SkillGroupItem } from "./models";
import { skillStarsRefState } from "./states";

const Star = ({ refCallback }: { readonly refCallback: (instance: SVGSVGElement) => void }): JSX.Element => {
    return (
        <svg ref={refCallback} viewBox="-100 -100 200 200" className="w-6 opacity-0">
            <polygon
                fill="yellow"
                fillRule="nonzero"
                points="0,-100 -58.78,80.90 95.11,-30.90 -95.11,-30.90 58.78,80.90"
            />
            <polygon
                fill="gold"
                points="0,0 -22.45,-30.9 -95.11,-30.9 0,0 -36.33,11.8 -58.78,80.9 0,0 0,38.2 58.78,80.9 0,0 36.33,11.8 95.11,-30.9 0,0 22.45,-30.9 0,-100"
            />
        </svg>
    );
};

const SkillGroup = ({ groupName, skills, isWide }: SkillGroupItem): JSX.Element => {
    const starsMap = useRecoilValue(skillStarsRefState);

    return (
        <section className={classes("mx-auto", isWide && "md:col-span-2")}>
            <h2 className="no-decoration text-center">{groupName}</h2>
            <table className={classes("grid", isWide && "md:grid-cols-2")}>
                <tbody className="contents">
                    {skills.map(({ name, value }) => (
                        <tr key={name} className="my-3 flex">
                            <td className="w-48 flex-1 px-3 text-right">{name}</td>
                            <td className="flex flex-1 gap-x-1 px-3" aria-label={`レベル${value}`}>
                                {new Array(value).fill(0).map((_, i) => (
                                    <Star
                                        key={i}
                                        refCallback={(node) => {
                                            const key = `${name}-${i}`;
                                            starsMap.set(key, node);

                                            return () => {
                                                starsMap.delete(key);
                                            };
                                        }}
                                    />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default SkillGroup;
