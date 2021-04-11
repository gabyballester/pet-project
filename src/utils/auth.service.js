import store from '../store'

export const isAuth = () => {
  const { accessToken, refreshToken } = store.state.authModule;
  if (accessToken && refreshToken) {
    return true
  } 
  return false
}