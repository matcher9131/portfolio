export const classes = (...classNames: readonly (string | false | undefined | null)[]): string => {
    return classNames.filter((element) => typeof element === "string").join(" ");
};
