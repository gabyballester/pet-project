import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n';

// import fontawesome
import FontAwesomeIcon from '@/assets/fontawesome/fontawesome';
//base components
import BaseToggle from '@/components/ui/BaseToggle';
import BaseDialog from '@/components/ui/BaseDialog.vue';
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';
import BaseSpinner from '@/components/ui/BaseSpinner';
import LanguageSelector from '@/components/LanguageSelector';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);

// declaración de componentes globales
app.component('icon', FontAwesomeIcon);
app.component("base-toggle", BaseToggle);
app.component("language-selector", LanguageSelector);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-dialog", BaseDialog);
app.component("base-spinner", BaseSpinner);

app.mount('#app')
