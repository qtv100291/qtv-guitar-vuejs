<!-- eslint-disable no-unused-vars -->
<template>
  <main class="container">
    <div class="banner">
      <img :src="imageBanner" alt="banner" />
    </div>
    <div class="navigation">
      <router-link to="/">Trang Chủ</router-link
      >&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
      <div>{{ guitarTypeName }}</div>
    </div>
    <div class="main-container">
      <div class="filter-part">
        <div class="filter-part-container">
          <div class="remove-item-part">
            <div class="filter-part-title">
              <div class="filter-part-img">
                <img
                  src="/images/Product/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.svg"
                  alt=""
                />
              </div>
              BỘ LỌC
            </div>
            <div class="remove-item-button filter-not-allowed">Bỏ Lọc</div>
          </div>
          <div class="filter-brand filter-item">
            <div class="filter-title">
              THƯƠNG HIỆU<span class="more-icon"
                ><img
                  src="/images/HomePage/expand_more_24px_outlined.svg"
                  alt="more-icon" /></span
              ><span class="less-icon"
                ><img
                  src="/images/HomePage/expand_less_24px_outlined.svg"
                  alt="less-icon"
              /></span>
            </div>
            <ul class="filter-content">
              <li>
                <label for="Alvarez"
                  >ALVAREZ
                  <input type="checkbox" id="Alvarez" data-brand="ALVAREZ" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Fender"
                  >FENDER
                  <input type="checkbox" id="Fender" data-brand="FENDER" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Lakewood"
                  >LAKEWOOD
                  <input type="checkbox" id="Lakewood" data-brand="LAKEWOOD" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Martin"
                  >MARTIN
                  <input type="checkbox" id="Martin" data-brand="MARTIN" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Taylor"
                  >TAYLOR
                  <input type="checkbox" id="Taylor" data-brand="TAYLOR" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
            </ul>
          </div>
          <div class="filter-body-size filter-item">
            <div class="filter-title">
              LOẠI THÂN ĐÀN<span class="more-icon"
                ><img
                  src="/images/HomePage/expand_more_24px_outlined.svg"
                  alt="more-icon" /></span
              ><span class="less-icon"
                ><img
                  src="/images/HomePage/expand_less_24px_outlined.svg"
                  alt="less-icon"
              /></span>
            </div>
            <ul class="filter-content">
              <li>
                <label for="Dreadnought "
                  >DREADNOUGHT
                  <input
                    type="checkbox"
                    id="Dreadnought "
                    data-body-size="Dreadnought"
                  />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Grand Auditorium"
                  >GRAND AUDITORIUM
                  <input
                    type="checkbox"
                    id="Grand Auditorium"
                    data-body-size="Grand Auditorium"
                  />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Jumbo"
                  >JUMBO
                  <input type="checkbox" id="Jumbo" data-body-size="Jumbo" />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
            </ul>
          </div>
          <div class="filter-price filter-item">
            <div class="filter-title">
              KHOẢNG GIÁ<span class="more-icon"
                ><img
                  src="/images/HomePage/expand_more_24px_outlined.svg"
                  alt="more-icon" /></span
              ><span class="less-icon"
                ><img
                  src="/images/HomePage/expand_less_24px_outlined.svg"
                  alt="less-icon"
              /></span>
            </div>
            <ul class="filter-content">
              <li>
                <label for="Low-end"
                  >Dưới 15 Triệu
                  <input
                    type="checkbox"
                    id="Low-end"
                    data-price-min="0"
                    data-price-max="15000000"
                  />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="Mid-end"
                  >Từ 15 Đến 30 Triệu
                  <input
                    type="checkbox"
                    id="Mid-end"
                    data-price-min="15000000"
                    data-price-max="30000000"
                  />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
              <li>
                <label for="High-end"
                  >Trên 30 Triệu
                  <input
                    type="checkbox"
                    id="High-end"
                    data-price-min="30000000"
                    data-price-max="Infinity"
                  />
                  <span class="checkmark"
                    ><img src="/images/HomePage/tick.svg" alt=""
                  /></span>
                </label>
              </li>
            </ul>
          </div>
          <div class="filter-button-container">
            <div class="filter-button filter-not-allowed">Áp Dụng</div>
          </div>
        </div>
      </div>
      <div class="product-part">
        <div class="product-part-header">
          <div class="arrangement-part">
            <div class="arrangement-title" @click="changeOpenSortOrderMenu">
              <span>Sắp xếp theo</span>
              <div>
                <span class="arrangement-executed">{{ sortOrderDisplay }}</span>
                <img
                  class="arrow-icon"
                  src="/images/HomePage/expand_more_24px_outlined.svg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="menu-arrangement"
              :style="{ display: sortMenuOpen ? 'block' : 'none' }"
            >
              <div class="arrangement-option" @click="changeSortOrder('aToZ')">
                Tên Từ A - Z
              </div>
              <div class="arrangement-option" @click="changeSortOrder('zToA')">
                Tên Từ Z - A
              </div>
              <div
                class="arrangement-option"
                @click="changeSortOrder('priceUp')"
              >
                Giá Tăng Dần
              </div>
              <div
                class="arrangement-option"
                @click="changeSortOrder('priceDown')"
              >
                Giá Giảm Dần
              </div>
            </div>
          </div>
          <div class="filter-button-mobile">
            <i class="fas fa-filter"></i><span>Lọc</span>
          </div>
        </div>
        <div class="product-item">
          <!--Items will be rendered here-->
          <guitar-card
            v-for="guitar in guitarDataList"
            :key="guitar._id"
            :front-image="guitar.photo_item.banner[0]"
            :back-image="guitar.photo_item.banner[1]"
            :price="guitar.price"
            :guitar-name="guitar.name"
            :guitar-type="guitar.group"
            :guitar-id="guitar._id"
          ></guitar-card>
        </div>
        <pagination-page
          :page-quantity="pageQuantity"
          :active-page="activePage"
          @change-active-page="(activePage) => changeActivePage(activePage)"
        ></pagination-page>
      </div>
    </div>
  </main>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
// eslint-disable-next-line no-unused-vars
import { useRoute } from "vue-router";
// eslint-disable-next-line no-unused-vars
import { getGuitarDataList } from "../api/guitar";
import GuitarCard from "../components/common/GuitarCard.vue";
import PaginationPage from "../components/common/PaginationPage.vue";
import router from "@/router";

export default {
  components: {
    GuitarCard,
    PaginationPage,
  },
  setup() {
    const guitarDataList = ref([]);
    const activePage = ref(1);
    const pageQuantity = ref(null);
    const sortOrderValue = ref("aToZ");
    const sortMenuOpen = ref(false);
    const sortOrderDisplay = ref("Tên Từ A - Z");
    const imageBanner = ref("");
    const guitarTypeName = ref("");
    const route = useRoute();
    // const router = useRouter();
    const { sortOrder, page } = route.query;
    const guitarBanner = new Map([
      ["classicalguitar", "/images/Product/Classical Guitar/banner - 1.jpg"],
      ["acousticguitar", "/images/Product/Acoustic Guitar/banner - 1.jpg"],
      ["electricguitar", "/images/Product/Electrical Guitar/banner - 1.jpg"],
      ["ukulele", "/images/Product/Ukulele/banner - 1.jpg"],
    ]);
    const sortOrderList = new Map([
      ["aToZ", "Tên Từ A - Z"],
      ["zToA", "Tên Từ Z - A"],
      ["priceUp", "Giá Tăng Dần"],
      ["priceDown", "Giá Giảm Dần"],
    ]);
    const guitarLinkName = new Map([
      ["classicalguitar", "Guitar Cổ Điển"],
      ["acousticguitar", "Guitar Acoustic"],
      ["electricguitar", "Guitar Điện"],
      ["ukulele", "Ukulele"],
    ]);
    onMounted(async () => {
      const guitarUrl = urlPath(sortOrder, page);
      const guitarDataCollection = await getGuitarDataList(guitarUrl);
      if (sortOrder) sortOrderValue.value = sortOrder;
      if (page) activePage.value = parseInt(page);
      guitarDataList.value = guitarDataCollection.guitarData;
      pageQuantity.value = guitarDataCollection.pageQuantity;
      const { guitarType } = route.params;
      const guitarBannerLink = guitarBanner.get(guitarType);
      guitarTypeName.value = guitarLinkName.get(guitarType);
      imageBanner.value = guitarBannerLink;
      window.addEventListener("click", closeSortOrderMenu);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("click", closeSortOrderMenu);
    });

    function changeActivePage(page) {
      if (
        page === 0 ||
        page === pageQuantity.value + 1 ||
        page === activePage.value
      )
        return;
      else activePage.value = page;
    }
    function changeSortOrder(order) {
      sortOrderValue.value = order;
      sortOrderDisplay.value = sortOrderList.get(order);
    }
    function changeOpenSortOrderMenu(event) {
      event.stopPropagation();
      sortMenuOpen.value = !sortMenuOpen.value;
    }
    function closeSortOrderMenu() {
      if (sortMenuOpen.value) sortMenuOpen.value = false;
    }
    watch([activePage, sortOrderValue], ([newPage, newOrderValue]) => {
      const guitarUrl = urlPath(newOrderValue, newPage);
      console.log(guitarUrl);
      router.replace(`${guitarUrl}`);
    });
    watch(route, async () => {
      const guitarUrl = urlPath(sortOrderValue.value, activePage.value);
      const guitarDataCollection = await getGuitarDataList(guitarUrl);
      guitarDataList.value = guitarDataCollection.guitarData;
      const { guitarType } = route.params;
      const guitarBannerLink = guitarBanner.get(guitarType);
      imageBanner.value = guitarBannerLink;
      guitarTypeName.value = guitarLinkName.get(guitarType);
    });
    function urlPath(sortOrder, page) {
      let queryStringEnble = false;
      let pageQueryString = "";
      let sortOrderQueryString = "";
      let fullUrl = "";
      let countAndOperator = -1;
      const { guitarType: baseUrl } = route.params;
      if (page && page !== 1) {
        pageQueryString = `page=${page}`;
        countAndOperator += 1;
      }
      if (sortOrder && sortOrder !== "aToZ") {
        sortOrderQueryString = `sort=${sortOrder}`;
        countAndOperator += 1;
      }
      if (pageQueryString || sortOrderQueryString) queryStringEnble = true;
      if (queryStringEnble)
        fullUrl = `${baseUrl}?${
          pageQueryString
            ? `${pageQueryString}${countAndOperator > 0 ? "&" : ""}`
            : ""
        }${
          sortOrderQueryString
            ? `${sortOrderQueryString}${countAndOperator > 1 ? "&" : ""}`
            : ""
        }`;
      else fullUrl = baseUrl;
      console.log(fullUrl);
      return fullUrl;
    }
    return {
      guitarDataList,
      activePage,
      pageQuantity,
      changeActivePage,
      changeSortOrder,
      imageBanner,
      sortMenuOpen,
      sortOrderDisplay,
      changeOpenSortOrderMenu,
      guitarTypeName,
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1366px) {
  /*Header*/

  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
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
    height: 17px;
    top: calc(100% - 17px);
    left: 0;
    z-index: 1;
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
  .filter-part {
    width: 100%;
    max-width: 300px;
  }
  .filter-part-container {
    width: 100%;
  }
  .remove-item-part {
    width: 100%;
    margin-bottom: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 100px;
    height: 38px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .remove-item-button.filter-not-allowed:hover {
    color: black;
    background-color: white;
    cursor: not-allowed;
  }
  .remove-item-button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
  .filter-item {
    width: 100%;
    border: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 36px;
    color: #000000;
    text-indent: 10px;
    border-bottom: 1px solid #bdb4b4;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: none;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:first-child {
    margin-top: 8px;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button {
    width: 110px;
    height: 40px;
    margin: 25px auto 0px auto;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-button.filter-not-allowed:hover {
    cursor: not-allowed;
    background-color: var(--button-color);
  }
  .filter-button:hover {
    background-color: red;
    cursor: pointer;
  }
  /*Product Part*/
  .product-part {
    width: 100%;
    max-width: 900px;
    overflow: visible;
  }
  .product-part-header {
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 38px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    padding: 0 5px;
    border: 1px solid #bdb4b4;
    display: none;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 25px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
  }
  .arrangement-part {
    width: 100%;
    max-width: 275px;
    height: 40px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
  }

  .arrangement-title {
    width: calc(100% - 25px);
    height: 100%;
    margin-left: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  /*Common Part: Item*/
  .item {
    width: 275px;
    height: 415px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin-bottom: 25px;
    margin-left: 25px;
    transition: 1s;
  }
  .item:hover {
    box-shadow: 0 0 10px rgb(49, 49, 49);
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 250px;
    height: 250px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    background-color: white;
  }
  .front-image {
    height: 100%;
    opacity: 1;
  }
  .back-image {
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 25.5px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }

  /*Pagination*/
  footer {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .banner {
    width: 1000px;
    height: 450px;
    margin: 0 auto;
    position: relative;
    z-index: 0;
  }
  .banner::after {
    content: "";
    width: 100%;
    background-image: url(/public/images/HomePage/bg.svg);
    position: absolute;
    height: 17px;
    top: calc(100% - 17px);
    left: 0;
    z-index: 1;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  .filter-part {
    width: 100%;
    max-width: 250px;
  }
  .filter-part-container {
    width: 100%;
  }
  .remove-item-part {
    width: 100%;
    margin-bottom: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 100px;
    height: 38px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .remove-item-button.filter-not-allowed:hover {
    color: black;
    background-color: white;
    cursor: not-allowed;
  }
  .remove-item-button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
  .filter-item {
    width: 100%;
    border: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 36px;
    color: #000000;
    text-indent: 10px;
    border-bottom: 1px solid #bdb4b4;
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: none;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:first-child {
    margin-top: 8px;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button {
    width: 110px;
    height: 40px;
    margin: 25px auto 0px auto;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-button.filter-not-allowed:hover {
    cursor: not-allowed;
    background-color: var(--button-color);
  }
  .filter-button:hover {
    background-color: red;
    cursor: pointer;
  }
  /*Product Part*/
  .product-part {
    width: 750px;
    overflow: visible;
  }
  .product-part-header {
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 38px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    padding: 0 5px;
    border: 1px solid #bdb4b4;
    display: none;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 25px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
  }
  .arrangement-part {
    width: 100%;
    max-width: 275px;
    height: 40px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
    margin-left: 19px;
  }

  .arrangement-title {
    width: calc(100% - 25px);
    height: 100%;
    margin-left: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  /*Common Part: Item*/
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin-left: 20px;
    margin-bottom: 20px;
    transition: 1s;
  }

  .item:hover {
    box-shadow: 0 0 10px rgb(49, 49, 49);
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 215px;
    height: 215px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .item-name:hover {
    color: orangered;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  .detail-item:hover {
    color: orangered;
  }

  /*Pagination*/
  footer {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .banner {
    width: 95%;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 124px auto 15px auto;
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
  .filter-part {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .filter-part.active-filter {
    right: 0;
  }
  .filter-part-container {
    padding-top: 15px;
    width: 80%;
    max-width: 320px;
    margin: 0 0 0 auto;
    background-color: white;
    height: 100%;
  }
  .remove-item-part {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 80px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-item {
    width: 300px;
    margin: 0 auto;
    border-top: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:first-child {
    margin-top: 8px;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button-container {
    width: 300px;
    margin: 25px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: sticky;
    bottom: 0;
  }
  .filter-button {
    width: 100px;
    height: 32px;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  /*Product Part*/
  .product-part {
    width: 100%;
    overflow: visible;
  }
  .product-part-header {
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 36px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    padding: 0 15px;
    border: 1px solid #bdb4b4;
    margin-right: calc(100% / 92 - 1px);
    border-radius: 999px;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 20px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
  }
  .arrangement-part {
    width: 250px;
    height: 36px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
    margin-left: calc(100% / 92 - 1px);
  }

  .arrangement-title {
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  /*Common Part: Item*/
  .item {
    width: calc(100% * 43 / 138);
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin: 0px calc(100% / 92 + 1px) 20px calc(100% / 92 - 1px);
    transition: 1s;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 205px;
    height: 205px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }

  footer {
    margin-top: 30px;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  /*Header*/
  .menu-bar-item-1 {
    border: none;
  }
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
    margin-top: 62px;
  }
  .container.scroll {
    margin-top: 124px;
  }
  .banner {
    width: 95%;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 124px auto 15px auto;
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
  .filter-part {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .filter-part.active-filter {
    right: 0;
  }
  .filter-part-container {
    padding-top: 15px;
    width: 80%;
    max-width: 320px;
    margin: 0 0 0 auto;
    background-color: white;
    height: 100%;
  }
  .remove-item-part {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 5;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 80px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-item {
    width: 300px;
    margin: 0 auto;
    border-top: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:first-child {
    margin-top: 8px;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button-container {
    width: 300px;
    margin: 25px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
  .filter-button {
    width: 100px;
    height: 32px;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  /*Product Part*/
  .product-part {
    width: 100%;
    overflow: visible;
  }
  .product-part-header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 36px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    padding: 0 15px;
    border: 1px solid #bdb4b4;
    border-radius: 999px;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 20px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
  }
  .arrangement-part {
    width: 250px;
    height: 36px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
  }

  .arrangement-title {
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  /*Common Part: Item*/
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin: 0px calc(25% - 115px) 20px calc(25% - 115px);
    transition: 1s;
  }

  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 205px;
    height: 205px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
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
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
  }
  .banner {
    width: 95%;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .navigation {
    width: 90%;
    margin: 95px auto 15px auto;
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
  .filter-part {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .filter-part.active-filter {
    right: 0;
  }
  .filter-part-container {
    width: 90%;
    max-width: 300px;
    margin: 0 0 0 auto;
    background-color: white;
    height: 100%;
    overflow: auto;
  }
  .remove-item-part {
    padding-top: 15px;
    width: 280px;
    margin: 0 auto;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 5;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 80px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-item {
    width: 280px;
    margin: 0 auto;
    border-top: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:first-child {
    margin-top: 8px;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button-container {
    width: 100%;
    margin: 0px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    background-color: white;
  }
  .filter-button {
    width: 100px;
    height: 32px;
    margin: 0px auto 0px auto;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  /*Product Part*/
  .product-part {
    width: 100%;
    overflow: visible;
  }
  .product-part-header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 36px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    padding: 0 15px;
    border: 1px solid #bdb4b4;
    border-radius: 999px;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 20px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
  }
  .arrangement-part {
    width: 150px;
    height: 36px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
  }

  .arrangement-title {
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title > span {
    display: none;
  }
  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 98%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
    justify-content: center;
  }
  /*Common Part: Item*/
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin: 0 15px 20px 15px;
    transition: 1s;
  }
  .item.show {
    opacity: 1;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 205px;
    height: 205px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  /*Footer*/
  footer {
    margin-top: 30px;
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
  .menu-bar-item-2 {
    border-bottom: 2px solid black;
  }
  /*Main*/
  .container {
    width: 100%;
  }
  .banner {
    width: 95%;
    height: 450px;
    margin: 0 auto;
    display: none;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .navigation {
    width: 95%;
    margin: 94px auto 15px auto;
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
  .filter-part {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 11;
    overflow: hidden;
  }
  .filter-part.active-filter {
    right: 0;
  }
  .filter-part-container {
    width: 90%;
    max-width: 250px;
    margin: 0 0 0 auto;
    background-color: white;
    height: 100%;
    overflow: auto;
  }
  .remove-item-part {
    padding-top: 15px;
    width: 230px;
    margin: 0 auto;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 5;
  }
  .filter-part-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  .filter-part-img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }
  .filter-part-img > img {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
  .remove-item-button {
    width: 70px;
    height: 30px;
    border-radius: 999px;
    display: flex;
    border: 1px solid #bdb4b4;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: black;
    transition: 0.3s;
  }
  .remove-item-button.filter-not-allowed {
    opacity: 0.5;
  }
  .filter-item {
    width: 230px;
    border-top: 1px solid #bdb4b4;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .filter-title {
    width: 100%;
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 32px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .more-icon {
    display: none;
  }
  .filter-title > span {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .filter-title > span > img {
    width: 100%;
    height: 100%;
  }
  .filter-content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s;
  }
  .filter-title:hover {
    cursor: pointer;
  }
  .filter-content > li {
    list-style: none;
    width: 100%;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 28px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
  }
  .filter-content > li:last-child {
    margin-bottom: 8px;
  }
  .filter-content > li > label {
    text-indent: 30px;
    position: relative;
  }
  .filter-content > li > label > span {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 14px;
    height: 14px;
    border: 1px solid #000000;
    display: inline-block;
  }
  .filter-content > li > label:hover {
    cursor: pointer;
  }
  .filter-content > li > label:hover > input:not(:checked) ~ span {
    background-color: rgb(231, 231, 231);
  }
  .filter-content > li > label > span > img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .filter-content > li > label > input:checked ~ span > img {
    display: block;
  }
  .filter-content > li > label > input {
    opacity: 0;
  }

  .filter-price > ul > li {
    margin-top: 5px;
  }
  .filter-price > ul > li:nth-child(2) {
    margin-bottom: 5px;
  }
  .min-price,
  .max-price {
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #000000;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .min-price > input,
  .max-price > input {
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #dadada;
  }
  .min-price > input::placeholder,
  .max-price > input::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #595959;
    text-indent: 5px;
  }
  .min-price > span,
  .max-price > span {
    display: inline-block;
    width: 45px;
  }
  .filter-button-container {
    width: 100%;
    margin: 0px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    background-color: white;
  }
  .filter-button {
    width: 90px;
    height: 32px;
    margin: 0px auto 0px auto;
    background-color: var(--button-color);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: white;
  }
  .filter-button.filter-not-allowed {
    opacity: 0.5;
  }
  /*Product Part*/
  .product-part {
    width: 100%;
    overflow: visible;
  }
  .product-part-header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .filter-button-mobile {
    height: 36px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 30px;
    padding: 0 15px;
    border: 1px solid #bdb4b4;
    border-radius: 999px;
  }
  .fa-filter {
    margin-right: 10px;
    font-size: 20px;
  }
  .notification-empty {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
  }
  .arrangement-part {
    width: 150px;
    height: 36px;
    border: 1px solid #bdb4b4;
    position: relative;
    margin-bottom: 25px;
  }
  .arrangement-title {
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrangement-title > span {
    display: none;
  }

  .arrangement-title:hover {
    cursor: pointer;
  }
  .arrangement-title > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .menu-arrangement {
    display: none;
    width: 100%;
    text-indent: 13px;
    border-bottom: 1px solid #bdb4b4;
    border-left: 1px solid #bdb4b4;
    border-right: 1px solid #bdb4b4;
    position: absolute;
    left: -1px;
    z-index: 2;
    background-color: white;
  }
  .menu-arrangement.show {
    display: block;
  }
  .menu-arrangement > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-arrangement > div:hover {
    background-color: silver;
    cursor: pointer;
  }
  .arrow-icon {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
  .product-item {
    width: 98%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
    justify-content: center;
  }
  /*Common Part: Item*/
  .item {
    width: 230px;
    height: 375px;
    text-decoration: none;
    color: black;
    display: block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;
    margin: 0 15px 20px 15px;
    transition: 1s;
  }
  .item:hover .back-image {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .item-image {
    width: 205px;
    height: 205px;
    margin: 12.5px auto 0px auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .front-image {
    height: 100%;
    opacity: 1;
    background-color: white;
  }
  .back-image {
    display: none;
    height: 100%;
    position: absolute;
    top: 0px;
    transform: rotateY(90deg);
    z-index: 2;
    opacity: 0;
    background-color: white;
    transition: 0.6s;
  }
  .item-name {
    margin: 20px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .price-before-reduction {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-after-reduction {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: var(--text-price-color);
  }
  .line-item {
    margin: 15px auto 0px auto;
    width: 85px;
    height: 0px;
    border: 0.5px dashed #000000;
  }
  .detail-item {
    margin: 5px auto 0px auto;
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }
  /*Footer*/
  footer {
    margin-top: 30px;
  }
  .subscription-part {
    display: none;
  }
}
</style>
