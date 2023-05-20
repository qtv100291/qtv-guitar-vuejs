<template>
  <header class="header-tablet">
    <div class="menu-mobile">
      <div class="menu-mobile-container">
        <a href="signin.html" class="menu-mobile-signin">
          <div class="user-icon"><i class="fas fa-user-circle"></i></div>
          <h4>Đăng Nhập</h4>
          <div class="singin-icon"><i class="fas fa-sign-in-alt"></i></div>
        </a>
        <a href="index.html" class="menu-mobile-item">Trang Chủ</a>
        <ul>
          <li>
            <a class="menu-mobile-item" href="classicalguitar.html"
              >Guitar Cổ Điển</a
            >
          </li>
          <li>
            <a class="menu-mobile-item" href="acousticguitar.html"
              >Guitar Acoustic</a
            >
          </li>
          <li>
            <a class="menu-mobile-item" href="electricguitar.html"
              >Guitar Điện</a
            >
          </li>
          <li><a class="menu-mobile-item" href="ukulele.html">Ukulele</a></li>
        </ul>
        <a href="accessories.html" class="menu-mobile-item">Phụ Kiện</a>
        <a href="guitarshow.html" class="menu-mobile-item">Guitar Show</a>
        <a href="blog.html" class="menu-mobile-item">Blog</a>
        <a href="contact.html" class="menu-mobile-item">Liên Hệ</a>
        <div class="break-title">CHĂM SÓC KHÁCH HÀNG</div>
        <a href="guideonlineshopping.html" class="menu-mobile-item"
          >Hướng dẫn mua hàng</a
        >
        <a href="termofservice.html" class="menu-mobile-item"
          >Điều khoản dịch vụ
        </a>
        <a href="warrantypolicy.html" class="menu-mobile-item"
          >Chính sách bảo hành, đổi trả
        </a>
      </div>
    </div>
    <div class="top-navbar-mobile">
      <div class="menu-icon-mobile"><i class="fas fa-bars"></i></div>
      <div class="logo-mobile">
        <img src="/images/HomePage/Untitled.jpg" alt="logo" />
        <a href="index.html"></a>
      </div>
      <div class="sub-shopping-cart">
        <a href="shoppingcart.html"
          ><img src="/images/HomePage/shopping-cart 1.svg" alt="" /><span
            class="total-count-item"
            >0</span
          ></a
        >
      </div>
      <div class="search-bar">
        <img src="/images/HomePage/search_24px_outlined.svg" alt="search" />
        <input
          class="input-search-bar"
          type="text"
          placeholder="Tìm kiếm trên QTV Guitar Shop..."
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
    </div>
  </header>
</template>

<style scoped>
@media only screen and (min-width: 1366px) {
  .header-tablet {
    display: none;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .header-tablet {
    display: none;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .header-tablet {
    width: 100%;
  }
  .menu-mobile {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .menu-mobile.active-mobile {
    left: 0;
  }
  .menu-mobile-container {
    width: 90%;
    max-width: 350px;
    background-color: white;
    height: 100%;
  }
  .menu-mobile-signin {
    display: block;
    width: 100%;
    height: 50px;
    background-color: #4ac6ff;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .user-icon {
    margin-left: 20px;
  }
  .user-icon > i {
    font-size: 30px;
    font-weight: 300;
  }
  .menu-mobile-signin > h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-left: 15px;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .singin-icon {
    margin-left: calc(100% - 260px);
  }
  .menu-mobile-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    text-indent: 20px;
    width: 100%;
    color: black;
  }
  .menu-mobile-item:hover {
    background-color: rgb(224, 224, 224);
  }
  .break-title {
    margin-top: 10px;
    border-top: 1px solid #c4c4c4;
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    text-indent: 20px;
    width: 100%;
    color: rgb(177, 175, 175);
  }
  .top-navbar-mobile {
    width: 100%;
    height: 62px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  .menu-icon-mobile {
    width: 32px;
    height: 32px;
    margin-left: 10px;
    font-size: 30px;
    line-height: 40px;
  }
  .menu-icon-mobile:hover {
    cursor: pointer;
  }
  .logo-mobile {
    height: 100%;
    width: 124px;
    position: relative;
  }
  .logo-mobile > img {
    width: 100%;
    height: 100%;
  }
  .logo-mobile > a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    position: relative;
    color: black;
    display: flex;
    align-items: center;
  }
  .total-count-item {
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
    top: -5px;
    left: 22px;
    color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 100%;
    top: 100%;
    left: 0%;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 3px;
    transition: 0.5s;
    height: 62px;
  }
  .search-bar.scroll {
    width: calc(95% - 100px);
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 5;
  }
  .search-bar > img:first-child {
    cursor: pointer;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: black;
    border-radius: 3px 0 0 3px;
  }
  .x-mark-search-bar {
    position: absolute;
    right: calc(5% + 10px);
    z-index: 7;
    display: none;
    transition: 0.3s;
    border: none;
  }
  .x-mark-search-bar:hover {
    cursor: pointer;
  }
  .x-mark-search-bar.scroll {
    right: calc(5% + 10px);
  }
  .search-bar:hover .x-mark-search-bar.scroll {
    opacity: 1;
  }
  .input-search-bar {
    width: calc(90% - 33px);
    height: 32px;
    left: 32px;
    z-index: 6;
    border: 1px solid black;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
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
    top: calc(100% - 14px);
    left: calc(5% + 33px);
    position: absolute;
    width: calc(90% - 33px);
    background-color: white;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: calc(5% + 33px);
    width: calc(90% - 33px);
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
  /*Header-desktop*/
  .header-desktop {
    display: none;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .header-tablet {
    width: 100%;
  }
  .menu-mobile {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .menu-mobile.active-mobile {
    left: 0;
  }
  .menu-mobile-container {
    width: 90%;
    max-width: 350px;
    background-color: white;
    height: 100%;
  }
  .menu-mobile-signin {
    display: block;
    width: 100%;
    height: 50px;
    background-color: #4ac6ff;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .user-icon {
    margin-left: 20px;
  }
  .user-icon > i {
    font-size: 30px;
    font-weight: 300;
  }
  .menu-mobile-signin > h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-left: 15px;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .singin-icon {
    margin-left: calc(100% - 260px);
  }
  .menu-mobile-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    text-indent: 20px;
    width: 100%;
    color: black;
  }
  .menu-mobile-item:hover {
    background-color: rgb(224, 224, 224);
  }
  .break-title {
    margin-top: 10px;
    border-top: 1px solid #c4c4c4;
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    text-indent: 20px;
    width: 100%;
    color: rgb(177, 175, 175);
  }
  .top-navbar-mobile {
    width: 100%;
    height: 62px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  .menu-icon-mobile {
    width: 32px;
    height: 32px;
    margin-left: 10px;
    font-size: 30px;
    line-height: 40px;
  }
  .menu-icon-mobile:hover {
    cursor: pointer;
  }
  .logo-mobile {
    height: 100%;
    width: 124px;
    position: relative;
  }
  .logo-mobile > img {
    width: 100%;
    height: 100%;
  }
  .logo-mobile > a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    position: relative;
    color: black;
    display: flex;
    align-items: center;
  }
  .total-count-item {
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
    top: -5px;
    left: 22px;
    color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 100%;
    top: 100%;
    left: 0%;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 3px;
    transition: 0.5s;
    height: 62px;
  }
  .search-bar.scroll {
    width: calc(95% - 100px);
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 5;
  }
  .search-bar > img:first-child {
    cursor: pointer;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: black;
    border-radius: 3px 0 0 3px;
  }
  .x-mark-search-bar {
    position: absolute;
    right: calc(5% + 10px);
    z-index: 7;
    display: none;
    transition: 0.3s;
    border: none;
  }
  .x-mark-search-bar:hover {
    cursor: pointer;
  }
  .x-mark-search-bar.scroll {
    right: calc(5% + 10px);
  }
  .input-search-bar {
    width: calc(90% - 33px);
    height: 32px;
    left: 32px;
    z-index: 6;
    border: 1px solid black;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
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
    top: calc(100% - 14px);
    left: calc(5% + 33px);
    position: absolute;
    width: calc(90% - 33px);
    background-color: white;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: calc(5% + 33px);
    width: calc(90% - 33px);
  }
  .suggestion-guitar {
    width: 100%;
    overflow: auto;
    max-height: 300px;
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
  /*Header*/
  .header-desktop {
    display: none;
  }
}

@media only screen and (min-width: 351px) and (max-width: 576px) {
  .header-tablet {
    width: 100%;
  }
  .menu-mobile {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .menu-mobile.active-mobile {
    left: 0;
  }
  .menu-mobile-container {
    width: 78%;
    max-width: 300px;
    background-color: white;
    height: 100%;
  }
  .menu-mobile-signin {
    display: block;
    width: 100%;
    height: 40px;
    background-color: #4ac6ff;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .user-icon {
    margin-left: 15px;
  }
  .user-icon > i {
    font-size: 27px;
    font-weight: 300;
  }
  .menu-mobile-signin > h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-left: 15px;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .singin-icon {
    margin-left: calc(100% - 250px);
  }
  .menu-mobile-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-indent: 15px;
    width: 100%;
    color: black;
  }
  .menu-mobile-item:hover {
    background-color: rgb(224, 224, 224);
  }
  .break-title {
    margin-top: 5px;
    border-top: 1px solid #c4c4c4;
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    text-indent: 15px;
    width: 100%;
    color: rgb(177, 175, 175);
  }
  .top-navbar-mobile {
    width: 100%;
    height: 45px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  .menu-icon-mobile {
    width: 45px;
    height: 45px;
    margin-left: 10px;
    font-size: 27px;
    line-height: 45px;
  }
  .menu-icon-mobile:hover {
    cursor: pointer;
  }
  .logo-mobile {
    height: 100%;
    width: 84px;
    position: relative;
  }
  .logo-mobile > img {
    width: 100%;
    height: 100%;
  }
  .logo-mobile > a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    position: relative;
    color: black;
    display: flex;
    align-items: center;
  }
  .sub-shopping-cart > a > img {
    width: 32px;
    height: 32px;
  }
  .total-count-item {
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
    top: -5px;
    left: 17px;
    color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 100%;
    top: 100%;
    left: 0%;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 3px;
    transition: 0.5s;
    height: 45px;
  }
  .search-bar.scroll {
    width: calc(95% - 60px);
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 5;
  }
  .search-bar > img:first-child {
    cursor: pointer;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: black;
    border-radius: 3px 0 0 3px;
  }
  .x-mark-search-bar {
    position: absolute;
    right: calc(5% + 10px);
    z-index: 7;
    display: none;
    transition: 0.3s;
    border: none;
  }
  .x-mark-search-bar:hover {
    cursor: pointer;
  }
  .x-mark-search-bar.scroll {
    right: calc(5% + 10px);
  }
  .input-search-bar {
    width: calc(90% - 33px);
    height: 32px;
    left: 32px;
    z-index: 6;
    border: 1px solid black;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
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
    top: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    background-color: white;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: calc(-50% * (100 / 95 - 1) - 30px * 100 / 95);
    width: calc((100% + 60px) * 100 / 95);
  }
  .suggestion-guitar {
    width: 100%;
    overflow: auto;
    max-height: 300px;
  }
  .search-bar-item {
    text-decoration: none;
    height: 25px;
    display: block;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
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
    font-size: 14px;
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
  /*Header*/
  .header-desktop {
    display: none;
  }
}

@media only screen and (max-width: 350px) {
  .header-tablet {
    width: 100%;
  }
  .menu-mobile {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .menu-mobile.active-mobile {
    left: 0;
  }
  .menu-mobile-container {
    width: 82%;
    max-width: 300px;
    background-color: white;
    height: 100%;
    overflow: auto;
  }
  .menu-mobile-signin {
    display: block;
    width: 100%;
    height: 40px;
    background-color: #4ac6ff;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .user-icon {
    margin-left: 10px;
  }
  .user-icon > i {
    font-size: 25px;
    font-weight: 300;
  }
  .menu-mobile-signin > h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-left: 15px;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .singin-icon {
    margin-left: calc(100% - 250px);
  }
  .menu-mobile-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    text-indent: 10px;
    width: 100%;
    color: black;
  }
  .menu-mobile-item:hover {
    background-color: rgb(224, 224, 224);
  }
  .break-title {
    margin-top: 5px;
    border-top: 1px solid #c4c4c4;
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    text-indent: 10px;
    width: 100%;
    color: rgb(177, 175, 175);
  }
  .top-navbar-mobile {
    width: 100%;
    height: 45px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  .menu-icon-mobile {
    width: 35px;
    height: 35px;
    margin-left: 10px;
    font-size: 25px;
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .menu-icon-mobile:hover {
    cursor: pointer;
  }
  .logo-mobile {
    height: 100%;
    width: 84px;
    position: relative;
  }
  .logo-mobile > img {
    width: 100%;
    height: 100%;
  }
  .logo-mobile > a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .sub-shopping-cart {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    position: relative;
    color: black;
    display: flex;
    align-items: center;
  }
  .sub-shopping-cart > a > img {
    width: 25px;
    height: 25px;
  }
  .total-count-item {
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
    top: -5px;
    left: 17px;
    color: black;
  }
  .search-bar {
    position: absolute;
    z-index: 6;
    width: 100%;
    top: 100%;
    left: 0%;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    border-radius: 3px;
    transition: 0.5s;
    height: 45px;
  }
  .search-bar.scroll {
    width: calc(95% - 65px);
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 5;
  }
  .search-bar > img:first-child {
    cursor: pointer;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: black;
    border-radius: 3px 0 0 3px;
  }
  .x-mark-search-bar {
    position: absolute;
    right: calc(2.5% + 10px);
    z-index: 7;
    display: none;
    transition: 0.3s;
    border: none;
  }
  .x-mark-search-bar:hover {
    cursor: pointer;
  }
  .x-mark-search-bar.scroll {
    right: calc(2.5% + 10px);
  }
  .input-search-bar {
    width: calc(95% - 33px);
    height: 32px;
    z-index: 6;
    border: 1px solid black;
    border-radius: 0px 3px 3px 0px;
    border-left: 1px solid black;
    text-indent: 10px;
    font-size: 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    transition: width 0.5s, left 0.5s;
  }
  .input-search-bar::placeholder {
    text-indent: 10px;
    font-size: 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
  }
  .input-search-bar:focus {
    outline: none;
  }
  .suggestion-item {
    top: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    background-color: white;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: top left 0;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  .suggestion-item.being-focus {
    transform: scaleY(1);
  }
  .suggestion-item.scroll {
    left: calc(-50% * (100 / 95 - 1) - 30px * 100 / 95);
    width: calc((100% + 60px) * 100 / 95);
  }
  .suggestion-guitar {
    width: 100%;
    overflow: auto;
    max-height: 300px;
  }
  .search-bar-item {
    text-decoration: none;
    display: block;
    text-indent: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: black;
  }
  .search-bar-item:hover {
    background-color: rgb(221, 221, 221);
  }
  .text-mark-search {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400 !important;
    font-size: 13px;
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
  /*Header*/
  .header-desktop {
    display: none;
  }
}
</style>
