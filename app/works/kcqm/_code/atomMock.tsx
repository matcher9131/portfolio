import CodeBlock from "@/app/components/code/codeBlock";
import CodeGenerics from "@/app/components/code/codeGenerics";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeParameter from "@/app/components/code/codeHighlight/codeParameter";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeStatement from "@/app/components/code/codeHighlight/codeStatement";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeRow from "@/app/components/code/codeRow";

const AtomMock = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock language="TypeScript">
            <CodeRow>
                <CodeComment>{"// 戻り値の型はpropsの各プロパティの型をRecoilStateで包んだもの"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeStatement>export</CodeStatement>{" "}
                <CodeKeyword>const</CodeKeyword>{" "}
                <CodeFunction>createAtomMock</CodeFunction>{" = "}
                <CodeKeyword>async</CodeKeyword>{" "}
                <CodeGenerics>
                    <CodeType>T</CodeType>{" "}<CodeKeyword>extends</CodeKeyword>{" "}<CodeType>object</CodeType>
                </CodeGenerics>
                {"("}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeParameter>path</CodeParameter>{": "}<CodeType>string</CodeType>{","}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeParameter>props</CodeParameter>{": "}<CodeType>T</CodeType>{","}
            </CodeRow>
            <CodeRow>
                {"): "}<CodeType>Promise</CodeType>
                <CodeGenerics>
                    {"{ "}
                        <CodeKeyword>readonly</CodeKeyword>{" ["}
                            <CodeType>K</CodeType>{" "}<CodeKeyword>in</CodeKeyword>{" "}<CodeKeyword>keyof</CodeKeyword>{" "}<CodeType>T</CodeType>
                        {"]: "}
                        <CodeType>RecoilState</CodeType>
                        <CodeGenerics>
                            <CodeType>T</CodeType>{"["}<CodeType>K</CodeType>{"]"}
                        </CodeGenerics>
                    {" }"}
                </CodeGenerics>
                {" => {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>vi</CodeProperty>{"."}<CodeFunction>doUnmock</CodeFunction>{"("}<CodeParameter>path</CodeParameter>{");"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>vi</CodeProperty>{"."}<CodeFunction>doMock</CodeFunction>{"("}<CodeParameter>path</CodeParameter>{", () =>"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeType>Object</CodeType>{"."}<CodeFunction>fromEntries</CodeFunction>{"("}
                    <CodeType>Object</CodeType>{"."}<CodeFunction>entries</CodeFunction>{"("}
                        <CodeParameter>props</CodeParameter>
                    {")."}<CodeFunction>map</CodeFunction>{"("}
                        {"(["}<CodeParameter>key</CodeParameter>{", "}<CodeParameter>value</CodeParameter>{"]) => "}
                        {"["}
                            <CodeParameter>key</CodeParameter>{", "}<CodeFunction>atom</CodeFunction>{"({ "}
                                <CodeParameter>key</CodeParameter>{", "}<CodeProperty>default</CodeProperty>{": "}<CodeParameter>value</CodeParameter>
                            {" })"}
                        {"]"}
                    {")"}
                {"),"}
            </CodeRow>
            <CodeRow indent={1}>
                {");"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>return</CodeStatement>{" "}<CodeStatement>await</CodeStatement>{" "}<CodeFunction>import</CodeFunction>{"("}<CodeParameter>path</CodeParameter>{");"}
            </CodeRow>
            <CodeRow>{"};"}</CodeRow>
        </CodeBlock>
    );
};

export default AtomMock;
