const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const webpackConfig = {
  name: "client",
  target: "web",
  mode: "production",
  entry: {
    webpack: "./src/main.js",
  },
  externals: {
    react: "react",
    "react-dom": "reactDOM",
    "react-is": "reactIs",
  },
  output: {
    filename: `[name].js`,
  },
  optimization: {
    // Modified config to keep code readable, just comment to get default behavior
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            unsafe: true,
          },
          // https://github.com/terser/terser
          mangle: false,
          output: {
            beautify: true,
            comments: true,
            preserve_annotations: true,
          },
        },
      }),
    ],
  },
  plugins: [
    // Uncomment to enable bundle-analyzer
    // new BundleAnalyzerPlugin()
  ],
  stats: {
    optimizationBailout: true,
  },
};

module.exports = webpackConfig;
