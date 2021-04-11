export default {
  setTokensOnLocalStorage(context, payload) {
    context.commit('setTokensOnLocalStorage', payload);
  },
  setTokensOnVuex(context, payload) {
    context.commit('setTokensOnVuex', payload);
  }
};