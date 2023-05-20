import axios from "./index";
import { setCookie } from "../utils/cookie";

const apiEndPointGoogleLogin = "/api/auth/log-in-google";
const tokenKey = "token_qtv";

export async function loginGoogle(userData) {
  const { data: tokenUser } = await axios.post(
    apiEndPointGoogleLogin,
    userData
  );
  setCookie(tokenKey, tokenUser.accessToken, 2);
  setCookie("refreshToken_qtv_guitar", tokenUser.refreshToken, 14);
}
