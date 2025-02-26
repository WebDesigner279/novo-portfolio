// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     experimental: {
//       appDir: true, // Ativa o App Router se estiver usando a estrutura do Next.js 14+
//     },
//   };
  
//   module.exports = nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Garante que o App Router esteja ativado
  },
  images: {
    unoptimized: true, // Se estiver usando `next export`
  },
  async rewrites() {
    return [
      { source: "/(.*)", destination: "/" }
    ];
  },
};

module.exports = nextConfig;
