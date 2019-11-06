module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://localhost:80',
                target: 'http://47.103.201.65:80',

                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    // '^/home': '',
                    '^/home/contentHTML': ''
                }
            }
        }
    }
}