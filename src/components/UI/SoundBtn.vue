<template>
    <button><sound-icon/></button>
</template>

<script>
import SoundIcon from "@/components/icons/SoundIcon";
export default {
    name: "SoundBtn",
    components: {SoundIcon}
}
</script>

<style scoped>
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0 10px 0 0;
    }
</style>