import { defineStore } from "pinia";
import { setLocalStorage } from "@/utils/common";
import { getClientMessage } from "@/utils/message";
import { LOCAL_SHOPPING_CART_NAME } from "@/utils/constantValue";
import { useModalStore } from "./confirmModal";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [],
    };
  },
  getters: {
    totalMoney: (state) => {
      if (state.cart.length === 0) return 0;
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        total += state.cart[i].price * state.cart[i].count;
      }
      return total;
    },
    totalItem: (state) => {
      if (state.cart.length === 0) return 0;
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        total += state.cart[i].count;
      }
      return total;
    },
    seatSelected: (state) => {
      return function (guitarShowId) {
        let seatSelected = [];
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].seatClass && state.cart[i]._id === guitarShowId)
            seatSelected = [...seatSelected, ...state.cart[i].seatId];
        }
        return seatSelected;
      };
    },
  },
  actions: {
    addToCart(item) {
      const modalStore = useModalStore();
      let cartItemIndex;
      if (item.seatClass) {
        cartItemIndex = this.cart.findIndex(
          (itemCart) =>
            itemCart._id === item._id && itemCart.seatClass === item.seatClass
        );
        if (cartItemIndex > -1) {
          this.cart[cartItemIndex].count += item.count;
          this.cart[cartItemIndex].seatId.push(item.seatId);
        } else this.cart.push({ ...item, seatId: [item.seatId] });
      } else {
        cartItemIndex = this.cart.findIndex(
          (itemCart) => itemCart._id === item._id
        );
        if (cartItemIndex > -1) this.cart[cartItemIndex].count += item.count;
        else this.cart.push(item);
      }
      setLocalStorage(LOCAL_SHOPPING_CART_NAME, this.cart);
      modalStore.openModal(getClientMessage("added to cart"));
    },
    removeFromCart(itemId, seatClass) {
      let newCart;
      if (seatClass)
        newCart = this.cart.filter((item) =>
          item._id === itemId ? item.seatClass !== seatClass : true
        );
      else newCart = this.cart.filter((item) => item._id !== itemId);
      this.cart = [...newCart];
      setLocalStorage(LOCAL_SHOPPING_CART_NAME, this.cart);
    },
    removeSeatFromCart(itemId, seatClass, seatId) {
      const cartItemIndex = this.cart.findIndex(
        (itemCart) =>
          itemCart._id === itemId && itemCart.seatClass === seatClass
      );
      if (cartItemIndex < 0) return;
      const newCart = this.cart[cartItemIndex].seatId.filter(
        (item) => item !== seatId
      );

      if (newCart.length === 0) {
        this.removeFromCart(itemId, seatClass);
        return;
      } else {
        this.cart[cartItemIndex].seatId = [...newCart];
        this.cart[cartItemIndex].count = newCart.length;
      }
      setLocalStorage(LOCAL_SHOPPING_CART_NAME, this.cart);
    },
    plusOne(itemId) {
      this.cart.map((item) => {
        if (item._id === itemId) {
          item.count++;
        }
      });
    },
    minusOne(itemId) {
      this.cart.map((item) => {
        if (item._id === itemId && item.count > 1) {
          item.count--;
        }
      });
    },
    initializeCart(data) {
      this.cart = JSON.parse(JSON.stringify(data));
    },
  },
});
