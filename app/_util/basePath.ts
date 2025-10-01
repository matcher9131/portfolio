import nextConfig from "../../next.config.mjs";
const basePath = nextConfig.basePath ?? "";

export const withBasePath = (path: string): string => basePath + path;
