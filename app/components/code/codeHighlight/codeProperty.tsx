import { ReactNode } from "react";

type CodePropertyProps = {
    readonly children: ReactNode;
};

const CodeProperty = ({ children }: CodePropertyProps): JSX.Element => {
    return <span className="text-[#9CDCFE]">{children}</span>;
};

export default CodeProperty;
