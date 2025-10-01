type CodeIndentProps = {
    readonly level?: number;
};

const CodeIndent = ({ level }: CodeIndentProps): JSX.Element => {
    return <>{`    `.repeat(level ?? 1)}</>;
};

export default CodeIndent;
