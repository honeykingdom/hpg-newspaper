const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: (config) => {
    // make @mdx-js/runtime work correctly
    config.node.fs = "empty";

    return config;
  },
});
