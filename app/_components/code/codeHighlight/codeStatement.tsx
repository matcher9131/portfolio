import { type ReactNode } from "react";

type CodeStatementProps = {
    readonly children: ReactNode;
};

const CodeStatement = ({ children }: CodeStatementProps): JSX.Element => {
    return <span className="text-[#C586C0]">{children}</span>;
};

export default CodeStatement;
