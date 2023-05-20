<template>
  <div class="form-table">
    <div class="form-table-content">
      <div class="form-table-content-logo">
        <router-link to="/"
          ><img src="images/HomePage/Untitled.jpg" alt=""
        /></router-link>
      </div>
      <div class="form-table-content-main">
        <div class="form-table-sign-up form-item">
          <h4 class="title">ĐĂNG KÝ</h4>
          <div class="form-table-notification sign-up-notification"></div>
          <div class="break-point">
            <hr />
            <span>Nhập Thông Tin Đăng Ký</span>
          </div>
          <input-component
            v-model.trim="userInfo.email"
            isRequired
            :name="'emai'"
            :id="'email-sign-up'"
            :error-value="userError.email ? userError.email : ''"
            :label="'Email Đăng Ký'"
          />
          <!-- <input
              type="text"
              name="email"
              id="email-sign-up"
              required
              v-model.trim="userInfo.email"
            /> -->
          <!-- <label for="email-sign-up">Email Đăng Ký</label> -->
          <!-- <div class="empty-check-input">Bạn phải điền vào mục này</div>
          <div class="email-name-check">
            Email bạn điền không đúng định dạng
          </div> -->
          <input-component
            v-model.trim="userInfo.name"
            isRequired
            :name="'name'"
            :id="'name-sign-up'"
            :error-value="userError.name ? userError.name : ''"
            :label="'Họ Tên'"
          />
          <input-component
            :modelValue="userInfo.phone"
            @update:modelValue="
              (newValue) => {
                userInfo.phone = onInputOnlyDigit(newValue);
              }
            "
            isRequired
            :name="'phone'"
            :id="'phone-sign-up'"
            :error-value="userError.phoneNumber ? userError.phoneNumber : ''"
            :label="'Số Điện Thoại'"
            :max-length="10"
          />
          <!-- <div class="form-part">
            <input
              type="text"
              name="phone"
              id="phone-sign-up"
              required
              v-model.trim="userInfo.phoneNumber"
            />
            <label for="phone-sign-up">Số Điện Thoại</label>
            <div class="empty-check-input">Bạn phải điền vào mục này</div>
            <div class="mobile-phone-check">Số di động bao gồm 10 chữ số</div>
          </div> -->
          <input-component
            v-model.trim="userInfo.password"
            isRequired
            :name="'password'"
            :id="'password-sign-up'"
            :error-value="userError.password ? userError.password : ''"
            :type-input="'password'"
            :label="'Mật Khẩu'"
          />
          <!-- <div class="form-part">
            <input
              type="password"
              name="password"
              id="password-sign-up"
              required
              v-model.trim="userInfo.password"
            />
            <label for="password-sign-up">Mật Khẩu </label>
            <div class="empty-check-input">Bạn phải điền vào mục này</div>
          </div> -->
          <input-component
            v-model.trim="userInfo.passwordRecheck"
            isRequired
            :name="'password'"
            :id="'password-re-check'"
            :error-value="
              userError.passwordRecheck ? userError.passwordRecheck : ''
            "
            :type-input="'password'"
            :label="'Nhập Lại Mật Khẩu'"
          />
          <!-- <div class="form-part">
            <input
              type="password"
              name="password"
              id="password-sign-up-2"
              required
              v-model.trim="userInfo.passwordRecheck"
            />
            <label for="password-sign-up-2">Nhập Lại Mật Khẩu</label>
            <div class="empty-check-input">Bạn phải điền vào mục này</div>
            <div class="password-check">Mật khẩu không khớp</div>
          </div> -->
          <div class="note-sign-up">
            <p>
              Khi bạn nhấn ĐĂNG KÝ, bạn đã đồng ý với những
              <router-link to="/dieu-khoan-dich-vu" target="_blank"
                >Điều Khoản</router-link
              >
              và
              <router-link to="/chinh-sach-bao-hanh" target="_blank"
                >Chính Sách</router-link
              >
              của QTV Guitar Shop.
            </p>
          </div>
          <div
            class="form-table-sign-up-button-sign-up"
            @click="checkInfoRegister"
          >
            ĐĂNG KÝ
          </div>
          <div class="form-table-sign-up-button-sign-in">
            <router-link to="/dang-nhap">Đăng nhập</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import InputComponent from "../components/common/InputComponent.vue";
import { onInputOnlyDigit } from "@/utils/common";
export default {
  components: { InputComponent },
  setup() {
    const userTest = ref("");
    const userInfo = reactive({});
    const userError = reactive({});

    function checkInfoRegister() {

      
    }
    return {
      userInfo,
      userError,
      checkInfoRegister,
      onInputOnlyDigit,
      userTest,
    };
  },
};
</script>

<style scoped>
*,
body {
  margin: 0px;
  padding: 0px;
}
html {
  scroll-behavior: smooth;
}

@media only screen and (min-width: 577px) {
  body {
    height: 100vh;
    width: 100%;
    background-color: white;
    position: relative;
    display: block;
  }
  .form-table {
    width: 400px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translate(-50%, 0%);
    display: flex;
    border-radius: 2px;
    margin-bottom: 3%;
    box-shadow: 1px 1px 10px rgb(99, 99, 99);
  }
  .form-table-image {
    display: none;
  }
  .form-table-content {
    width: 100%;
    transition: 0.5s;
  }
  .form-table-content-logo {
    width: 124px;
    height: 62px;
    margin: 30px auto 10px auto;
  }
  .form-table-content-logo > a {
    width: 100%;
    height: 100%;
  }
  .form-table-content-logo > a > img {
    width: 100%;
    height: 100%;
  }
  .form-table-content-main {
    width: 100%;
  }
  .form-item {
    width: 320px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    transition: 0.5s;
  }
  .form-part {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    position: relative;
    margin-top: 25px;
  }
  .form-part > label {
    position: absolute;
    top: 14px;
    left: 6px;
    color: rgb(175, 175, 175);
    transition: 0.25s;
    font-size: 16px;
    line-height: 16px;
    background-color: white;
    padding: 0 4px;
  }
  .form-part > input {
    width: 100%;
    height: 42px;
    border: 1px solid rgb(175, 175, 175);
    font-size: 16px;
    line-height: 42px;
    border-radius: 3px;
    text-indent: 10px;
    outline: none;
    background: none;
    transition: 0.25s;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  .form-part > input:hover {
    border: 1px solid black;
  }

  .form-part > input:focus {
    border: 1px solid cornflowerblue;
  }
  .form-part > input:focus + label {
    font-size: 13px;
    top: -6.5px;
    color: cornflowerblue;
  }
  .form-part > input:valid + label {
    font-size: 13px;
    top: -6.5px;
  }
  .label-head {
    padding-top: 20px;
    border-top: 1px solid rgb(175, 175, 175);
    margin-top: 0;
  }
  .break-point {
    width: 100%;
    display: flex;
    position: relative;
  }
  .break-point > span {
    position: absolute;
    font-size: 13px;
    left: 50%;
    top: -6.5px;
    transform: translateX(-50%);
    line-height: 13px;
    display: block;
    background-color: white;
    padding: 0 5px;
    width: 165px;
    text-align: center;
    color: rgb(175, 175, 175);
  }
  .break-point > hr {
    width: 100%;
    background-color: rgb(175, 175, 175);
    margin-bottom: 15px;
  }
  h4 {
    font-size: 24px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    padding-bottom: 5px;
    font-weight: 600;
  }
  .form-table-notification {
    font-size: 16px;
    line-height: 25px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    color: red;
    padding-bottom: 15px;
    height: 25px;
  }
  .empty-check-input {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 100%;
    max-width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .email-name-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .password-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .mobile-phone-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    width: 220px;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-input::before,
  .email-name-check::before,
  .password-check::before,
  .mobile-phone-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .form-table-sign-in-lost-password {
    color: #20a8d8;
    font-size: 15px;
    text-align: right;
    margin-top: 10px;
  }
  .form-table-sign-in-lost-password:hover {
    cursor: pointer;
  }
  .form-table-sign-in-button-sign-in {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 500;
  }
  .form-table-sign-in-button-sign-in:hover {
    cursor: pointer;
    background-color: red;
  }
  .note-sign-up {
    margin-top: 15px;
    font-size: 15px;
    line-height: 23px;
  }
  .note-sign-up > p > a {
    color: red;
  }
  .form-table-sign-in-button-sign-up {
    width: 80px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .form-table-sign-in-button-sign-up a {
    text-decoration: none;
  }
  .form-table-sign-in-button-sign-up a:visited {
    color: #20a8d8;
  }
  .form-table-sign-in-button-sign-up:hover {
    cursor: pointer;
  }
  .form-table-sign-up-button-sign-up {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 500;
  }
  .form-table-sign-up-button-sign-up:hover {
    cursor: pointer;
    background-color: red;
  }
  .form-table-sign-up-button-sign-in {
    width: 100px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .back-home-page-button {
    width: 100px;
    color: #20a8d8;
    line-height: 30px;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .fa-arrow-left {
    font-size: 14px;
  }
  .form-table-sign-up-button-sign-in a {
    text-decoration: none;
  }
  .form-table-sign-up-button-sign-in a:visited {
    color: #20a8d8;
  }
  .form-table-sign-up-button-sign-in:hover,
  .back-home-page-button:hover {
    cursor: pointer;
  }
}

@media only screen and (max-width: 576px) and (min-width: 351px) {
  body {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }
  .form-table {
    width: 100%;
    background-color: white;
    display: flex;
  }
  .form-table-image {
    display: none;
  }
  .form-table-content {
    width: 100%;
    transition: 0.5s;
  }
  .form-table-content-logo {
    width: 124px;
    height: 62px;
    margin: 30px auto 10px auto;
  }
  .form-table-content-logo > a {
    width: 100%;
    height: 100%;
  }
  .form-table-content-logo > a > img {
    width: 100%;
    height: 100%;
  }
  .form-table-content-main {
    width: 100%;
  }
  .form-item {
    width: 90%;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    transition: 0.5s;
  }
  .form-part {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    position: relative;
    margin-top: 25px;
  }
  .form-part > label {
    position: absolute;
    top: 14px;
    left: 6px;
    color: rgb(175, 175, 175);
    transition: 0.25s;
    font-size: 16px;
    line-height: 16px;
    background-color: white;
    padding: 0 4px;
  }
  .form-part > input {
    width: 100%;
    height: 42px;
    border: 1px solid rgb(175, 175, 175);
    font-size: 16px;
    line-height: 42px;
    border-radius: 3px;
    text-indent: 10px;
    outline: none;
    background: none;
    transition: 0.25s;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  .form-part > input:hover {
    border: 1px solid black;
  }

  .form-part > input:focus {
    border: 1px solid cornflowerblue;
  }
  .form-part > input:focus + label {
    font-size: 13px;
    top: -6.5px;
    color: cornflowerblue;
  }
  .form-part > input:valid + label {
    font-size: 13px;
    top: -6.5px;
  }
  .label-head {
    padding-top: 20px;
    border-top: 1px solid rgb(175, 175, 175);
    margin-top: 0;
  }
  .break-point {
    width: 100%;
    display: flex;
    position: relative;
  }
  .break-point > span {
    position: absolute;
    font-size: 13px;
    left: 50%;
    top: -6.5px;
    transform: translateX(-50%);
    line-height: 13px;
    display: block;
    background-color: white;
    padding: 0 5px;
    width: 165px;
    text-align: center;
    color: rgb(175, 175, 175);
  }
  .break-point > hr {
    width: 100%;
    background-color: rgb(175, 175, 175);
    margin-bottom: 15px;
  }
  h4 {
    font-size: 24px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    padding-bottom: 5px;
    font-weight: 600;
  }
  .form-table-notification {
    font-size: 16px;
    line-height: 25px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    color: red;
    padding-bottom: 15px;
    height: 25px;
  }
  .empty-check-input {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 100%;
    max-width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .email-name-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .password-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .mobile-phone-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    width: 220px;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-input::before,
  .email-name-check::before,
  .password-check::before,
  .mobile-phone-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .form-table-sign-in-lost-password {
    color: #20a8d8;
    font-size: 15px;
    text-align: right;
    margin-top: 10px;
  }
  .form-table-sign-in-lost-password:hover {
    cursor: pointer;
  }
  .form-table-sign-in-button-sign-in {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 500;
  }
  .form-table-sign-in-button-sign-in:hover {
    cursor: pointer;
    background-color: red;
  }
  .note-sign-up {
    margin-top: 15px;
    font-size: 15px;
    line-height: 23px;
  }
  .note-sign-up > p > a {
    color: red;
  }
  .form-table-sign-in-button-sign-up {
    width: 80px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .form-table-sign-in-button-sign-up:hover {
    cursor: pointer;
  }
  .form-table-sign-up-button-sign-up {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 500;
  }
  .form-table-sign-up-button-sign-up:hover {
    cursor: pointer;
    background-color: red;
  }
  .form-table-sign-up-button-sign-in {
    width: 100px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .back-home-page-button {
    width: 100px;
    color: #20a8d8;
    line-height: 30px;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .fa-arrow-left {
    font-size: 14px;
  }
  .form-table-sign-up-button-sign-in a {
    text-decoration: none;
  }
  .form-table-sign-up-button-sign-in a:visited {
    color: #20a8d8;
  }
  .form-table-sign-up-button-sign-in:hover,
  .back-home-page-button:hover {
    cursor: pointer;
  }
}

@media only screen and (max-width: 350px) {
  body {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }
  .form-table {
    width: 100%;
    background-color: white;
    display: flex;
  }
  .form-table-image {
    display: none;
  }
  .form-table-content {
    width: 100%;
    transition: 0.5s;
  }
  .form-table-content-logo {
    width: 124px;
    height: 62px;
    margin: 30px auto 10px auto;
  }
  .form-table-content-logo > a {
    width: 100%;
    height: 100%;
  }
  .form-table-content-logo > a > img {
    width: 100%;
    height: 100%;
  }
  .form-table-content-main {
    width: 100%;
  }
  .form-item {
    width: 90%;
    max-width: 320px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    transition: 0.5s;
  }
  .form-part {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    position: relative;
    margin-top: 25px;
  }
  .form-part > label {
    position: absolute;
    top: 14px;
    left: 6px;
    color: rgb(175, 175, 175);
    transition: 0.25s;
    font-size: 16px;
    line-height: 16px;
    background-color: white;
    padding: 0 4px;
  }
  .form-part > input {
    width: 100%;
    height: 42px;
    border: 1px solid rgb(175, 175, 175);
    font-size: 16px;
    line-height: 42px;
    border-radius: 3px;
    text-indent: 10px;
    outline: none;
    background: none;
    transition: 0.25s;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  .form-part > input:hover {
    border: 1px solid black;
  }

  .form-part > input:focus {
    border: 1px solid cornflowerblue;
  }
  .form-part > input:focus + label {
    font-size: 13px;
    top: -6.5px;
    color: cornflowerblue;
  }
  .form-part > input:valid + label {
    font-size: 13px;
    top: -6.5px;
  }
  .label-head {
    padding-top: 20px;
    border-top: 1px solid rgb(175, 175, 175);
    margin-top: 0;
  }
  .break-point {
    width: 100%;
    display: flex;
    position: relative;
  }
  .break-point > span {
    position: absolute;
    font-size: 13px;
    left: 50%;
    top: -6.5px;
    transform: translateX(-50%);
    line-height: 13px;
    display: block;
    background-color: white;
    padding: 0 5px;
    width: 165px;
    text-align: center;
    color: rgb(175, 175, 175);
  }
  .break-point > hr {
    width: 100%;
    background-color: rgb(175, 175, 175);
    margin-bottom: 15px;
  }
  h4 {
    font-size: 24px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    padding-bottom: 5px;
    font-weight: 600;
  }
  .form-table-notification {
    font-size: 16px;
    line-height: 25px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
    color: red;
    padding-bottom: 15px;
    height: 25px;
  }
  .empty-check-input {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 100%;
    max-width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .email-name-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .password-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .mobile-phone-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    width: 220px;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-input::before,
  .email-name-check::before,
  .password-check::before,
  .mobile-phone-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .form-table-sign-in-lost-password {
    color: #20a8d8;
    font-size: 15px;
    text-align: right;
    margin-top: 10px;
  }
  .form-table-sign-in-lost-password:hover {
    cursor: pointer;
  }
  .form-table-sign-in-button-sign-in {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 500;
  }
  .form-table-sign-in-button-sign-in:hover {
    cursor: pointer;
    background-color: red;
  }
  .note-sign-up {
    margin-top: 15px;
    font-size: 15px;
    line-height: 23px;
  }
  .note-sign-up > p > a {
    color: red;
  }
  .form-table-sign-in-button-sign-up {
    width: 80px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .form-table-sign-in-button-sign-up:hover {
    cursor: pointer;
  }
  .form-table-sign-up-button-sign-up {
    width: 100%;
    background-color: var(--button-color);
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 500;
  }
  .form-table-sign-up-button-sign-up:hover {
    cursor: pointer;
    background-color: red;
  }
  .form-table-sign-up-button-sign-in {
    width: 100px;
    color: #20a8d8;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .back-home-page-button {
    width: 100px;
    color: #20a8d8;
    line-height: 30px;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .fa-arrow-left {
    font-size: 14px;
  }
  .form-table-sign-up-button-sign-in a {
    text-decoration: none;
  }
  .form-table-sign-up-button-sign-in a:visited {
    color: #20a8d8;
  }
  .form-table-sign-up-button-sign-in:hover,
  .back-home-page-button:hover {
    cursor: pointer;
  }
}
</style>
