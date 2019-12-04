<template>
  <div class="food-imgs">
    <swiper @change="handleChange">
      <swiper-item v-for="(img, index) of imgs" :key="index">
        <img src="" :style="{ background: img.background }" />
      </swiper-item>
    </swiper>
    <div class="dots">
      <div
        :class="dot.isSelect ? 'dot-active' : 'dot'"
        v-for="(dot, index) of imgs"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgs"],
  methods: {
    handleChange(e) {
      let index = e.mp.detail.current;
      for (var i of this.imgs) {
        i.isSelect = false;
      }
      this.imgs[index].isSelect = true;
    }
  }
};
</script>

<style scoped>
/* 轮播 */
.food-imgs {
  height: 670rpx;
  width: 670rpx;
  margin-top: 30rpx;
  margin-bottom: 30rpx;
  position: relative;
}
swiper {
  width: 100%;
  height: 100%;
}

swiper-item > img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  /* background: #000000; */
}
.dots {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translateX(-50%);
}
.dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #efefef;
  margin-right: 4rpx;
}
.dot-active {
  width: 30rpx;
  height: 10rpx;
  background: #723aff;
  border-radius: 16rpx;
  margin-right: 4rpx;
}
</style>
