<template>
  <div class="shop-list">
    <div class="shop-card" v-for="(shop, index) of shops" :key="index" @tap="goShopDetailPage(index)">
      <img :src="shop.logo" alt />
      <div class="shop-box">
        <div class="shop-title">
          <span class="shop-name">{{shop.name}}</span>
          <div class="shop-type wai" v-if="shop.type == 1 || shop.type == 0">外</div>
          <div class="shop-type tuan" v-if="shop.type == 2 || shop.type == 0">团</div>
        </div>
        <div class="shop-addr">
          <img src="../../../static/icons/location_1.png" alt />
          <span>{{shop.addr}}</span>
        </div>
        <div class="shop-box_bottom">
          <div class="shop-call">
            <img src="../../../static/icons/phone.png" alt />
            <span>{{shop.phone}}</span>
          </div>
          <div class="shop-distance">{{shop.distance}}km</div>
        </div>
        <div class="shop-level">
          <img src="../../../static/icons/star.png" alt />
          <span>{{shop.level}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shops"],
  methods: {
    goShopDetailPage(index) {
      wx.navigateTo({
        url:'../home_subpage/shop_detail_tuan/main'
      })
    },
  },
};
</script>
<style scoped>
.shop-list {
  margin: 20rpx 40rpx;
  padding-bottom: 20rpx;
}
.shop-card {
  background: #fff;
  padding: 32rpx 24rpx 28rpx 8rpx;
  box-shadow: 0px 1px 7px #afafaf29;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  margin-bottom: 22rpx;
}
.shop-card > img {
  width: 128rpx;
  height: 128rpx;
  border-radius: 20rpx;
  background: #a73b3b;
  margin-right: 24rpx;
  flex-shrink: 0;
}
.shop-box {
  position: relative;
  flex: 1;
  box-sizing: border-box;
}
.shop-title {
  display: flex;
  align-items: center;
}
.shop-name {
  font-size: 34rpx;
  color: #353535;
  margin-right: 18rpx;
  font-weight: 500;
}
.shop-type {
  width: 30rpx;
  height: 30rpx;
  line-height: 30rpx;
  text-align: center;
  border-radius: 6rpx;
  color: #fff;
  font-size: 18rpx;
  margin-right: 8rpx;
}
.wai {
  background: #723aff;
}
.tuan {
  background: #ffab3a;
}
.shop-box_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop-addr,
.shop-call {
  display: flex;
  align-items: center;
}
.shop-addr {
  margin: 10rpx 0 6rpx;
}
.shop-addr > img,
.shop-call > img {
  width: 30rpx;
  height: 30rpx;
  margin-right: 8rpx;
}
.shop-addr span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 442rpx;
}
.shop-addr span,
.shop-call span {
  font-size: 26rpx;
  color: #888888;
}
.shop-distance {
  font-size: 26rpx;
  color: #888888;
}
.shop-level {
  display: flex;
  align-items: center;
  position: absolute;
  top: -24rpx;
  right: 0rpx;
}
.shop-level img {
  width: 15rpx;
  height: 15rpx;
  margin-right: 10rpx;
}
.shop-level span {
  font-size: 26rpx;
  color: rgba(136, 136, 136, 1);
}
</style>