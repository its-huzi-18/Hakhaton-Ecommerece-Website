/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol:"https",
        hostname: "cdn.sanity.io", // Specify the hostname here
      },
    ],
  },
};

export default nextConfig;
