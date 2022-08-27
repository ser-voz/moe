const { defineConfig } = require('@vue/cli-service');
import {fileURLToPath, URL} from 'url';

module.exports = defineConfig({
    devServer: {
        proxy: 'http://192.168.1.120:3000',
    },
    publicPath: process.env.NODE_ENV === "production" ? "/moe/" : "/",
    transpileDependencies: true,
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
});
