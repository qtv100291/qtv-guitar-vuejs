<template>
  <main class="container">
    <div class="navigation">
      <a href="index.html">Trang Chủ</a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
      <div>Tài Khoản</div>
    </div>
    <div class="main-container">
      <div class="account-menu">
        <div class="account-menu-member-general">
          <img src="HomePage/manager.svg" alt="avatar" />
          <div class="welcome-member">
            Xin Chào
            <strong class="member-name"></strong>
          </div>
        </div>
        <ul class="account-menu-sidebar">
          <li class="account-menu-info active-menu">
            <i class="fas fa-user-alt"></i>
            Thông Tin Tài Khoản
          </li>
          <li class="account-menu-history-trade">
            <i class="fas fa-bookmark"></i>
            Lịch Sử Giao Dịch
          </li>
        </ul>
        <div class="log-out-button">Đăng Xuất</div>
      </div>
      <div
        class="account-main-content menu-info-main-content main-content-active"
      >
        <div class="account-main-content-title-main">THÔNG TIN TÀI KHOẢN</div>
        <div class="account-main-content-personal-info">
          <div class="account-main-content-title">THÔNG TIN CÁ NHÂN</div>
          <div class="user-name-part user-input">
            <label for="input-user-name">Họ Tên : </label>
            <input
              type="text"
              name="name"
              id="input-user-name"
              placeholder="Nhập Họ và Tên..."
            />
          </div>
          <div class="user-phone-part user-input">
            <label for="input-user-phone">Điện Thoại : </label>
            <input
              type="tel"
              name="telephone"
              id="input-user-phone"
              placeholder="Số Điện Thoại Di Động..."
            />
          </div>
          <div class="user-email-part user-input">
            <label for="input-user-email">Email : </label>
            <input
              type="text"
              name="email"
              disabled
              id="input-user-email"
              placeholder="Email..."
            />
          </div>
          <div class="user-password user-input">
            <label for="input-user-password">Mật Khẩu :</label>
            <input
              type="password"
              name="password"
              id="input-user-password"
              disabled
              placeholder="Mật Khẩu..."
            />
          </div>
        </div>
        <div class="account-main-content-address-info">
          <div class="account-main-content-title">ĐỊA CHỈ</div>
          <div class="user-city-province user-select">
            <label for="input-user-city-province">Tỉnh/Thành Phố :</label>
            <select name="city-province" id="input-user-city-province">
              <option value="0">&nbsp;Chọn Tỉnh/Thành Phố...</option>
              <option value="01">&nbsp;Thành phố Hà Nội</option>
              <option value="79">&nbsp;Thành phố Hồ Chí Minh</option>
              <option value="31">&nbsp;Thành phố Hải Phòng</option>
              <option value="48">&nbsp;Thành phố Đà Nẵng</option>
              <option value="92">&nbsp;Thành phố Cần Thơ</option>
              <option value="02">&nbsp;Tỉnh Hà Giang</option>
              <option value="04">&nbsp;Tỉnh Cao Bằng</option>
              <option value="06">&nbsp;Tỉnh Bắc Kạn</option>
              <option value="08">&nbsp;Tỉnh Tuyên Quang</option>
              <option value="10">&nbsp;Tỉnh Lào Cai</option>
              <option value="11">&nbsp;Tỉnh Điện Biên</option>
              <option value="12">&nbsp;Tỉnh Lai Châu</option>
              <option value="14">&nbsp;Tỉnh Sơn La</option>
              <option value="15">&nbsp;Tỉnh Yên Bái</option>
              <option value="17">&nbsp;Tỉnh Hoà Bình</option>
              <option value="19">&nbsp;Tỉnh Thái Nguyên</option>
              <option value="20">&nbsp;Tỉnh Lạng Sơn</option>
              <option value="22">&nbsp;Tỉnh Quảng Ninh</option>
              <option value="24">&nbsp;Tỉnh Bắc Giang</option>
              <option value="25">&nbsp;Tỉnh Phú Thọ</option>
              <option value="26">&nbsp;Tỉnh Vĩnh Phúc</option>
              <option value="27">&nbsp;Tỉnh Bắc Ninh</option>
              <option value="30">&nbsp;Tỉnh Hải Dương</option>
              <option value="33">&nbsp;Tỉnh Hưng Yên</option>
              <option value="34">&nbsp;Tỉnh Thái Bình</option>
              <option value="35">&nbsp;Tỉnh Hà Nam</option>
              <option value="36">&nbsp;Tỉnh Nam Định</option>
              <option value="37">&nbsp;Tỉnh Ninh Bình</option>
              <option value="38">&nbsp;Tỉnh Thanh Hóa</option>
              <option value="40">&nbsp;Tỉnh Nghệ An</option>
              <option value="42">&nbsp;Tỉnh Hà Tĩnh</option>
              <option value="44">&nbsp;Tỉnh Quảng Bình</option>
              <option value="45">&nbsp;Tỉnh Quảng Trị</option>
              <option value="46">&nbsp;Tỉnh Thừa Thiên Huế</option>
              <option value="49">&nbsp;Tỉnh Quảng Nam</option>
              <option value="51">&nbsp;Tỉnh Quảng Ngãi</option>
              <option value="52">&nbsp;Tỉnh Bình Định</option>
              <option value="54">&nbsp;Tỉnh Phú Yên</option>
              <option value="56">&nbsp;Tỉnh Khánh Hòa</option>
              <option value="58">&nbsp;Tỉnh Ninh Thuận</option>
              <option value="60">&nbsp;Tỉnh Bình Thuận</option>
              <option value="62">&nbsp;Tỉnh Kon Tum</option>
              <option value="64">&nbsp;Tỉnh Gia Lai</option>
              <option value="66">&nbsp;Tỉnh Đắk Lắk</option>
              <option value="67">&nbsp;Tỉnh Đắk Nông</option>
              <option value="68">&nbsp;Tỉnh Lâm Đồng</option>
              <option value="70">&nbsp;Tỉnh Bình Phước</option>
              <option value="72">&nbsp;Tỉnh Tây Ninh</option>
              <option value="74">&nbsp;Tỉnh Bình Dương</option>
              <option value="75">&nbsp;Tỉnh Đồng Nai</option>
              <option value="77">&nbsp;Tỉnh Bà Rịa - Vũng Tàu</option>
              <option value="80">&nbsp;Tỉnh Long An</option>
              <option value="82">&nbsp;Tỉnh Tiền Giang</option>
              <option value="83">&nbsp;Tỉnh Bến Tre</option>
              <option value="84">&nbsp;Tỉnh Trà Vinh</option>
              <option value="86">&nbsp;Tỉnh Vĩnh Long</option>
              <option value="87">&nbsp;Tỉnh Đồng Tháp</option>
              <option value="89">&nbsp;Tỉnh An Giang</option>
              <option value="91">&nbsp;Tỉnh Kiên Giang</option>
              <option value="93">&nbsp;Tỉnh Hậu Giang</option>
              <option value="94">&nbsp;Tỉnh Sóc Trăng</option>
              <option value="95">&nbsp;Tỉnh Bạc Liêu</option>
              <option value="96">&nbsp;Tỉnh Cà Mau</option>
            </select>
          </div>
          <div class="user-district user-select">
            <label for="input-user-district">Quận/Huyện :</label>
            <select name="district" id="input-user-district">
              <option value="0">&nbsp;Chọn Quận/Huyện...</option>
            </select>
            <div class="empty-check-option">Bạn phải chọn Quận/Huyện</div>
          </div>
          <div class="user-commune user-select">
            <label for="input-user-commune">Phường/Xã :</label>
            <select name="commune" id="input-user-commune">
              <option value="0">&nbsp;Chọn Phường/Xã...</option>
            </select>
            <div class="empty-check-option">Bạn phải chọn Xã/Phường</div>
          </div>
          <div class="user-address-part user-input">
            <label for="input-user-address">Địa Chỉ :</label>
            <textarea
              type="text"
              id="input-user-address"
              placeholder="Nhập Số Nhà, Tên Đường..."
              rows="3"
              cols="75"
            ></textarea>
          </div>
        </div>
        <div class="account-main-content-payment-info">
          <div class="account-main-content-title">THÔNG TIN THANH TOÁN</div>
          <div class="user-card-brand user-select">
            <label for="card-brand">Loại Thẻ :</label>
            <select name="" id="card-brand">
              <option value="0">&nbsp;Loại Thẻ</option>
              <option value="1">&nbsp;Master Card</option>
              <option value="2">&nbsp;Visa</option>
              <option value="3">&nbsp;JCB</option>
            </select>
          </div>
          <div class="user-card-id user-input">
            <label for="card-id">Số Thẻ : </label>
            <input
              type="text"
              name="card-number"
              id="card-id"
              placeholder="Số Thẻ Gồm 12 Chữ Số..."
            />
          </div>
          <div class="user-card-owner user-input">
            <label for="card-owner">Tên Chủ Thẻ : </label>
            <input
              type="text"
              name="bill_to_name"
              id="card-owner"
              placeholder="Lưu Ý Nhập Khớp Với Tên Trên Thẻ ..."
            />
          </div>
          <div class="user-card-id user-input">
            <label for="card-expiry-date">Ngày Hết Hạn : </label>
            <div class="input-card-expiry-date">
              <div class="card-month">
                <input type="text" id="card-expiry-month" placeholder="MM" />
                <div class="empty-check-input empty-check-date">
                  Bạn phải điền vào mục này
                </div>
                <div class="mobile-phone-check mobile-phone-check-date">
                  Tháng gồm 2 chữ số từ 01 đến 12
                </div>
              </div>
              &nbsp;<span>/</span>&nbsp;
              <div class="card-year">
                <input type="text" id="card-expiry-year" placeholder="YYYY" />
                <div class="empty-check-input empty-check-date">
                  Bạn phải điền vào mục này
                </div>
                <div class="mobile-phone-check mobile-phone-check-year">
                  Năm gồm 4 chữ số
                </div>
                <div class="expiry-date-check">Thẻ đã hết hạn</div>
              </div>
            </div>
          </div>
          <div class="user-card-id user-input">
            <label for="card-password">Mã CVV / CVC :</label>
            <input
              type="text"
              name="card_cvn"
              id="card-password"
              placeholder="Gồm 3 Chữ Số In Phía Mặt Sau Thẻ ..."
            />
          </div>
          <div class="save-button">Cập Nhật</div>
        </div>
      </div>
      <div class="account-main-content trade-history-main-content">
        <!--trade history will be displayed here-->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.empty {
  position: fixed;
  left: 0;
  bottom: 0;
}
@media only screen and (min-width: 1366px) {
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
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 95%;
    max-width: 1200px;
    margin: 20px auto 20px auto;
    font-family: Roboto;
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
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
  }
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: #de0000;
    border-radius: 20px;
    width: 150px;
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
    margin: 25px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-menu {
    width: 90%;
    max-width: 250px;
    display: block;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: 243px;
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    margin: 30px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: 90%;
    max-width: 900px;
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: 30px;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: 405px;
    max-width: 405px;
  }
  .user-input > textarea {
    width: 405px;
    max-width: 405px;
  }
  .save-button {
    margin-left: 180px;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 50px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: 30px;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > input {
    width: 405px;
    max-width: 405px;
  }
  .user-select > select {
    width: 405px;
    max-width: 405px;
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .input-card-expiry-date {
    max-width: 405px;
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid rgb(177, 177, 177);
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 80px;
    font-weight: 400;
    font-size: 18px;
  }
  table > thead > tr > th:first-child {
    width: 130px;
  }
  table > thead > tr > th:last-child {
    width: 200px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 20px 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  }

  footer {
    margin-top: 35px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
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
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 1000px;
    margin: 20px auto 20px auto;
    font-family: Roboto;
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
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }

  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: #de0000;
    border-radius: 20px;
    width: 150px;
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
    margin: 25px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-menu {
    width: 90%;
    max-width: 250px;
    display: block;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: 243px;
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    margin: 30px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: 700px;
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: 30px;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: 405px;
    max-width: 405px;
  }
  .user-input > textarea {
    width: 405px;
    max-width: 405px;
  }
  .save-button {
    margin-left: 180px;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 50px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: 30px;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > input {
    width: 405px;
    max-width: 405px;
  }
  .user-select > select {
    width: 405px;
    max-width: 405px;
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .input-card-expiry-date {
    max-width: 405px;
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid rgb(177, 177, 177);
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 80px;
    font-weight: 400;
    font-size: 18px;
  }
  table > thead > tr > th:first-child {
    width: 130px;
  }
  table > thead > tr > th:last-child {
    width: 200px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 20px 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  }

  footer {
    margin-top: 35px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Main*/
  .header-tablet {
    z-index: 1;
  }
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 20px auto;
    font-family: Roboto;
    font-size: 18px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }

  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: #de0000;
    border-radius: 20px;
    width: 150px;
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
    margin: 25px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-menu {
    width: 90%;
    max-width: 200px;
    display: block;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: 193px;
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 130px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    margin: 30px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: calc(100% - 230px);
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: 30px;
  }
  .user-input > label {
    width: 150px;
    line-height: 25px;
  }
  .user-input > input {
    width: 405px;
    max-width: 405px;
  }
  .user-input > textarea {
    width: 405px;
    max-width: 405px;
  }
  .save-button {
    margin: 0 auto;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 50px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: 30px;
  }
  .user-select > label {
    width: 150px;
    line-height: 25px;
  }
  .user-select > input {
    width: 405px;
    max-width: 405px;
  }
  .user-select > select {
    width: 405px;
    max-width: 405px;
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .input-card-expiry-date {
    max-width: 405px;
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid rgb(177, 177, 177);
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 80px;
    font-weight: 400;
    font-size: 18px;
  }
  table > thead > tr > th:first-child {
    width: 110px;
  }
  table > thead > tr > th:last-child {
    width: 160px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 20px 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  }
  footer {
    margin-top: 35px;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Main*/
  .header-tablet {
    z-index: 1;
  }
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 10px auto;
    font-family: Roboto;
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
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }

  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
  }
  .popup-content {
    margin: 15px auto 0px auto;
    width: 95%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .close-popup-button {
    background-color: #de0000;
    border-radius: 20px;
    width: 150px;
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
    margin: 25px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-menu {
    width: 90%;
    margin: 0 auto;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: calc(100% - 7px);
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    width: calc(100% - 60px);
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 30px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: 90%;
    margin: 0 auto;
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: auto;
    margin-right: auto;
  }
  .user-input > label {
    width: 150px;
    line-height: 25px;
  }
  .user-input > input {
    width: calc(100% - 150px);
  }
  .user-input > textarea {
    width: calc(100% - 150px);
  }
  .save-button {
    margin: 0 auto;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 50px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: auto;
    margin-right: auto;
  }
  .user-select > label {
    width: 150px;
    line-height: 25px;
  }
  .user-select > input {
    width: calc(100% - 150px);
  }
  .user-select > select {
    width: calc(100% - 150px);
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .input-card-expiry-date {
    width: calc(100% - 150px);
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid rgb(177, 177, 177);
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 80px;
    font-weight: 400;
    font-size: 18px;
  }
  table > thead > tr > th:first-child {
    width: 110px;
  }
  table > thead > tr > th:last-child {
    width: 160px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 20px 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
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
  .header-tablet {
    padding: 0;
    border: 0;
    z-index: 1;
  }
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }
  .navigation {
    width: 90%;
    margin: 20px auto 10px auto;
    font-family: Roboto;
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
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }

  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 90%;
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 150px;
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
    margin: 25px auto 15px auto;
    color: white;
  }
  .close-popup-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-menu {
    width: 90%;
    margin: 0 auto;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: calc(100% - 7px);
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    width: calc(100% - 60px);
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 20px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: 90%;
    margin: 0 auto;
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 32px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: 0;
    width: 100%;
  }
  .user-input > label {
    width: 150px;
    line-height: 25px;
  }
  .user-input > input {
    width: 100%;
  }
  .user-input > textarea {
    width: 100%;
  }
  .save-button {
    margin: 0 auto;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 50px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: 0;
    width: 100%;
  }
  .user-select > label {
    width: 150px;
    line-height: 25px;
  }
  .user-select > input {
    width: 100%;
  }
  .user-select > select {
    width: 100%;
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .input-card-expiry-date {
    width: 100%;
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid black;
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 60px;
    font-weight: 400;
    font-size: 17px;
  }
  table > thead > tr > th:first-child {
    width: 110px;
  }
  table > thead > tr > th:last-child {
    width: 160px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 10px 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
  }

  .history-trade-content {
    width: 100%;
    border-top: 1px solid black;
  }
  .history-trade-item {
    width: 100%;
    padding: 10px 0px;
    border-top: 1px solid rgb(236, 235, 235);
  }
  .history-trade-item-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    padding-bottom: 10px;
  }
  .history-trade-item-name-date,
  .history-trade-item-name-money {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgb(117, 117, 117);
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
  .header-tablet {
    z-index: 1;
  }
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 10px auto;
    font-family: Roboto;
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
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }

  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .popup-send-feedback {
    position: absolute;
    width: 90%;
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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

  .account-menu {
    width: 95%;
    margin: 0 auto;
  }
  .account-menu-member-general {
    display: flex;
    align-items: center;
    width: calc(100% - 7px);
    height: 45px;
    padding-left: 7px;
    margin-bottom: 20px;
  }
  .account-menu-member-general > img {
    width: 45px;
    height: 45px;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid rgb(192, 192, 192);
  }
  .welcome-member {
    margin-left: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    width: calc(100% - 60px);
  }
  .welcome-member > strong {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    display: block;
    margin-top: 5px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-menu-sidebar {
    width: 100%;
  }
  .account-menu-sidebar > li {
    list-style: none;
    padding: 7px 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  .account-menu-sidebar > li:hover {
    cursor: pointer;
  }
  .active-menu {
    background-color: rgb(221, 221, 221);
  }
  .fa-user-alt {
    font-size: 16px;
    margin-right: 22px;
  }
  .fa-bookmark {
    font-size: 16px;
    margin-right: 26px;
  }
  .log-out-button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 20px auto;
    text-align: center;
    background-color: #de0000;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }
  .log-out-button:hover {
    cursor: pointer;
    background-color: red;
  }

  .account-main-content {
    width: 95%;
    margin: 0 auto;
    transition: 1s;
  }
  .trade-history-main-content {
    display: none;
    opacity: 0;
  }
  .account-main-content-title-main {
    font-family: Roboto;
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    width: 100%;
    padding-bottom: 10px;
  }
  .account-main-content-personal-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .account-main-content-title {
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 32px;
    padding-top: 10px;
  }
  .user-input {
    margin-left: 0;
    width: 100%;
  }
  .user-input > label {
    width: 150px;
    line-height: 25px;
  }
  .user-input > input {
    width: 100%;
  }
  .user-input > textarea {
    width: 100%;
  }
  .save-button {
    margin: 0 auto;
    width: 200px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    color: white;
    background-color: #de0000;
    border-radius: 5px;
    margin-top: 30px;
    text-align: center;
  }
  .save-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .account-main-content-address-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 30px;
  }
  .user-select {
    margin-left: 0;
    width: 100%;
  }
  .user-select > label {
    width: 150px;
    line-height: 25px;
  }
  .user-select > input {
    width: 100%;
  }
  .user-select > select {
    width: 100%;
  }
  .account-main-content-payment-info {
    border-top: 1px solid rgb(177, 177, 177);
    width: 100%;
    padding-bottom: 20px;
  }
  .input-card-expiry-date {
    width: 100%;
  }

  table {
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid black;
    display: table;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    height: 60px;
    font-weight: 400;
    font-size: 17px;
  }
  table > thead > tr > th:first-child {
    width: 110px;
  }
  table > thead > tr > th:last-child {
    width: 160px;
  }
  table > tbody > tr {
    border-top: 1px solid rgb(236, 235, 235);
    display: table-row;
  }
  table > tbody > tr > td {
    padding: 10px 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    display: table-cell;
  }
  .account-main-content-trade-history {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
  }

  .history-trade-content {
    width: 100%;
    border-top: 1px solid black;
  }
  .history-trade-item {
    width: 100%;
    padding: 10px 0px;
    border-top: 1px solid rgb(236, 235, 235);
  }
  .history-trade-item-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    padding-bottom: 10px;
  }
  .history-trade-item-name-date,
  .history-trade-item-name-money {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgb(117, 117, 117);
  }

  /*footer*/
  footer {
    margin-top: 20px;
  }
  .subscription-part {
    display: none;
  }
}

@keyframes scale-up {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.5);
  }
  70% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: 100%;
    max-width: 875px;
  }
  .user-address {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .user-address-title {
    width: 300px;
    margin: 15px auto 20px 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    margin-top: 12px;
    margin-left: 50px;
    width: 95%;
    max-width: 555px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-input > input {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    margin-top: 12px;
    margin-left: 50px;
    width: 95%;
    max-width: 555px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select > select {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: 100%;
    max-width: 400px;
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 7px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 7px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
    right: 200px;
    top: 37px;
    z-index: -1;
  }
  .empty-check-option {
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
    top: 37px;
    width: 200px;
    right: 200px;
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: 37px;
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    margin-left: 50px;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
    top: 37px;
    width: 220px;
    right: 180px;
    z-index: -1;
  }
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 50px;
    transition: 0.5s;
  }
  .user-payout-title {
    width: 300px;
    margin: 15px auto 5px 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    margin-left: 50px;
    margin-bottom: 15px;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    margin-top: 11px;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 3px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }

  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    margin-left: 20px;
    margin-top: 15px;
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }

  .user-input-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select-sub > select {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > input {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 90%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    max-width: 300px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .summary-shopping-cart-title {
    width: 90%;
    max-width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 100%;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
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

  .container {
    width: 100%;
  }
  .main-container {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: 675px;
  }
  .user-address {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .user-address-title {
    width: 300px;
    margin: 15px auto 20px 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    margin-top: 12px;
    margin-left: 50px;
    width: 95%;
    max-width: 555px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-input > input {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    margin-top: 12px;
    margin-left: 50px;
    width: 95%;
    max-width: 555px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select > select {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: 100%;
    max-width: 400px;
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 7px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 7px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
    right: 200px;
    top: 37px;
    z-index: -1;
  }
  .empty-check-option {
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
    top: 37px;
    width: 200px;
    right: 200px;
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: 37px;
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    margin-left: 50px;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
    top: 37px;
    width: 220px;
    right: 180px;
    z-index: -1;
  }
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 50px;
    transition: 0.5s;
  }
  .user-payout-title {
    width: 300px;
    margin: 15px auto 5px 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    margin-left: 50px;
    margin-bottom: 15px;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    margin-top: 11px;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 3px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }

  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    margin-left: 20px;
    margin-top: 15px;
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }

  .user-input-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    position: relative;
  }
  .user-select-sub > select {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > input {
    width: 100%;
    max-width: 400px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 90%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    max-width: 300px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .summary-shopping-cart-title {
    width: 90%;
    max-width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 100%;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
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
  .main-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .exit-button {
    margin: 20px auto 20px 2.5%;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: calc(100% - 250px - 25px);
  }
  .user-address {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .user-address-title {
    width: 300px;
    margin: 15px auto 15px 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    margin-top: 12px;
    margin-left: 25px;
    width: 95%;
    max-width: 555px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: 95%;
    max-width: 450px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    margin-top: 12px;
    margin-left: 25px;
    width: 95%;
    max-width: 555px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > select {
    width: 95%;
    max-width: 450px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: 95%;
    max-width: 450px;
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 7px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 7px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
    left: 0;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-option {
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
    top: calc(100% + 7px);
    width: 200px;
    left: 0px;
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: 37px;
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    margin-left: 20px;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
    top: calc(100% + 7px);
    width: 220px;
    left: 0px;
    z-index: -1;
  }
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 30px;
    transition: 0.5s;
  }
  .user-payout-title {
    width: 300px;
    margin: 15px auto 5px 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    margin-left: 25px;
    margin-bottom: 15px;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    margin-top: 11px;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 3px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }

  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    margin-left: 20px;
    margin-top: 15px;
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }

  .user-input-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 95%;
    max-width: 535px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub > label {
    width: 150px;
  }
  .user-select-sub > select {
    width: 95%;
    max-width: 430px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > label {
    width: 150px;
  }
  .user-input-sub > input {
    width: 95%;
    max-width: 430px;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 90%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    max-width: 250px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .summary-shopping-cart-title {
    width: 90%;
    max-width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 100%;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 90%;
    max-width: 260px;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
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
  .main-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .exit-button {
    margin: 20px auto 20px 2.5%;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: 100%;
  }
  .user-address {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 30px;
  }
  .user-address-title {
    width: 90%;
    margin: 15px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: calc(100% - 150px);
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > select {
    width: calc(100% - 150px);
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: calc(100% - 150px);
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 7px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 7px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
    left: 150px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-option {
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
    width: 200px;
    left: 150px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: 37px;
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
    top: calc(100% + 7px);
    width: 220px;
    left: 150px;
    z-index: -1;
  }
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 30px;
    transition: 0.5s;
  }
  .user-payout-title {
    width: 90%;
    margin: 15px auto 5px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    width: 90%;
    margin: 0 auto 15px auto;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    margin-top: 11px;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 3px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    margin-left: 20px;
    margin-top: 15px;
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .user-input-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub > label {
    width: 150px;
  }
  .user-select-sub > select {
    width: calc(100% - 150px);
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > label {
    width: 150px;
  }
  .user-input-sub > input {
    width: calc(100% - 150px);
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: calc(100% - 150px);
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 90%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .summary-shopping-cart-title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 100%;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 90%;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 90%;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
  }
  /*footer*/
  footer {
    margin-top: 25px;
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
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .exit-button {
    text-decoration: none;
    color: black;
    width: 95%;
    margin: 15px auto 10px 5%;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: 100%;
  }
  .user-address {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 5px solid #c4c4c4;
  }
  .user-address-title {
    width: 90%;
    margin: 15px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > select {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: 100%;
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 0px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 0px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
  .empty-check-option {
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
    width: 200px;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: calc(100% + 7px);
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
    transition: 0.5s;
    padding-bottom: 20px;
    border-bottom: 5px solid #c4c4c4;
  }
  .user-payout-title {
    width: 90%;
    margin: 15px auto 5px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    width: 90%;
    margin: 15px auto 15px auto;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: block;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 6.5px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .user-input-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub > label {
    width: 150px;
  }
  .user-select-sub > select {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > label {
    width: 150px;
  }
  .user-input-sub > input {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 100%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 20px;
    border-bottom: 5px solid #c4c4c4;
  }
  .summary-shopping-cart-title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 100%;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 100%;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
  }
  /*footer*/
  footer {
    margin-top: 25px;
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
  .container {
    width: 100%;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .exit-button {
    text-decoration: none;
    color: black;
    width: 95%;
    margin: 15px auto 10px 2.5%;
    width: 160px;
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
  .pop-up-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 7;
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
    max-width: 420px;
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
  .popup-send-feedback > img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    animation: scale-up 0.4s 0.5s forwards;
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
    background-color: #de0000;
    border-radius: 20px;
    width: 200px;
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
  .user-info {
    width: 100%;
  }
  .user-address {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 5px solid #c4c4c4;
  }
  .user-address-title {
    width: 90%;
    margin: 15px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-input {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-input > label {
    width: 150px;
  }
  .user-input > input {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-input > input::placeholder {
    color: #595959;
  }
  .user-select {
    width: 90%;
    margin: 0 auto;
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select > label {
    width: 150px;
  }
  .user-select > select {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    outline: none;
  }
  .user-input > textarea {
    width: 100%;
    height: 75px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .user-address-part {
    align-items: flex-start;
    height: auto;
  }
  .user-address-part > label {
    margin-top: 0px;
  }
  textarea {
    resize: none;
  }
  #input-user-address {
    line-height: 28px;
  }
  #input-user-address::placeholder {
    align-items: flex-start;
  }
  .user-note-part {
    align-items: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
  .user-note-part > textarea {
    height: 125px;
  }
  .user-note-part > label {
    margin-top: 0px;
  }
  #input-user-note {
    line-height: 28px;
  }
  #input-user-note::placeholder {
    align-items: flex-start;
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
  .empty-check-option {
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
    width: 200px;
    left: 0px;
    top: calc(100% + 7px);
    z-index: -1;
  }
  .empty-check-date {
    left: 0;
    width: 200px;
  }
  .expiry-date-check {
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 120px;
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
    left: 0;
    top: calc(100% + 7px);
    z-index: -1;
  }

  .city-option {
    width: 220px;
    right: 180px;
  }
  .empty-check::before,
  .empty-check-input::before,
  .empty-check-option::before,
  .mobile-phone-check::before,
  .expiry-date-check::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
  }
  .feed-back-require {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    font-family: Roboto;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 15px;
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
  .mobile-phone-check-date {
    left: 0;
    width: 230px;
  }
  .mobile-phone-check-year {
    left: 0;
    width: 150px;
  }
  .user-payout-infor {
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
    transition: 0.5s;
    padding-bottom: 20px;
    border-bottom: 5px solid #c4c4c4;
  }
  .user-payout-title {
    width: 90%;
    margin: 15px auto 5px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .user-payout-option {
    width: 90%;
    margin: 15px auto 15px auto;
  }
  .user-payout-option > label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    display: block;
  }
  .user-payout-option > label > input {
    opacity: 0;
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .user-payout-option > label > .checkmark {
    position: absolute;
    top: 6.5px;
    left: 0px;
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .user-payout-option > label > input:checked + .checkmark {
    background-color: black;
  }
  .user-card-input {
    transform-origin: left top 0;
    display: none;
    opacity: 0;
    transition: 0.5s;
    width: calc(100% + 20px);
    position: relative;
    transform: translateX(-20px);
  }
  .user-input-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub {
    margin-top: 12px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #000000;
    position: relative;
  }
  .user-select-sub > label {
    width: 150px;
  }
  .user-select-sub > select {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: black;
    outline: none;
  }
  .user-input-sub > label {
    width: 150px;
  }
  .user-input-sub > input {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .card-month,
  .card-year {
    width: 25%;
    position: relative;
  }

  .input-card-expiry-date {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .input-card-expiry-date {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 40px;
  }
  #card-expiry-month,
  #card-expiry-year {
    width: 100%;
    height: 32px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: black;
    text-indent: 8px;
    outline: none;
  }
  .item-2 {
    margin-left: 0;
    margin-bottom: 0;
  }
  .order-button {
    width: 100%;
    max-width: 300px;
    height: 50px;
    margin: 35px auto 20px auto;
    background: #de0000;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .order-button:hover {
    cursor: pointer;
    background-color: red;
  }
  .order-note {
    height: 30px;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
    text-align: center;
  }
  .summary-shopping-cart {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 15px;
    border-bottom: 5px solid #c4c4c4;
  }
  .summary-shopping-cart-title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #dadada;
  }
  .summary-shopping-cart-title > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a {
    width: 80px;
    height: 30px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32323d;
  }
  .summary-shopping-cart-title > a:hover {
    background-color: rgb(219, 217, 217);
  }
  .shopping-cart-item-container {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5px;
  }
  .shopping-cart-item {
    border-bottom: 1px solid #dadada;
    width: 100%;
    margin: 0 auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #32323d;
  }
  .item-detail {
    padding-top: 10px;
  }
  .item-money-value {
    padding-top: 5px;
    text-align: right;
  }
  .total-money {
    width: 100%;
    margin: 0 auto;
  }
  .total-money-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .total-money-note {
    margin-top: 5px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #32323d;
    text-align: right;
    margin-bottom: 10px;
  }
  .total-money-title > div:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #32323d;
  }
  .total-money-title > div:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: right;
    color: #de0000;
  }
  .shopping-cart-note {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    color: #de0000;
    text-align: center;
  }
  /*footer*/
  footer {
    margin-top: 25px;
  }
  .subscription-part {
    display: none;
  }
}
</style>
