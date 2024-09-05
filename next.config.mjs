/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.mikrolink.io",
      "tailwindcss.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
