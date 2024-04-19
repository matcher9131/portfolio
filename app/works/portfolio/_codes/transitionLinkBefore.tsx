import CodeBlock from "@/app/components/code/codeBlock";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeParameter from "@/app/components/code/codeHighlight/codeParameter";
import CodeStatement from "@/app/components/code/codeHighlight/codeStatement";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeReactComponentAttribute from "@/app/components/code/codeReactComponentAttribute";
import CodeRow from "@/app/components/code/codeRow";

const TransitionLinkBefore = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock fileName="TransitionLink.tsx" language="React">
            <CodeRow>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeFunction>TransitionLink</CodeFunction>{" = ({ "}
                <CodeParameter><span className="underline decoration-wavy decoration-red-500">children</span></CodeParameter>{", "}<CodeParameter>href</CodeParameter>{", "}{"..."}<CodeParameter>props</CodeParameter>{" }: "}<CodeType>LinkProps</CodeType>{") => {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeVariable>router</CodeVariable>{" = "}<CodeFunction>useRouter</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeKeyword>const</CodeKeyword>{" "}<CodeFunction>handleClick</CodeFunction>{" = ("}<CodeParameter>e</CodeParameter>{": "}<CodeType>React</CodeType>{"."}<CodeType>MouseEvent</CodeType>{"<"}<CodeType>HTMLAnchorElement</CodeType>{">) => {"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// Linkコンポーネントの中身はaタグなので、既定のアクションを起こさないようにする。"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeParameter>e</CodeParameter>{"."}<CodeFunction>preventDefault</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow></CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// ここでページ遷移前アニメーションを行う"}</CodeComment>
            </CodeRow>
            <CodeRow></CodeRow>
            <CodeRow indent={2}>
                <CodeVariable>router</CodeVariable>{"."}<CodeFunction>push</CodeFunction>{"("}<CodeParameter>href</CodeParameter>{"."}<CodeFunction>toString</CodeFunction>{"());"}
            </CodeRow>
            <CodeRow indent={1}>{"};"}</CodeRow>
            <CodeRow></CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>return</CodeStatement>{" ("}
            </CodeRow>
            <CodeRow indent={2}>
                {"<"}<CodeType>Link</CodeType>{" "}
                    <CodeReactComponentAttribute name="">{"..."}<CodeParameter>props</CodeParameter></CodeReactComponentAttribute>{" "}
                    <CodeReactComponentAttribute name="href"><CodeParameter>href</CodeParameter></CodeReactComponentAttribute>{" "}
                    <CodeReactComponentAttribute name="onClick"><CodeFunction>handleClick</CodeFunction></CodeReactComponentAttribute>
                {">"}
            </CodeRow>
            <CodeRow indent={3}>
                {"{"}<CodeParameter>children</CodeParameter>{"}"}
            </CodeRow>
            <CodeRow indent={2}>
                {"</"}<CodeType>Link</CodeType>{">"}
            </CodeRow>
            <CodeRow indent={1}>
                {");"}
            </CodeRow>
            <CodeRow>
                {"};"}
            </CodeRow>
        </CodeBlock>
    );
};

export default TransitionLinkBefore;
