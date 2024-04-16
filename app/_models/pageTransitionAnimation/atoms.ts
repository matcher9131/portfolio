import { createRef, type RefObject } from "react";
import { atom } from "recoil";

export const starRefsAtom = atom<readonly RefObject<SVGSVGElement>[]>({
    key: "starRefsAtom",
    default: new Array(10).fill(0).map(() => createRef()),
    dangerouslyAllowMutability: true,
});

export const backgroundRefsAtom = atom<readonly RefObject<HTMLDivElement>[]>({
    key: "backgroundRefsAtom",
    default: new Array(10).fill(0).map(() => createRef()),
    dangerouslyAllowMutability: true,
});

export const isAnimatingAtom = atom<boolean>({
    key: "isAnimatingAtom",
    default: false,
});
