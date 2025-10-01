import nextConfig from "@/next.config.mjs";

const basePath = nextConfig.basePath ?? "";

const ImgWithBasePath = (
    props: Omit<JSX.IntrinsicElements["img"], "src" | "srcSet"> & {
        readonly src: string;
        readonly srcSet?: ReadonlyArray<[string, string]>;
    },
): JSX.Element => {
    const newProps = {
        ...props,
        src: basePath + props.src,
        srcSet: props.srcSet?.map(([path, descriptor]) => basePath + path + " " + descriptor).join(", "),
    };
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...newProps} />;
};

export default ImgWithBasePath;
