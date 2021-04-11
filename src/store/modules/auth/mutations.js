import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants';

export default {
  setTokensOnLocalStorage(_, payload) {
    const { accessToken, refreshToken } = payload;
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  },
  setTokensOnVuex(state, payload) {
    const { accessToken, refreshToken } = payload;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
  },
};