/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/public/com_zone_e_commerce_website.html',
        destination: '/com_zone_e_commerce_website.html',
      },
    ];
  },
};
export default nextConfig;
