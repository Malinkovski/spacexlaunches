/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "farm1.staticflickr.com" },
      { protocol: "https", hostname: "farm2.staticflickr.com" },
      { protocol: "https", hostname: "farm3.staticflickr.com" },
      { protocol: "https", hostname: "farm4.staticflickr.com" },
      { protocol: "https", hostname: "farm5.staticflickr.com" },
      { protocol: "https", hostname: "farm6.staticflickr.com" },
      { protocol: "https", hostname: "farm7.staticflickr.com" },
      { protocol: "https", hostname: "farm8.staticflickr.com" },
      { protocol: "https", hostname: "farm9.staticflickr.com" },
      { protocol: "https", hostname: "live.staticflickr.com" },
      { protocol: "https", hostname: "www.youtube.com" },
      { protocol: "https", hostname: "youtu.be" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
