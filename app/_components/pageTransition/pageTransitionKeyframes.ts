import { numStars } from "./states";

const starUnit = 100 / numStars;
const backgroundTop = (-(1 + Math.cos((72 / 180) * Math.PI)) / 2) * starUnit;
const backgroundLeft = -0.5 * starUnit;
const backgroundMargin = 0.1;

type KeyframesFactory = {
    readonly getStarKeyframes: (index: number) => Keyframe[];
    readonly getBackgroundKeyframes: (index: number) => Keyframe[];
};

const factories: KeyframesFactory[] = [
    // Top to bottom
    {
        getStarKeyframes: (index: number): Keyframe[] => [
            {
                left: `${index * starUnit}vw`,
                top: `${-starUnit}vw`,
                width: `${starUnit}vw`,
                height: `${starUnit}vw`,
            },
            {
                left: `${index * starUnit}vw`,
                top: `100vh`,
                width: `${starUnit}vw`,
                height: `${starUnit}vw`,
            },
        ],
        getBackgroundKeyframes: (index: number): Keyframe[] => [
            {
                left: `${index * starUnit - backgroundMargin}vw`,
                top: `${backgroundTop}vw`,
                width: `${starUnit + 2 * backgroundMargin}vw`,
                height: 0,
            },
            {
                left: `${index * starUnit - backgroundMargin}vw`,
                top: `${backgroundTop}vw`,
                width: `${starUnit + 2 * backgroundMargin}vw`,
                height: `calc(100vh + ${starUnit}vw)`,
            },
        ],
    },
    // Left to right
    {
        getStarKeyframes: (index: number): Keyframe[] => [
            {
                left: `${-starUnit}vh`,
                top: `${index * starUnit}vh`,
                width: `${starUnit}vh`,
                height: `${starUnit}vh`,
            },
            {
                left: `100vw`,
                top: `${index * starUnit}vh`,
                width: `${starUnit}vh`,
                height: `${starUnit}vh`,
            },
        ],
        getBackgroundKeyframes: (index: number): Keyframe[] => [
            {
                left: `${backgroundLeft}vh`,
                top: `${index * starUnit - backgroundMargin}vh`,
                width: 0,
                height: `${starUnit + 2 * backgroundMargin}vh`,
            },
            {
                left: `${backgroundLeft}vh`,
                top: `${index * starUnit - backgroundMargin}vh`,
                width: `calc(100vw + ${starUnit}vh)`,
                height: `${starUnit + 2 * backgroundMargin}vh`,
            },
        ],
    },
    // Right to Left
    {
        getStarKeyframes: (index: number): Keyframe[] => [
            {
                left: `100vw`,
                top: `${index * starUnit}vh`,
                width: `${starUnit}vh`,
                height: `${starUnit}vh`,
            },
            {
                left: `${-starUnit}vh`,
                top: `${index * starUnit}vh`,
                width: `${starUnit}vh`,
                height: `${starUnit}vh`,
            },
        ],
        getBackgroundKeyframes: (index: number): Keyframe[] => [
            {
                left: `calc(100vw - ${backgroundLeft}vh`,
                top: `${index * starUnit - backgroundMargin}vh`,
                width: 0,
                height: `${starUnit + 2 * backgroundMargin}vh`,
            },
            {
                left: `${backgroundLeft}vh`,
                top: `${index * starUnit - backgroundMargin}vh`,
                width: `calc(100vw + ${starUnit}vh)`,
                height: `${starUnit + 2 * backgroundMargin}vh`,
            },
        ],
    },
];

export const getKeyframesFactory = (randomNumber: number): KeyframesFactory => {
    return { ...factories[Math.floor(randomNumber * 3)] };
};
