// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  // Serve images from /public directly. Vercel's /_next/image optimizer returns
  // 402 (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) on this deployment.
  images: { unoptimized: true },
};

export default nextConfig;
