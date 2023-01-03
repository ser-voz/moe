const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    devServer: {
        //proxy: 'http://localhost:8080'
        //host: "localhost"
    },
    publicPath: process.env.NODE_ENV === "production" ? "/moe/" : "/moe/",
    transpileDependencies: true,
});

