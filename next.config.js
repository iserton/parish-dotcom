/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      domains: ['127.0.0.1', 'cms.parafiaandrzeja.pl', 'parafiaandrzeja.pl', 'i.ytimg.com', 'www.youtube.com', 'i.ytimg.com', 'yt3.ggpht.com'],
    },
    ignoreDuringBuilds: true,
    output: 'standalone',
    // ... any other existing configurations
  };

// export default nextConfig;