let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title:
        "Интернет магазин электротоваров (электроники) - интернет магазин светильников, ламп, светотехники и прочих электротоваров",
      template: "./src/index.html",
    }),
  ],
};
