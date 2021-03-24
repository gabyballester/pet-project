import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import fontawesome
import FontAwesomeIcon from '@/assets/fontawesome/fontawesome';
//base components
import BaseToggle from '@/components/BaseToggle';
import LanguageSelector from '@/components/LanguageSelector';

const app = createApp(App);
app.use(store)
app.use(router)

// declaración de componentes globales
app.component('icon', FontAwesomeIcon);
app.component("base-toggle", BaseToggle);
app.component("language-selector", LanguageSelector);

app.mount('#app')