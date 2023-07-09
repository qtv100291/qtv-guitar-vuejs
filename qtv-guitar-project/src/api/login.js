import axios from "./index";
// import jwtDecode from "jwt-decode";
// import shoppingCartFunc from "../utils/shoppingCartFunc";
import {
  setCookie,
  // getCookie
} from "../utils/cookie";

const apiEndpoint = "/user/login";
// const apiEndpointUser = "/api/auth/user";
// const apiEndpointShoppingCart = "api/shopping-cart/update";

const tokenKey = "token_qtv_guitar";
const refreshTokenKey = "refreshToken_qtv_guitar";

export async function login(user) {
  const userData = {
    email: user.email,
    password: user.password,
  };
  const { accessToken, refreshToken } = await axios.post(apiEndpoint, userData);
  setCookie(tokenKey, accessToken, 2);
  setCookie(refreshTokenKey, refreshToken, 14);
}

// export function checkToken() {
//   try {
//     const jwtUser = getCookie("refreshToken_qtv");
//     return jwtDecode(jwtUser);
//   } catch (ex) {
//     return null;
//   }
// }

// export async function getUserData() {
//   //get user's data and synchronize server
//   const { data: user } = await http.get(apiEndpointUser);
//   const shoppingCartServer = [...user.shoppingCart];
//   const shoppingCartLocal = shoppingCartFunc.loadCartLocal() || [];
//   const shoppingCart = shoppingCartFunc.merge2shoppingCart(
//     shoppingCartServer,
//     shoppingCartLocal
//   ); // merger shopping from server and shopping card on user's computer
//   const userData = { ...user };
//   userData.shoppingCart = [...shoppingCart];
//   await http.post(apiEndpointShoppingCart, { shoppingCart }); //update shopping cart on server
//   localStorage.removeItem("qtv-cart");
//   return userData;
// }

export default {
  login,
  // checkToken,
  // getUserData,
};
