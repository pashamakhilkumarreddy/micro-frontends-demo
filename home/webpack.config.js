const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:5000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 5000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:5000/remoteEntry.js",
        pdp: "pdp@http://localhost:5001/remoteEntry.js",
        cart: "cart@http://localhost:5002/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header.jsx",
        "./Footer": "./src/components/Footer.jsx",
        "./products": "./src/services/products.js",
        "./Home": "./src/pages/Home.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
