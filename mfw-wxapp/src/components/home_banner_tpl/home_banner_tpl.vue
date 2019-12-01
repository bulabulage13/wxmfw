<template>
  <div class="adv-container">
    <swiper>
      <swiper-item>
        <img :src="bannerUrl" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  props:['bannerUrl']
};
</script>

<style scoped>
swiper {
  height: 106px;
}
/* 广告 */
.adv-container swiper {
  padding: 10rpx 32rpx;
}
.adv-container swiper swiper-item {
  height: 184rpx;
}
.adv-container swiper img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
</style>