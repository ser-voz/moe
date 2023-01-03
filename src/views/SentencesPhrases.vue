<template>
    <h1 v-scroll="138">Sentences and phrases</h1>
    <div class="sap">
        <template v-if="!preloader">
            <div class="add-search" v-scroll="220">
                <main-button @click="modalVisible = !modalVisible, isEdit = false">Add new</main-button>
                <main-button @click="store.downloadData(store.list, store.$id)" class="download">Download</main-button>
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
            <input type="text"
                   :class="{'error': error && currentText.eng === ''}"
                   v-model="currentText.eng"
                   placeholder="Enter text">
            <h3>Translation</h3>
            <input type="text"
                   :class="{'error': error && currentText.tn === ''}"
                   v-model="currentText.tn"
                   placeholder="Enter translation">
        </div>
        <main-button @click="addAndUpdate" class="btn-submit">submit</main-button>
    </modal-window>
</template>

<script>
    import SentenceItem from "../components/SentenceItem";
    import {senStore} from "@/store/sentences";
    import {authStore} from "@/store/auth";

    export default {
        name: "SentencesPhrases",
        components: {SentenceItem},

        setup() {
            const store = senStore();
            const authStatus = authStore().auth;
            if(authStatus) {
                store.$subscribe((mutation, state) => {
                    localStorage.setItem('sentences', JSON.stringify(state.list))
                });
            }
            return {store, authStatus}
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
                if(this.currentText.eng === '' || this.currentText.tn === '') {
                    this.error = true;
                    return;
                }
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
            this.store.getItems(this.authStatus);
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

    .btn.download {
        margin: 0 auto 0 20px;
    }

    h1.scroll {
        position: fixed;
        top: 0;
        z-index: 100;
        margin: 12px 0;
        max-width: 500px;
        left: 50%;
        transform: translateX(-50%);
    }
    h1.scroll + .sap {
        padding-top: 93px;
    }


    .add-search {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-search.scroll {
        position: fixed;
        top: 0;
        max-width: 1430px;
        z-index: 99;
        padding: 20px 0;
        background: var(--white);
    }
    .add-search.scroll ~ div {
        padding-top: 52px;
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

    @media screen and (max-width: 1440px) {
        .sap {
            max-width: 1280px;
        }
    }

    input.error {
        border: 1px solid #ff0000;
        box-shadow: 0 0 10px -3px #ff0000;
    }
</style>