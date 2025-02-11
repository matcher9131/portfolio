import { type ReactNode } from "react";

type CodeParameterListProps = {
    readonly parameters: ReadonlyArray<{ readonly name: ReactNode; readonly type: ReactNode }>;
    readonly separator?: string;
    readonly needsTailSeparator?: boolean;
};

const CodeParameterList = ({ parameters, separator, needsTailSeparator }: CodeParameterListProps): JSX.Element => {
    const arr: ReactNode[] = [];
    for (let i = 0; i < parameters.length; ++i) {
        arr.push(parameters[i].name, ": ", parameters[i].type);
        if (needsTailSeparator === true || i < parameters.length - 1) {
            arr.push(separator ?? ", ");
        }
    }
    return <>{arr}</>;
};

export default CodeParameterList;
