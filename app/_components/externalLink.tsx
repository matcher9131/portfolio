import { type ReactNode } from "react";

type ExternalLinkProps = {
    readonly href: string;
    readonly children: ReactNode;
    readonly title?: string;
};

const ExternalLink = ({ href, children, title }: ExternalLinkProps): JSX.Element => {
    return (
        <a href={href} target="_blank" rel="noreferrer noopener" title={title} className="link">
            {children}
        </a>
    );
};

export default ExternalLink;
