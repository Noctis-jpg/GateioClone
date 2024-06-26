// next.config.js

import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
