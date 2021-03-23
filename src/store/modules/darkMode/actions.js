export default {
  changeMode(context) {
    context.commit('changeMode');
  },
  setMode(context) {
    context.commit('setMode');
  },
  resetMode(context, payload) {
    context.commit('resetMode', payload);
  }
}