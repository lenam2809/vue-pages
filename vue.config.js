module.exports = {
    devServer: {
        // publicPath: '/vue-pages',
        proxy: {
            '^/api': {
                target: 'https://vue-pages.netlify.app/api',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    }
};
