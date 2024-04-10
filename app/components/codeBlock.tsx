type CodeBlockProps = {
    readonly children: JSX.Element;
};

const CodeBlock = ({ children }: CodeBlockProps): JSX.Element => {
    return (
        <pre
            className={[
                "bg-black",
                "text-white",
                "[&_.statement]:text-[#C586C0]",
                "[&_.keyword]:text-[#569CD6]",
                "[&_.type]:text-[#4EC9B0]",
                "[&_.function]:text-[#DCDCAA]",
                "[&_.variable]:text-[#4FC1FF]",
                "[&_.parameter]:text-[#9CDCFE]",
                "[&_.property]:text-[#9CDCFE]",
                "[&_.number]:text-[#B5CEA8]",
                "[&_.string]:text-[#CE9178]",
                "[&_.comment]:text-[#6A9955]",
            ].join("")}
        >
            <code>{children}</code>
        </pre>
    );
};

export default CodeBlock;
