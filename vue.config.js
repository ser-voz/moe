const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    devServer: {
        proxy: 'http://localhost:8000',
    },
    publicPath: process.env.NODE_ENV === "production" ? "/moe/" : "/",
    transpileDependencies: true,

});
