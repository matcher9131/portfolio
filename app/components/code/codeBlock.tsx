import { ReactNode } from "react";
import { classes } from "../../util/classes";

type CodeBlockProps = {
    readonly children: ReactNode;
};

const CodeBlock = ({ children }: CodeBlockProps): JSX.Element => {
    return (
        <pre className={classes("bg-black", "text-white", "px-2", "py-1", "rounded-md")}>
            <code>{children}</code>
        </pre>
    );
};

export default CodeBlock;
