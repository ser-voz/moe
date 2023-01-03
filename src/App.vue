<template>
    <div v-if="menuVisible" class="main-menu">
        <router-link to="/vocabulary">Vocabulary</router-link>
        <router-link to="/verbs">Verbs</router-link>
        <router-link to="/sentence-phrases">Sentences and phrases</router-link>
        <router-link to="/grammar">Grammar</router-link>
        <router-link to="/test">Test</router-link>
        <router-link :to="{name: 'auth'}" class="log-in-btn" v-if="!getUser.name">Sign up</router-link>
        <h3 class="auth-name" v-if="getUser.name">🖐Hello {{getUser.name}} <span v-if="getUser.auth" @click="logOut" title="Log out and clear local storage" class="log-out"></span></h3>
    </div>
    <router-view></router-view>

    <switch-mode></switch-mode>
</template>
<script>
    import {authStore} from "@/store/auth";
    import '@/assets/style.module.css'
    import MenuPage from "./views/MenuPage";

    export default {
        components: {MenuPage},
        setup() {
            const getUser = authStore();
            getUser.getCookie();

            return {getUser};
        },
        computed: {
            menuVisible() {
                return this.$route.path !== '/';
            },
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
        },
    }
</script>

<style>
    html {
        --black:     #202124;
        --grey:      #cccccc;
        --hovergrey: #e3e3e3;
        --lightgrey: #f6f6f6;
        --white:     #ffffff;
        --overlay:   rgba(0,0,0, .5);
        --boxshadow: 0px 5px 10px -10px rgba(0,0, 0, .5);
        --arrow:     #606060;
        scrollbar-width: thin!important;
    }

    html.darkMode {

        --black:     #adbac7;
        --grey:      #9b9b9b;
        --hovergrey: #444c56;
        --lightgrey: #2d333b;
        --white:     #22272e;
        --overlay:   rgba(0,0,0, .5);
        --boxshadow: 0px 5px 10px -10px rgba(0,0, 0, .5);
        --arrow:     #adbac7;
        scrollbar-width: thin!important;
    }
    .darkMode table td {
        background: var(--white)!important;
    }

    .darkMode .vocabulary__additional b {
        color: #e1e1e1 !important;
    }

    .darkMode button {
        background: #373e47;
        color: var(--black);
    }
    .darkMode button:hover {
        background: #444c56!important;
    }

    .darkMode input {
        background: var(--white);
        color: var(--black);
    }

    .main-menu .log-in-btn {
        background: none!important;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        right: 50px;
    }

    .darkMode .sentences__add-field,
    .darkMode .modal__close {
        filter: invert(1);
    }

    .auth-name {
        position: absolute;
        right: 50px;
        top: -85%;
        padding: 0 calc(5px - (100vw - 100%)) 0 0;
    }

    .darkMode input:focus {
        outline: none;
    }

    .darkMode .switch__inside {
        background: var(--arrow)!important;
    }

    .darkMode .start-screen:before {
        display: none;
    }

    .darkMode .vocabulary__item-more:before,
    .darkMode .sap__item-more:before {
        filter: invert(1);
    }

    .sap__item-more > div,
    .vocabulary__item-more > div {
        background: #fff!important;
    }

    .darkMode .nav button {
        border-color: var(--white);
    }
    .darkMode button:disabled {
        opacity: .4;
    }

    .darkMode .lds-ring div {
        border-color: #fff transparent transparent transparent!important;
    }

    .main-menu {
        position: absolute;
        width: 100%;
        top: 30px;
        text-align: center;
        background: var(--white);
        padding: 0 calc(5px - (100vw - 100%)) 0 0;
    }

    .main-menu a,
    .main-menu button {
        margin: 0 10px;
        font-size: 18px;
        font-weight: 500;

    }

    .main-menu a.router-link-active {
        color: #06bd06;
    }

    .hamburger span{
        width: 50px;
        height: 5px;
        background-color: var(--black);
        display: block;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }


    .nothing {
        text-align: center;
        width: 100%;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 100px;
    }

    .log-out {
        background: url("assets/img/logout-dark.svg")center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        filter: brightness(1);
        vert-align: middle;
        cursor: pointer;
        margin-left: 10px;
    }
    .darkMode .log-out {
        background: url("assets/img/logout-ligth.svg")center no-repeat;
    }
</style>