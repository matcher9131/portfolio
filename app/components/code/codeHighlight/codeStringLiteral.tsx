import { type ReactNode } from "react";

type CodeStringLiteralProps = {
    readonly children: ReactNode;
};

const CodeStringLiteral = ({ children }: CodeStringLiteralProps): JSX.Element => {
    return <span className="text-[#CE9178]">{children}</span>;
};

export default CodeStringLiteral;
