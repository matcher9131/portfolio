"use client";

import { type ReactNode } from "react";
import { RecoilRoot } from "recoil";

type RecoilContextProviderProps = {
    readonly children: ReactNode;
};

const RecoilContextProvider = ({ children }: RecoilContextProviderProps): JSX.Element => {
    return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
