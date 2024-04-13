import { type ReactNode } from "react";

type CodeKeywordProps = {
    readonly children: ReactNode;
};

const CodeKeyword = ({ children }: CodeKeywordProps): JSX.Element => {
    return <span className="text-[#569CD6]">{children}</span>;
};

export default CodeKeyword;
