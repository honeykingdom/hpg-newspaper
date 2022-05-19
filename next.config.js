const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});
