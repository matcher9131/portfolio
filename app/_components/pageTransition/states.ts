import { createRef, type RefObject } from "react";
import { atom } from "recoil";

export const numStars = 20;

export const starRefStates = atom<readonly RefObject<SVGSVGElement>[]>({
    key: "starRefStates",
    default: new Array(numStars).fill(0).map(() => createRef()),
    dangerouslyAllowMutability: true,
});

export const backgroundRefStates = atom<readonly RefObject<HTMLDivElement>[]>({
    key: "backgroundRefStates",
    default: new Array(numStars).fill(0).map(() => createRef()),
    dangerouslyAllowMutability: true,
});

export const clipRefState = atom<RefObject<HTMLDivElement>>({
    key: "clipRefState",
    default: createRef(),
    dangerouslyAllowMutability: true,
});

export const isAnimatingState = atom<boolean>({
    key: "isAnimatingState",
    default: false,
});
