import axios from "axios";

const httpService = axios.create({
  baseURL: "http://localhost:3000/api/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // },
});

httpService.interceptors.response.use((response) => {
  return response.data;
});

// httpService.interceptors.response.use(null, async (error) => {
//   // console.log(error);
//   const originalRequest = error.config;
//   if (
//     error.response.status === 401 &&
//     error.response.data.message === "jwt expired"
//   ) {
//     try {
//       const { data: userToken } = await axiosInner.post(
//         "/api/auth/refresh-token",
//         {
//           refreshToken: getCookie("refreshToken_qtv"),
//         }
//       );
//       setCookie("token_qtv", userToken.accessToken, 2);
//       setCookie("refreshToken_qtv", userToken.refreshToken, 14);
//       if (typeof window !== "undefined") {
//         axiosOuter.defaults.headers.common["Authorization"] =
//           "Bearer " + userToken.accessToken;
//       }
//       originalRequest.headers["Authorization"] =
//         "Bearer " + userToken.accessToken;
//       return axiosOuter(originalRequest);
//     } catch (err) {
//       deleteCookie("token_qtv");
//       deleteCookie("refreshToken_qtv");
//       return Promise.reject(error);
//     }
//   }

//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500 &&
//     error !== "Operation canceled due to new request";
//   if (!expectedError) {
//     const MySwal = withReactContent(Swal);
//     MySwal.fire({
//       icon: "error",
//       html: "Đã Có Lỗi Xảy Ra. Xin Thử Lại",
//       showConfirmButton: false,
//       timer: 1500,
//     }).then(() => {
//       additionalFunctionDom.releaseBody();
//     });
//   }
//   return Promise.reject(error);
// });

export default httpService;
