<template>
  <confirm-modal v-if="isOpen"></confirm-modal>
  <loading-modal v-if="isLoadingOpen"></loading-modal>
  <header-desktop v-if="!notShowHeaderAndFooter"></header-desktop>
  <header-mobile v-if="!notShowHeaderAndFooter"></header-mobile>
  <router-view></router-view>
  <scrolling-button></scrolling-button>
  <footer-part v-if="!notShowHeaderAndFooter"></footer-part>
</template>

<script>
import HeaderDesktop from "./components/common/HeaderDesktop.vue";
import HeaderMobile from "./components/common/HeaderMobile.vue";
import ScrollingButton from "./components/common/ScrollingButton.vue";
import FooterPart from "./components/common/FooterPart.vue";
import ConfirmModal from "./components/common/ConfirmModal.vue";
import LoadingModal from "./components/common/LoadingModal.vue";
import { getLocalStorage } from "@/utils/common";
import { LOCAL_SHOPPING_CART_NAME } from "@/utils/constantValue";
import { useCartStore } from "./stores/cart";
import { useModalStore } from "./stores/confirmModal";
import { useLoadingModalStore } from "./stores/loadingModal";
import { mapState } from "pinia";

export default {
  name: "App",
  components: {
    HeaderDesktop,
    HeaderMobile,
    ScrollingButton,
    FooterPart,
    ConfirmModal,
    LoadingModal,
  },
  computed: {
    notShowHeaderAndFooter() {
      return this.$route.meta.isNotShow;
    },
    ...mapState(useModalStore, ["isOpen"]),
    ...mapState(useLoadingModalStore, ["isLoadingOpen"]),
  },
  mounted() {
    const cartStore = useCartStore();
    const data = getLocalStorage(LOCAL_SHOPPING_CART_NAME);
    if (data) {
      cartStore.initializeCart(data);
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
:root {
  --button-color: #de0000;
  --button-color-hover: red;
  --button-text-color: white;
  --text-price-color: #ac0101;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: var(--button-text-color);
  background-color: var(--button-color);
}
.button:hover {
  background-color: var(--button-color-hover);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 1440px) {
}
@media only screen and (min-width: 1366px) and (max-width: 1439px) {
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
}
@media only screen and (min-width: 351px) and (max-width: 449px) {
}
@media only screen and (max-width: 350px) {
}
#app {
}
</style>
