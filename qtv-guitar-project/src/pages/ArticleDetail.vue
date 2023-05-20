<template>
  <main class="container">
    <div class="navigation">
      <router-link to="/">Trang Chủ</router-link
      >&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/blog">Blog</router-link
      >&nbsp;&nbsp;/&nbsp;&nbsp;
      <div>{{ articleData.title }}</div>
    </div>
    <div class="main-container">
      <div class="article-content">
        <div class="article-content-title">
          {{ articleData.title }}
        </div>
        <div class="article-item-info">
          <div class="article-item-date">
            <img src="/images/HomePage/calendar 1.png" alt="lịch" />
            <div>10 Tháng 02, 2020</div>
          </div>
          <div class="article-item-author">
            <img src="/images/HomePage/pen 1.png" alt="tác giả" />
            <div>Admin</div>
          </div>
        </div>
        <div
          class="article-container-content"
          :style="{ width: '100%' }"
          v-html="articleData.content"
        ></div>
      </div>
      <div class="article-sub-part">
        <div class="author-info" v-if="articleData.author">
          <div class="author-photo">
            <img :src="articleData.author.avatar" alt="author-info" />
          </div>
          <div class="author-name">{{ articleData.author.name }}</div>
          <div class="author-status">
            {{ articleData.author.messageSignature }}
          </div>
        </div>
        <div class="others-articles">
          <div class="others-articles-title">Bài Viết Cùng Chuyên Mục</div>
          <div class="others-articles-unit">
            <div class="others-articles-time">
              <img src="/images/Blog/clockIcon.png" alt="" />
              <div>29 Tháng 04, 2020</div>
            </div>
            <a class="others-articles-item" href="blogitem1.html"
              >7 Câu Nói Truyền Cảm Hứng Từ Các Nghệ Sĩ Guitar Nổi Tiếng</a
            >
          </div>
          <div class="others-articles-unit">
            <div class="others-articles-time">
              <img src="Blog/clockIcon.png" alt="" />
              <div>20 Tháng 04, 2020</div>
            </div>
            <a class="others-articles-item" href="blogitem2.html"
              >Một Vài Mẫu Guitar Điện Và Acoustic Mới Năm Nay (Phần 1)</a
            >
          </div>
          <div class="others-articles-unit">
            <div class="others-articles-time">
              <img src="Blog/clockIcon.png" alt="" />
              <div>31 Tháng 03, 2020</div>
            </div>
            <a class="others-articles-item" href="blogitem3.html"
              >Một Vài Lời Khuyên Và Mẹo Giúp Cho Các Bạn Vừa Đánh Đàn Vừa Hát
              Tốt Hơn</a
            >
          </div>
          <div class="others-articles-unit">
            <div class="others-articles-time">
              <img src="Blog/clockIcon.png" alt="" />
              <div>12 Tháng 03, 2020</div>
            </div>
            <a class="others-articles-item" href="blogitem4.html"
              >Phim Tài Liệu : Cách Tạo Ra Một Chiếc Guitar Fender American
              Ultra Series
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="scrolling-button">
      <div class="scrolling-button-container">
        <img src="HomePage/up-arrow.svg" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { getArticle } from "../api/article";
export default {
  setup() {
    const articleData = reactive({});
    const route = useRoute();
    const { articleId } = route.params;
    onMounted(async () => {
      const article = await getArticle(articleId);
      Object.assign(articleData, article);
    });
    return { articleData };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1366px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 82px;
  }
  .container.scroll {
    margin-top: 144px;
  }
  .main-container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto 0 auto;
    display: flex;
  }
  .navigation {
    width: 90%;
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
  }
  .navigation > a:nth-child(1):hover {
    color: red;
  }
  .navigation > a:nth-child(2):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .article-content {
    width: 90%;
    max-width: 800px;
    padding-right: 15px;
    border-right: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 90%;
    max-width: 700px;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 90%;
    max-width: 700px;
    margin: 10px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 90vw;
    max-width: 700px;
    height: 45vw;
    max-height: 350px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 90vw;
    max-width: 700px;
    height: 57.86vw;
    max-height: 450px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 90%;
    max-width: 700px;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 90%;
    max-width: 700px;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 90%;
    max-width: 700px;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 90vw;
    max-width: 600px;
    height: 54vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 90vw;
    max-width: 600px;
    height: 50.625vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    max-width: 370px;
    position: sticky;
    top: 82px;
    height: 520px;
    margin-top: 20px;
    margin-left: 10px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-left: 25px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 10px;
    left: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 40px;
    left: 120px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .others-articles-time {
    margin-left: 25px;
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    margin-left: 50px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 82px;
  }
  .container.scroll {
    margin-top: 144px;
  }
  .main-container {
    width: 1000px;
    margin: 20px auto 0 auto;
    display: flex;
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
  .navigation > a:nth-child(2):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .article-content {
    width: 90%;
    max-width: 670px;
    padding-right: 15px;
    border-right: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 100%;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 100%;
    margin: 10px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 90vw;
    max-width: 600px;
    height: 54vw;
    max-height: 350px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 90vw;
    max-width: 600px;
    height: 57.86vw;
    max-height: 450px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    text-indent: 0;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 90vw;
    max-width: 600px;
    height: 54vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 90vw;
    max-width: 600px;
    height: 50.625vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    max-width: 300px;
    position: sticky;
    top: 82px;
    height: 520px;
    margin-top: 20px;
    margin-left: 10px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-left: 25px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 0px;
    left: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 30px;
    left: 120px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .others-articles-time {
    margin-left: 25px;
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    margin-left: 50px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(6) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 82px;
  }
  .container.scroll {
    margin-top: 144px;
  }
  .main-container {
    margin: 20px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 124px auto 20px auto;
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
  .navigation > a:nth-child(2):hover {
    color: red;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .article-content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 100%;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 100%;
    margin: 10px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 90vw;
    max-width: 600px;
    height: 54vw;
    max-height: 350px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 90vw;
    max-width: 600px;
    height: 57.86vw;
    max-height: 450px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    text-indent: 0;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 90vw;
    max-width: 600px;
    height: 54vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 90vw;
    max-width: 600px;
    height: 50.625vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    position: relative;
    margin-top: 20px;
    margin-left: 10px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-left: 25px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 0px;
    left: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 30px;
    left: 120px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .others-articles-time {
    margin-left: 25px;
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    margin-left: 50px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(6) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 124px;
  }
  .main-container {
    margin: 0px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 0px auto;
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
  .article-content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 100%;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 100%;
    margin: 10px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 80vw;
    max-width: 600px;
    height: 48vw;
    max-height: 350px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 80vw;
    max-width: 600px;
    height: 51.44vw;
    max-height: 450px;
    margin: 30px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    text-indent: 0;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 80vw;
    max-width: 600px;
    height: 48vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 80vw;
    max-width: 600px;
    height: 45vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    position: relative;
    margin-top: 20px;
    margin-left: 10px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-left: 25px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 0px;
    left: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 30px;
    left: 120px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .others-articles-time {
    margin-left: 25px;
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    margin-left: 50px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
  /*Footer*/
  footer {
    margin-top: 30px;
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
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(6) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 94px;
  }
  .main-container {
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 90px auto 0px auto;
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
  .article-content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 100%;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 100%;
    margin: 0px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 85vw;
    max-width: 600px;
    height: 51vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 85vw;
    max-width: 600px;
    height: 54.65vw;
    max-height: 450px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    text-indent: 0;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 85vw;
    max-width: 600px;
    height: 51vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 85vw;
    max-width: 600px;
    height: 47.8125vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 0px;
    left: 80px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 30px;
    left: 80px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .others-articles-time {
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    margin-left: 20px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
  /*Footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
  .store-info-part {
    width: 90%;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 350px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-5 {
    border-bottom: 2px solid black;
  }
  .menu-mobile-container > a:nth-child(6) {
    font-weight: 500;
    color: red;
  }
  /*Main*/
  .container {
    width: 100%;
    position: relative;
    margin-top: 94px;
  }
  .main-container {
    margin: 0px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .navigation > a {
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .navigation > div {
    display: inline;
    color: #6c757d;
    font-family: Roboto;
  }
  .article-content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #c4c4c4;
  }
  .article-content-title {
    font-family: Roboto;
    width: 100%;
    margin: 15px auto 0px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .article-item-info {
    width: 100%;
    margin: 0px auto 0px auto;
    display: flex;
  }
  .article-item-date {
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-date > img {
    width: 16px;
    height: 16px;
  }
  .article-item-date > div {
    width: 140px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 34px;
    color: #000000;
  }
  .article-item-author {
    width: 63px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-item-author > img {
    width: 15px;
    height: 15px;
  }
  .article-item-author > div {
    width: 44px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 34px;
    color: #000000;
  }
  .article-container-content :deep() .article-header-photo {
    width: 85vw;
    max-width: 600px;
    height: 51vw;
    max-height: 350px;
    margin: 15px auto 15px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-header-photo-special {
    width: 85vw;
    max-width: 600px;
    height: 54.65vw;
    max-height: 450px;
    margin: 15px auto 15px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .article-container-content :deep() .article-header-photo-special > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-normal {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    text-indent: 0;
  }
  .article-container-content :deep() .article-paragraph-title {
    width: 100%;
    margin: 5px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-paragraph-italic {
    width: 100%;
    margin: 10px auto 0px auto;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
  }
  .article-container-content :deep() .article-photo {
    width: 85vw;
    max-width: 600px;
    height: 51vw;
    max-height: 350px;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
  }
  .article-container-content :deep() .article-photo > img {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-video {
    width: 85vw;
    max-width: 600px;
    height: 47.8125vw;
    max-height: 337.5px;
    margin: 20px auto 20px auto;
    overflow: hidden;
  }
  .article-container-content :deep() .article-video > iframe {
    width: 100%;
    height: 100%;
  }
  .article-container-content :deep() .article-paragraph-author {
    width: 90%;
    max-width: 700px;
    margin: 30px auto 0px auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    direction: rtl;
  }
  .article-sub-part {
    width: 90%;
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
  }
  .author-info {
    width: 100%;
  }
  .author-photo {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    overflow: hidden;
  }
  .author-photo > img {
    width: 100%;
    height: 100%;
  }
  .author-name {
    position: absolute;
    top: 0px;
    left: 75px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .author-status {
    position: absolute;
    top: 30px;
    left: 75px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .others-articles {
    width: 100%;
    margin-top: 25px;
  }
  .others-articles-unit {
    width: 100%;
    margin-bottom: 10px;
  }
  .others-articles-title {
    width: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  .others-articles-time {
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .others-articles-time > img {
    width: 15px;
    height: 15px;
  }
  .others-articles-time > div {
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
  }
  .others-articles-item {
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    margin-left: 20px;
  }
  .others-articles-item:hover {
    color: red;
    cursor: pointer;
  }
  /*Footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
  .store-info-part {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
