export default {
  changeMode(state) {
    state.darkMode = !state.darkMode;
    JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
  },
  setMode(state, payload) {
    state.darkMode = payload;
  },
  resetMode(state) {
    JSON.stringify(localStorage.setItem('darkMode', state.darkMode))
  }
}