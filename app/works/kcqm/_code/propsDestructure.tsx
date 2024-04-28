import CodeBlock from "@/app/components/code/codeBlock";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeParameter from "@/app/components/code/codeHighlight/codeParameter";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeStatement from "@/app/components/code/codeHighlight/codeStatement";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeReactComponentAttribute from "@/app/components/code/codeReactComponentAttribute";
import CodeRow from "@/app/components/code/codeRow";

const PropsDestructure = (): JSX.Element => {
    // prettier-ignore
    return <CodeBlock language="TypeScript">
        <CodeRow>
            <CodeKeyword>const</CodeKeyword>{" "}<CodeFunction>FooButton</CodeFunction>{" = ({ "}<CodeProperty>text</CodeProperty>{", "}<CodeProperty>onClick</CodeProperty>{" }: "}<CodeType>FooButtonProps</CodeType>{") => {"}
        </CodeRow>
        <CodeRow indent={1}>
            <CodeStatement>return</CodeStatement>{" "}
                {"<"}<CodeKeyword>button</CodeKeyword>
                    {" "}<CodeReactComponentAttribute name="onClick"><CodeParameter>onClick</CodeParameter></CodeReactComponentAttribute>
                {">"}
                    {"{"}<CodeParameter>text</CodeParameter>{"}"}
                {"</"}<CodeKeyword>button</CodeKeyword>{">"}
            {";"}
        </CodeRow>
        <CodeRow>{"};"}</CodeRow>
    </CodeBlock>;
};

export default PropsDestructure;
