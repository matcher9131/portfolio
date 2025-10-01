import withExportImages from "next-export-optimize-images";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
    output: "export",
    basePath: isProd ? "/portfolio" : "",
    assetPrefix: isProd ? "/portfolio/" : "",
    trailingSlash: true,
});

export default nextConfig;
