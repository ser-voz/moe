<template>
    <h1>Vocabulary</h1>

    <div class="vocabulary">
        <template v-if="!preloader && store.list.length > 0">
            <div class="add-search">
                <main-button @click="modalVisible = !modalVisible, isEdit = false">Add new</main-button>
                <input type="text" v-model="store.search" placeholder="Search...">
            </div>

            <div class="vocabulary__list">
                <wort-item
                        v-for="item in store.oddItems"
                        :data="item"
                        @delete="deleteItem" @edit="editItem"
                >
                </wort-item>
            </div>
            <div class="vocabulary__list">
                <wort-item
                        v-for="item in store.evenItems"
                        :data="item"
                        @delete="deleteItem" @edit="editItem"
                >
                </wort-item>
            </div>
        </template>
        <div class="nothing" v-if="!store.list.length && !preloader">
            Nothing here :(<br/>
            Click to "Add new"
        </div>
        <preloader v-if="preloader"></preloader>
    </div>
    <modal-window v-model:show="modalVisible">
        <h2 v-if="isEdit">Edit</h2>
        <h2 v-else>Add a new word</h2>
        <div>
            <h3>Word</h3>
            <input required v-model="newWordFields.eng"  type="text" placeholder="English word">
            <input required v-model="newWordFields.transcription" type="text" placeholder="Transcription">
            <input required v-model="newWordFields.tn" type="text" placeholder="Translation">
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
    import { vocStore } from '@/store/vocabulary'
    import { authStore } from "@/store/auth";


    export default {
        name: "Vocabulary",
        components: {WortItem},

        setup() {
            const store = vocStore();
            const authStatus = authStore().auth;
            if(authStatus) {
                store.$subscribe((mutation, state) => {
                    localStorage.setItem('vocabulary', JSON.stringify(state.list))
                })
            }
            return {store, authStatus}
        },
        data() {
            return {
                modalVisible: false,
                preloader: true,
                isEdit: false,
                newFields: [],
                newWordFields: {
                    eng: '',
                    transcription: '',
                    tn: '',
                    otherTranslation: '',
                    sentences: []
                },
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
                //Check for required field
                if(this.newWordFields.eng === '' || this.newWordFields.transcription === '' ||
                    this.newWordFields.tn === '') return;

                //create arr and obj for new item and additional fields
                let sentencesNew = [];
                let item = {};

                //check if was added additional fields and check for existing for add to item
                if(this.newFields.length > 0 || this.newWordFields.sentences.length > 0) {
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

                //Assign data
                item = this.newWordFields;
                item.sentences = sentencesNew;

                //Send data
                this.createUpdateItem(item);

                //Clear fields edit fields
                item = {};
                sentencesNew = [];
                this.modalVisible = false;
            },

            editItem(item) {
                this.isEdit = true;
                this.newWordFields = item;
                if(item.sentences.length === 0) this.newFields.sentences = [];
                this.modalVisible = true;
            },

            deleteItem(item) {
                this.store.delete(item);
            },
            createUpdateItem(item) {
                this.isEdit ? this.store.update(item) : this.store.create(item);
                this.isEdit = false;
            },

        },
        mounted() {
            this.store.getFromLocal(this.authStatus);
            this.preloader = false;
        },
        watch: {
            modalVisible() {
                if(this.modalVisible === false) {
                    this.newFields = [];
                    this.newWordFields = {
                        eng: '',
                        transcription: '',
                        tn: '',
                        otherTranslation: '',
                        sentences: []
                    }
                }
            },
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