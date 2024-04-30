import CodeBlock from "@/app/components/code/codeBlock";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeStringLiteral from "@/app/components/code/codeHighlight/codeStringLiteral";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/components/code/codeRow";

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
