import { basePath, apiVersion } from "./config";
const baseUrl = basePath + '/' + apiVersion + '/user';

export async function signUpApi(data) {
  const url = `${baseUrl}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await fetch(url, params);
    const result = await response.json();
    if (result.user) {
      return { ok: true, message: result.message };
    }
    return { ok: false, message: result.message };
  } catch (err) {
    return { ok: false, message: err.message };
  }
}