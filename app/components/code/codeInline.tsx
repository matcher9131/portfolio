import { ReactNode } from "react";

type CodeInlineProps = {
    readonly children: ReactNode;
};

const CodeInline = ({ children }: CodeInlineProps): JSX.Element => {
    return <code className="bg-neutral text-neutral-content">{children}</code>;
};

export default CodeInline;
