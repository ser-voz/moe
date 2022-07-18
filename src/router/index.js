import Vocabulary from "@/pages/Vocabulary";
import {createRouter, createWebHistory} from "vue-router";
import IrregularVerbs from "@/pages/VerbsPage";
import MenuPage from "@/pages/MenuPage";
import SentencesPhrases from "@/pages/SentencesPhrases";
import GrammarPage from "@/pages/GrammarPage";


const routes = [
    {
        path: '/',
        component: MenuPage
    },
    {
        path: '/verbs',
        component: IrregularVerbs
    },
    {
        path: '/vocabulary',
        component: Vocabulary
    },
    {
        path: '/sentence-phrases',
        component: SentencesPhrases
    },
    {
        path: '/grammar',
        component: GrammarPage,
    },
];


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
