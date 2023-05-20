<template>
  <header class="header-desktop">
    <div class="top-navbar">
      <div class="top-navbar-container">
        <div class="avatar">
          <img src="/images/HomePage/logo.png" alt="QTV Guitar Shop Logo" />
          <router-link to="/"></router-link>
        </div>
        <div class="search-bar">
          <img src="/images/HomePage/search_24px_outlined.svg" alt="search" />
          <input
            class="input-search-bar"
            type="text"
            placeholder="Nhập nhạc cụ cần tìm kiếm..."
          />
          <img
            class="x-mark-search-bar"
            src="/images/HomePage/x-mark 1.png"
            alt="x-mark"
          />
          <div class="suggestion-item">
            <div class="suggestion-guitar">
              <!--Search Items will be displayed here-->
            </div>
          </div>
        </div>
        <div class="address-top-navbar">
          <i class="fas fa-map-marker-alt location-top"></i>
          <p>
            <a href="https://goo.gl/maps/3hzESqcwEDF414fZ9" target="_blank"
              >Hồ Gươm Plaza, Trần Phú, Hà Đông, Hà Nội</a
            >
          </p>
        </div>
        <div class="phone-number-top-navbar">
          <i class="fas fa-phone-alt phone-top"></i>
          <p><a href="tel:19001570">19001570</a></p>
        </div>
      </div>
      <div class="menu-bar">
        <div class="menu-bar-inner">
          <div class="avatar-sub-container">
            <div class="avatar-sub">
              <img src="/images/HomePage/Untitled.jpg" alt="" />
              <router-link to="/"></router-link>
            </div>
          </div>
          <ul class="menu-bar-list">
            <li
              class="menu-bar-item-1"
              :class="{ 'active-link': routeValue === '/' }"
            >
              <router-link to="/" linkActiveClass="active-link"
                >TRANG CHỦ</router-link
              >
            </li>
            <li
              class="menu-bar-item-2"
              :class="{ 'active-link': routeValue.startsWith('/san-pham') }"
            >
              GUITAR
              <ul class="sub-menu-guitar">
                <div class="blank-sub-menu"></div>
                <li>
                  <router-link to="/san-pham/classicalguitar"
                    >Guitar Cổ Điển</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/acousticguitar"
                    >Guitar Acoustic</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/electricguitar"
                    >Guitar Điện</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/ukulele">Ukulele</router-link>
                </li>
              </ul>
            </li>
            <li
              class="menu-bar-item-3"
              :class="{ 'active-link': routeValue.startsWith('/phu-kien') }"
            >
              <router-link to="/phu-kien">PHỤ KIỆN</router-link>
            </li>
            <li
              class="menu-bar-item-4"
              :class="{ 'active-link': routeValue.startsWith('/guitar-show') }"
            >
              <router-link to="/guitar-show">GUITAR SHOW</router-link>
            </li>
            <li
              class="menu-bar-item-5"
              :class="{ 'active-link': routeValue.startsWith('/blog') }"
            >
              <router-link to="/blog">BLOG</router-link>
            </li>
            <li
              class="menu-bar-item-6"
              :class="{ 'active-link': routeValue.startsWith('/lien-he') }"
            >
              <router-link to="/lien-he">LIÊN HỆ</router-link>
            </li>
            <li></li>
          </ul>
          <div class="menu-bar-sign-up">
            <router-link to="/dang-nhap">ĐĂNG NHẬP</router-link>
          </div>
          <div class="sub-shopping-cart">
            <router-link to="shoppingcart.html"
              ><img src="/images/HomePage/shopping-cart 1.svg" alt="" /><span
                class="total-count-item"
                >{{ cartStore.totalItem }}</span
              ></router-link
            >
            <div class="sub-shopping-cart-display">
              <div class="match-box"></div>
              <div class="match-box-hidden"></div>
              <div class="sub-shopping-cart-container">
                <div
                  class="sub-shopping-cart-container-item"
                  v-if="cartStore.cart.length > 0"
                >
                  <!--Item will be displayed here-->
                  <div
                    class="sub-shopping-cart-item"
                    v-for="item in cartStore.cart"
                    :key="item._id"
                  >
                    <div class="image-item-shopping">
                      <img :src="item.image" :alt="item.name" />
                    </div>
                    <div class="info-item-shopping">
                      <div class="name-item-shopping" :title="item.name">
                        {{ item.name }}
                      </div>
                      <div class="price-item">
                        <span class="count-item-shopping">{{ item.count }}</span
                        >&nbsp;&nbsp;x&nbsp;&nbsp;<span
                          class="price-item-shopping"
                          >{{ separator1000(item.price) }}</span
                        >
                        VND
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="shopping-cart-note">Chưa Có Sản Phẩm</div>
                <div
                  class="sub-shopping-cart-total"
                  v-if="cartStore.cart.length > 0"
                >
                  <!--Total money will be displayed here-->
                  <div class="total-money">
                    Tổng : &nbsp;<span class="total-money-number">{{
                      totalMoney
                    }}</span
                    >&nbsp;&nbsp;VND
                  </div>
                  <router-link
                    class="button-access-shopping-cart"
                    to="/gio-hang"
                    >Thanh Toán</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="line-1"></div>
          <div class="line-2"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onBeforeMount, onMounted, ref, watch, watchEffect } from "vue";
import { useCartStore } from "../../stores/cart";
import { separator1000 } from "../../utils/common";
import { useRoute } from "vue-router";

export default {
  setup() {
    const totalMoney = ref("0");
    const cartStore = useCartStore();
    const route = useRoute();
    const routeValue = ref("");
    watchEffect(() => {
      routeValue.value = route.fullPath;
    });
    watch(cartStore, (store) => {
      totalMoney.value = separator1000(store.totalMoney);
    });
    onMounted(() => {
      window.addEventListener("scroll", animationMenuBar);
    });
    onBeforeMount(() => {
      window.removeEventListener("scroll", animationMenuBar);
    });
    function animationMenuBar() {
      if (
        document.body.scrollTop > 62 ||
        document.documentElement.scrollTop > 62
      ) {
        let addScroll = document.querySelectorAll(
          ".header-desktop, .search-bar, .input-search-bar, .line-1, .avatar, .avatar-sub, .container, .suggestion-item, .x-mark-search-bar"
        );
        for (let i = 0; i < addScroll.length; i++) {
          addScroll[i].classList.add("scroll");
        }
        document.querySelector(".scrolling-button").style.display = "block";
      } else {
        let removeScroll = document.querySelectorAll(
          ".header-desktop, .search-bar, .input-search-bar, .line-1, .avatar, .avatar-sub, .container, .suggestion-item, .x-mark-search-bar"
        );
        for (let i = 0; i < removeScroll.length; i++) {
          removeScroll[i].classList.remove("scroll");
        }
        document.querySelector(".scrolling-button").style.display = "none";
      }
    }
    return {
      totalMoney,
      cartStore,
      separator1000,
      routeValue,
    };
  },
};
</script>

<style scoped>
.active-link {
  border-bottom: 2px solid black;
}
@media only screen and (min-width: 1366px) {
  .header-desktop {
    width: 100%;
    position: relative;
    background-color: black;
    height: 62px;
    position: relative;
    z-index: 4;
    overflow: visible;
    box-sizing: border-box;
  }
  .header-desktop.scroll {
    position: fixed;
    top: -62px;
    z-index: 6;
  }
  .top-navbar {
    width: 100%;
    position: relative;
    height: 62px;
  }
  .top-navbar-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    height: 62px;
    position: relative;
  }
  .avatar {
    width: 124px;
    height: 124px;
    position: absolute;
    top: 0px;
    z-index: 7;
    display: inline-block;
    transition: 0.5s;
  }
  .avatar.scroll {
    top: -62px;
  }
  .avatar > img {
    width: 100%;
    height: 100%;
  }
  .avatar > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .menu-bar {
    width: 100%;
    background-color: white;
    position: absolute;
    z-index: 5;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    height: 62px;
    top: 62px;
    left: 0px;
  }
  .menu-bar-inner {
    width: 1200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    height: 62px;
  }
  .avatar-sub-container {
    position: absolute;
    top: 0%;
    left: 0%;
    transition: 0.5s;
    width: 124px;
    height: 62px;
    overflow: hidden;
  }
  .avatar-sub {
    position: absolute;
    top: 100%;
    left: 0%;
    transition: 0.5s;
    width: 124px;
    height: 62px;
  }
  .avatar-sub > img {
    width: 100%;
    height: 100%;
  }
  .avatar-sub > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .avatar-sub.scroll {
    top: 0%;
  }
  .menu-bar-list {
    display: flex;
  }
  .menu-bar-list > li {
    list-style: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: absolute;
    color: black;
  }
  .menu-bar-list > li:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
  .menu-bar-list > li > a {
    padding: 20px 0px;
    text-decoration: none;
    color: black;
  }
  .menu-bar-item-1 {
    left: 149px;
    width: 90;
  }
  .menu-bar-item-2 {
    left: 264px;
    width: 70px;
  }
  .menu-bar-item-2:hover {
    cursor: pointer;
  }
  .menu-bar-item-2:hover .sub-menu-guitar {
    display: block;
  }
  .sub-menu-guitar {
    position: absolute;
    z-index: 6;
    top: 62px;
    width: 150px;
    left: 0px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    display: none;
    background-color: white;
  }
  .blank-sub-menu {
    height: 5px;
  }
  .sub-menu-guitar > li {
    list-style: none;
    width: 150px;
    text-align: left;
    text-indent: 15px;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 10px auto;
  }
  .sub-menu-guitar > li > a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    width: 150px;
    height: 30px;
    line-height: 30px;
  }
  .sub-menu-guitar > li:hover > a {
    color: orangered;
  }
  .menu-bar-item-3 {
    width: 80px;
    left: 359px;
  }
  .menu-bar-item-4 {
    width: 110px;
    left: 464px;
  }
  .menu-bar-item-5 {
    width: 50px;
    left: 599px;
  }
  .menu-bar-item-6 {
    width: 70px;
    left: 674px;
  }
  .menu-bar-sign-up {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: absolute;
    color: black;
    width: 100px;
    left: 996px;
  }
  .menu-bar-sign-up > a {
    padding: 20px 0px;
    text-decoration: none;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    height: 60px;
    position: absolute;
    color: black;
    position: absolute;
    width: 80px;
    right: 0px;
    display: flex;
    justify-content: space-between;
  }
  .sub-shopping-cart:hover .sub-shopping-cart-display {
    transform: scaleY(1);
    opacity: 1;
    transition: transform 0.3s, opacity 0.3s;
  }
  .sub-shopping-cart-display {
    transform-origin: left top 0;
    position: absolute;
    top: calc(100% + 2px);
    right: 22px;
    width: 320px;
    background-color: white;
    z-index: 3;
    transform: scaleY(0);
    opacity: 0;
    transition: opacity 0.3s;
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
    transition: transform 0.3s, opacity 0.3s;
    border-radius: 0 0 5px 5px;
  }
  .match-box {
    position: absolute;
    top: -10px;
    right: 2.7px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    z-index: 1;
    border: 1px solid #c4c4c4;
  }
  .match-box-hidden {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 20px;
    background-color: white;
    z-index: 2;
  }
  .sub-shopping-cart-container {
    width: 100%;
  }
  .sub-shopping-cart-container-item {
    width: 100%;
    max-height: 300px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #c4c4c4;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar {
    width: 7px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }
  .sub-shopping-cart-item {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .image-item-shopping {
    margin-left: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-item-shopping > img {
    height: 100%;
  }
  .info-item-shopping {
    margin-left: 10px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name-item-shopping {
    position: relative;
    width: 200px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    z-index: 1;
  }
  .price-item {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
  }
  .price-item-shopping {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
  }
  .sub-shopping-cart-total {
    width: 100%;
    border-top: 1px solid #c4c4c4;
  }
  .total-money {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .total-money-number {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: red;
  }
  .button-access-shopping-cart {
    text-decoration: none;
    width: 200px;
    height: 40px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-color);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  .button-access-shopping-cart:hover {
    cursor: pointer;
    background-color: red;
  }
  .shopping-cart-note {
    height: 50px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    color: #000000;
  }
  .sub-shopping-cart > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 80px;
    height: 60px;
  }
  .total-count-item {
    display: inline-block;
    text-align: center;
    width: 28px;
    height: 28px;
    border-radius: 16px;
    line-height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid black;
  }

  .line-1 {
    width: 1px;
    position: absolute;
    top: 0px;
    height: 32px;
    left: 986px;
    background-color: black;
    display: none;
    transition: 0.5s;
  }
  .line-1.scroll {
    display: block;
    top: 13px;
  }
  .line-2 {
    width: 1px;
    position: absolute;
    top: 13px;
    height: 32px;
    left: 1104px;
    background-color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 588px;
    top: 15px;
    left: 150px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 3px;
    transition: 0.5s;
  }
  .search-bar.scroll {
    top: 76px;
    left: 948px;
    width: 32px;
  }
  .search-bar > img {
    cursor: pointer;
  }
  .x-mark-search-bar {
    position: absolute;
    right: 10px;
    z-index: 7;
    display: none;
    transition: 0.3s;
  }
  .x-mark-search-bar.scroll {
    left: -20px;
    opacity: 0;
  }
  .search-bar:hover .x-mark-search-bar.scroll {
    opacity: 1;
  }
  .input-search-bar {
    width: 556px;
    height: 32px;
    position: absolute;
    left: 32px;
    z-index: 6;
    border: none;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
  }
  .input-search-bar.scroll {
    width: 0px;
    border: 0px;
    left: 0px;
  }
  .search-bar:hover .input-search-bar.scroll {
    border: 1px solid #c4c4c4;
    left: -500px;
    width: 500px;
  }

  .input-search-bar::placeholder {
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
  }
  .input-search-bar:focus {
    outline: none;
  }
  .suggestion-item {
    top: calc(100% + 1px);
    left: 33px;
    position: absolute;
    width: 556px;
    background-color: white;
    opacity: 0;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    opacity: 1;
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: -500px;
    width: 500px;
    display: none;
  }
  .search-bar:hover .suggestion-item.scroll {
    display: block;
  }
  .suggestion-guitar {
    width: 100%;
    overflow: auto;
    max-height: 300px;
    scrollbar-width: thin;
    scrollbar-color: #c4c4c4;
  }
  .suggestion-guitar::-webkit-scrollbar {
    width: 7px;
  }
  .suggestion-guitar::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .suggestion-guitar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .suggestion-guitar::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }
  .search-bar-item {
    text-decoration: none;
    height: 30px;
    display: block;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: black;
  }
  .search-bar-item:hover {
    background-color: rgb(221, 221, 221);
  }
  .text-mark-search {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400 !important;
    font-size: 16px;
    line-height: 30px;
    color: orangered;
  }

  .search-bar-notification {
    width: 100%;
    height: 60px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 60px;
    color: black;
  }
  .suggestion-category {
    display: none;
    border-top: 1px solid #c4c4c4;
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .suggestion-category-item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #c4c4c4;
    margin: 5px 20px 5px 10px;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: black;
  }
  .suggestion-category-title {
    width: 100%;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .suggestion-category-item:hover {
    background-color: black;
    color: white;
  }
  .address-top-navbar {
    position: absolute;
    width: 286px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 18px;
    left: 810px;
  }
  .location-top {
    color: white;
    font-size: 90%;
  }
  .address-top-navbar > p {
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: white;
  }
  .address-top-navbar > p > a {
    text-decoration: none;
    color: white;
  }
  .phone-number-top-navbar {
    position: absolute;
    width: 83px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 18px;
    right: 0px;
  }
  .phone-number-top-navbar > p {
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: white;
  }
  .phone-number-top-navbar > p > a {
    color: white;
    text-decoration: none;
  }
  .phone-top {
    color: white;
    font-size: 90%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .header-desktop {
    width: 100%;
    position: relative;
    background-color: black;
    height: 62px;
    position: relative;
    z-index: 4;
    overflow: visible;
    box-sizing: border-box;
  }
  .header-desktop.scroll {
    position: fixed;
    top: -62px;
    z-index: 6;
  }
  .top-navbar {
    width: 100%;
    position: relative;
    height: 62px;
  }
  .top-navbar-container {
    width: 1000px;
    margin: 0 auto;
    height: 62px;
    position: relative;
  }
  .avatar {
    width: 124px;
    height: 124px;
    position: absolute;
    top: 0px;
    z-index: 7;
    display: inline-block;
    transition: 0.5s;
  }
  .avatar.scroll {
    top: -62px;
  }
  .avatar > img {
    width: 100%;
    height: 100%;
  }
  .avatar > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .menu-bar {
    width: 100%;
    background-color: white;
    position: absolute;
    z-index: 5;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    height: 62px;
    top: 62px;
    left: 0px;
  }
  .menu-bar-inner {
    width: 1000px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    height: 62px;
  }
  .avatar-sub-container {
    position: absolute;
    top: 0%;
    left: 0%;
    transition: 0.5s;
    width: 124px;
    height: 62px;
    overflow: hidden;
  }
  .avatar-sub {
    position: absolute;
    top: 100%;
    left: 0%;
    transition: 0.5s;
    width: 124px;
    height: 62px;
  }
  .avatar-sub > img {
    width: 100%;
    height: 100%;
  }
  .avatar-sub > a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .avatar-sub.scroll {
    top: 0%;
  }
  .menu-bar-list {
    display: flex;
  }
  .menu-bar-list > li {
    list-style: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: absolute;
    color: black;
  }
  .menu-bar-list > li:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
  .menu-bar-list > li > a {
    padding: 20px 0px;
    text-decoration: none;
    color: black;
  }
  .menu-bar-item-1 {
    left: 149px;
    width: 90;
  }
  .menu-bar-item-2 {
    left: 254px;
    width: 70px;
  }
  .menu-bar-item-2:hover {
    cursor: pointer;
  }
  .menu-bar-item-2:hover .sub-menu-guitar {
    display: block;
  }
  .sub-menu-guitar {
    position: absolute;
    z-index: 6;
    top: 62px;
    width: 150px;
    left: 0px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    display: none;
    background-color: white;
  }
  .blank-sub-menu {
    height: 5px;
  }
  .sub-menu-guitar > li {
    list-style: none;
    width: 150px;
    text-align: left;
    text-indent: 15px;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 10px auto;
  }
  .sub-menu-guitar > li > a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    width: 150px;
    height: 30px;
    line-height: 30px;
  }
  .sub-menu-guitar > li:hover > a {
    color: orangered;
  }
  .menu-bar-item-3 {
    width: 80px;
    left: 334px;
  }
  .menu-bar-item-4 {
    width: 110px;
    left: 429px;
  }
  .menu-bar-item-5 {
    width: 50px;
    left: 554px;
  }
  .menu-bar-item-6 {
    width: 70px;
    left: 619px;
  }
  .menu-bar-sign-up {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: absolute;
    color: black;
    position: absolute;
    width: 100px;
    left: 846px;
  }
  .menu-bar-sign-up > a {
    padding: 20px 0px;
    text-decoration: none;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    height: 60px;
    position: absolute;
    color: black;
    position: absolute;
    width: 40px;
    right: 0px;
    display: flex;
    justify-content: space-between;
  }
  .sub-shopping-cart:hover .sub-shopping-cart-display {
    transform: scaleY(1);
    opacity: 1;
    transition: transform 0.3s, opacity 0.3s;
  }
  .sub-shopping-cart-display {
    transform-origin: left top 0;
    position: absolute;
    top: calc(100% + 2px);
    right: 5px;
    width: 320px;
    background-color: white;
    z-index: 3;
    transform: scaleY(0);
    opacity: 0;
    transition: opacity 0.3s;
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
    transition: transform 0.3s, opacity 0.3s;
    border-radius: 0 0 5px 5px;
  }
  .match-box {
    position: absolute;
    top: -10px;
    right: 5px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    z-index: 1;
    border: 1px solid #c4c4c4;
  }
  .match-box-hidden {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 20px;
    background-color: white;
    z-index: 2;
  }
  .sub-shopping-cart-container {
    width: 100%;
  }
  .sub-shopping-cart-container-item {
    width: 100%;
    max-height: 300px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #c4c4c4;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar {
    width: 7px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .sub-shopping-cart-container-item::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }
  .sub-shopping-cart-item {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .image-item-shopping {
    margin-left: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-item-shopping > img {
    height: 100%;
  }
  .info-item-shopping {
    margin-left: 10px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name-item-shopping {
    position: relative;
    width: 200px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    z-index: 1;
  }
  .price-item {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
  }
  .price-item-shopping {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 5px;
  }
  .sub-shopping-cart-total {
    width: 100%;
    border-top: 1px solid #c4c4c4;
  }
  .total-money {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .total-money-number {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: red;
  }
  .button-access-shopping-cart {
    text-decoration: none;
    width: 200px;
    height: 40px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-color);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  .button-access-shopping-cart:hover {
    cursor: pointer;
    background-color: red;
  }
  .shopping-cart-note {
    height: 50px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    color: #000000;
  }
  .sub-shopping-cart > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 80px;
    height: 60px;
    position: relative;
  }
  .total-count-item {
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
    border-radius: 16px;
    line-height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    border: 1px solid black;
    position: absolute;
    background-color: white;
    top: 10px;
    left: 20px;
  }

  .line-1 {
    width: 1px;
    position: absolute;
    top: 0px;
    height: 32px;
    left: 841px;
    background-color: black;
    display: none;
    transition: 0.5s;
  }
  .line-1.scroll {
    display: block;
    top: 13px;
  }
  .line-2 {
    width: 1px;
    position: absolute;
    top: 13px;
    height: 32px;
    left: 949px;
    background-color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 535px;
    top: 15px;
    left: 150px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 3px;
    transition: 0.5s;
  }
  .search-bar.scroll {
    top: 76px;
    left: 803px;
    width: 32px;
  }
  .search-bar > img {
    cursor: pointer;
  }
  .x-mark-search-bar {
    position: absolute;
    right: 10px;
    z-index: 7;
    display: none;
    transition: 0.3s;
  }
  .x-mark-search-bar.scroll {
    left: -20px;
    opacity: 0;
  }
  .search-bar:hover .x-mark-search-bar.scroll {
    opacity: 1;
  }
  .input-search-bar {
    width: 506px;
    height: 32px;
    position: absolute;
    left: 32px;
    z-index: 6;
    border: none;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
  }
  .input-search-bar.scroll {
    width: 0px;
    border: 0px;
    left: 0px;
  }
  .search-bar:hover .input-search-bar.scroll {
    border: 1px solid #c4c4c4;
    left: -500px;
    width: 500px;
  }

  .input-search-bar::placeholder {
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
  }
  .input-search-bar:focus {
    outline: none;
  }
  .suggestion-item {
    top: calc(100% + 1px);
    left: 33px;
    position: absolute;
    width: 506px;
    background-color: white;
    opacity: 0;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    opacity: 1;
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: -500px;
    width: 500px;
    display: none;
  }
  .search-bar:hover .suggestion-item.scroll {
    display: block;
  }
  .suggestion-guitar {
    width: 100%;
    overflow: auto;
    max-height: 300px;
    scrollbar-width: thin;
    scrollbar-color: #c4c4c4;
  }
  .suggestion-guitar::-webkit-scrollbar {
    width: 7px;
  }
  .suggestion-guitar::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .suggestion-guitar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .suggestion-guitar::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }
  .search-bar-item {
    text-decoration: none;
    height: 30px;
    display: block;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: black;
  }
  .search-bar-item:hover {
    background-color: rgb(221, 221, 221);
  }
  .text-mark-search {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400 !important;
    font-size: 16px;
    line-height: 30px;
    color: orangered;
  }

  .search-bar-notification {
    width: 100%;
    height: 60px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 60px;
    color: black;
  }
  .suggestion-category {
    display: none;
    border-top: 1px solid #c4c4c4;
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .suggestion-category-item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #c4c4c4;
    margin: 5px 20px 5px 10px;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: black;
  }
  .suggestion-category-title {
    width: 100%;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .suggestion-category-item:hover {
    background-color: black;
    color: white;
  }
  .address-top-navbar {
    display: none;
  }

  .phone-number-top-navbar {
    display: none;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .header-desktop {
    display: none;
  }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .header-desktop {
    display: none;
  }
}
@media only screen and (min-width: 351px) and (max-width: 576px) {
  .header-desktop {
    display: none;
  }
}
@media only screen and (max-width: 350px) {
  .header-desktop {
    display: none;
  }
}
</style>
