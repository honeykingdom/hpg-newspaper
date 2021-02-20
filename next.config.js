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
  // TODO: remove after next.js will fix it
  // https://github.com/vercel/next.js/discussions/19372#discussioncomment-135696
  images: {
    loader: "imgix",
  },
};
