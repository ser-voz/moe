<template>
    <h1>Sentences and phrases</h1>
    <div class="sap">
        <div class="add-search">
            <main-button @click="modalVisible = !modalVisible">Add new</main-button>
            <input type="text" v-model="search" placeholder="Search...">
        </div>
        <template v-if="sap.length > 0">
            <div class="sap__list">
                <sentence-item v-for="item in oddSap" :data="item" @delete="deleteItem" @edit="editItem"></sentence-item>
            </div>
            <div class="sap__list">
                <sentence-item v-for="item in evenSap" :data="item" @delete="deleteItem" @edit="editItem "></sentence-item>
            </div>
        </template>
        <div class="nothing" v-else>
            Nothing here :(<br/>
            Click to "Add new"
        </div>
    </div>
    <modal-window v-model:show="modalVisible">
        <h2 v-if="Object.keys(isEdit).length !== 0">Edit</h2>
        <h2 v-else>Add a new sentence or phrase</h2>
        <div>
            <h3>English</h3>
            <input type="text" v-model="currentText.eng" placeholder="Enter text">
            <h3>Translation</h3>
            <input type="text" v-model="currentText.tn" placeholder="Enter translation">
        </div>
        <main-button @click="addUpdate" class="btn-submit">submit</main-button>

    </modal-window>
</template>

<script>
    import SentenceItem from "../components/SentenceItem";
    export default {
        name: "SentencesPhrases",
        components: {SentenceItem},
        data() {
            return {
                modalVisible: false,
                isEdit: {},
                currentText: {
                    eng: '',
                    tn:  ''
                },
                search: '',
                sap: [],
            }
        },
        methods: {
            addUpdate() {
                if(this.currentText.eng === '' || this.currentText.tn === '') return;
                if(Object.keys(this.isEdit).length !== 0) {
                    this.sap.find(item => item.id === this.isEdit.id).eng = this.currentText.eng;
                    this.sap.find(item => item.id === this.isEdit.id).tn = this.currentText.tn;
                    this.isEdit = {};
                } else {
                    const p = {
                        id: Date.now(),
                        eng: this.currentText.eng,
                        tn: this.currentText.tn
                    };
                    this.sap = [...this.sap, p];
                }

                window.localStorage.setItem('sap', JSON.stringify(this.sap));
                this.currentText = {
                    eng: '',
                    tn: ''
                };
                this.modalVisible = false;
            },

            deleteItem(item) {
               this.sap = this.sap.filter((el) => el !== item);
            },

            editItem(item) {
                this.isEdit = item;

                this.currentText.eng = item.eng;
                this.currentText.tn = item.tn;

                this.modalVisible = true;
            }
        },

        computed: {
            oddSap() {
                return [...this.searchedItems].filter((item, index) => index % 2 === 0);
            },

            evenSap() {
                return [...this.searchedItems].filter((item, index) => index % 2 === 1);
            },

            searchedItems() {
                return [...this.sap].filter(item =>
                    this.search.match(/^[а-яА-Я]+$/) ? item.tn.toLowerCase().includes(this.search) :
                        item.eng.toLowerCase().includes(this.search)
                );
            }
        },

        mounted() {
            const localSap = JSON.parse(localStorage.getItem("sap"));
            if(localSap) this.sap = localSap.sort(() => 0.5 - Math.random());
            /*
            function shuffle(arr){
                let j, temp;
                for(var i = arr.length - 1; i > 0; i--){
                    j = Math.floor(Math.random()*(i + 1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
                return arr;
            }
            */
        },

        watch: {
            sap() {
                window.localStorage.setItem('sap', JSON.stringify(this.sap));
            },
            modalVisible() {
                if(this.modalVisible === false) {
                    this.isEdit = {};
                    this.currentText = {
                        eng: '',
                        tn: ''
                    };
                }
            }
        }

    }
</script>

<style scoped>
    .btn-submit {
        width: 100%;
        margin-top: 10px;
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

    .sap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1430px;
        width: 100%;
        margin: 50px auto 0;
    }
</style>