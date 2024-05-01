import CodeBlock from "@/app/components/code/codeBlock";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeStatement from "@/app/components/code/codeHighlight/codeStatement";
import CodeStringLiteral from "@/app/components/code/codeHighlight/codeStringLiteral";
import CodeRow from "@/app/components/code/codeRow";

const AtomMockUsage = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock language="TypeScript">
            <CodeRow>
                <CodeStatement>await</CodeStatement>{" "}<CodeFunction>createAtomMock</CodeFunction>{"("}
                <CodeStringLiteral>{`"@/models/quest/atom"`}</CodeStringLiteral>{", {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"// プロパティ名は置き換え元ファイルでexportしている変数の宣言名、値は置き換える内容"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>questsAtom</CodeProperty>{": "}<CodeComment>{"/* 省略 */"}</CodeComment>
            </CodeRow>
            <CodeRow>{"});"}</CodeRow>
        </CodeBlock>
    );
};

export default AtomMockUsage;
