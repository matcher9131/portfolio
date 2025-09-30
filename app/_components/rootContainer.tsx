"use client";

import { type ReactNode } from "react";
import { classes } from "../_util/classes";

type RootContainerProps = {
    readonly children: ReactNode;
};

const RootContainer = ({ children }: RootContainerProps): JSX.Element => {
    return <div className={classes("relative", "w-full", "h-full", "pb-8", "px-8")}>{children}</div>;
};

export default RootContainer;
