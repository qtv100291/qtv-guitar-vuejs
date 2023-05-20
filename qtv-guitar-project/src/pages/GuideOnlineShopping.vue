<template>
  <main class="container">
    <div class="navigation">
      <router-link to="/">Trang Chủ</router-link
      >&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
      <div>Hướng Dẫn Mua Hàng</div>
    </div>
    <div class="main-container">
      <div class="info-part">
        <div class="info-part-title">CHĂM SÓC KHÁCH HÀNG</div>
        <div class="info-part-item">
          <div class="item-mark"></div>
          <div class="item-name-mark" href="faq.html">Hướng Dẫn Mua Hàng</div>
        </div>
        <div class="info-part-item">
          <router-link class="item-name" to="/dieu-khoan-dich-vu"
            >Điều Khoản Dịch Vụ</router-link
          >
        </div>
        <div class="info-part-item">
          <router-link class="item-name" to="/chinh-sach-bao-hanh"
            >Chính Sách Bảo Hành - Đổi Trả</router-link
          >
        </div>
      </div>
      <div class="article-part">
        <div class="article-title">HƯỚNG DẪN MUA HÀNG</div>
        <div class="item-policy">
          <p class="content-text" style="width: 100%">
            Để mua hàng, Quý khách không cần trực tiếp đến các Showroom của
            chúng tôi, quý khách có thể lựa chọn cách mua hàng Online bằng cách
            chọn một trong những cách mua hàng sau:
          </p>
          <div class="head-title-policy">1. MUA HÀNG QUA ĐIỆN THOẠI</div>
          <p class="content-text">
            Gọi điện thoại đến Tổng đài
            <a href="tel:19001570" style="text-decoration: none; color: black"
              >19001570</a
            >
            từ 8g - 20g (cả CN và Ngày lễ) để đặt hàng. Với đội ngũ nhân viên
            chuyên nghiệp, giàu kinh nghiệm, chúng tôi luôn sẵn sàng phục vụ, tư
            vấn và hỗ trợ quý khách mua được sản phẩm ưng ý
          </p>
        </div>
        <div class="item-policy">
          <div class="head-title-policy">2. MUA HÀNG QUA WEBSITE</div>
          <p class="content-text">
            Bước 1: Truy cập website và đến trang sản phẩm cần mua để mua hàng
          </p>
          <p class="content-text">
            Bước 2: Chọn số lượng sản phẩm cần mua và click và nút Thêm Vào Giỏ
            Hàng, kiểm tra lại các mặt hàng có trong giỏ hàng bằng cách trỏ
            chuột vào biểu tượng
            <span class="icon-content"
              ><img src="HomePage/shopping-cart 1.svg" alt=""
            /></span>
            ở góc phía trên bên phải màn hình
          </p>
          <p class="content-text">
            Bước 3: Click vào nút Thanh Toán trên giỏ hàng, các bạn có thay đổi
            số lượng, chủng loại hàng hóa trong giỏ hàng
          </p>
          <p class="content-text">
            Bước 4: Điền thông tin cá nhân vào các mục tương ứng và chọn phương
            thức thanh toán phù hợp với bạn
          </p>
          <p class="content-text">
            Bước 5: Kiểm tra kĩ đơn hàng và thông tin cá nhân của bạn và bấm Đặt
            Hàng
          </p>
          <p class="content-text">
            Sau khi nhận được yêu cầu của bạn, chúng tôi sẽ liên lạc với bạn
            trong thời gian sớm nhất để xác nhận yêu cầu cũng như địa chỉ của
            bạn.
          </p>
          <p class="content-text" style="color: red">Lưu ý:</p>
          <p class="content-text">
            - Chúng tôi chỉ chấp nhận những đơn đặt hàng khi cung cấp đủ thông
            tin chính xác về địa chỉ, số điện thoại. Sau khi bạn đặt hàng, chúng
            tôi sẽ liên lạc lại để kiểm tra thông tin và thỏa thuận thêm những
            điều có liên quan.
          </p>
          <p class="content-text">
            - Một số trường hợp nhạy cảm: giá trị đơn hàng quá lớn & thời gian
            giao hàng vào buổi tối địa chỉ giao hàng trong ngõ hoặc có thể dẫn
            đến nguy hiểm. Chúng tôi sẽ chủ động liên lạc với quý khách để thống
            nhất lại thời gian giao hàng cụ thể.
          </p>
          <p class="content-text">
            - Trong trường hợp giao hàng chậm trễ mà không báo trước, quý khách
            có thể không nhận hàng và chúng tôi sẽ hoàn trả toàn bộ số tiền mà
            quý khách trả trước (nếu có) trong vòng 7 ngày.
          </p>
          <p class="content-text">
            - Công ty cam kết tất cả hàng hóa gởi đến quý khách đều là hàng
            chính hãng mới 100% (có đầy đủ hóa đơn, được bảo hành chính thức).
            Những rủi ro phát sinh trong quá trình vận chuyển (va đập, ẩm ướt,
            tai nạn...) có thể ảnh hưởng đến hàng hóa, vì thế xin Quý Khách vui
            lòng kiểm tra hàng hóa thật kỹ trước khi ký nhận. QTV Guitar Shop sẽ
            không chịu trách nhiệm với những sai lệch hình thức của hàng hoá sau
            khi Quý khách đã ký nhận hàng.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.menu-mobile-container > a:nth-child(9) {
  font-weight: 500;
  color: red;
}
@media only screen and (min-width: 1366px) {
  .menu-bar-item-1 {
    border: none;
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
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 95%;
    max-width: 1200px;
    margin: 20px auto 20px auto;
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
  .info-part {
    width: 100%;
    max-width: 275px;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
    max-width: 900px;
    padding-left: 24px;
    border-left: 1px solid #c4c4c4;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .menu-bar-item-1 {
    border: none;
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
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 1000px;
    margin: 20px auto 20px auto;
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
  .info-part {
    width: 100%;
    max-width: 275px;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
    max-width: 900px;
    padding-left: 24px;
    border-left: 1px solid #c4c4c4;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Main*/
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 20px auto;
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
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .info-part {
    width: 100%;
    max-width: 225px;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
    max-width: 900px;
    padding-left: 14px;
    border-left: 1px solid #c4c4c4;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .input-search-bar {
    width: calc(95% - 33px);
  }
  /*Main*/
  .container {
    margin-top: 124px;
    width: 100%;
  }
  .main-container {
    width: 95%;
    margin: 0 auto;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 10px auto;
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
  .info-part {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #c4c4c4;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 10px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
  /*footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (min-width: 351px) and (max-width: 768px) {
  .input-search-bar {
    width: calc(95% - 33px);
  }
  /*Main*/
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 95%;
    margin: 0 auto;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 10px auto;
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
  .info-part {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #c4c4c4;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 10px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
  /*footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
}

@media only screen and (max-width: 350px) {
  /*Main*/
  .container {
    margin-top: 94px;
    width: 100%;
  }
  .main-container {
    width: 95%;
    margin: 0 auto;
  }
  .navigation {
    width: 95%;
    margin: 20px auto 10px auto;
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
  .info-part {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #c4c4c4;
  }
  .info-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    margin: 0px auto 10px auto;
  }
  .info-part-item {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item-name {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 25px;
  }
  .item-mark {
    width: 10px;
    height: 20px;
    background-color: #83d7fe;
  }
  .item-name-mark {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin-left: 15px;
  }
  .item-policy {
    width: 100%;
    margin-bottom: 10px;
  }
  .article-part {
    width: 100%;
  }
  .article-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    margin: 10px auto 10px auto;
  }
  .head-title-policy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .title-policy {
    width: 98%;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin: 0 auto;
  }
  .content-text {
    width: 98%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    margin: 0 auto 5px auto;
  }
  .icon-content > img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
  }
  /*footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
}
</style>
