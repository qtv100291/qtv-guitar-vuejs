<template>
  <div id="buttonDiv" class="button-google-login"></div>
</template>
<script>
import { watch } from "vue";
import { loginGoogle } from "../../api/loginGoogle";
import { useModalStore } from "../../stores/confirmModal";
import { getServerMessage } from "@/utils/message";

export default {
  props: ["windowWidth"],
  setup(props) {
    const modalStore = useModalStore();
    watch(
      () => props.windowWidth,
      () => {
        async function handleCredentialResponse(response) {
          try {
            await loginGoogle({ googleAccessToken: response.credential });
            modalStore.openModal(
              getServerMessage("Sigin succes"),
              false,
              () => {
                window.location = "/";
              }
            );
            // MySwal.fire({
            //   icon: "success",
            //   html: "Đăng Nhập Thành Công",
            //   showConfirmButton: false,
            //   timer: 1250,
            // }).then(() => {
            //   window.location = "/";
            // });
          } catch (err) {
            console.log(err);
          }
        }
        // eslint-disable-next-line no-undef
        google.accounts.id.initialize({
          client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        // eslint-disable-next-line no-undef
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          {
            theme: "filled_blue",
            size: "large",
            width: `${
              props.windowWidth > 336 ? 320 : props.windowWidth * 0.95
            }`,
          } // customization attributes
        );
      }
    );
  },
};
</script>

<style scoped>
.button-google-login {
  width: 100%;
  color: white;
  outline: none;
  border-radius: 3px;
  display: inline-block;
  border: 0px;
  /* :global(#button-label) {
          font-family: "Montserrat", sans-serif !important;
          font-size: 16px !important;
        }
        @include mobile {
          width: 150px;
        } */
}
</style>
