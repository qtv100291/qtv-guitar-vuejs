<template>
  <main class="container">
    <div class="banner">
      <img src="/images/GuitarShow/banner.jpg" alt="" />
    </div>
    <div class="main-container">
      <div class="navigation">
        <router-link to="/">Trang Chủ</router-link
        >&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
        <div>Guitar Show</div>
      </div>
      <guitar-show-item
        v-for="guitarShow in guitarShowList"
        :key="guitarShow._id"
        :time="guitarShow.date"
        :artist="guitarShow.artist"
        :price="guitarShow.price[0]"
        :show="guitarShow.name"
        :banner="guitarShow.banner"
        :id="guitarShow._id"
      ></guitar-show-item>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { getGuitarShowList } from "../api/guitarShow";
import GuitarShowItem from "../components/GuitarShow/GuitarShowItem.vue";
export default {
  components: { GuitarShowItem },
  setup() {
    const guitarShowList = ref([]);
    onMounted(async () => {
      const guitarShowListData = await getGuitarShowList();
      guitarShowList.value = [...guitarShowListData];
    });
    return { guitarShowList };
  },
};
</script>

<style>
@media only screen and (min-width: 1366px) {
  /*Header*/

  .menu-bar-item-1 {
    border: none;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .banner {
    width: 95%;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 0;
  }
  .banner::after {
    content: "";
    width: 100%;
    background-image: url(/public/images/HomePage/bg.svg);
    position: absolute;
    height: 15px;
    top: calc(100% - 15px);
    left: 0;
    z-index: 1;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    margin-top: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 100%;
    max-width: 1200px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }
  .guitar-show-item-1 {
    margin-top: 30px;
  }
  .show-item-date {
    width: 15vw;
    height: 15vw;
    max-width: 200px;
    max-height: 200px;
    margin-top: 100px;
    box-sizing: border-box;
    border: 10px solid #a47c44;
    overflow: hidden;
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }

  .date-show p:nth-child(1) {
    margin-top: 35px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    color: #32323d;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div {
    margin: 10px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 60px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    border-radius: 10px;
    overflow: hidden;
  }
  .guitar-show-photo {
    width: 90vw;
    max-width: 800px;
    height: 45vw;
    max-height: 400px;
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 90vw;
    max-width: 800px;
    height: 2px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 90vw;
    max-width: 800px;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
    height: 195px;
  }
  .guitar-show-name {
    width: 78.75vw;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .guitar-show-location {
    width: 78.75vw;
    max-width: 700px;
    margin: 20px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }
  .guitar-show-artist {
    width: 78.75vw;
    max-width: 700px;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }
  .guitar-show-price {
    width: 78.75vw;
    max-width: 700px;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }
  .guitar-show-moreDetail {
    width: 100px;
    direction: rtl;
    margin-left: 650px;
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 40px;
    position: relative;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 38px;
    height: 38px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 19px;
    height: 702px;
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: 592px;
  }
  footer {
    margin-top: 80px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  /*Header*/

  .menu-bar-item-1 {
    border: none;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .banner {
    width: 1000px;
    height: 450px;
    margin: 0 auto;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 1000px;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
  }
  .guitar-show-item-1 {
    margin-top: 50px;
  }
  .show-item-date {
    width: 150px;
    height: 150px;
    margin-top: 120px;
    box-sizing: border-box;
    border: 7px solid #a47c44;
    overflow: hidden;
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }

  .date-show p:nth-child(1) {
    margin-top: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 60px;
    color: #32323d;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div:first-child {
    margin-top: 5px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    border-radius: 10px;
    overflow: hidden;
  }
  .guitar-show-photo {
    width: 700px;
    height: 350px;
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 700px;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
    height: 195px;
  }
  .guitar-show-name {
    width: 100%;
    margin: 20px auto 0px auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-indent: 20px;
  }
  .guitar-show-location {
    width: 100%;
    margin: 15px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 20px;
  }
  .guitar-show-artist {
    width: 100%;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 20px;
  }
  .guitar-show-price {
    width: 100%;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 20px;
  }
  .guitar-show-moreDetail {
    width: 100px;
    direction: rtl;
    margin-left: 550px;
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 40px;
    position: relative;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 38px;
    height: 38px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 19px;
    height: 692px;
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: 552px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-mobile-container > a:nth-child(5) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 125px;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .banner {
    max-width: 1000px;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  .guitar-show-item-1 {
    margin-top: 25px;
  }
  .show-item-date {
    width: 120px;
    height: 120px;
    margin-top: 140px;
    box-sizing: border-box;
    border: 5px solid #a47c44;
    overflow: hidden;
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }
  .date-show p:nth-child(1) {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    color: #32323d;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div:first-child {
    margin-top: 5px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    border-radius: 10px;
    overflow: hidden;
    width: calc(95vw - 200px);
  }
  .guitar-show-photo {
    width: 100%;
    height: calc((95vw - 200px) / 2);
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
  }
  .guitar-show-name {
    width: 100%;
    margin: 15px auto 0px auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-indent: 15px;
  }
  .guitar-show-location {
    width: 100%;
    margin: 5px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 15px;
  }
  .guitar-show-artist {
    width: 100%;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 15px;
  }
  .guitar-show-price {
    width: 100%;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    text-indent: 15px;
    margin-bottom: 20px;
  }
  .guitar-show-moreDetail {
    width: 100px;
    margin-left: calc(100% - 130px);
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 30px;
    position: relative;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 14px;
    height: calc(47.5vw + 122px);
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: calc(47.5vw + 72px);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-mobile-container > a:nth-child(5) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 125px;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .banner {
    max-width: 1000px;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .guitar-show-item-1 {
    margin-top: 20px;
  }
  .show-item-date {
    width: 95px;
    height: 95px;
    box-sizing: border-box;
    border: 3px solid #a47c44;
    overflow: hidden;
    position: absolute;
    right: 20px;
    top: calc(45vw + 22px);
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }
  .date-show p:nth-child(1) {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    color: white;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: white;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div:first-child {
    margin-top: 5px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    overflow: hidden;
    width: 90vw;
  }
  .guitar-show-photo {
    width: 100%;
    height: 45vw;
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
  }
  .guitar-show-name {
    width: calc(100% - 150px);
    margin: 15px auto 0px 20px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .guitar-show-location {
    width: calc(100% - 150px);
    margin: 5px auto 0px 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .guitar-show-artist {
    width: calc(100% - 150px);
    margin: 0px auto 0px 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .guitar-show-price {
    width: calc(100% - 150px);
    margin: 0px auto 0px 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  .guitar-show-moreDetail {
    width: 100px;
    margin-left: calc(100% - 130px);
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 30px;
    position: relative;
    display: none;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 14px;
    height: 692px;
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: 552px;
  }
  /*Footer*/
  footer {
    margin-top: 50px;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (min-width: 351px) and (max-width: 576px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-mobile-container > a:nth-child(5) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 94px;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .banner {
    max-width: 1000px;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    width: 92%;
    margin: 0 auto;
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 92%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .guitar-show-item-1 {
    margin-top: 15px;
  }
  .show-item-date {
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    border: 2px solid #a47c44;
    overflow: hidden;
    position: absolute;
    right: 15px;
    top: calc(45vw + 12px);
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }
  .date-show p:nth-child(1) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: white;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: white;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div:first-child {
    margin-top: 5px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    overflow: hidden;
    width: 100%;
  }
  .guitar-show-photo {
    width: 100%;
    height: 45vw;
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 100%;
    height: 1px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
  }
  .guitar-show-name {
    width: calc(100% - 100px);
    margin: 10px auto 0px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .guitar-show-location {
    width: calc(100% - 110px);
    margin: 5px auto 0px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 25px;
    color: #ffffff;
  }
  .guitar-show-artist {
    width: calc(100% - 110px);
    margin: 0px auto 0px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 25px;
    color: #ffffff;
  }
  .guitar-show-price {
    width: calc(100% - 110px);
    margin: 0px auto 0px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 25px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  .guitar-show-moreDetail {
    width: 100px;
    margin-left: calc(100% - 130px);
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 30px;
    position: relative;
    display: none;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 14px;
    height: 692px;
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: 552px;
  }
  /*Footer*/
  footer {
    margin-top: 50px;
  }
  .subscription-part {
    display: none;
  }
  .store-info-part {
    width: 92%;
  }
}

@media only screen and (max-width: 350px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-mobile-container > a:nth-child(5) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 94px;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .banner {
    max-width: 1000px;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navigation {
    width: 92%;
    margin: 0 auto;
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .guitar-show-item {
    width: 92%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .guitar-show-item-1 {
    margin-top: 10px;
  }
  .show-item-date {
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border: 2px solid #a47c44;
    overflow: hidden;
    position: absolute;
    right: 10px;
    top: calc(45vw + 12px);
  }
  .date-show {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: auto;
  }
  .date-show p:nth-child(1) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: white;
  }
  .date-show p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 25px;
    color: white;
  }
  .day-left {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: #32323d;
  }
  .day-left > div:first-child {
    margin-top: 5px;
  }
  .day-left-number {
    transition: 0.5s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 50px;
    color: #32323d;
  }
  .guitar-show-detail {
    text-decoration: none;
    color: black;
    overflow: hidden;
    width: 100%;
  }
  .guitar-show-photo {
    width: 100%;
    height: 45vw;
  }
  .guitar-show-photo > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-break {
    width: 100%;
    height: 1px;
    background-color: white;
  }
  .guitar-show-presentation {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
  }
  .guitar-show-name {
    width: calc(100% - 80px);
    margin: 10px auto 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .guitar-show-location {
    width: calc(100% - 85px);
    margin: 5px auto 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 13px;
    line-height: 20px;
    color: #ffffff;
  }
  .guitar-show-artist {
    width: calc(100% - 80px);
    margin: 0px auto 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 13px;
    line-height: 20px;
    color: #ffffff;
  }
  .guitar-show-price {
    width: calc(100% - 80px);
    margin: 0px auto 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 13px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .guitar-show-moreDetail {
    width: 100px;
    margin-left: calc(100% - 130px);
    margin-bottom: 10px;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: right;
    color: #ffffff;
    display: none;
  }
  .guitar-show-moreDetail:hover {
    color: orangered;
  }
  .timeline-line {
    width: 30px;
    position: relative;
    display: none;
  }
  .circle-out {
    margin-top: 180px;
    position: relative;
    z-index: 2;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
  }
  .circle-in {
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background-color: black;
  }
  .line {
    position: absolute;
    top: 0px;
    left: 14px;
    height: 692px;
    z-index: 1;
    width: 2px;
    background-color: black;
    margin: 0 auto;
  }
  #line-item-4 {
    height: 552px;
  }
  /*Footer*/
  footer {
    margin-top: 50px;
  }
  .subscription-part {
    display: none;
  }
  .store-info-part {
    width: 95%;
  }
}
</style>
