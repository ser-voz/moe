import {defineStore} from "pinia";

export const authStore = defineStore('auth', {
    state: () => {
        return {
            auth: false,
            name: '',
        }
    },
    actions: {
        setCookie(name, value, options = {}) {
            options = {
                path: '/',
                ...options
            };
            if (options.expires instanceof Date) {
                options.expires = options.expires.toUTCString();
            }
            let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            for (let optionKey in options) {
                updatedCookie += "; " + optionKey;
                let optionValue = options[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }
            document.cookie = updatedCookie;
        },
        getCookie() {
            const name = 'user';
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            if(matches) {
                this.name = decodeURIComponent(matches[1]);
                this.auth = true;
                return {name: this.name, status: this.auth};
            } else {
                return false;
            }
            //return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        setLocal(user) {
            this.name = user;
        }
    }
})