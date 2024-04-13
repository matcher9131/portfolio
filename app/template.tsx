import { type ReactNode } from "react";
// import Breadcrumb from "./components/breadcrumb";

type TemplateProps = {
    readonly children: ReactNode;
};

const Template = ({ children }: TemplateProps): JSX.Element => {
    return (
        <>
            {/*<Breadcrumb />*/}
            {children}
        </>
    );
};

export default Template;
