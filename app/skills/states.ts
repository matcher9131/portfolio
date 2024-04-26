import { atom } from "recoil";

export const skillStarsRefState = atom<Map<string, SVGElement>>({
    key: "skillStarsRefState",
    default: new Map(),
    dangerouslyAllowMutability: true,
});
