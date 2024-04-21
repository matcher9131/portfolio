"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import BeforePageTransitionAnimation from "./components/pageTransition/beforePageTransitionAnimation";
import RootContainer from "./components/rootContainer";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={`${inter.className}`}>
                <RecoilContextProvider>
                    <RootContainer>
                        <BeforePageTransitionAnimation />
                        {children}
                    </RootContainer>
                </RecoilContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
