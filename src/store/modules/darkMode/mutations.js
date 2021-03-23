export default {
  changeMode(state) {
    state.darkMode = !state.darkMode;
    JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
  },
  setMode(state) {
    JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
  },
  resetMode(state, payload) {
    state.darkMode = payload;
  }
}