import { pageProperties as profilePageProperties } from "../profile/properties";
import { pageProperties as skillPageProperties } from "../skills/properties";
import { pageProperties as acddifPageProperties } from "../works/acddif/properties";
import { pageProperties as billPageProperties } from "../works/bill/properties";
import { pageProperties as cgtmPageProperties } from "../works/cgtm/properties";
import { pageProperties as kcqmPageProperties } from "../works/kcqm/properties";
import { pageProperties as multiTimerPageProperties } from "../works/multitimer/properties";
import { pageProperties as portfolioPageProperties } from "../works/portfolio/properties";
import { pageProperties as worksPageProperties } from "../works/properties";
import { pageProperties as slidePageProperties } from "../works/slide/properties";
import { pageProperties as virejoPageProperties } from "../works/virejo/properties";

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
    profilePageProperties,
    worksPageProperties,
    acddifPageProperties,
    kcqmPageProperties,
    virejoPageProperties,
    billPageProperties,
    portfolioPageProperties,
    cgtmPageProperties,
    multiTimerPageProperties,
    slidePageProperties,
    skillPageProperties,
];

export const getPageName = (path: string): string | null =>
    pageProperties.find((page) => page.path === path)?.name ?? null;

export const getWorksPages = (): PageProperty[] => pageProperties.filter((page) => /^\/works\/.+$/.test(page.path));

export const getChildPages = (): PageProperty[] => pageProperties.filter((page) => /^\/[^/]+\/$/.test(page.path));
