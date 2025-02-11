import { type ReactNode } from "react";

type CodeCombinedTypesProps = {
    readonly types: readonly ReactNode[];
    readonly separator?: string;
};

const CodeCombinedTypes = ({ types, separator }: CodeCombinedTypesProps): JSX.Element => {
    const arr: ReactNode[] = [];
    for (let i = 0; i < types.length; ++i) {
        arr.push(types[i]);
        if (i < types.length - 1) {
            arr.push(separator ?? " | ");
        }
    }
    return <>{arr}</>;
};

export default CodeCombinedTypes;
