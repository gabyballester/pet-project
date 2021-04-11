import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    accessToken: null,
    refreshToken: null
  },
  mutations,
  actions,
  getters
}