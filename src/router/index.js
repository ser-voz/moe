import Vocabulary from "@/views/Vocabulary";
import {createRouter, createWebHistory} from "vue-router";
import IrregularVerbs from "@/views/VerbsPage";
import MenuPage from "@/views/MenuPage";
import SentencesPhrases from "@/views/SentencesPhrases";
import GrammarPage from "@/views/GrammarPage";
import TestPage from "@/views/TestPage";


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
    {
        path: '/test',
        component: TestPage
    }
];


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
