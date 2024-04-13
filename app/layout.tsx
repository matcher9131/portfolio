import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
    readonly children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="ja" data-theme="night">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
