import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: new URL(process.env.NEXT_PUBLIC_BLOB_BASE_URL).hostname,
      },
    ],
  },
};

export default withPayload(nextConfig);
