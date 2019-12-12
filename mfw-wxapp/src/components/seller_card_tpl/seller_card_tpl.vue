<template>
  <scroll-view class="seller-cards">
    <div class="seller-card" v-for="(card, index) of cards" :key="index" @tap="goShopDetail(index)">
      <img class="seller-card-logo" src="../../../static/home/qxc.png" />
      <div class="seller-card-detail">
        <header class="seller-card-name">{{card.name}}</header>
        <div class="seller-card-data">
          <span>
            <img class="star" src="../../../static/icons/star.png" />
            <span class="level">{{card.level}}</span>
            <span class="count">月售{{card.count}}</span>
          </span>
          <span class="distance">{{card.distance}}km</span>
        </div>
        <div class="seller-card-prices">
          <span class="q-price">起送￥{{card.qprice}}</span>
          <span class="p-price">配送￥{{card.pprice}}</span>
        </div>
        <div class="coupon-price">
          <div class="coupon" v-for="(coupon, idx) of card.coupons" :key="idx">{{coupon.text}}</div>
        </div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
export default {
  props: ["cards"],
  methods: {
    goShopDetail(index) {
      console.log(index);
      wx.navigateTo({
        url:"../home_subpage/shop_detail/main"
      })
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.seller-cards {
  margin-top: 40rpx;
}
.seller-card {
  display: flex;
  align-items: flex-start;
  padding: 0 30rpx 40rpx 10rpx;
}
.seller-card-logo {
  width: 144rpx;
  height: 144rpx;
  margin-right: 16rpx;
  flex-shrink: 0;
}
.seller-card-detail {
  flex: 1;
}
.seller-card-name {
  font-size: 34rpx;
  font-weight: bold;
  color: #353535;
}
.seller-card-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rpx 0;
}
.star {
  width: 16rpx;
  height: 16rpx;
  margin-right: 4rpx;
}
.level,
.count,
.distance {
  font-size: 22rpx;
  color: #353535;
  margin-right: 24rpx;
}
.seller-card-prices {
  display: flex;
  align-content: center;
}
.q-price,
.p-price {
  font-size: 26rpx;
  color: #353535;
  margin-right: 22rpx;
}
.coupon-price {
  margin-top: 24rpx;
  display: flex;
  align-items: center;
}
.coupon {
  padding: 0 22rpx;
  border: 2rpx solid #ffab3a;
  border-radius: 6rpx;
  font-size: 20rpx;
  color: #ffab3a;
  margin-right: 12rpx;
}
</style>