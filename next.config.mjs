import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 只在生产构建时使用静态导出
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'dist',
  }),
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
  },
};

export default withNextIntl(nextConfig);
