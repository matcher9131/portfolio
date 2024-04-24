import SkillGraphItem from "./skillGraphItem";

const Skills = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>Skills</h1>
            <h2>Languages</h2>
            <dl>
                <SkillGraphItem name="C#" value={5} />
                <SkillGraphItem name="TypeScript" value={5} />
                <SkillGraphItem name="JavaScript" value={5} />
                <SkillGraphItem name="Google Apps Script" value={5} />
                <SkillGraphItem name="HTML" value={5} />
                <SkillGraphItem name="CSS" value={4} />
                <SkillGraphItem name="XAML" value={4} />
                <SkillGraphItem name="C++" value={3} />
                <SkillGraphItem name="Java" value={2} />
                <SkillGraphItem name="Dart" value={2} />
                <SkillGraphItem name="C" value={2} />
                <SkillGraphItem name="Rust" value={1} />
            </dl>

            <h2>Frameworks / Libraries</h2>
            <dl>
                <SkillGraphItem name="React" value={5} />
                <SkillGraphItem name="Tailwind CSS" value={5} />
                <SkillGraphItem name="WPF" value={5} />
                <SkillGraphItem name="Vue.js" value={4} />
                <SkillGraphItem name="Recoil" value={4} />
                <SkillGraphItem name="Reactive Property" value={4} />
            </dl>

            <h2>Environment / Tools</h2>
            <dl>
                <SkillGraphItem name="Node.js" value={5} />
                <SkillGraphItem name="deno" value={5} />
                <SkillGraphItem name="Git / GitHub" value={4} />
                <SkillGraphItem name="Vite" value={4} />
                <SkillGraphItem name="ESLint" value={4} />
                <SkillGraphItem name="Webpack" value={2} />
            </dl>
        </article>
    );
};

export default Skills;
