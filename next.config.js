module.exports = {
  webpack: (config) => {
    // make @mdx-js/runtime work correctly
    config.node.fs = "empty";

    return config;
  },
};
