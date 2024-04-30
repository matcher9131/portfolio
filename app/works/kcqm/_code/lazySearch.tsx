import CodeBlock from "@/app/components/code/codeBlock";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeNumberLiteral from "@/app/components/code/codeHighlight/codeNumberLiteral";
import CodeParameter from "@/app/components/code/codeHighlight/codeParameter";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/components/code/codeRow";

const LazySearch = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock fileName="useSearchInput.ts" language="TypeScript">
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" ["}<CodeVariable>timerId</CodeVariable>{", "}<CodeVariable>setTimerId</CodeVariable>{"] = "}<CodeFunction>useState</CodeFunction>{"("}<CodeNumberLiteral>0</CodeNumberLiteral>{");"}
            </CodeRow>
            <CodeRow>
                <CodeComment>{"// setSearchInputTextは検索に用いるStateのSetter"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeComment>{"// setSaerchInputTextRawはテキストボックスに表示するためのStateのSetter"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" { "}<CodeVariable>setSearchInputText</CodeVariable>{", "}<CodeVariable>setSaerchInputTextRaw</CodeVariable>{" } = "}<CodeFunction>useSearchInputText</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeFunction>onChange</CodeFunction>{" = "}<CodeFunction>useCallback</CodeFunction>{"("}
            </CodeRow>
            <CodeRow indent={1}>
                {"("}
                    <CodeParameter>e</CodeParameter>{": "}<CodeType>React</CodeType>{"."}<CodeType>ChangeEvent</CodeType>{"<"}<CodeType>HTMLInputElement</CodeType>{">"}
                {"): "}<CodeKeyword>void</CodeKeyword>{" => {"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// すでに走っているタイマーがあれば止める"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeFunction>clearTimeout</CodeFunction>{"("}<CodeVariable>timerId</CodeVariable>{");"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// テキストボックスに入力を反映させる"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeFunction>setSaerchInputTextRaw</CodeFunction>{"("}
                    <CodeVariable>e</CodeVariable>{"."}<CodeProperty>target</CodeProperty>{"."}<CodeProperty>value</CodeProperty>
                {");"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// 新しくタイマーを走らせて、200ミリ秒後に新たなテキストボックスの値を検索用のStateに反映させる"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeVariable>newTimerId</CodeVariable>{" = "}<CodeProperty>window</CodeProperty>{"."}<CodeFunction>setTimeout</CodeFunction>{"(() => {"}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeFunction>setSearchInputText</CodeFunction>{"("}
                    <CodeVariable>e</CodeVariable>{"."}<CodeProperty>target</CodeProperty>{"."}<CodeProperty>value</CodeProperty>
                {");"}
            </CodeRow>
            <CodeRow indent={2}>
                {"}, "}<CodeNumberLiteral>200</CodeNumberLiteral>{");"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeFunction>setTimerId</CodeFunction>{"("}<CodeVariable>newTimerId</CodeVariable>{");"}
            </CodeRow>
            <CodeRow indent={1}>{"},"}</CodeRow>
            <CodeRow indent={1}>
                {"["}<CodeVariable>timerId</CodeVariable>{", "}<CodeVariable>setSearchInputText</CodeVariable>{", "}<CodeVariable>setSaerchInputTextRaw</CodeVariable>{"],"}
            </CodeRow>
            <CodeRow>{");"}</CodeRow>
        </CodeBlock>
    );
};

export default LazySearch;
