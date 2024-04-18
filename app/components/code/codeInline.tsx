import { type ReactNode } from "react";

type CodeInlineProps = {
    readonly children: ReactNode;
};

const CodeInline = ({ children }: CodeInlineProps): JSX.Element => {
    return <code className="rounded bg-neutral px-1 text-neutral-content">{children}</code>;
};

export default CodeInline;
