const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "App",
            filename: "index.html",
            template: "./public/index.html",
            inject: "body",
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: __dirname + "/public/**",
                to: "dist",
            }, ],
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: "file-loader",
                }, ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader", //1. Turns sass into css
                ],
            },
        ],
    },
};