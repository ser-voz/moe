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
        <div v-if="sap.length === 0 && !preloader" class="nothing">
            Nothing here :(<br/>
            Click to "Add new"
        </div>
        <preloader v-if="preloader"></preloader>
    </div>
    <modal-window v-model:show="modalVisible">
        <h2 v-if="isEdit">Edit</h2>
        <h2 v-else>Add a new sentence or phrase</h2>
        <div>
            <h3>English</h3>
            <input type="text" v-model="currentText.eng"
                   placeholder="Enter text">
            <h3>Translation</h3>
            <input type="text" v-model="currentText.tn" placeholder="Enter translation">
        </div>
        <main-button @click="addAndUpdate" class="btn-submit">submit</main-button>
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
                error: false,
                isEdit: false,
                preloader: true,
                currentText: {
                    eng: '',
                    tn:  ''
                },
                search: '',
                sap: [],
            }
        },
        methods: {
            addAndUpdate() {
                if(this.currentText.eng === '' || this.currentText.tn === '') return;
                const item = this.currentText;
                this.createUpdateItem(item);

                if(this.isEdit) this.isEdit = false;
                this.currentText = {
                    eng: '',
                    tn: ''
                };
                this.modalVisible = false;
            },

            editItem(item) {
                this.isEdit = true;
                this.currentText = item;

                this.modalVisible = true;
            },

            async createUpdateItem(item) {
                try {
                    const response = await fetch('http://localhost:8080/api/phrases', {
                        method: this.isEdit ? 'PUT' : 'POST',
                        body: JSON.stringify(item),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if(!response.ok) throw new Error('Ответ сети был не ok.');
                    this.getItems()
                } catch (e) {
                    console.log(e.message)
                }
            },

            async deleteItem(item) {
                try {
                    const response = await fetch(`http://localhost:8080/api/phrases/${item._id}`, {method: 'DELETE',});
                    if(!response.ok) throw new Error('Ответ сети был не ok.');
                    this.getItems();
                } catch (e) {
                    console.log(e.message)
                }
            },

            async getItems() {
                try {
                    const response = await fetch('http://localhost:8080/api/phrases');
                    if(!response.ok) throw new Error('Ответ сети был не ok.')
                    const data = await response.json();
                    this.sap = data.sort(() =>  Math.random() - 0.5);
                    this.preloader = false;
                } catch (e) {
                    console.log(e.message)
                }
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
            this.getItems();
        },

        watch: {
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