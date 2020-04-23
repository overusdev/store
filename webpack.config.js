const path = require('path');

module.exports = {
    mode: 'development',
    entry: ["./src/js/main.js", "./src/less/main.less"],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "src/less"),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
