const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js']
    },
    plugins: [new NodePolyfillPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: 'cypress-cucumber-preprocessor/loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
