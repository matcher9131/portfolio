import { ReactNode } from "react";

type CodeNumberLiteralProps = {
    readonly children: ReactNode;
};

const CodeNumberLiteral = ({ children }: CodeNumberLiteralProps): JSX.Element => {
    return <span className="text-[#B5CEA8]">{children}</span>;
};

export default CodeNumberLiteral;
