"use client";

import "@/app/globals.css";
import { notoSerif } from "./fonts";
import PageTransitionAnimationBefore from "@/app/components/pageTransition/pageTransitionAnimationBefore";
import RootContainer from "@/app/components/rootContainer";
import RecoilContextProvider from "@/app/recoilContextProvider";

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={`${notoSerif.className}`}>
                <RecoilContextProvider>
                    <RootContainer>
                        <PageTransitionAnimationBefore />
                        {children}
                    </RootContainer>
                </RecoilContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
