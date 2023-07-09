<template>
  <div class="item-picture-slider">
    <div class="arrow-left" @click="moveLeft">
      <i class="fas fa-caret-left"></i>
    </div>
    <div class="arrow-right" @click="moveRight">
      <i class="fas fa-caret-right"></i>
    </div>
    <div class="slider-container">
      <div class="slider-container-inner" ref="slideItem">
        <div
          v-for="image in guitarPhotoList"
          :key="image.index"
          :class="[
            'indicator-item',
            `indicator-${image.index + 1}`,
            image.index === activeImage ? 'active-indicator' : '',
          ]"
          @click="$emit('changeImage', image.index)"
        >
          <div class="overlay-indicator"></div>
          <img
            :class="`item-photo-${image.index + 1}-indicator`"
            :src="image.item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { outerWidthCal, animate } from "@/utils/common";
export default {
  props: ["dataRender", "activeImage"],
  setup(props) {
    const guitarPhotoList = ref([]);
    const slideItem = ref(null);
    guitarPhotoList.value = props.dataRender.map((item, index) => {
      return { index, item };
    });
    const lastItem = guitarPhotoList.value.pop();
    guitarPhotoList.value.unshift(lastItem);
    function moveRight() {
      const slideIndicatorItem = document.querySelector(".indicator-item");
      const slideItemWidth = outerWidthCal(slideIndicatorItem);
      const firstItem = guitarPhotoList.value.shift();
      guitarPhotoList.value.push(firstItem);
      slideItem.value.style.left = `calc(50% + ${slideItemWidth}px)`;
      animate(slideItem.value, { left: "50%" }, 400);
    }
    function moveLeft() {
      const slideIndicatorItem = document.querySelector(".indicator-item");
      const slideItemWidth = outerWidthCal(slideIndicatorItem);
      const lastItem = guitarPhotoList.value.pop();
      guitarPhotoList.value.unshift(lastItem);
      slideItem.value.style.left = `calc(50% - ${slideItemWidth}px)`;
      animate(slideItem.value, { left: "50%" }, 400);
    }
    return {
      guitarPhotoList,
      moveLeft,
      moveRight,
      slideItem,
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1440px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 70px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 70px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 79vw;
    margin: 0 auto;
    max-width: 475px;
    height: calc(23vw + 4px);
    max-height: 129px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 125px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 125px;
    height: 29vw;
    max-height: 125px;
    margin-right: 25px;
    margin-left: 25px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (min-width: 1366px) and (max-width: 1439px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 79vw;
    margin: 0 auto;
    max-width: 420px;
    height: calc(23vw + 4px);
    max-height: 109px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 105px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 105px;
    height: 29vw;
    max-height: 105px;
    margin-right: 25px;
    margin-left: 25px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 79vw;
    margin: 0 auto;
    max-width: 475px;
    height: calc(23vw + 4px);
    max-height: 129px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 125px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 125px;
    height: 29vw;
    max-height: 125px;
    margin-right: 25px;
    margin-left: 25px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 50px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 79vw;
    margin: 0 auto;
    max-width: 440px;
    height: calc(23vw + 4px);
    max-height: 109px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 105px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 105px;
    height: 29vw;
    max-height: 105px;
    margin-right: 25px;
    margin-left: 25px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 370px;
    margin: 0 auto;
    height: calc(23vw + 4px);
    max-height: 104px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 100px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 100px;
    height: 29vw;
    max-height: 100px;
    margin-right: 17.5px;
    margin-left: 17.5px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (min-width: 351px) and (max-width: 449px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    margin: 0 auto;
    width: 280px;
    height: calc(23vw + 4px);
    max-height: 79px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 75px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 75px;
    height: 29vw;
    max-height: 75px;
    margin-right: 12px;
    margin-left: 12px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
@media only screen and (max-width: 350px) {
  .item-picture-slider {
    margin-top: 25px;
    width: 100%;
    position: relative;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
  }
  .arrow-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    font-size: 40px;
    transition: 0.3s;
  }
  .arrow-left:hover,
  .arrow-right:hover {
    cursor: pointer;
  }
  .slider-container {
    width: 79vw;
    margin: 0 auto;
    max-width: 260px;
    height: calc(23vw + 4px);
    max-height: 69px;
    overflow: hidden;
    position: relative;
  }
  .slider-container-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 23vw;
    max-height: 65px;
    display: flex;
  }
  .indicator-item {
    position: relative;
    width: 29vw;
    max-width: 65px;
    height: 29vw;
    max-height: 65px;
    margin-right: 10px;
    margin-left: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: black;
    opacity: 0.4;
    z-index: 2;
  }
  .overlay-indicator:hover {
    cursor: pointer;
  }
  .indicator-item > img {
    height: 85%;
    max-height: 105px;
  }
  .active-indicator .overlay-indicator {
    opacity: 0;
  }
}
</style>
