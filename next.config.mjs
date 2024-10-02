import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            }
          ],
    }
};

export default nextConfig;
