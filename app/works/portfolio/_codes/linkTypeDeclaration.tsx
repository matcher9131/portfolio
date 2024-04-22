import CodeBlock from "@/app/components/code/codeBlock";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/components/code/codeRow";

export const LinkTypeDeclaration = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock language="TypeScript">
            <CodeRow>
                <CodeKeyword>declare</CodeKeyword>{" "}
                <CodeKeyword>const</CodeKeyword>{" "}
                <CodeVariable>Link</CodeVariable>{": "}
                <CodeType>React</CodeType>{"."}<CodeType>ForwardRefExoticComponent</CodeType>{"<"}
                <CodeType>Omit</CodeType>{"<"}
                <CodeType>React</CodeType>{"."}<CodeType>AnchorHTMLAttributes</CodeType>
                {"<"}<CodeType>HTMLAnchorElement</CodeType>{">, "}
                <CodeKeyword>keyof</CodeKeyword>{" "}<CodeType>InternalLinkProps</CodeType>
                {">"}
                {" & "}
                <CodeType>InternalLinkProps</CodeType>
                {" & {"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeProperty>children</CodeProperty>{"?: "}<CodeType>React</CodeType>{"."}<CodeType>ReactNode</CodeType>{";"}
            </CodeRow>
            <CodeRow>
                {"} & "}
                <CodeType>React</CodeType>{"."}<CodeType>RefAttributes</CodeType>{"<"}
                <CodeType>HTMLAnchorElement</CodeType>
                {">"}
                {">;"}
            </CodeRow>
        </CodeBlock>
    );
};
