export const delayStep = 25;

export type SkillGroupItem = {
    readonly groupName: string;
    readonly skills: readonly { readonly name: string; readonly value: number }[];
    readonly isWide?: boolean;
};

export const skillDictionary: SkillGroupItem[] = [
    {
        groupName: "Languages",
        skills: [
            { name: "C#", value: 5 },
            { name: "TypeScript", value: 5 },
            { name: "JavaScript", value: 5 },
            { name: "Google Apps Script", value: 5 },
            { name: "HTML", value: 5 },
            { name: "Python", value: 4 },
            { name: "C++", value: 4 },
            { name: "CSS", value: 4 },
            { name: "XAML", value: 4 },
            { name: "Dart", value: 3 },
            { name: "Java", value: 2 },
            { name: "C", value: 2 },
            { name: "Rust", value: 1 },
        ],
        isWide: true,
    },
    {
        groupName: "Frameworks / Libraries",
        skills: [
            { name: "React", value: 5 },
            { name: "Tailwind CSS", value: 5 },
            { name: "DaisyUI", value: 5 },
            { name: "styled-components", value: 5 },
            { name: "WPF", value: 5 },
            { name: "Reactive Property", value: 5 },
            { name: "Recoil", value: 5 },
            { name: "Jotai", value: 4 },
            { name: "Vue.js", value: 4 },
            { name: "Next.js", value: 4 },
            { name: "Flutter", value: 3 },
        ],
    },
    {
        groupName: "Environments / Tools",
        skills: [
            { name: "Deno", value: 5 },
            { name: "Node.js", value: 4 },
            { name: "Git / GitHub", value: 4 },
            { name: "Claude Code", value: 4 },
            { name: "GitHub Copilot", value: 4 },
            { name: "Vite", value: 4 },
            { name: "Vitest", value: 4 },
            { name: "ESLint", value: 4 },
            { name: "Supabase", value: 3 },
            { name: "Webpack", value: 2 },
        ],
    },
];
