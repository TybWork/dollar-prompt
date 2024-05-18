/** @type {import('next').NextConfig} */
const nextConfig = {
   rewrites() {
      return [
        {
          source: '/api',
          destination: "http://localhost:4001/",
        },
      ];
    },
  };
  
  export default nextConfig;
  