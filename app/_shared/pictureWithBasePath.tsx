import Picture from "next-export-optimize-images/picture";
import { type ComponentProps } from "react";
import { withBasePath } from "../_util/basePath";

const PictureWithBasePath = (
    props: Omit<ComponentProps<typeof Picture>, "src"> & { readonly src: string },
): JSX.Element => {
    const newProps = {
        ...props,
        src: withBasePath(props.src),
    };
    return <Picture {...newProps} />;
};

export default PictureWithBasePath;
