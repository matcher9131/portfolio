import CodeBlock from "@/app/_components/code/codeBlock";
import CodeComment from "@/app/_components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/_components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/_components/code/codeHighlight/codeKeyword";
import CodeParameter from "@/app/_components/code/codeHighlight/codeParameter";
import CodeProperty from "@/app/_components/code/codeHighlight/codeProperty";
import CodeStatement from "@/app/_components/code/codeHighlight/codeStatement";
import CodeType from "@/app/_components/code/codeHighlight/codeType";
import CodeVariable from "@/app/_components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/_components/code/codeRow";

const AnimateBeforeTransition = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock fileName="usePageTransitionAnimation.ts" language="TypeScript">
            <CodeRow>
                <CodeComment>{"// refsはアニメーションさせるDOM要素のrefによる配列"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeFunction>animateBeforeTransition</CodeFunction>{" = "}{"() => {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>return</CodeStatement> <CodeType>Promise</CodeType>{"."}<CodeFunction>all</CodeFunction>{"("}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeVariable>refs</CodeVariable>{"."}<CodeFunction>map</CodeFunction>{"("}
                    {"("}<CodeParameter>ref</CodeParameter>{")"}{" => "}<CodeParameter>ref</CodeParameter>{"?."}<CodeProperty>current</CodeProperty>{"?."}<CodeFunction>animate</CodeFunction>{"("}
                        <CodeComment>{"/* 省略 */"}</CodeComment>
                    {")?."}<CodeProperty>finished</CodeProperty>
                {")"}
            </CodeRow>
            <CodeRow indent={1}>{");"}</CodeRow>
            <CodeRow>{"};"}</CodeRow>
        </CodeBlock>
    );
};

export default AnimateBeforeTransition;
