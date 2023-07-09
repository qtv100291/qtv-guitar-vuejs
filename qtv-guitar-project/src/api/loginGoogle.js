import axios from "./index";
import { setCookie } from "../utils/cookie";

const apiEndPointGoogleLogin = "/user/login-google";
const tokenKey = "token_qtv_guitar";
const refreshTokenKey = "refreshToken_qtv_guitar";

export async function loginGoogle(userData) {
  const { accessToken, refreshToken } = await axios.post(
    apiEndPointGoogleLogin,
    userData
  );
  setCookie(tokenKey, accessToken, 2);
  setCookie(refreshTokenKey, refreshToken, 14);
}
