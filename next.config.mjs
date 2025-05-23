/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com', // Ejemplo si usas Unsplash
    },
    // Agrega otros dominios si es necesario
  ],
  images: {
    domains: ['cms-webserver-statics.s3.amazonaws.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
