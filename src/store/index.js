import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: false
  },
  mutations: {
    changeMode(state) {
      state.darkMode = !state.darkMode;
      JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
    },
    setMode(state){
      JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
    },
    resetMode(state, payload){
     state.darkMode = payload;
    }
  },
  actions: {
    changeMode(context){
      context.commit('changeMode');
    },
    setMode(context){
      context.commit('setMode');
    },
    resetMode(context, payload){
      context.commit('resetMode', payload);
    }
  },
  getters: {
    isDark(state) {
      return state.darkMode
    },
  },
  modules: {
  }
})
