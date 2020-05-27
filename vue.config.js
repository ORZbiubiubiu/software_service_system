module.exports = {
    configureWebpack: {
        devServer: {
                proxy: {
                    '/api': {
                        target: 'http://localhost:8081/EasyPicker',//请求的目标地址的BaseURL
                        changeOrigin: true, //是否跨域
                        pathRewrite: {
                        '^/api': '' //规定请求地址以什么作为开头
                        }
                    }
                }
            }
        }
    }