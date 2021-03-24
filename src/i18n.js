import { createI18n } from "vue-i18n";
import es from './assets/translations/es';
import en from './assets/translations/en.json';
import store from './store/';

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  globalInjection: true,
  messages: {
    en,
    es
  }
});
export default i18n;