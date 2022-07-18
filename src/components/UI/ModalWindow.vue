<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div class="modal__content" @click.stop>
            <span class="modal__close" @click="hideModal"></span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalWindow",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideModal() {
                this.$emit('update:show', false)
            },
        }
    }
</script>

<style scoped>
    .modal {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--overlay);
        position: absolute;
        display: flex;
        z-index: 999;
    }
    .modal__content {
        margin: auto;
        background: var(--white);
        border-radius: 12px;
        min-height: 60px;
        min-width: 500px;
        padding: 20px;
        position: relative;
    }

    .modal__close {
        background: url("../../assets/img/plus.png")center no-repeat;
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        cursor: pointer;
        right: 20px;
        top: 20px;
    }

</style>