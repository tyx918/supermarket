module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets' : '@/assets',
                'components': '@/components',
                'views:':'@/views',
                'common':'@/common',
                'network':'@/network'
            }
        }
    },
    devServer: {

        public: '0.0.0.0:8080',

        hot: true,

        disableHostCheck: true,

    }
}