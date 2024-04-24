import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: ["night"],
    },
    theme: {
        extend: {
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            keyframes: {
                magnification: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
