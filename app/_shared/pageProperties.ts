import { pageProperties as multiTimerPageProperties } from "../works/multitimer/properties";
import { pageProperties as worksPageProperties } from "../works/properties";
import { pageProperties as slidePageProperties } from "../works/slide/properties";

export type PageProperty = {
    readonly path: string;
    readonly name: string;
    readonly description?: string;
};

const pageProperties: readonly PageProperty[] = [
    {
        path: "/",
        name: "Home",
    },
    worksPageProperties,
    multiTimerPageProperties,
    slidePageProperties,
];

export const getPageName = (path: string): string | null =>
    pageProperties.find((page) => page.path === path)?.name ?? null;

export const getWorksPages = (): PageProperty[] => pageProperties.filter((page) => /^\/works\/.+$/.test(page.path));
