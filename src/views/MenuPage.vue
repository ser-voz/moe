<template>
    <div class="start-screen">
        <div>
            <h2 v-if="getUser.name">🖐Hello {{getUser.name}}</h2>
            <h1>My own english</h1>
            <router-link to="/vocabulary">Vocabulary</router-link>
            <router-link to="/verbs">Verbs</router-link>
            <router-link to="/sentence-phrases">Sentences and phrases</router-link>
            <router-link to="/grammar">Grammar</router-link>
            <router-link to="/test">Test</router-link>
            <router-link :to="{name: 'auth'}" class="log-in-btn" v-if="!getUser.name">Sign up</router-link>

            <h3 class="logOut" v-if="getUser.auth" @click="logOut">Log out and clear local storage</h3>
        </div>
    </div>
</template>

<script>
    import {authStore} from "@/store/auth";
    export default {
        name: "MenuPage",

        setup() {
            const getUser = authStore();
            return {getUser}
        },
        methods: {
            logOut() {
                localStorage.removeItem('vocabulary');
                localStorage.removeItem('sentences');
                this.getUser.setCookie('user', '', {
                    'max-age': -1
                });
                window.location.href = '/';
            }
        }
    }
</script>

<style scoped>
    .start-screen:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("https://wallpaperaccess.com/full/2204472.jpg")center no-repeat;
        background-size: contain;
        opacity: 0.04;
        overflow: hidden;
        z-index: -1;
    }

    .start-screen {
        overflow: hidden;
        position: relative;
        min-height: 70vh;
    }

    .start-screen > div {
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


    }
    .log-in-btn, p {
        margin-top: 50px;
    }
    h2 {
        margin-top: 0;
    }

    a, p {
        font-size: 30px;
        text-align: center;
        text-decoration: none;
        margin-bottom: 15px;
        font-weight: 500;
        position: relative;
    }

    .logOut:hover {
        text-decoration: underline;
    }

    a:after {
        content: '';
        width: 0;
        height: 3px;
        position: absolute;
        bottom: -2px;
        right: 0;
        color: inherit;
        background: var(--black);
        transition: width .3s ease;
    }
    .logOut {
        cursor: pointer;
        margin-top: 50px;
    }
    a:hover:after {
        left: 0;
        width: 100%;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 50px;
        text-transform: uppercase;
    }

</style>