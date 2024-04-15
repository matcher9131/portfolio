import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/pageTransition";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={inter.className}>
                <PageTransition />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
