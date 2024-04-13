import { type ReactNode } from "react";

type CodeParameterProps = {
    readonly children: ReactNode;
};

const CodeParameter = ({ children }: CodeParameterProps): JSX.Element => {
    return <span className="text-[#9CDCFE]">{children}</span>;
};

export default CodeParameter;
