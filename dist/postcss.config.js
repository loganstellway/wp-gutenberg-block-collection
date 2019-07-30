var production = process.env.NODE_ENV === 'production';
module.exports = {
    plugins: [
        require('cssnano')({
            discardComments: {
                removeAll: production,
            },
        }),
        require('autoprefixer'),
    ],
};
//# sourceMappingURL=postcss.config.js.map