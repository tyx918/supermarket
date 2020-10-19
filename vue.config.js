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

        public: '218.192.169.33',
        host: '218.192.169.33',
        hot: true,

        disableHostCheck: true,

    }
}