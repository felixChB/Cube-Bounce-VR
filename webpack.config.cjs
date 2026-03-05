const { watch } = require('fs');
const path = require('path');

module.exports = {
    entry: './src/scripts/index.ts',
    entry: {
        client: './src/scripts/index.ts',
        monitor: { import: './src/scripts/monitor.ts', filename: 'monitor.js' },
        leaderboard: { import: './src/scripts/leaderboard.ts', filename: 'leaderboard.js' },
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
        aggregateTimeout: 1000,
    }
};