<template>
    <div class="auth-window">
        <h1>Sign up</h1>
        <input type="text" v-model="user.name" placeholder="Enter name">
        <label>
            <input type="checkbox" v-model="user.remember">
            Remember me
        </label>
        <main-button @click="localSignUp">Continue</main-button>
        <span >
            <div v-show="user.remember">
                By continuing, you agree to grant access to your local storage.
            </div>
        </span>
    </div>
</template>

<script>
import {authStore} from "@/store/auth";

export default {
    name: "Auth",
    setup() {
        const store = authStore();
        const getCookie = store.getCookie();
        return {store, getCookie}
    },
    data() {
        return {
            user: {
                name: '',
                remember: false
            },
        }
    },
    methods: {
        localSignUp() {
            if (this.user.name === '') return;
            if (this.user.remember) {
                this.store.setCookie('user', `${this.user.name}`, {secure: false, 'max-age': 2147483647});
                this.store.setLocal(this.user.name);
                window.location.href = '/';
            }
            if (!this.user.remember) {
                this.store.setLocal(this.user.name)
                this.$router.push({name: 'home'});
            }

        },
    },
}
</script>

<style scoped>
    .auth-window {
        margin: 250px auto auto auto;
        background: var(--white);
        border-radius: 12px;
        min-height: 60px;
        width: 100%;
        max-width: 505px;
        padding: 20px;
        position: relative;
        box-shadow: rgb(0 0 0 / 8%) 0 4.48rem 5.27rem,
                    rgb(0 0 0 / 6%) 0 1.87rem 2.2rem,
                    rgb(0 0 0 / 5%) 0 1rem 1.17rem, rgb(0 0 0 / 4%) 0 0.56rem 0.66rem,
                    rgb(0 0 0 / 3%) 0 0.29rem 0.35rem,
                    rgb(0 0 0 / 10%) 0 0 0.8rem;
    }
    .btn {
        width: 100%;
        margin-top: 15px;
    }

    span {
        margin-top: 30px;
        display: inline-block;
        font-size: 15px;
        text-align: center;
        width: 100%;
    }

    span div {
        position: absolute;
        bottom: 18px;
    }

    label {
        display: flex;
        align-items: center;
        margin-top: 15px;
    }
    input[type=checkbox] {
        margin: 0 5px 0 0;
    }
</style>