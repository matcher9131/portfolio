import CodeBlock from "@/app/components/code/codeBlock";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeRow from "@/app/components/code/codeRow";

const TransitionLinkTypeDeclaration = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock language="TypeScript">
            <CodeRow>
                <CodeKeyword>type</CodeKeyword>{" "}<CodeType>TransitionLinkProps</CodeType>{" = "}
                <CodeType>Omit</CodeType>{"<"}
                    <CodeType>React</CodeType>{"."}<CodeType>AnchorHTMLAttributes</CodeType>{"<"}
                        <CodeType>HTMLAnchorElement</CodeType>
                    {">, "}
                    <CodeKeyword>keyof</CodeKeyword>{" "}<CodeType>LinkProps</CodeType>
                {"> &"}
            </CodeRow>
            <CodeRow indent={1}>
                <CodeType>LinkProps</CodeType>{" & "}{"{ "}<CodeKeyword>readonly</CodeKeyword>{" "}<CodeProperty>children</CodeProperty>{": "}<CodeType>ReactNode</CodeType>{" };"}
            </CodeRow>
        </CodeBlock>
    );
};

export default TransitionLinkTypeDeclaration;
