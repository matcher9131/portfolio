import { JSDOM } from "jsdom";
import type { OgpProperties } from "./ogpProperties";

const getDomainFromUrl = (url: string): string => {
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:?#]+)/im);
    return match != null ? match[1] : "";
};

export const getOgpProperties = async (href: string): Promise<OgpProperties> => {
    const dom = await JSDOM.fromURL(href);
    const doc = dom.window.document;

    let title = "";
    let description = "";
    let domain = "";
    let imageUrl = "";
    const metas = doc.getElementsByTagName("meta");
    for (const meta of metas) {
        const key = meta.getAttribute("property");
        const value = meta.getAttribute("content");
        if (key == "og:title") {
            title = value ?? "";
        } else if (key == "og:description") {
            description = value ?? "";
        } else if (key == "og:image") {
            imageUrl = value ?? "";
        } else if (key == "og:url") {
            domain = getDomainFromUrl(value ?? "");
        }
    }

    // Try to get domain from href if no meta tag with og:url
    if (domain === "") {
        domain = getDomainFromUrl(href);
    }

    return {
        title,
        description,
        imageUrl,
        domain,
    };
};
