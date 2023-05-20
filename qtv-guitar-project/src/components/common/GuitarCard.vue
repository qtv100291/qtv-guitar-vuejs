<template>
  <router-link
    :class="['item', additionalClass ? additionalClass : '']"
    :to="urlProductPage"
  >
    <div class="item-image">
      <img class="front-image" :src="frontImage" :alt="guitarName" />
      <img
        class="back-image"
        :src="backImage"
        :alt="guitarName"
        v-if="isBackImage"
      />
    </div>
    <div class="item-name">{{ guitarName }}</div>
    <div class="price-before-reduction"></div>
    <div class="price-after-reduction">{{ modifiedPrice }} VND</div>
    <div class="line-item"></div>
    <div class="detail-item">CHI TIẾT</div>
  </router-link>
</template>

<script>
import { computed } from "@vue/reactivity";
import { separator1000 } from "../../utils/common";

export default {
  props: {
    additionalClass: String,
    frontImage: String,
    backImage: String,
    guitarName: String,
    price: Number,
    guitarType: String,
    guitarId: String,
    isBackImage: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const guitarTypeData = new Map([
      ["classical", "classicalguitar"],
      ["acoustic", "acousticguitar"],
      ["electrical", "electricguitar"],
      ["ukulele", "ukulele"],
    ]);
    const modifiedPrice = computed(() => {
      return separator1000(props.price);
    });
    const urlProductPage = computed(() => {
      const guitarType = guitarTypeData.get(props.guitarType);
      return `/san-pham/${guitarType}/${props.guitarId}`;
    });
    return {
      modifiedPrice,
      urlProductPage,
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1366px) {
  .item {
    width: 275px;
    height: 415px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
  }
  .item:hover {
    box-shadow: 0 0 10px rgb(49, 49, 49);
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 250px;
    height: 250px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 25.5px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
  }
  .item:hover {
    box-shadow: 0 0 10px rgb(49, 49, 49);
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 215px;
    height: 215px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
    margin: 0 17.5px 0 17.5px;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 215px;
    height: 215px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
    margin: 0 25px 0 25px;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 215px;
    height: 215px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}

@media only screen and (min-width: 350px) and (max-width: 576px) {
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
    margin: 0 15px 25px 15px;
  }

  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 215px;
    height: 215px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}

@media only screen and (max-width: 349px) {
  .item {
    width: 220px;
    height: 340px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    transition: 0.5s;
    margin: 0 15px 25px 15px;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 205px;
    height: 205px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 10px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }
}
</style>
