import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // MDX 성능 최적화
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'], // MDX 파일을 페이지로 사용할 수 있도록 설정
};

export default nextConfig;
