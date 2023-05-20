<template>
  <div class="guitar-show-item guitar-show-item-1">
    <div class="show-item-date">
      <div class="date-show">
        <p>{{ timeConfig.date }}</p>
        <p>Tháng {{ timeConfig.month }}</p>
      </div>
      <div class="day-left">
        <div>Còn Lại</div>
        <span class="day-left-number"></span>
        <div>Ngày</div>
      </div>
    </div>
    <div class="timeline-line">
      <div class="circle-out">
        <div class="circle-in"></div>
      </div>
      <div class="line"></div>
    </div>
    <router-link class="guitar-show-detail" :to="urlShow">
      <div class="guitar-show-photo">
        <img :src="banner" :alt="show" />
      </div>
      <div class="line-break"></div>
      <div class="guitar-show-presentation">
        <div class="guitar-show-name">
          {{ show }}
        </div>
        <div class="guitar-show-location">
          Địa Điểm : Nhà Hát Lớn Thành Phố Hà Nội
        </div>
        <div class="guitar-show-artist">Nghệ sĩ : {{ artist }}</div>
        <div class="guitar-show-price">
          Giá Vé Chỉ Từ {{ modifiedPrice }} VND
        </div>
        <div class="guitar-show-moreDetail">Chi Tiết</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { separator1000 } from "../../utils/common";

export default {
  props: ["id", "time", "artist", "price", "show", "banner"],
  setup(props) {
    const modifiedPrice = computed(() => {
      return separator1000(props.price);
    });
    const timeConfig = computed(() => {
      const getTime = new Date(props.time);
      const month = getTime.getMonth() + 1;
      const date = getTime.getDate();
      return { month, date };
    });
    const urlShow = computed(() => {
      const url = `guitar-show/${props.id}`;
      return url;
    });

    return { modifiedPrice, timeConfig, urlShow };
  },
};
</script>

