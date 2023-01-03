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
    <past-continuous v-if="isVisible === 'Past Continuous'" :examples="pastContinuous"></past-continuous>
    <future-simple v-if="isVisible === 'Future Simple'"></future-simple>
    <present-perfect v-if="isVisible === 'Present Perfect'" :examples="presentPerfect"></present-perfect>
    <past-perfect v-if="isVisible === 'Past Perfect'" :examples="pastPerfect"></past-perfect>
    <present-perfect-continuous v-if="isVisible === 'Present Perfect Continuous'" :examples="presentPerfectContinuous"></present-perfect-continuous>
    <past-perfect-continuous v-if="isVisible === 'Past Perfect Continuous'" :examples="pastPerfectContinuous"></past-perfect-continuous>


</template>

<script>
    import PresentSimple from "../components/Tenses/PresentSimple";
    import PastSimple from "../components/Tenses/PastSimple";
    import PresentContinuous from "../components/Tenses/PresentContinuous";
    import FutureSimple from "../components/Tenses/FutureSimple";
    import PresentPerfect from "../components/Tenses/PresentPerfect";
    import PastPerfect from "../components/Tenses/PastPerfect";
    import PastContinuous from "@/components/Tenses/PastContinuous";
    import PresentPerfectContinuous from "@/components/Tenses/PresentPerfectContinuous";
    import PastPerfectContinuous from "@/components/Tenses/PastPerfectContinuous";
    export default {
        name: "GrammarPage",
        components: {
            PastPerfectContinuous,
            PresentPerfectContinuous, PastContinuous,
            PastPerfect, PresentPerfect, FutureSimple, PresentContinuous, PastSimple, PresentSimple},
        data() {
            return {
                isVisible: 'Present Simple',
                buttons: [
                    'Present Simple', 'Past Simple', 'Present Continuous', 'Past Continuous', 'Future Simple', 'Present Perfect',
                    'Present Perfect Continuous', 'Past Perfect', 'Past Perfect Continuous'
                ],

                presentSimple: '',
                pastSimple: '',
                presentPerfect: {
                    active: [
                        'Tom has already brought the package.',
                        'They have not planted the trees yet.',
                        'I haven’t bought the new car. This is my old one',
                        'Have we bought all the furniture?'
                    ],
                    passive: [
                        'The package has already been brought.',
                        'The trees have not been planted yet.'
                    ]
                },
                pastContinuous: {
                    active: [
                        'Tom was writing a letter at 5 p.m. yesterday.',
                        'I was reading a book.',
                        'Was Tom writing a letter at 5 p.m.?',
                        'This expensive hotel was holding a wedding party on that day.',
                        'At midnight I was driving home ',
                        ' If it were not raining, we would have a BBQ'
                    ],
                    passive: [
                        'The letter was being written at 5 p.m. yesterday.',
                        'A book was being read',
                        'Was the letter being written at 5 p.m. yesterday?',
                        'On that day a wedding party was being held at this expensive hotel.'
                    ]
                },
                pastPerfect: {
                    active: [
                        'Tom had brought the package before you came.',
                        'I saw that everybody had already finished',
                        'Had the plane arrived by that time?',
                    ],
                    passive: [
                        'The package had been brought before you came.',
                        'The book that was given to me had been read by my sister.',

                    ]
                },
                presentPerfectContinuous: {
                    active: [
                        'I have been working for an hour.',
                        'I have been watching this trick all this time. ',
                        'How long has she been waiting for you?',
                        'Ann hasn’t been living in this house for 10 years.',
                        'They have not been travelling.',
                        'I have been going to this gym since I moved to this neigbourhood a year ago'
                    ],
                },
                pastPerfectContinuous: {
                    active: [
                        'I had been working for an hour when he came.',
                        'She hadn’t been driving a car for an hour before she came to the gas station.',
                        'John had been speaking all morning, so he lost his voice',
                        'He had been running for two hours before she saw a village.',
                        'Не had been watching TV for several hours when his mother told him to go to bed.',
                        'Of course she wasn’t tired! He had not been working like a horse all the week.'
                    ],
                }
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