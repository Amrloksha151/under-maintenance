import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: {
        main: "./src/main.js",
        join: "./src/join.js",
        dev: "./src/dev.js",
        contact: "./src/contact.js"
    },
    output: {
        path: path.resolve(import.meta.dirname, "dist"),
        filename: "[name].[hash].js",
        clean: true
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["main.html", "join.html", "dev.html", "contact.html"]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main.html",
            chunks: ["main"],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/join.html",
            chunks: ["join"],
            filename: "join.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/dev.html",
            chunks: ["dev"],
            filename: "dev.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html",
            chunks: ["contact"],
            filename: "contact.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};