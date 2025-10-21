import Image from "next/image";
import { getOgpProperties } from "./getOgpProperties";

type LinkCardProps = {
    readonly href: string;
    readonly defaultTitle?: string;
};

const LinkCard = async ({ href, defaultTitle }: LinkCardProps): Promise<JSX.Element> => {
    const { title, description, imageUrl, domain } = await getOgpProperties(href);
    const finalTitle = title === "" ? defaultTitle ?? "" : title;

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="group my-2 grid h-40 w-full max-w-[640px] grid-flow-col grid-cols-[1fr_96px] grid-rows-[32px_76px_20px] gap-x-4 rounded-lg bg-neutral p-4 text-neutral-content transition-all hover:-translate-y-1 hover:opacity-80"
        >
            <h2 className="my-0 truncate border-none group-hover:underline">{finalTitle}</h2>
            <div className="text-ellipsis py-1 text-sm">{description}</div>
            {domain !== "" && (
                <div className="flex gap-x-1">
                    <Image
                        src={`https://www.google.com/s2/u/0/favicons?domain=${domain}`}
                        alt={domain}
                        width={16}
                        height={16}
                        className="h-4 w-4"
                    />
                    <small>{domain}</small>
                </div>
            )}
            {imageUrl !== "" && (
                <Image
                    src={imageUrl}
                    alt={finalTitle}
                    width={96}
                    height={96}
                    style={{ objectFit: "contain" }}
                    className="row-span-3 m-auto h-24 w-24 flex-none"
                />
            )}
        </a>
    );
};

export default LinkCard;
