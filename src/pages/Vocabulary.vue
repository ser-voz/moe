<template>
    <h1>Vocabulary</h1>

    <div class="vocabulary">
        <div class="add-search">
            <main-button @click="modalVisible = !modalVisible">Add new</main-button>
            <input type="text" v-model="search" placeholder="Search...">
        </div>
        <template v-if="vocabulary.length > 0">
            <div class="vocabulary__list">
                <wort-item
                        v-for="item in oddWords"
                        :data="item"
                        @delete="deleteItem" @edit="editItem"
                >
                </wort-item>
            </div>
            <div class="vocabulary__list">
                <wort-item
                        v-for="item in evenWords"
                        :data="item"
                        @delete="deleteItem" @edit="editItem"
                >
                </wort-item>
            </div>
        </template>
        <div class="nothing" v-else>
            Nothing here :(<br/>
            Click to "Add new"
        </div>
    </div>
    <modal-window v-model:show="modalVisible">
        <h2 v-if="Object.keys(newWordFields.word).length !== 0">Edit</h2>
        <h2 v-else>Add a new word</h2>
        <div>
            <h3>Word</h3>
            <input required v-model="newWordFields.word"  type="text" placeholder="English word">
            <input required v-model="newWordFields.transcription" type="text" placeholder="Transcription">
            <input required v-model="newWordFields.translation" type="text" placeholder="Translation">
            <div class="other_translation__input">
                <input v-model="newWordFields.otherTranslation" type="text" placeholder="Other translation">
            </div>
        </div>
        <div class="sentences">
            <h3>Sentences <span class="sentences__add-field" @click="addField"></span></h3>
            <div class="sentences__content">
                <div v-if="newWordFields.sentences.length > 0" v-for="sent in newWordFields.sentences">
                    <input id="en" v-model="sent.en" type="text" placeholder="english">
                    <input id="tn" v-model="sent.tn" type="text" placeholder="translation">
                </div>
                <div v-for="field in newFields" v-html="field.block"></div>
            </div>
        </div>
        <main-button @click="addNewWord" class="btn-submit">submit</main-button>
    </modal-window>
</template>

<script>
    import WortItem from "../components/WortItem";
    export default {
        name: "Vocabulary",
        components: {WortItem},
        data() {
            return {
                modalVisible: false,
                search: '',
                isEdit: false,
                newFields: [],
                newWords: [],
                newWordFields: {
                    word: '',
                    transcription: '',
                    translation: '',
                    otherTranslation: '',
                    sentences: []
                },
                vocabulary: []
            }
        },
        methods: {
            addField() {
                const block = {
                    id: Date.now(),
                    block: '<input id="en" type="text"  placeholder="english">' +
                        '<input id="tn" type="text" placeholder="translation">'
                };

                this.newFields.push(block);
            },
            addNewWord() {
                if(this.newWordFields.word === '' || this.newWordFields.transcription === '' ||
                    this.newWordFields.translation === '') return;
                let sentencesNew = [];

                if(this.newFields.length > 0) {
                    let sen =  document.querySelector('.sentences__content');
                    let divs = sen.querySelectorAll('div');

                    divs.forEach(function (item) {
                        let sen = {
                            en: item.children.en.value,
                            tn: item.children.tn.value,
                        };
                        if(sen.en !== '' && sen.tn !== '') sentencesNew.push(sen);

                    });
                }
                if(this.isEdit) {
                    this.vocabulary.find(item => item.word === this.newWordFields.word).word = this.newWordFields.word;
                    this.vocabulary.find(item => item.word === this.newWordFields.word).toggleItem = false;
                    this.vocabulary.find(item => item.word === this.newWordFields.word).transcription = this.newWordFields.transcription;
                    this.vocabulary.find(item => item.word === this.newWordFields.word).translation = this.newWordFields.translation;
                    this.vocabulary.find(item => item.word === this.newWordFields.word).otherTranslation = this.newWordFields.otherTranslation;
                    this.vocabulary.find(item => item.word === this.newWordFields.word).sentences = this.newWordFields.sentences;

                    this.vocabulary.find(item => item.word === this.newWordFields.word).sentences = sentencesNew;

                    this.isEdit = false;
                } else {
                    const w = {
                        toggleItem: false,
                        word: this.newWordFields.word,
                        transcription: this.newWordFields.transcription,
                        translation: this.newWordFields.translation,
                        otherTranslation: this.newWordFields.otherTranslation,
                        sentences: sentencesNew,
                    };

                    this.vocabulary = [...this.vocabulary, w];

                }
                window.localStorage.setItem('words', JSON.stringify(this.vocabulary));

                this.modalVisible = false;

                this.newWordFields = {
                    word: '',
                    transcription: '',
                    translation: '',
                    otherTranslation: '',
                    sentences: []
                }
            },

            deleteItem(item) {
                this.vocabulary = this.vocabulary.filter((el) => el !== item);
            },
            editItem(item) {
                //console.log(item)
                this.newWordFields = item;
                if(item.sentences.length === 0) this.newFields.sentences = [];
                this.isEdit = true;
                //
                // this.currentText.eng = item.eng;
                // this.currentText.tn = item.tn;
                //
                this.modalVisible = true;
            }

        },
        computed: {
            oddWords() {
                return [...this.searchedItems].filter((item, index) => index % 2 === 0);
            },
            evenWords() {
                return [...this.searchedItems].filter((item, index) => index % 2 === 1);
            },
            searchedItems() {
                return [...this.vocabulary].filter(item =>
                    this.search.match(/^[а-яА-Я]+$/) ? item.translation.toLowerCase().includes(this.search) :
                        item.word.toLowerCase().includes(this.search)
                );
            }
        },
        mounted() {
            const localWords = JSON.parse(localStorage.getItem("words"));
            if(localWords) this.vocabulary = localWords.sort(() =>  Math.random() - 0.5);
        },
        watch: {
            vocabulary() {
                window.localStorage.setItem('words', JSON.stringify(this.vocabulary));
            },
            modalVisible() {
                if(this.modalVisible === false) {
                    this.isEdit = false;
                    this.newFields = [];
                    this.newWordFields = {
                        word: '',
                        transcription: '',
                        translation: '',
                        otherTranslation: '',
                        sentences: []
                    }
                }
            }

        }


    }
</script>

<style>
    .btn-submit {
        width: 100%;
        margin-top: 10px;
    }

    .vocabulary {
        display: flex;
        flex-wrap: wrap;
        max-width: 1430px;
        width: 100%;
        margin: 0 auto 0;
        justify-content: space-between;
    }

    .vocabulary__list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .add-search {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-search input {
        margin-bottom: 0;
        height: 34px;
        width: 200px;
    }

    .sentences input {
        width: 100%;
        margin-bottom: 5px;
        padding: 5px;
    }

    .sentences__add-field {
        width: 8px;
        height: 8px;
        display: inline-block;
        background: url("../assets/img/plus.png")center no-repeat;
        background-size: contain;
        transform: rotate(45deg);
        cursor: pointer;
        position: relative;
        top: -2px;
        margin-left: 5px;
    }

    .sentences__content {
        overflow: auto;
        max-height: 200px;
        position: relative;
        padding-right: 5px;
        margin-right: -5px;
        scrollbar-width: thin!important;
    }
    .sentences__content > div {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid var(--grey);
    }
    .sentences__content > div:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: none;
    }

    .sentences__content > div:last-child input:last-child {
        margin-bottom: 0;
    }

    .other_translation__input {
        width: 100%;
        margin-top: 5px;
    }
    .other_translation__input input {
        width: 100%;
    }

</style>