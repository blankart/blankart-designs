const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    // config.module.rules.push({
    //   test: /\.(jpe?g|png|gif|svg)$/i,
    //   loader: "file-loader?name=app/images/[name].[ext]",
    // });
    return config;
  },
});
