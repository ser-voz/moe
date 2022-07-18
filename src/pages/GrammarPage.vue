<template>
    <h1>Grammar</h1>
    <div class="nav">

        <button v-for="button in buttons"
                @click="isVisible = button"
                :disabled="isVisible === button">
            {{ button }}
        </button>
    </div>

    <present-simple :description="presentSimple" v-if="isVisible === 'Present Simple'"></present-simple>
    <past-simple :description="pastSimple" v-if="isVisible === 'Past Simple'"></past-simple>
    <present-continuous v-if="isVisible === 'Present Continuous'"></present-continuous>
    <future-simple v-if="isVisible === 'Future Simple'"></future-simple>
    <present-perfect v-if="isVisible === 'Present Perfect'"></present-perfect>
    <past-perfect v-if="isVisible === 'Past Perfect'"></past-perfect>


</template>

<script>
    import PresentSimple from "../components/Tenses/PresentSimple";
    import PastSimple from "../components/Tenses/PastSimple";
    import PresentContinuous from "../components/Tenses/PresentContinuous";
    import FutureSimple from "../components/Tenses/FutureSimple";
    import PresentPerfect from "../components/Tenses/PresentPerfect";
    import PastPerfect from "../components/Tenses/PastPerfect";
    export default {
        name: "GrammarPage",
        components: {PastPerfect, PresentPerfect, FutureSimple, PresentContinuous, PastSimple, PresentSimple},
        data() {
            return {
                isVisible: 'Present Simple',

                buttons: [
                    'Present Simple', 'Past Simple', 'Present Continuous', 'Future Simple', 'Present Perfect',
                    'Past Perfect'
                ],

                presentSimple: '',
                pastSimple: '',
            }
        }
    }
</script>

<style scoped>
    .nav {
        text-align: center;
        margin: 50px;
    }
    .nav button {
        font-size: 16px;
        padding: 5px;
        margin: 1px;
        cursor: pointer;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
    }
</style>