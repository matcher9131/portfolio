import { type ReactNode } from "react";
import CodeParameter from "./codeHighlight/codeParameter";

type CodeReactComponentAttributeProps = {
    readonly name: string;
    readonly children: ReactNode;
};

const CodeReactComponentAttribute = ({ name, children }: CodeReactComponentAttributeProps): JSX.Element => {
    return (
        <>
            {name !== "" && (
                <>
                    <CodeParameter>{name}</CodeParameter>
                    {"="}
                </>
            )}
            {"{"}
            {children}
            {"}"}
        </>
    );
};

export default CodeReactComponentAttribute;
