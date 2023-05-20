<template>
  <div class="pagination" v-if="pageQuantity">
    <div
      class="pagination-button prev-button"
      @click="$emit('changeActivePage', activePage - 1)"
    >
      <img src="/images/Blog/arrow_back_ios_24px_outlined.svg" alt="" />
    </div>
    <div
      v-for="page in pageArray"
      :class="[
        'pagination-button',
        'button-number',
        `button-${page}`,
        page === activePage ? 'active' : '',
      ]"
      :key="page"
      @click="$emit('changeActivePage', page)"
    >
      {{ page }}
    </div>
    <div
      class="pagination-button next-button"
      @click="$emit('changeActivePage', activePage + 1)"
    >
      <img src="/images/Blog/arrow_forward_ios_24px_outlined.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    pageQuantity: Number,
    activePage: Number,
  },
  setup(props) {
    const pageArray = computed(() => {
      const pageArray = Array.from(
        new Array(props.pageQuantity),
        (x, i) => i + 1
      );
      return pageArray;
    });
    return { pageArray };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1366px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .pagination-button:hover {
    cursor: pointer;
  }
  .pagination-button.active:hover {
    cursor: context-menu;
  }
  .pagination-button:not(.active):hover {
    background-color: rgb(219, 218, 218);
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .pagination-button:hover {
    cursor: pointer;
  }
  .pagination-button.active:hover {
    cursor: context-menu;
  }
  .pagination-button:not(.active):hover {
    background-color: rgb(219, 218, 218);
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
@media only screen and (min-width: 351px) and (max-width: 576px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
@media only screen and (max-width: 350px) {
  .pagination {
    width: auto;
    margin: 10px auto 0px auto;
    display: flex;
    justify-content: center;
  }
  .pagination-button {
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #000000;
    margin: 0px 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  .pagination-button > img {
    width: 100%;
    height: 100%;
  }
  .active {
    background-color: var(--button-color);
    color: white;
  }
}
</style>
