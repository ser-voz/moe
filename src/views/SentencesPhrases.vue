<template>
    <h1>Sentences and phrases</h1>
    <div class="sap">
        <template v-if="!preloader">
            <div class="add-search">
                <main-button @click="modalVisible = !modalVisible, isEdit = false">Add new</main-button>
                <input type="text" v-model="store.search" placeholder="Search...">
            </div>
            <div class="sap__list">
                <sentence-item
                    v-for="item in store.oddItems"
                    :data="item"
                    @delete="deleteItem"
                    @edit="editItem">
                </sentence-item>
            </div>
            <div class="sap__list">
                <sentence-item
                    v-for="item in store.evenItems"
                    :data="item"
                    @delete="deleteItem"
                    @edit="editItem ">
                </sentence-item>
            </div>
        </template>
        <div v-if="store.list.length === 0 && !preloader" class="nothing">
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
    import {senStore} from "@/store/sentences";

    export default {
        name: "SentencesPhrases",
        components: {SentenceItem},

        setup() {
            const store = senStore();
            store.$subscribe((mutation, state) => {
                localStorage.setItem('sentences', JSON.stringify(state.list))
            });

            return {store}
        },
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
            }
        },
        methods: {
            addAndUpdate() {
                if(this.currentText.eng === '' || this.currentText.tn === '') return;
                const item = this.currentText;
                this.createUpdateItem(item);

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

            createUpdateItem(item) {
              this.isEdit ? this.store.update(item) : this.store.create(item);
              this.isEdit = false;
            },

            deleteItem(item) {
                this.store.delete(item);
            },
        },
        mounted() {
            this.store.getFromLocal();
            this.preloader = false;
        },
        watch: {
            modalVisible() {
                if(this.modalVisible === false) {
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