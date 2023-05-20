<template>
  <main class="container">
    <div class="pop-up-modal">
      <div class="popup-send-feedback">
        <p class="popup-content">
          Cảm ơn bạn đã góp ý, QTV Guitar Shop sẽ phản hồi với bạn trong thời
          gian sớm nhất.
        </p>
        <div class="close-popup-button">OK</div>
      </div>
    </div>
    <div class="navigation">
      <router-link to="/">Trang Chủ</router-link
      >&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
      <div>Liên Hệ</div>
    </div>
    <div class="main-container">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3383688449617!2d105.78328315076168!3d20.979069294779407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accd88c1276b%3A0xc7ec85c744d8874e!2zSOG7kyBHxrDGoW0gUGxhemE!5e0!3m2!1sen!2s!4v1585363887617!5m2!1sen!2s"
          width="100%"
          height="500"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
    <div class="store-info">
      <div class="contact-info">
        <div class="contact-info-title">Thông Tin Liên Hệ</div>
        <div class="contact-info-detail">QTV GUITAR SHOP</div>
        <div class="contact-info-detail">
          <a href="https://goo.gl/maps/3hzESqcwEDF414fZ9" target="_blank"
            >Địa chỉ : Tầng 1, Hồ Gươm Plaza, Trần Phú, Hà Đông, Hà Nội.</a
          >
        </div>
        <div class="contact-info-detail">
          Điện thoại : <a href="tel:19001570">19001570</a>
        </div>
        <div class="contact-info-detail">Email : qtv-guitarshop@gmail.com</div>
      </div>
      <div class="feed-back">
        <div class="feed-back-title">Góp Ý</div>
        <div class="feed-back-note">
          Những ý kiến của bạn sẽ làm QTV Guitar Shop ngày càng hoàn thiện hơn.
        </div>
        <label class="feed-back-email" for="email-sender"
          >Email: <span style="color: red">*</span>
          <input
            id="email-sender"
            name="email"
            type="text"
            placeholder="example@domain.com"
            v-model="email"
          />
          <div class="empty-check-1">Bạn phải điền vào mục này</div>
          <div class="email-name-check-1">
            Email bạn điền không đúng định dạng
          </div>
        </label>
        <label class="feed-back-container" for="feed-back-content"
          >Nội Dung: <span style="color: red">*</span>
          <textarea
            name=""
            id="feed-back-content"
            cols="30"
            rows="4"
            placeholder="Bạn Muốn Nói Điều Gì Với Chúng Tôi"
            v-model="feedback"
          ></textarea>
          <div class="empty-check-1">Bạn phải điền vào mục này</div>
        </label>
        <div class="feed-back-require">
          <span style="color: red">*</span> Bạn không được để trống mục này
        </div>
        <div class="submit-feed-back">Gửi</div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const feedback = ref("");
    return { email, feedback };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1366px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    margin-top: 82px;
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
  .container.scroll {
    margin-top: 144px;
    position: relative;
  }
  .main-container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .navigation {
    width: 95%;
    max-width: 1200px;
    margin: 20px auto 0px auto;
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
  .map {
    margin-top: 20px;
    width: 100%;
    height: 40vh;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 95%;
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
  }
  .contact-info {
    width: 100%;
    max-width: 575px;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .contact-info-detail {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 100%;
    max-width: 575px;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    margin-top: 82px;
    width: 100%;
  }
  .container.scroll {
    margin-top: 144px;
    position: relative;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .navigation {
    width: 1000px;
    margin: 20px auto 0px auto;
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
  .map {
    margin-top: 20px;
    width: 1000px;
    height: 400px;
    margin: 0 auto;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 1000px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
  }
  .contact-info {
    width: 100%;
    max-width: 575px;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .contact-info-detail {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 100%;
    max-width: 575px;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(7) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .input-search-bar {
    width: calc(90% - 33px);
  }
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 0px auto;
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
  .map {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    height: 40vh;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 90%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
  }
  .contact-info {
    width: 47.5%;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .contact-info-detail {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 47.5%;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(7) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .input-search-bar {
    width: calc(90% - 33px);
  }
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 0px auto;
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
  .map {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    height: 40vh;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contact-info {
    width: 100%;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .contact-info-detail {
    margin-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 100%;
    margin-top: 30px;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
  /*footer*/
  footer {
    margin: 0;
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
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(7) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .input-search-bar {
    width: calc(90% - 33px);
  }
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 0px auto;
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
    line-height: 30px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .map {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    height: 40vh;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contact-info {
    width: 100%;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .contact-info-detail {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 100%;
    margin-top: 30px;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
  /*footer*/
  footer {
    margin: 0;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (max-width: 350px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-6 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(7) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .input-search-bar {
    width: calc(95% - 33px);
  }
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 0px auto;
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
    line-height: 30px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .map {
    margin: 0 auto;
    margin-top: 20px;
    width: 95%;
    height: 40vh;
  }
  .map > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  .store-info {
    width: 95%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contact-info {
    width: 100%;
  }
  .contact-info-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 10px;
  }
  .contact-info-detail {
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .contact-info-detail > a {
    text-decoration: none;
    color: black;
  }
  .feed-back {
    width: 100%;
    margin-top: 20px;
  }
  .feed-back-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-note {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 10px;
  }
  .feed-back-email {
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    position: relative;
  }
  #email-sender {
    width: 100%;
    height: 32px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 5px 0 15px 0;
  }
  .feed-back-container {
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 5px;
    position: relative;
  }
  #feed-back-content {
    resize: none;
    margin-top: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  #feed-back-content::placeholder {
    align-items: flex-start;
  }
  .feed-back-require {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 20px;
  }
  .submit-feed-back {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto;
    color: white;
  }
  .submit-feed-back:hover {
    cursor: pointer;
    background-color: red;
  }
  .empty-check-1 {
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
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .email-name-check-1 {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 260px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 66px;
    z-index: -1;
  }
  .empty-check-1::before,
  .email-name-check-1::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 95%;
    max-width: 400px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: var(--button-color);
    border-radius: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 15px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }
  /*footer*/
  footer {
    margin: 0;
  }
  .subscription-part {
    display: none;
  }
}
</style>
