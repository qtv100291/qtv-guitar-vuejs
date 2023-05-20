<template>
  <div id="buttonDiv" class="{styles.buttonGoogleLogin}"></div>
</template>
<script>
import { onMounted } from "vue";
import { loginGoogle } from "../../api/loginGoogle";

export default {
  setup() {
    onMounted(() => {
      async function handleCredentialResponse(response) {
        try {
          await loginGoogle({ googleAccessToken: response.credential });
          // MySwal.fire({
          //   icon: "success",
          //   html: "Đăng Nhập Thành Công",
          //   showConfirmButton: false,
          //   timer: 1250,
          // }).then(() => {
          //   window.location = "/";
          // });
        } catch (err) {
          if (err.response && err.response.status === 409) {
            // additionalFunctionDom.fixBody();
            // MySwal.fire({
            //   icon: "error",
            //   html: "Email Này Đã Được Sử Dụng",
            // }).then(() => {
            //   additionalFunctionDom.releaseBody();
            // });
          }
        }
      }
      // eslint-disable-next-line no-undef
      google.accounts.id.initialize({
        client_id:
          "1020234478913-eptfd3u3qg9kds0ngb44tijnb77gojn8.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      // eslint-disable-next-line no-undef
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
          theme: "filled_blue",
          size: "large",
          // width: `${props.windowWidth > 336 ? 320 : props.windowWidth * 0.95}`,
        } // customization attributes
      );
    });
  },
};
</script>

<style scoped></style>
