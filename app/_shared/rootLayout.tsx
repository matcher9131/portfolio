"use client";

import { Noto_Serif_JP } from "next/font/google";
import "@/app/globals.css";
import PageTransitionAnimationBefore from "@/app/components/pageTransition/pageTransitionAnimationBefore";
import RootContainer from "@/app/components/rootContainer";
import RecoilContextProvider from "@/app/recoilContextProvider";

const font = Noto_Serif_JP({ weight: "200", subsets: ["latin"] });

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={`${font.className}`}>
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
