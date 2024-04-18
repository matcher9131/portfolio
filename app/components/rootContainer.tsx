"use client";

import { type ReactNode } from "react";
import { classes } from "../util/classes";

type RootContainerProps = {
    readonly children: ReactNode;
};

const RootContainer = ({ children }: RootContainerProps): JSX.Element => {
    return <div className={classes("relative", "w-full", "h-full")}>{children}</div>;
};

export default RootContainer;
