import { type ReactNode } from "react";

type CodeFunctionProps = {
    readonly children: ReactNode;
};

const CodeFunction = ({ children }: CodeFunctionProps): JSX.Element => {
    return <span className="text-[#DCDCAA]">{children}</span>;
};

export default CodeFunction;
