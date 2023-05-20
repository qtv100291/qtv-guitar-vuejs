<template>
  <footer>
    <div class="footer-container">
      <div class="subscription-announcement-container">
        <div class="subscription-announcement">
          <p>Cảm Ơn Bạn Đã Đồng Hành Cùng QTV Guitar Shop</p>
          <img src="/images/HomePage/email.svg" alt="email" />
        </div>
      </div>
      <div class="subscription-part">
        <div class="subscription-title">ĐĂNG KÝ</div>
        <div class="line-footer"></div>
        <div class="subscription-content">
          Cập nhập liên tục những thông tin mới nhất từ QTV Guitar Shop
        </div>
        <div class="name-footer-container">
          <input
            class="name-footer"
            name="name"
            type="text"
            placeholder="Họ Tên..."
          />
          <div class="empty-check">Bạn phải điền vào mục này</div>
        </div>
        <div class="email-footer-container">
          <input
            class="email-footer"
            name="email"
            type="text"
            placeholder="Email..."
          />
          <div class="empty-check">Bạn phải điền vào mục này</div>
          <div class="email-name-check">
            Email bạn điền không đúng định dạng
          </div>
        </div>

        <div class="subscription-button">ĐĂNG KÝ</div>
      </div>
      <div class="client-service-part">
        <div class="service-title">CHĂM SÓC KHÁCH HÀNG</div>
        <div class="line-footer"></div>
        <div class="service-content">
          <router-link to="/dieu-khoan-dich-vu">Hướng dẫn mua hàng</router-link>
          <router-link to="/chinh-sach-bao-hanh"
            >Điều khoản dịch vụ của chúng tôi</router-link
          >
          <router-link to="/huong-dan-mua-hang"
            >Chính sách bảo hành, đổi trả
          </router-link>
        </div>
      </div>
      <div class="store-info-part">
        <div class="store-info-title">ĐỊA CHỈ SHOWROM</div>
        <div class="line-footer"></div>
        <div class="store-content">
          <div>QTV GUITAR SHOP</div>
          <div>
            <a href="https://goo.gl/maps/3hzESqcwEDF414fZ9" target="_blank"
              >Địa chỉ : Tầng 1, Hồ Gươm Plaza, Trần Phú, Hà Đông, Hà Nội.</a
            >
          </div>
          <div>Điện thoại: <a href="tel:19001570">19001570</a></div>
          <div>Email : qtv-guitarshop@gmail.com</div>
        </div>
        <div class="store-icon">
          <img src="/images/HomePage/fb-icon.png" alt="fb" />
          <img src="/images/HomePage/TwitterIcon.png" alt="twitter" />
          <img src="/images/HomePage/youtubeIcon.png" alt="youtube" />
          <img src="/images/HomePage/instaIcon.png" alt="instagram" />
        </div>
      </div>
    </div>
    <div class="about-website">
      <div class="about">QTV Guitar Shop @ 2022</div>
    </div>
  </footer>
</template>

<style scoped>
@media only screen and (min-width: 1366px) {
  footer {
    background-image: url(/public/images/HomePage/bg1.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 50px;
  }
  .footer-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    flex-wrap: wrap;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    width: 350px;
    overflow: auto;
  }
  .subscription-title {
    width: 187px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .subscription-content {
    margin-top: 10px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .name-footer {
    margin-top: 10px;
    width: 100%;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .name-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    margin-top: 10px;
    width: 100%;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .email-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .name-footer-container,
  .email-footer-container {
    position: relative;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
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
    left: 0px;
    top: 47px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: 47px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 120px;
    height: 40px;
    margin: 25px auto 35px auto;
    background: var(--button-color);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .subscription-button:hover {
    background-color: red;
    cursor: pointer;
  }

  /*Column 2 footer*/
  .client-service-part {
    width: 350px;
    overflow: auto;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .service-content > a:hover {
    text-decoration: underline;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 350px;
    overflow: auto;
  }
  .store-info-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .store-content {
    margin-top: 10px;
    width: 100%;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .store-icon {
    width: 265px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 15px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border-radius: 999px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
    position: relative;
  }
  .about-website-button > i {
    position: absolute;
    left: 128px;
    transition: 0.25s;
  }
  .about-website-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .about-website-button:hover > i {
    left: 133px;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .about-website-content {
    width: 95%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 15px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
  }
  .close-about-website {
    width: 100px;
    height: 25px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  footer {
    background-image: url(/public/images/HomePage/bg1.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 50px;
  }
  .footer-container {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    width: 300px;
    overflow: auto;
  }
  .subscription-title {
    width: 187px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .subscription-content {
    margin-top: 10px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .name-footer {
    margin-top: 10px;
    width: 100%;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .name-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    margin-top: 10px;
    width: 100%;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .email-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .name-footer-container,
  .email-footer-container {
    position: relative;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
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
    left: 0px;
    top: 47px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: 47px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 120px;
    height: 40px;
    margin: 25px auto 35px auto;
    background: var(--button-color);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .subscription-button:hover {
    background-color: red;
    cursor: pointer;
  }

  /*Column 2 footer*/
  .client-service-part {
    width: 300px;
    overflow: auto;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .service-content > a:hover {
    text-decoration: underline;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 300px;
    overflow: auto;
  }
  .store-info-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .store-content {
    margin-top: 10px;
    width: 100%;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .store-icon {
    width: 265px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 15px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border-radius: 999px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.25s;
  }
  .about-website-button > i {
    position: absolute;
    left: 128px;
    transition: 0.25s;
  }
  .about-website-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .about-website-button:hover > i {
    left: 133px;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .about-website-content {
    width: 95%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 15px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
  }
  .close-about-website {
    width: 100px;
    height: 25px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  footer {
    background-image: url(/public/images/HomePage/bg2.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 50px;
  }
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    width: 50%;
    overflow: auto;
    margin: 0 auto;
  }
  .subscription-title {
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
  }
  .subscription-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 300px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .name-footer {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    width: 300px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .name-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    display: block;
    margin: 20px auto 0 auto;
    width: 300px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .email-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .name-footer-container,
  .email-footer-container {
    position: relative;
    width: 300px;
    margin: 0 auto;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
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
    left: 0px;
    top: 39px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: 39px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 120px;
    height: 35px;
    margin: 25px auto 35px auto;
    background: var(--button-color);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .subscription-button:hover {
    background-color: red;
    cursor: pointer;
  }

  /*Column 2 footer*/
  .client-service-part {
    width: 300px;
    overflow: auto;
    display: none;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 50%;
    overflow: auto;
  }
  .store-info-title {
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
  }
  .store-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 300px;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .store-icon {
    width: 265px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 15px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border-radius: 999px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .about-website-button > i {
    position: absolute;
    left: 128px;
    transition: 0.25s;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .about-website-content {
    width: 90%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 15px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
  }
  .close-about-website {
    width: 100px;
    height: 25px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  footer {
    background-image: url(/public/images/HomePage/bg2.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 330px;
  }
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    overflow: auto;
    margin: 0 auto;
    position: absolute;
    width: 100%;
    top: -280px;
  }
  .subscription-title {
    width: 500px;
    margin: 0 auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #32323d;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .subscription-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: black;
    text-align: center;
  }
  .name-footer {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    width: 400px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    border: 1px solid black;
  }
  .name-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    display: block;
    margin: 20px auto 0 auto;
    width: 400px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    border: 1px solid black;
  }
  .email-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .name-footer-container,
  .email-footer-container {
    width: 400px;
    margin: 0 auto;
    position: relative;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
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
    left: 0px;
    top: 39px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 0px;
    top: 39px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 120px;
    height: 35px;
    margin: 25px auto 35px auto;
    background: var(--button-color);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  /*Main*/

  /*Column 2 footer*/
  .client-service-part {
    width: 300px;
    overflow: auto;
    display: none;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 70%;
    overflow: auto;
    width: 450px;
    margin: 0 auto;
  }
  .store-info-title {
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    display: none;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .store-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  .store-content > div:first-child {
    font-size: 22px;
    line-height: 40px;
    margin-top: 20px;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .store-icon {
    width: 265px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 15px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border-radius: 999px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .about-website-button > i {
    position: absolute;
    left: 128px;
    transition: 0.25s;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .about-website-content {
    width: 90%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 15px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
  }
  .close-about-website {
    width: 100px;
    height: 25px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}
@media only screen and (min-width: 351px) and (max-width: 576px) {
  footer {
    background-image: url(/public/images/HomePage/bg2.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 330px;
  }
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    overflow: auto;
    margin: 0 auto;
    position: absolute;
    width: 100%;
    top: -280px;
  }
  .subscription-title {
    width: 90%;
    margin: 0 auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #32323d;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .subscription-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    text-align: center;
  }
  .name-footer-container,
  .email-footer-container {
    width: 95%;
    margin: 0 auto;
    position: relative;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .name-footer {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    border: 1px solid black;
    width: 100%;
  }
  .name-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    display: block;
    margin: 20px auto 0 auto;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    border: 1px solid black;
    width: 100%;
  }
  .email-footer::placeholder {
    text-indent: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 200px;
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
    top: 39px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: white;
    text-align: center;
    left: 10px;
    top: 39px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 120px;
    height: 35px;
    margin: 25px auto 35px auto;
    background: #ffffff;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    border: 1px solid black;
  }
  .subscription-button:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  /*Column 2 footer*/
  .client-service-part {
    width: 300px;
    overflow: auto;
    display: none;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 95%;
    overflow: auto;
    margin: 0 auto;
  }
  .store-info-title {
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    display: none;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .store-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: white;
  }
  .store-content > div:first-child {
    font-size: 20px;
    line-height: 30px;
    margin-top: 20px;
  }
  .store-icon {
    width: 265px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .store-icon > img {
    width: 35px;
    height: 35px;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 10px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border-radius: 999px;
    padding-left: 10px;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .about-website-button > i {
    position: absolute;
    left: 135px;
    transition: 0.25s;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .about-website-content {
    width: 90%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 5px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
    word-break: break-all;
  }
  .close-about-website {
    width: 100px;
    height: 25px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}

@media only screen and (max-width: 350px) {
  footer {
    background-image: url(/public/images/HomePage/bg2.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 250px;
  }
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .subscription-announcement-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .subscription-announcement {
    width: 90%;
    max-width: 300px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  }
  .subscription-announcement > p {
    margin-top: 15px;
    width: 100%;
  }
  .subscription-announcement > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    animation: scale-up 0.4s 0.5s forwards;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .subscription-part {
    overflow: auto;
    margin: 0 auto;
    position: absolute;
    width: 100%;
    top: -240px;
  }
  .subscription-title {
    width: 90%;
    margin: 0 auto;
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #32323d;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .subscription-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: black;
    text-align: center;
  }
  .name-footer-container,
  .email-footer-container {
    width: 95%;
    margin: 0 auto;
    position: relative;
  }
  .email-footer-container {
    margin-top: 10px;
  }
  .name-footer {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    border: 1px solid black;
    width: 100%;
  }
  .name-footer::placeholder {
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .email-footer {
    display: block;
    margin: 20px auto 0 auto;
    height: 32px;
    outline: none;
    border: 0;
    border-radius: 3px;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
    border: 1px solid black;
    width: 100%;
  }
  .email-footer::placeholder {
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .empty-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 30px;
    width: 95%;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 30px;
    color: white;
    text-align: center;
    left: 0px;
    top: 39px;
    z-index: -1;
  }
  .email-name-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 30px;
    width: 95%;
    border-radius: 10px 10px 10px 10px;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 30px;
    color: white;
    text-align: center;
    left: 0px;
    top: 39px;
    z-index: -1;
  }
  .empty-check::before,
  .email-name-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .subscription-button {
    width: 90px;
    height: 25px;
    margin: 15px auto 20px auto;
    background: #ffffff;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    border: 1px solid black;
  }
  .subscription-button:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  /*Column 2 footer*/
  .client-service-part {
    width: 300px;
    overflow: auto;
    display: none;
  }
  .service-title {
    width: 250px;
    height: 30px;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .line-footer {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: white;
  }
  .service-content {
    margin-top: 10px;
    width: 100%;
  }
  .service-content > a {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: white;
  }
  /*Column 3 Footer*/
  .store-info-part {
    width: 95%;
    overflow: auto;
    margin: 0 auto;
  }
  .store-info-title {
    width: 300px;
    height: 25px;
    margin: 0 auto;
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    display: none;
  }
  .line-footer {
    width: 300px;
    height: 1px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    display: none;
  }
  .store-content {
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
  }
  .store-content > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: white;
  }
  .store-content > div:first-child {
    font-size: 18px;
    line-height: 25px;
    margin-top: 20px;
  }
  .store-icon {
    width: 220px;
    margin: 27px auto 0px auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .store-icon:hover {
    cursor: pointer;
  }
  .store-icon > img {
    width: 35px;
    height: 35px;
  }
  .store-content > div > a {
    color: white;
    text-decoration: none;
  }
  .about-website {
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
    color: white;
    padding: 10px 0px;
  }
  .about {
    padding: 3px 10px;
  }
  .about-website-button {
    background-color: transparent;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    border-radius: 999px;
    margin: 0px 10px;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .about-website-button > i {
    position: absolute;
    left: 110px;
  }
  .about-website-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    opacity: 0;
    transition: 0.5s;
    overflow: auto;
  }
  .about-website-content {
    width: 90%;
    max-width: 900px;
    margin: 5% auto 0 auto;
  }
  .title-about-website {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 5px;
  }
  .about-website-content > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 8px;
  }
  .about-website-content > p > a {
    color: white;
    word-break: break-all;
  }
  .close-about-website {
    width: 90px;
    height: 22px;
    padding: 5px 0px;
    margin: 15px auto;
    border-radius: 999px;
    background-color: rgb(189, 2, 2);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-about-website:hover {
    cursor: pointer;
    background-color: red;
  }
}
</style>
