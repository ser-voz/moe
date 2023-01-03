import {defineStore} from "pinia";
import getters from "@/store/getters/getters";
import {downloadData} from "@/store/downloadFile";

export const senStore = defineStore('sentences', {
    state: () => {
        return {
            list: [],
            default: [
                {
                    _id: "62d96d957b4daa2bc6664ca0",
                    eng: "Not many would do that",
                    tn: "Не багато б так зробили",
                },
                {
                    _id: "62d979777b4daa2bc6664d2e",
                    eng: "Don't count on it",
                    tn: "Не розраховуйте на це",
                },
                {
                    _id: "62d979877b4daa2bc6664d32",
                    eng: "We figured",
                    tn: "Ми з'ясували",
                },
                {
                    _id: "62d979957b4daa2bc6664d35",
                    eng: "You wouldn't get beat up over it",
                    tn: "Ти б не морочився з цього приводу",
                },
                {
                    _id: "62d9799e7b4daa2bc6664d37",
                    eng: "worth a shot",
                    tn: "варто спробувати",
                },
                {
                    _id: "62d979a67b4daa2bc6664d39",
                    eng: "Get to the point",
                    tn: "Перейти до справи",
                },
                {
                    _id: "62d979ae7b4daa2bc6664d3b",
                    eng: "Guess who?",
                    tn: "Вгадай хто?",
                },
                {
                    _id: "62d979b67b4daa2bc6664d3d",
                    eng: "That's it, then?",
                    tn: "Тобто все?",
                },
                {
                    _id: "62d979bd7b4daa2bc6664d3f",
                    eng: "I figured as much",
                    tn: "я зрозумів, як багато",
                },
                {
                    _id: "62d979c37b4daa2bc6664d41",
                    eng: "My lips are sealed",
                    tn: "Мої губи запечатані",
                }
            ],
            search: '',
        }
    },
    getters,
    actions: {
        getItems(auth) {
            const local = JSON.parse(localStorage.getItem('sentences'));
            !auth || !local || local.length === 0 ? this.list = this.default : this.list = local;
        },
        create(item) {
            item._id = Date.now();
            this.list.push(item);
        },
        update(item) {
            this.list.map(el => el._id === item._id ? el = item : null);
        },
        delete(item) {
            let index = this.list.findIndex(el => el._id === item._id);
            this.list.splice(index, 1);
        },
        downloadData
    }
})

