import { createRouter, createWebHistory } from "vue-router";
const WarrantyPolicy = () => import("../src/pages/WarrantyPolicy.vue");
const TermOfService = () => import("../src/pages/TermOfService.vue");
const GuideOnlineShopping = () =>
  import("../src/pages/GuideOnlineShopping.vue");
const HomePage = () => import("../src/pages/HomePage.vue");
const ProductDetail = () => import("../src/pages/ProductDetail.vue");
const ProductPage = () => import("../src/pages/ProductPage.vue");
const ContactShop = () => import("../src/pages/ContactShop.vue");
const BlogPage = () => import("../src/pages/BlogPage.vue");
const ArticleDetail = () => import("../src/pages/ArticleDetail.vue");
const AccessoriesPage = () => import("../src/pages/AccessoriesPage.vue");
const AccessoriesDetail = () => import("../src/pages/AccessoriesDetail.vue");
const GuitarShowListPage = () => import("../src/pages/GuitarShowListPage.vue");
const GuitarShowDetail = () => import("../src/pages/GuitarShowDetail.vue");
const ShoppingCart = () => import("../src/pages/ShoppingCart.vue");
const UserAccount = () => import("../src/pages/UserAccount.vue");
const RegisterPage = () => import("../src/pages/RegisterPage.vue");
const SignIn = () => import("../src/pages/SignIn.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/san-pham/:guitarType", component: ProductPage },
    {
      path: "/san-pham/:guitarType/:guitarId",
      component: ProductDetail,
    },
    {
      path: "/phu-kien",
      component: AccessoriesPage,
    },
    {
      path: "/phu-kien/:accessoriesId",
      component: AccessoriesDetail,
    },
    {
      path: "/guitar-show",
      component: GuitarShowListPage,
    },
    {
      path: "/guitar-show/:guitarShowId",
      component: GuitarShowDetail,
    },
    {
      path: "/blog",
      component: BlogPage,
    },
    {
      path: "/blog/:articleId",
      component: ArticleDetail,
    },
    {
      path: "/gio-hang",
      component: ShoppingCart,
    },
    {
      path: "/dang-ky",
      component: RegisterPage,
      meta: { isNotShow: true },
    },
    {
      path: "/dang-nhap",
      component: SignIn,
      meta: { isNotShow: true },
    },
    { path: "/dieu-khoan-dich-vu", component: TermOfService },
    { path: "/tai-khoan", component: UserAccount },
    { path: "/chinh-sach-bao-hanh", component: WarrantyPolicy },
    { path: "/huong-dan-mua-hang", component: GuideOnlineShopping },
    { path: "/lien-he", component: ContactShop },
  ],
});

export default router;
