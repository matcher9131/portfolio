import CodeBlock from "@/app/components/code/codeBlock";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/components/code/codeRow";

const TemplateEffect = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock fileName="template.tsx" language="TypeScript">
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeVariable>pathname</CodeVariable>{" = "}<CodeFunction>usePathname</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" { "}<CodeFunction>animateAfterTransition</CodeFunction>{" } = "}<CodeFunction>usePageTransitionAnimation</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow></CodeRow>
            <CodeRow>
                <CodeFunction>useEffect</CodeFunction>{"(() => {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeFunction>animateAfterTransition</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow>
                {"}, ["}<CodeVariable>pathname</CodeVariable>{", "}<CodeFunction>animateAfterTransition</CodeFunction>{"]"}{");"}
            </CodeRow>
        </CodeBlock>
    );
};

export default TemplateEffect;
