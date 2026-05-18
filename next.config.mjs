/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/baufinanzierungsrechner',
        destination: '/#rechner',
        permanent: true,
      },
      {
        source: '/uber-mich',
        destination: '/warum-ich',
        permanent: true,
      },
      {
        source: '/nutzungsbedingungen',
        destination: '/datenschutz',
        permanent: true,
      },
      {
        source: '/ratenkredit',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wertermittlung',
        destination: '/',
        permanent: true,
      },
      {
        source: '/modernisierung',
        destination: '/forderdarlehen-und-zuschusse',
        permanent: true,
      },
      {
        source: '/kauf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/baufinanzierung',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
