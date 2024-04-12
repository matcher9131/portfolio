import { ReactNode } from "react";

type CodeCommentProps = {
    readonly children: ReactNode;
};

const CodeComment = ({ children }: CodeCommentProps): JSX.Element => {
    return <span className="text-[#6A9955]">{children}</span>;
};

export default CodeComment;
