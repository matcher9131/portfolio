import { Inter } from "next/font/google";
import "./globals.css";
import PageTransitionAnimation from "./components/pageTransition/pageTransitionAnimation";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={`${inter.className} relative`}>
                <RecoilContextProvider>
                    <PageTransitionAnimation />
                    {children}
                </RecoilContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
