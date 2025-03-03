import type { NextConfig } from "next";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav:true,
  aggressiveFrontEndNavCaching:true,
  reloadOnOnline:true,
  swcMinify:true,
  disable:false,
  // workboxOptions:{
  //   disableDevlogs:true
  // }
});

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = withPWA(nextConfig);
