import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
    weight: ["500", "700"],
    subsets: ["latin"],
    variable: "--font-cormorant-garamond",
});

export const notoSerif = Noto_Serif_JP({ weight: ["200", "700"], subsets: ["latin"], variable: "--font-noto-serif" });
