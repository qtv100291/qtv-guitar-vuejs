<template>
  <Teleport to="body"
    ><transition name="loading-container">
      <div class="loading-container flex-center">
        <img src="images/HomePage/Rolling-0.9s-200px.gif" alt="loading-image" />
      </div> </transition
  ></Teleport>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.loading-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.25s;
  z-index: 15;
}
.loading-container img {
  width: 60px;
  height: 60px;
}
</style>
