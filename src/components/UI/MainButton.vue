<template>
    <button class="btn"><slot></slot></button>
</template>

<script>
    export default {
        name: "MainButton"
    }
</script>

<style scoped>
    button {
        min-width: 150px;
        padding: 5px 10px;
        cursor: pointer;
        display: inline-block;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: var(--black);
        outline: none;
        border: 1px solid var(--grey);
        border-radius: 3px;
        box-shadow: var(--boxshadow);
        position: relative;
        text-transform: uppercase;
    }

    button:hover {
        background: var(--hovergrey);
        transition: background-color .2s ease-in;
    }

    button:active {
        top: 1px;
    }

    :disabled {
        cursor: inherit;
        opacity: .7;
        top: 1px;
        box-shadow: none;
    }
    :disabled:hover {
        background: inherit;
    }
</style>