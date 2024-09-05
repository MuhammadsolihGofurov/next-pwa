const withPWA = require("next-pwa")({
  dest: "public",
});

/**  @type {import{'next'}.nextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // i18n: {
  //   defaultLocale: "uz",
  //   locales: ["uz", "ru"],
  // },
  // compiler: {
  //   removeConsole: {
  //     exclude: ["error"],
  //   },
  // },
  // images: {
  //   domains: [],
  // },
  // env: {
  //   API: "",
  // },
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     fs: false,
  //     module: false,
  //     child_process: false,
  //     worker_threads: false,
  //     "uglify-js": false,
  //     "'@swc/core": false,
  //   };

  //   return config;
  // },
};

module.exports = withPWA(nextConfig);
