<template>
  <Teleport to="body">
    <transition name="popup-container">
      <div class="popup-container" v-show="modalStore.isOpen">
        <div class="popup-messenger" ref="modalRef">
          <div class="close-button" @click="closeButtonFunction">
            <img src="/images/HomePage/x-mark 1.png" alt="" />
          </div>
          <div class="check-mark-icon" v-if="!modalStore.dangerMode">
            <div class="circle-left">
              <div
                class="circle-left-rotate"
                :class="{ show: modalStore.isOpen }"
              ></div>
            </div>
            <div class="circle-right">
              <div
                class="circle-right-rotate"
                :class="{ show: modalStore.isOpen }"
              ></div>
            </div>
            <div class="check-mark-line-1">
              <span :class="{ show: modalStore.isOpen }"></span>
            </div>
            <div class="check-mark-line-2">
              <span :class="{ show: modalStore.isOpen }"></span>
            </div>
          </div>
          <div
            class="check-mark-icon error-icon"
            :class="{ show: modalStore.isOpen }"
            v-else
          >
            <div class="x-mark-icon" :class="{ show: modalStore.isOpen }"></div>
          </div>
          {{ modalStore.message }}
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { useModalStore } from "../../stores/confirmModal";
import { TIME_CONFIRM_MODAL } from "@/utils/constantValue";

export default {
  setup() {
    const modalRef = ref(null);
    const modalStore = useModalStore();

    onMounted(() => {
      if (!modalStore.dangerMode) {
        setTimeout(() => {
          modalStore.closeModal();
        }, TIME_CONFIRM_MODAL);
      } else window.addEventListener("click", outSideClick);
    });
    onUnmounted(() => {
      if (modalStore.dangerMode)
        window.removeEventListener("click", outSideClick);
    });
    function closeButtonFunction() {
      modalStore.closeModal();
    }
    function outSideClick(event) {
      if (modalRef.value) {
        const isClickInside = modalRef.value.contains(event.target);
        if (!isClickInside) modalStore.closeModal();
      }
    }
    return {
      modalRef,
      modalStore,
      closeButtonFunction,
    };
  },
};
</script>

<style scoped>
.popup-container-enter-from,
.popup-container-leave-to {
  opacity: 0;
}
.popup-container-enter-to,
.popup-container-leave-from {
  opacity: 1;
}

.check-mark-icon.error-icon {
  width: 50px;
  height: 50px;
  border-radius: 999px;
  border: 4px solid red;
  position: relative;
  transition: 1s;
  opacity: 0;
}

.check-mark-icon.error-icon.show {
  opacity: 1;
}
.x-mark-icon::before {
  content: "";
  width: 4px;
  height: 30px;
  position: absolute;
  background-color: red;
  top: 10px;
  left: 23px;
}
.x-mark-icon::after {
  content: "";
  width: 30px;
  height: 4px;
  position: absolute;
  background-color: red;
  top: 23px;
  left: 10px;
}
.x-mark-icon.show::before,
.x-mark-icon.show::after {
  animation: move-x-button 0.4s 0.1s linear forwards,
    scale-x-button 0.8s 0.5s linear forwards;
}

@keyframes scale-x-button {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.3);
  }
  66% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes move-x-button {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-30deg);
  }
  80% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0);
  }
}

.close-button {
  position: absolute;
  width: 20px;
  height: 20px;
  left: calc(100% - 25px);
  top: 5px;
  border-radius: 999px;
  background-color: white;
}
.close-button img {
  position: absolute;
  top: calc(10px - 35%);
  left: calc(10px - 35%);
  width: 70%;
  height: 70%;
  border-radius: 999px;
}
.close-button:hover {
  cursor: pointer;
}

.popup-messenger {
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
@media only screen and (min-width: 1366px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1365px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
@media only screen and (min-width: 769px) and (max-width: 1023px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
@media only screen and (min-width: 450px) and (max-width: 576px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
@media only screen and (min-width: 351px) and (max-width: 449px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: calc(50% - 150px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: black;
    border-radius: 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
@media only screen and (max-width: 350px) {
  .popup-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none;
    opacity: 0; */
    transition: opacity 0.25s;
    z-index: 15;
  }
  .popup-messenger {
    width: 220px;
    position: absolute;
    background-color: white;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    color: black;
    border-radius: 10px;
    flex-wrap: wrap;
    padding: 10px 10px;
  }
  .add-to-cart {
    opacity: 1;
  }
  .popup-messenger > img {
    margin-left: 20px;
    width: 40px;
    height: 40px;
  }
  .check-mark-icon {
    margin-left: 15px;
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid transparent;
    position: relative;
    transform: rotate(-45deg);
  }
  .circle-left {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: -3px;
    overflow: hidden;
    z-index: 0;
  }
  .circle-left-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .circle-left-rotate.show {
    animation: rotate-circle 0.1s 0.4s linear forwards;
  }
  .circle-right {
    width: 28px;
    height: 56px;
    position: absolute;
    top: -3px;
    left: 24px;
    overflow: hidden;
    z-index: 1;
  }
  .circle-right-rotate {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 3px solid rgb(140, 233, 0);
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .circle-right-rotate.show {
    animation: rotate-circle 0.1s 0.3s linear forwards;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .check-mark-line-1 {
    height: 15px;
    width: 3px;
    background-color: transparent;
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .check-mark-line-1 span {
    display: block;
    width: 3px;
    height: 0;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-1 span.show {
    animation: line-1 0.1s 0.5s linear forwards;
  }
  .check-mark-line-2 {
    height: 3px;
    width: 25px;
    background-color: transparent;
    position: absolute;
    top: 27px;
    left: 17px;
  }
  .check-mark-line-2 span {
    display: block;
    width: 0;
    height: 3px;
    background-color: rgb(140, 233, 0);
  }
  .check-mark-line-2 span.show {
    animation: line-2 0.1s 0.6s linear forwards;
  }
  @keyframes line-1 {
    0% {
      height: 0;
    }
    100% {
      height: 15px;
    }
  }
  @keyframes line-2 {
    0% {
      width: 0;
    }
    100% {
      width: 25px;
    }
  }
}
</style>
