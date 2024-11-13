/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/global.scss";`
  }
};

export default nextConfig;
