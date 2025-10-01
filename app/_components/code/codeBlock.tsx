import { type ReactNode } from "react";

type CodeBlockProps = {
    readonly children: ReactNode;
    readonly fileName?: string;
    readonly language?: string;
};

const CodeBlock = ({ children, fileName, language }: CodeBlockProps): JSX.Element => {
    return (
        <div className="rounded-md bg-black text-white">
            <div className="flex justify-between font-sans text-xs">
                {fileName != null ? (
                    <div className="rounded-tl-md bg-neutral px-1 py-0.5">{fileName}</div>
                ) : (
                    <div></div>
                )}
                {language != null ? (
                    <div className="rounded-tr-md bg-neutral px-1 py-0.5">{language}</div>
                ) : (
                    <div></div>
                )}
            </div>
            <pre className="code-block-body overflow-x-auto px-2 py-1">
                <code>{children}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
