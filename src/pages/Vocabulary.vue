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
        <div class="nothing" v-if="vocabulary.length ===  0 && !preloader">
            Nothing here :(<br/>
            Click to "Add new"
        </div>
        <preloader v-if="preloader"></preloader>
    </div>
    <modal-window v-model:show="modalVisible">
        <h2 v-if="Object.keys(newWordFields.eng).length !== 0">Edit</h2>
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
    export default {
        name: "Vocabulary",
        components: {WortItem},
        data() {
            return {
                modalVisible: false,
                preloader: true,
                search: '',
                isEdit: false,
                newFields: [],
                newWordFields: {
                    eng: '',
                    transcription: '',
                    tn: '',
                    otherTranslation: '',
                    sentences: []
                },
                vocabulary: [],
                url: 'http://localhost:8080'
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

                //If server is not responding then push new item in store
                this.isEdit ? this.$store.commit('CHANGE_VOC', item) : this.$store.commit('ADD_VOC', item);
                //Disable flag for editMode
                if(this.isEdit) this.isEdit = false;

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

            async deleteItem(item) {
                try {
                    const response = await fetch(`${this.url}/api/vocabulary/${item._id}`, {method: 'DELETE'});
                    if (!response.ok) throw new Error('Ответ сети был не ok.');
                    const json = await response.json();
                    console.log('Успешно удалён ' + JSON.stringify(json));
                    this.getItems();
                } catch (e) {
                    //If server is not responding then delete item in store
                    this.$store.commit('DELETE_VOC', item);

                    console.log(e.message)
                }
            },
            async createUpdateItem(item) {
                try {
                    const response = await fetch(`${this.url}/api/vocabulary`, {
                        method: this.isEdit ? 'PUT' : 'POST',
                        body: JSON.stringify(item),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if (!response.ok) throw new Error('Ответ сети был не ok.');
                    const json = await response.json();
                    console.log('Успешно добавлен/изменен '+ JSON.stringify(json));
                    this.getItems();
                } catch (e) {
                    console.log(e.message);
                }
            },
            async getItems() {
                try {
                    const response = await fetch(`${this.url}/api/vocabulary`);
                    if (!response.ok) throw new Error('Ответ сети был не ok.');
                    const data = await response.json();
                    this.vocabulary = data.sort(() =>  Math.random() - 0.5);
                    this.preloader = false;
                } catch (e) {
                    // If server is not responding then get data from store
                    const data = this.$store.getters.VOC;
                    this.vocabulary = data;
                    this.preloader = false;
                    console.log(e.message)

                }
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
                    this.search.match(/^[а-яА-Я]+$/) ? item.tn.toLowerCase().includes(this.search) :
                        item.eng.toLowerCase().includes(this.search)
                );
            },

        },
        mounted() {
            this.getItems();
        },
        watch: {
            modalVisible() {
                if(this.modalVisible === false) {
                    this.isEdit = false;
                    this.newFields = [];
                    this.newWordFields = {
                        eng: '',
                        transcription: '',
                        tn: '',
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