/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/lemacarl/prince-of-peace",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
