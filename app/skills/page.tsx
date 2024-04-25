import { delayStep } from "./const";
import { pageProperties } from "./properties";
import SkillGroup from "./skillGroup";

const skillDictionary = [
    {
        groupName: "Languages",
        skills: [
            { name: "C#", value: 5 },
            { name: "TypeScript", value: 5 },
            { name: "JavaScript", value: 5 },
            { name: "Google Apps Script", value: 5 },
            { name: "HTML", value: 5 },
            { name: "CSS", value: 4 },
            { name: "XAML", value: 4 },
            { name: "C++", value: 3 },
            { name: "Dart", value: 3 },
            { name: "Java", value: 2 },
            { name: "C", value: 2 },
            { name: "Rust", value: 1 },
        ],
    },
    {
        groupName: "Frameworks / Libraries",
        skills: [
            { name: "React", value: 5 },
            { name: "Tailwind CSS", value: 5 },
            { name: "WPF", value: 5 },
            { name: "styled-components", value: 5 },
            { name: "Vue.js", value: 4 },
            { name: "Recoil", value: 4 },
            { name: "Reactive Property", value: 4 },
            { name: "Flutter", value: 3 },
        ],
    },
    {
        groupName: "Environments / Tools",
        skills: [
            { name: "Node.js", value: 5 },
            { name: "Deno", value: 5 },
            { name: "Git / GitHub", value: 4 },
            { name: "Vite", value: 4 },
            { name: "ESLint", value: 4 },
            { name: "Webpack", value: 2 },
        ],
    },
];

const skillDictionaryWithAnimationStartTime = skillDictionary
    .reduce(
        (acc, group) => [
            ...acc,
            {
                ...group,
                animationStartTime:
                    acc[acc.length - 1].animationStartTime +
                    acc[acc.length - 1].skills.reduce((sum, { value }) => sum + value * delayStep, 0),
            },
        ],
        [{ groupName: "dummy", skills: [] as { name: string; value: number }[], animationStartTime: 0 }],
    )
    .toSpliced(0, 1);

const Skills = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            {skillDictionaryWithAnimationStartTime.map((props) => (
                <SkillGroup key={props.groupName} {...props} />
            ))}
        </article>
    );
};

export default Skills;
