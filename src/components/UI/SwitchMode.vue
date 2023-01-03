<template>
    <div :class="{ 'moon' : darkMode === true }" class="switch" @click="darkMode = !darkMode">
        <div class="switch__inside">
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SwitchMode",
        data() {
            return {
                darkMode: false,
            }
        },
        watch: {
            darkMode() {
                document.querySelector('html').classList.toggle('darkMode');
                window.localStorage.setItem('modeStatus', this.darkMode);
            }
        },
        mounted() {
            const mode = JSON.parse(localStorage.getItem('modeStatus'));
            mode ? this.darkMode = mode : window.localStorage.setItem('modeStatus', this.darkMode);
        },

    }
</script>

<style scoped>

    .switch {
        position: fixed;
        left: 30px;
        top: 30px;
        display: flex;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.75);
    }

    .switch__inside {
        z-index: 6;
        opacity: 1;
        width: 30px;
        height: 80px;
        background: #fff;
        border-radius: 30px;
        display: inline-block;
        cursor: pointer;
        box-shadow: inset 0 0 5px rgba(0,0,0, .5);
        border: 2px solid var(--white);
    }



    .switch__inside span {
        width: 26px;
        height: 40px;
        position: absolute;
        display: block;
        left: 2px;
        bottom: 38px;
        border-radius: 30px;
        background: #fff;
        box-shadow: 0 0 5px rgba(0,0,0,.5);
        background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(102,102,102,1) 100%);
        transition: all .1s ease;
        z-index: 2;
    }

    .moon .switch__inside span {
        bottom: 2px;
    }




    .switch__inside span:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: url("../../assets/img/sun.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 21px;
        filter: invert(1);
    }

    .moon .switch__inside span:after {
        background-image: url("../../assets/img/moon.png");
        background-position: center;
        background-size: 15px;

    }

</style>