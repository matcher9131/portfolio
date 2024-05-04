"use client";

import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import PageTransitionAnimationBefore from "./components/pageTransition/pageTransitionAnimationBefore";
import RootContainer from "./components/rootContainer";
import RecoilContextProvider from "./recoilContextProvider";

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
