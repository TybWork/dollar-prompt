// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // next.config.js
//   images: {
//     domains: ['res.cloudinary.com'],
//   },

// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    // Adding path alias configuration
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
