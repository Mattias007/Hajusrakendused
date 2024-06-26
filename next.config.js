// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://dev-ko1g58hi3p7nmhnd.eu.auth0.com/v2/Logout" }, 
                    { key: "Access-Control-Allow-Origin", value: "https://*.stripe.network" }, 
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mannicoon.com',
            port: '',
            pathname: '/storage/images/cats/**',
          },
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dpqoomlhi/image/upload/**/**',
          },
          {
            protocol: 'https',
            hostname: 'hajusrakendused.tak21maasik.itmajakas.ee',
            port: '',
            pathname: '/pictures/**',
          },
        ],
      },
}

module.exports = nextConfig