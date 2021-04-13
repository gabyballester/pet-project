import { basePath, apiVersion } from "../api/config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function checkUserLogin() {
  try {
    const accessToken = getTokenFromStorage("get", ACCESS_TOKEN);
    if (!accessToken) {
      const refreshToken = getTokenFromStorage("get", REFRESH_TOKEN);
      if (!refreshToken) {
        logout();
        return false;
      } else {
        const result = refreshAccessToken(refreshToken);
        console.log(result);
        return true;
      }
    }
    return true;
  } catch (error) {
    return error;
  }
}

export function localStorageItem(action, tokenKey, tokenValue) {
  if (action === "set") {
    return localStorage.setItem(tokenKey, tokenValue)
  } else if (action === "get") {
    return localStorage.getItem(tokenKey)
  } else if (action === "delete") {
    return localStorage.removeItem(tokenKey)
  }
}

function getTokenFromStorage(action, tokenKey, tokenValue) {
  return integrityTokensCheck(localStorageItem(action, tokenKey, tokenValue))
}

function integrityTokensCheck(token) {
  if (!token || token === "null") return null;
  return expirationCheck(token) ? null : token;
}

function expirationCheck(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  return now > exp;
}

export async function refreshAccessToken() {
  const url = `${basePath}/${apiVersion}/auth/refresh-access-token`;
  const bodyObj = {
    refreshToken: getTokenFromStorage("get", REFRESH_TOKEN)
  };
  const params = {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, params);
  if (response.status !== 200) {
    return null;
  }
  const bothTokens = await response.json();
  if (!bothTokens) {
    logout();
    return false;
  } else {
    const { accessToken, refreshToken } = bothTokens;
    localStorageItem("set", ACCESS_TOKEN, accessToken);
    localStorageItem("set", REFRESH_TOKEN, refreshToken);
    return true;
  }
}

function logout() {
  localStorageItem("delete", ACCESS_TOKEN);
  localStorageItem("delete", REFRESH_TOKEN);
}