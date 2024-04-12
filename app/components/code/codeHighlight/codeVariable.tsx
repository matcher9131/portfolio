import { ReactNode } from "react";

type CodeVariableProps = {
    readonly children: ReactNode;
};

const CodeVariable = ({ children }: CodeVariableProps): JSX.Element => {
    return <span className="text-[#4FC1FF]">{children}</span>;
};

export default CodeVariable;
