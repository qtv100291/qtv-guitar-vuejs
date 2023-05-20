<template>
  <div
    class="scrolling-button"
    :class="{ display: scrollPositionY > 62 }"
    scrollPositionY
    @click="backToTop"
  >
    <div class="scrolling-button-container">
      <img src="/images/HomePage/up-arrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const scrollPositionY = ref(0);
    const route = useRoute();
    onMounted(() => {
      window.addEventListener("scroll", function () {
        scrollPositionY.value = window.scrollY;
      });
    });
    watch(route, () => {
      backToTop();
    });
    function backToTop() {
      window.scrollTo(0, 0);
    }
    return { scrollPositionY, backToTop };
  },
};
</script>

<style scoped>
.scrolling-button {
  display: none;
  width: 40px;
  height: 40px;
  right: 5%;
  bottom: 5%;
  position: fixed;
}
.scrolling-button.display {
  display: block;
}
.scrolling-button-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(145, 145, 145);
  border-radius: 5px;
}
.scrolling-button-container > img {
  width: 50%;
  height: 50%;
}
.scrolling-button:hover {
  cursor: pointer;
}

@media only screen and (min-width: 1366px) {
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
}
@media only screen and (min-width: 351px) and (max-width: 576px) {
  .scrolling-button {
    width: 30px;
    height: 30px;
  }
}
@media only screen and (max-width: 350px) {
  .scrolling-button {
    width: 27px;
    height: 27px;
  }
}
</style>
