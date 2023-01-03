<template>
    <div class="vocabulary__item">
        <div class="vocabulary__word">
            <div class="arrow-down"
                 @click="$event.target.closest('.vocabulary__item').classList.toggle('opened')"
                 v-if="data.otherTranslation && data.sentences.length">
            </div>
            <div class="en_word">{{ data.eng }}</div>
            <div class="transcription">
                <sound-btn @click="speechWord(data.eng)"/>
                <div v-if="data.transcription !== ''">[ {{ data.transcription }} ]</div>
            </div>
            <div class="vocabulary__translate">{{ data.tn }}</div>
            <div class="vocabulary__item-more" >
                <div>
                    <small @click="$emit('delete', data)">Delete</small>
                    <small @click="$emit('edit', data)">Edit</small>
                </div>
            </div>

        </div>
        <div class="vocabulary__additional"
             v-if="data.otherTranslation && data.sentences.length">
            <div class="other_translate">
                <small>Other options:</small>
                {{ data.otherTranslation }}
            </div>
            <div v-if="data.sentences.length > 0">
                <small>Sentence:</small>
                <ul>
                    <li  v-for="sentence in data.sentences" >
                        <div v-html="boldWord(data.eng, sentence.en)"></div>
                        <span>{{ sentence.tn }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WortItem",
        props: {
            data: {
                type: Object,
                default: false
            }
        },
        methods: {
            boldWord(word, str) {
                return str.replace(word, `<b>${word}</b>`);
            },
            speechWord(val) {
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-En';
                speech.volume = 2;
                speech.text = val;
                window.speechSynthesis.speak(speech);
            }
        }
    }
</script>

<style scoped>
    .transcription {
        display: flex;
        align-items: center;
    }


    .vocabulary__item {
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
        max-width: 700px;
    }
    @media screen and (max-width: 1440px) {
        .vocabulary__item {
            min-width: 630px;
        }
    }

    .vocabulary__word {
        display: grid;
        grid-template-columns:  repeat(2, 1fr) 50px;
        grid-column-gap: 5px;
    }

    .vocabulary__translate {
        grid-column: span 3;
        font-size: 18px;
        border-top: 1px solid var(--grey);
        padding-top: 5px;
        margin-top: 5px;
    }

    .arrow-down {
        position: relative;
        cursor: pointer;
        grid-row: span 2;
        order: 1;
        align-self: flex-start;
    }
    .arrow-down:not(.disabled) ~ .vocabulary__translate {
        grid-column: span 2;
    }

    .arrow-down {
        position: relative;
        cursor: pointer;
        grid-row: span 2;
    }
    .arrow-down:before {
        content: "";
        position: absolute;
        top: calc(50% - 10px);
        left: calc(50% - 10px);;
        width: 14px;
        height: 14px;
        border-right: 5px solid var(--arrow);
        border-bottom: 5px solid var(--arrow);
        transform: rotate(45deg);

    }
    .vocabulary__item.opened .arrow-down:before {
        transform: rotate(-135deg);
        top: calc(50% - 5px);
    }
    .en_word {
        font-weight: 600;
    }

    .vocabulary__additional {
        padding-top: 20px;
        font-size: 16px;
        padding-bottom: 10px;
        display: none;
    }

    .vocabulary__item.opened .vocabulary__additional {
        display: block;
    }

    .vocabulary__additional ul li:before {
        content: '-';
        position: absolute;
        left: 0;

    }
    .vocabulary__additional small {
        font-size: 14px;
        font-style: italic;
        display: block;
        margin-bottom: 5px;
    }
    .vocabulary__additional span {
        display: block;
        font-size: 12px;
    }


    .other_translate + div {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid var(--grey);
    }



    .vocabulary__item-more {
        position: absolute;
        width: 15px;
        height: 86px;
        top: 0;
        left: 0;
        opacity: .3;
        font-weight: 600;
    }

    .vocabulary__item-more > div {
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
    .vocabulary__item-more:hover {
        opacity: 1;
    }

    .vocabulary__item-more:hover > div {
        visibility: visible;
        opacity: 1;
        transition: opacity .2s ease;
    }

    .vocabulary__item-more > div small {
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
    .vocabulary__item-more > div small:hover {
        background: rgba(0,0,0, .1);
    }

    .vocabulary__item-more > div small:first-child {
        color: darkred;
    }
    .vocabulary__item-more > div small:last-child {
        color: darkgreen;
    }

    .vocabulary__item-more:before {
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