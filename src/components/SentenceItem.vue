<template>
    <div class="sap__item">
        <div>
            {{ data.eng }}
        </div>
        <div class="sap__translation">
            {{ data.tn }}
        </div>
        <div class="sap__item-more" >
            <div>
                <small @click="$emit('delete', data)">Delete</small>
                <small @click="$emit('edit', data)">Edit</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SentenceItem",
        props: {
            data: {
                type: Object,
                default: false
            },
        }

    }
</script>

<style scoped>
    .sap__item {
        font-size: 24px;
        font-weight: 500;
        padding: 10px 15px;
        min-width: 700px;
        margin-bottom: 15px;
        border: 1px solid var(--grey);
        border-bottom-width: 3px;
        border-top-width: .5px;
        border-radius: 5px;
        box-shadow: var(--boxshadow);
        position: relative;
    }
    .sap__item div:first-child {
        font-weight: 600;
        border: 1px solid var(--white);
    }


    .sap__item div:first-child::first-letter {
        text-transform: uppercase;
    }

    .sap__translation {
        font-size: 18px;
        border-top: 1px solid var(--grey);
        padding-top: 5px;
        margin-top: 5px;
    }

    .sap__translation:first-letter {
        text-transform: uppercase;
    }

    .sap__item-more {
        position: absolute;
        width: 15px;
        height: 100%;
        top: 0;
        left: 0;
        opacity: .3;
    }

    .sap__item-more > div {
        background-color: var(--white);
        border-radius: 5px;
        width: 100px;
        height: 50px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.30);
        position: absolute;
        z-index: 99;
        left: 12px;
        top: 15px;
        visibility: hidden;
        opacity: 0;
    }
    .sap__item-more:hover {
        opacity: 1;
    }

    .sap__item-more:hover > div {
        visibility: visible;
        opacity: 1;
        transition: opacity .2s ease;
    }

    .sap__item-more > div small {
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
    .sap__item-more > div small:hover {
        background: rgba(0,0,0, .1);
    }

    .sap__item-more > div small:first-child {
        color: darkred;
    }
    .sap__item-more > div small:last-child {
        color: darkgreen;
    }

    .sap__item-more:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        cursor: pointer;
        z-index: 99;
        background: url("../assets/img/dots.png")center no-repeat;
        background-size: contain;
        opacity: 1;
    }


</style>