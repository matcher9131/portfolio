import { type ReactNode } from "react";
import Breadcrumb from "./components/breadcrumb";

type TemplateProps = {
    readonly children: ReactNode;
};

const Template = ({ children }: TemplateProps): JSX.Element => {
    return (
        <>
            <header>
                <Breadcrumb />
            </header>
            <main>{children}</main>
        </>
    );
};

export default Template;
