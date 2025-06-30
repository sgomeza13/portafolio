import type { NextConfig } from "next";
import createNextGlobeGenPlugin from "next-globe-gen/plugin";

const withNextGlobeGen = createNextGlobeGenPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vkodprmomopdqonfowgx.supabase.co",
        pathname: "/storage/v1/object/public/sgomeza-portfolio-bucket/**",
      },
    ],
  },
  /* Other Next.js config options here */
};

export default withNextGlobeGen(nextConfig);
