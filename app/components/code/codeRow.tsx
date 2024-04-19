import { type ReactNode } from "react";

type CodeRowProps = {
    readonly children?: ReactNode;
    readonly indent?: number;
};

const CodeRow = ({ children, indent }: CodeRowProps): JSX.Element => {
    return (
        <>
            {`    `.repeat(indent ?? 0)}
            {children}
            {"\n"}
        </>
    );
};

export default CodeRow;
