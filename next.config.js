module.exports = {
  webpack: (config) => {
    // make @mdx-js/runtime work correctly
    config.node.fs = "empty";

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
