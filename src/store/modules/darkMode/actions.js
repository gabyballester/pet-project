export default {
  changeMode(context) {
    context.commit('changeMode');
  },
  setMode(context, payload) {
    context.commit('setMode', payload);
  },
  resetMode(context) {
    context.commit('resetMode');
  }
}