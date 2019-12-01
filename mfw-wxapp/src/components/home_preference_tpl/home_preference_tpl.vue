<template>
  <div class="selective-preference">
    <div class="selective-preference-title">
      <div class="super-title">为你优选</div>
      <div class="sub-title">更多 ></div>
    </div>
    <swiper class="selective-refrence-list" display-multiple-items="3">
      <swiper-item v-for="(item, index) of preferences" :key="index">
        <div class="selective-img">
          <img class="goods-img" :src="item.url" alt />
          <img class="goods-logo" :src="item.logo" alt />
        </div>
        <div class="goods-name">{{item.name}}</div>
        <div class="goods-reason">{{item.reason}}</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
    props:['preferences']
};
</script>

<style scoped>
/* 精选 */
.selective-preference {
  margin: 28rpx 0;
}
.selective-preference-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20rpx;
  padding: 0 32rpx;
}
.super-title {
  font-size: 36rpx;
  color: #171717;
}
.sub-title {
  font-size: 22rpx;
  color: #888888;
}
.selective-refrence-list {
  margin-left: 32rpx;
  height: 212rpx;
}
.selective-img {
  position: relative;
  width: 212rpx;
  height: 120rpx;
}
.goods-img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.goods-logo {
  position: absolute;
  bottom: -26rpx;
  left: 0;
  width: 92rpx;
  height: 92rpx;
}
.goods-name {
  margin-top: 20rpx;
  font-size: 28rpx;
  color: #171717;
}
.goods-reason {
  font-size: 22rpx;
  color: #888888;
}
</style>