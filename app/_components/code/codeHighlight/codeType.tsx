import { type ReactNode } from "react";

type CodeTypeProps = {
    readonly children: ReactNode;
};

const CodeType = ({ children }: CodeTypeProps): JSX.Element => {
    return <span className="text-[#4EC9B0]">{children}</span>;
};

export default CodeType;
