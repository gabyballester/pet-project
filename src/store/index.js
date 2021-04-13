import { createStore } from 'vuex';
import darkModeModule from './modules/darkMode/';
// import authModule from './modules/auth/';
import rootActions from './actions';
import rootMutations from './mutations';
import rootGetters from './getters';


export default createStore({
  state: {
    lang: null
  },
  rootActions,
  rootMutations,
  rootGetters,
  modules: {
    darkModeModule,
    // authModule
  }
})
