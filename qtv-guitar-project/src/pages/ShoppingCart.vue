<template>
  <main class="container">
    <div class="main-container">
      <router-link class="exit-button" to="/">
        <i class="fas fa-chevron-left"></i>
        <div class="exit-title">Tiếp Tục Mua Sắm</div>
      </router-link>
      <div
        class="shopping-cart-item-container"
        v-if="cartStore.cart.length > 0"
      >
        <!--Shopping Cart Items will be displayed here-->
        <div
          class="shopping-cart-item"
          v-for="item in cartStore.cart"
          :key="item._id"
        >
          <div class="shopping-cart-item-detail">
            <div class="item-detail">
              <div class="item-photo">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="item-detail-info">
                <router-link
                  class="item-name"
                  :to="renderUrl(item.group, item_id)"
                  >{{ item.name }}</router-link
                >
                <div class="sub-item-name" v-if="item.seatClass">
                  Hạng : {{ convertSeatClass(item.seatClass) }}
                </div>
                <div class="sub-item-name" v-if="item.seatClass">
                  Ghế : {{ convertSeatList(item.seatId) }}
                </div>
                <div class="item-price">
                  <span>{{ separator1000(item.price) }}</span> VND
                </div>

                <div
                  class="delete-button"
                  @click="cartStore.removeFromCart(item._id, item.seatClass)"
                >
                  <img
                    src="images/HomePage/delete-icon.png"
                    alt="delete-icon"
                  />
                  Xóa
                </div>
              </div>
            </div>
            <div class="item-quantity">
              <div class="item-number" :class="{ disable: item.seatClass }">
                <div
                  class="minus-item"
                  @click="item.seatClass ? null : cartStore.minusOne(item._id)"
                >
                  <img
                    src="images/GuitarShow/minus_24px.png"
                    alt="minus-item"
                  />
                </div>
                <input
                  type="text"
                  :value="item.count"
                  :disabled="item.seatClass"
                />
                <div
                  class="plus-item"
                  @click="item.seatClass ? null : cartStore.plusOne(item._id)"
                >
                  <img src="images/GuitarShow/plus.png" alt="plus-item" />
                </div>
              </div>
            </div>
            <div class="provisional-value">
              <p>Thành Tiền :</p>
              <p>
                <span class="provisional-money-value">{{
                  separator1000(item.count * item.price)
                }}</span>
                VND
              </p>
            </div>
          </div>
        </div>
        <div class="summary-shopping-cart">
          <div class="summary-shopping-cart-container">
            <div class="summary-title">Tổng Số Tiền</div>
            <div class="summary-money">
              <span class="summary-total-value">{{
                separator1000(cartStore.totalMoney)
              }}</span>
              VND
            </div>
            <a class="submit-button" href="${targetPage}">Thanh Toán</a>
          </div>
        </div>
      </div>
      <div class="shopping-cart-note" v-else>
        Chưa Có Sản Phẩm Nào Trong Giỏ Hàng
      </div>
    </div>
  </main>
</template>

<script>
import { useCartStore } from "../stores/cart";
import { separator1000 } from "../utils/common";

const guitarTypeData = new Map([
  ["classical", "classicalguitar"],
  ["acoustic", "acousticguitar"],
  ["electrical", "electricguitar"],
  ["ukulele", "ukulele"],
]);

export default {
  setup() {
    const cartStore = useCartStore();
    function renderUrl(guitarGroup, guitarId) {
      const guitarType = guitarTypeData.get(guitarGroup);
      return `/san-pham/${guitarType}/${guitarId}`;
    }
    function convertSeatClass(seatClass) {
      let value = "";
      switch (seatClass) {
        case "SuperVIP":
          value = "Đặc biệt";
          break;
        case "VIP":
          value = "VIP";
          break;
        default:
          value = "Thường";
          break;
      }
      return value;
    }
    function convertSeatList(seatArray) {
      let value = "";
      for (let i = 0; i < seatArray.length; i++) {
        if (i === seatArray.length - 1) value += ` ${seatArray[i]}`;
        else value += ` ${seatArray[i]},`;
      }
      return value;
    }
    return {
      cartStore,
      separator1000,
      renderUrl,
      convertSeatClass,
      convertSeatList,
    };
  },
};
</script>

<style scoped>
.empty {
  position: fixed;
  left: 0;
  bottom: 0;
}
.sub-item-name {
  /* font-style: italic; */
  font-weight: 300 !important;
}
.item-number.disable .minus-item:hover {
  cursor: initial;
  background-color: white;
}
.item-number.disable .plus-item:hover {
  cursor: initial;
  background-color: white;
}
.item-number.disable {
  opacity: 0.4;
}
@media only screen and (min-width: 1366px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
  }
  .header-main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 94px;
  }
  .avatar {
    width: 120px;
    height: 60px;
    position: relative;
    padding-right: 20px;
  }
  .avatar > img {
    width: 100%;
  }

  .title-process > h2 {
    padding-left: 20px;
    border-left: 3px solid black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 50px;
  }

  /*Main Container*/
  .container {
    width: 100%;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    margin: 20px auto 20px calc(50% - 600px);
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    width: 200px;
  }
  .exit-button > i {
    font-size: 22px;
    transition: 0.5s;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    transition: 0.5s;
  }
  .exit-button:hover {
    cursor: pointer;
    color: red;
  }
  .exit-button:hover > .exit-title {
    color: red;
    padding-left: 10px;
  }

  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 30px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .item-detail {
    width: 40%;
    display: flex;
  }
  .item-photo {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    margin-left: 15px;
    width: calc(100% - 15px - 100px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button:hover {
    cursor: pointer;
    color: orangered;
  }
  .item-quantity {
    width: calc(35% - 50px);
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    margin-left: 15px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 121px;
    height: 34px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 25%;
    text-align: center;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    padding-top: 50px;
    border-top: 1px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  .summary-title {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    margin: 10px auto 20px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
  }
  .header-main-container {
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 84px;
  }
  .avatar {
    width: 110px;
    height: 55px;
    position: relative;
    padding-right: 20px;
  }
  .avatar > img {
    width: 100%;
  }

  .title-process > h2 {
    padding-left: 20px;
    border-left: 3px solid black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
  }
  /*Main Container*/
  .container {
    width: 100%;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .banner {
    width: 95%;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    margin: 20px auto 20px calc(50% - 500px);
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    width: 200px;
  }
  .exit-button > i {
    font-size: 22px;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    transition: 0.5s;
  }
  .exit-button:hover {
    cursor: pointer;
    color: orangered;
  }
  .exit-button:hover > .exit-title {
    color: orangered;
    padding-left: 10px;
  }
  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 30px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .item-detail {
    width: 40%;
    display: flex;
  }
  .item-photo {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    margin-left: 15px;
    width: calc(100% - 15px - 100px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button:hover {
    cursor: pointer;
    color: orangered;
  }
  .item-quantity {
    width: calc(35% - 50px);
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    margin-left: 15px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 121px;
    height: 34px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 25%;
    text-align: center;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    padding-top: 50px;
    border-top: 1px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  .summary-title {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    margin: 10px auto 20px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
  }
  .header-main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 84px;
  }
  .avatar {
    width: 110px;
    height: 55px;
    position: relative;
    padding-right: 20px;
  }
  .avatar > img {
    width: 100%;
  }

  .title-process > h2 {
    padding-left: 20px;
    border-left: 3px solid black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
  }

  .container {
    width: 100%;
  }
  .banner {
    width: 95%;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    margin: 20px auto 0 0;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    width: 200px;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .exit-button > i {
    font-size: 22px;
  }
  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 30px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .item-detail {
    width: 40%;
    display: flex;
  }
  .item-photo {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    margin-left: 15px;
    width: calc(100% - 15px - 100px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button:hover {
    cursor: pointer;
    color: orangered;
  }
  .item-quantity {
    width: calc(35% - 50px);
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    margin-left: 15px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 121px;
    height: 34px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 25%;
    text-align: center;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    padding-top: 50px;
    border-top: 1px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  .summary-title {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    margin: 10px auto 20px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
  }
  .header-main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
  }
  .avatar {
    width: 100px;
    height: 50px;
    position: relative;
    padding-right: 20px;
  }
  .avatar > img {
    width: 100%;
  }

  .title-process > h2 {
    padding-left: 20px;
    border-left: 3px solid black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;
  }

  .container {
    width: 100%;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .banner {
    width: 95%;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    margin: 20px auto 0px 0;
    text-decoration: none;
    color: black;
    width: 50%;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .exit-button > i {
    font-size: 22px;
  }
  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 30px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 20px;
    flex-wrap: wrap;
  }
  .item-detail {
    width: 60%;
    display: flex;
    padding-bottom: 15px;
  }
  .item-photo {
    width: 80px;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    margin-left: 15px;
    width: calc(100% - 15px - 100px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button:hover {
    cursor: pointer;
    color: orangered;
  }
  .item-quantity {
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    margin-left: 15px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 100px;
    height: 34px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item:hover {
    background-color: rgb(219, 218, 218);
    cursor: pointer;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 40%;
    padding-left: 60%;
    text-align: center;
    border-top: 1px solid #c4c4c4;
    padding-top: 10px;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    padding-top: 50px;
    border-top: 1px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  .summary-title {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    margin: 10px auto 20px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
  /*footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (min-width: 351px) and (max-width: 576px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
    border-bottom: 5px solid #c4c4c4;
  }
  .header-main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
  }
  .avatar {
    width: 95px;
    height: 47px;
    position: relative;
    padding-right: 20px;
    display: none;
  }
  .avatar > img {
    width: 100%;
  }
  .title-process > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 45px;
  }

  .container {
    width: 100%;
  }
  .banner {
    width: 95%;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    text-decoration: none;
    color: black;
    width: 95%;
    margin: 15px auto 15px 2.5%;
    width: 180px;
    display: flex;
    align-items: center;
  }
  .exit-button > i {
    font-size: 20px;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    margin: 10px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 10px;
    flex-wrap: wrap;
  }
  .item-detail {
    width: 62%;
    display: flex;
    padding-bottom: 15px;
    align-items: center;
  }
  .item-photo {
    width: 80px;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    width: calc(100% - 80px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .delete-button > img {
    width: 20px;
    height: 20px;
  }
  .item-quantity {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 40px;
    height: 30px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 45%;
    padding-left: 55%;
    text-align: center;
    border-top: 1px solid #c4c4c4;
    padding-top: 10px;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    padding-top: 40px;
    border-top: 5px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .summary-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 70%;
    max-width: 300px;
    margin: 10px auto 20px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
  /*footer*/
  footer {
    margin-top: 20px;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (max-width: 350px) {
  /*Main*/
  header {
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    position: relative;
    z-index: 0;
    border-bottom: 5px solid #c4c4c4;
  }
  .header-main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: center;
  }
  .avatar {
    width: 84px;
    height: 42px;
    position: relative;
    padding-right: 10px;
    display: none;
  }
  .avatar > img {
    width: 100%;
  }
  .title-process > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
  }
  /*Main Container*/
  .container {
    width: 100%;
  }
  .main-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  .exit-button {
    text-decoration: none;
    color: black;
    width: 95%;
    margin: 15px auto 10px 2.5%;
    width: 180px;
    display: flex;
    align-items: center;
  }
  .exit-button > i {
    font-size: 19px;
  }
  .exit-title {
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-container {
    width: 100%;
    margin: 0px auto;
    overflow: auto;
  }
  .shopping-cart-item {
    width: 100%;
    max-width: 1000px;
    margin: 10px auto;
    overflow: auto;
  }
  .shopping-cart-item-detail {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 5px;
    flex-wrap: wrap;
  }
  .item-detail {
    width: 62%;
    display: flex;
    padding-bottom: 10px;
    align-items: center;
  }
  .item-photo {
    width: 70px;
    height: 70px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .item-photo > img {
    height: 100%;
  }
  .item-detail-info {
    width: calc(100% - 70px);
  }
  .item-name,
  .sub-item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
  }
  .item-name:hover {
    color: orangered;
  }
  .item-price {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  .delete-button {
    margin-top: 5px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
    color: #000000;
  }
  .delete-button > img {
    width: 20px;
    height: 20px;
  }
  .item-quantity {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  .item-number {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .item-number > label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 30px;
    color: #000000;
  }
  .minus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 27px;
    width: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 0px 0px 3px;
  }
  .minus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .item-number > input {
    width: 40px;
    height: 27px;
    box-sizing: border-box;
    outline: none;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #c4c4c4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 27px;
    text-align: center;
  }
  .plus-item {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 27px;
    width: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 3px 3px 0px;
  }
  .plus-item > img {
    padding: 25%;
    width: 75%;
    height: 75%;
  }
  .provisional-value {
    width: 45%;
    padding-left: 55%;
    text-align: center;
    border-top: 1px solid #c4c4c4;
    padding-top: 10px;
  }
  .provisional-value > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
  }
  .provisional-value > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  .shopping-cart-item-total {
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
  }
  .shopping-cart-item-total-money {
    margin: 10px 0px 10px auto;
    width: 25%;
    text-align: center;
  }
  .shopping-cart-item-total-money > p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-item-total-money > p:nth-child(2) {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .shopping-cart-note {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: px;
    color: #000000;
  }
  .summary-shopping-cart {
    display: inline-block;
    margin-top: 10px;
    width: 100%;
    padding-top: 30px;
    border-top: 5px solid #c4c4c4;
    overflow: auto;
  }
  .summary-shopping-cart-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .summary-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #32323d;
  }
  .summary-money {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--button-color);
  }
  .submit-button {
    text-decoration: none;
    width: 250px;
    max-width: 300px;
    margin: 5px auto 15px auto;
    height: 40px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: var(--button-color);
  }
  .submit-button:hover {
    cursor: pointer;
    background-color: red;
  }
}
</style>
