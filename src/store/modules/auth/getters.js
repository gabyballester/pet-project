export default {
  getAccessToken(state) {
    return state.accessToken;
  },
  getRefreshToken(state) {
    return state.refreshToken;
  },
  getBothTokens(state) {
    console.log('solicitado');
    console.log(state);
    return state;
  },
  isAuth(state) {
    if (state.accessToken && state.refreshToken) {
      return true;
    } else {
      return false
    }
  }
};