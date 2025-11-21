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
  // async redirects() {
  //   return [
  //     {
  //       source: "/products/add",
  //       destination: "/products/add",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
