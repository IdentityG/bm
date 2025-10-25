/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains: ['images.unsplash.com', 'api.placeholder.com']
    },
    ignoreDuringBuilds: true,
    eslint: {
        ignoreDuringBuilds: true
    }
    
};

export default nextConfig;
