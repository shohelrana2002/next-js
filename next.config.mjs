/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },
};

export default nextConfig;
