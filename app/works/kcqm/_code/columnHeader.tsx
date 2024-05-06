import CodeBlock from "@/app/_components/code/codeBlock";
import CodeComment from "@/app/_components/code/codeHighlight/codeComment";
import CodeProperty from "@/app/_components/code/codeHighlight/codeProperty";
import CodeStringLiteral from "@/app/_components/code/codeHighlight/codeStringLiteral";
import CodeVariable from "@/app/_components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/_components/code/codeRow";

const ColumnHeader = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock language="HTML">
            <CodeRow>
                {"<"}<CodeVariable>td</CodeVariable>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>data-label</CodeProperty>{"="}<CodeStringLiteral>{`"前提任務"`}</CodeStringLiteral>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>className</CodeProperty>{"="}<CodeStringLiteral>{`"max-lg:before:content-[attr(data-label)]"`}</CodeStringLiteral>
            </CodeRow>
            <CodeRow>{">"}</CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"<!-- 前提任務の内容 -->"}</CodeComment>
            </CodeRow>
            <CodeRow>{"</"}<CodeVariable>td</CodeVariable>{">"}</CodeRow>
        </CodeBlock>
    );
};

export default ColumnHeader;
