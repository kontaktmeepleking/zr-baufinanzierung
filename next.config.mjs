/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/baufinanzierungsrechner',
        destination: '/#rechner',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
