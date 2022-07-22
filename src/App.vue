<template>
    <div v-if="menuVisible" class="main-menu">
        <router-link to="/vocabulary">Vocabulary</router-link>
        <router-link to="/verbs">Verbs</router-link>
        <router-link to="/sentence-phrases">Sentences and phrases</router-link>
        <router-link to="/grammar">Grammar</router-link>
        <router-link to="/test">Test</router-link>
    </div>
    <router-view></router-view>

    <switch-mode></switch-mode>
</template>
<script>
    import '@/assets/style.module.css'
    import MenuPage from "./pages/MenuPage";

    export default {
        components: {MenuPage},
        computed: {
            menuVisible() {
                return this.$route.path !== '/';
            },
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

    .darkMode .sentences__add-field,
    .darkMode .modal__close {
        filter: invert(1);
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
        border-color: #fff transparent transparent transparent;
    }

    .main-menu {
        position: absolute;
        width: 100%;
        top: 30px;
        text-align: center;
        background: var(--white);
    }

    .main-menu a {
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
</style>