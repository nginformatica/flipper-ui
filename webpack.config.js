const path = require('path')

module.exports = {
    entry: ['./src/index.ts'],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: { react: path.resolve(__dirname, 'node_modules', 'react') }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
}
