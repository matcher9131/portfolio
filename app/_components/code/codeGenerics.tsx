import { type ReactNode } from "react";

type CodeGenericsProps = {
    readonly children: ReactNode;
};

const CodeGenerics = ({ children }: CodeGenericsProps): JSX.Element => {
    return (
        <>
            {"<"}
            {children}
            {">"}
        </>
    );
};

export default CodeGenerics;
