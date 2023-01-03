import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import components from './components/UI'
import ScrollTop from "@/directives/ScrollTop";


const pinia = createPinia();
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.use(pinia).use(router).directive('scroll',ScrollTop).mount('#app');


