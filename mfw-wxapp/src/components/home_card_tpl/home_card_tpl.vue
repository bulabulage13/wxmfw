<template>
  <div class="shop-list">
    <div class="shop-card" v-for="(item, index) of shops" :key="index">
      <div class="shop-title">
        <h3 class="shop-name">{{item.name}}</h3>
        <div class="shop-type">{{item.type == 1 ? '外':'团'}}</div>
        <img class="icon-delete" src="../../../static/icons/delete.png" />
      </div>
      <div class="shop-access">
        <div class="shop-access-box">
          <div class="shop-access-left">
            <span class="score">{{item.score}}分</span>
            <i></i>
            <span class="price">{{item.type == 1 ? '起送价￥' + item.price : '￥'+ item.price}}</span>
            <i v-if="item.type == 1"></i>
            <span class="isFree" v-if="item.type == 1">配送免费</span>
          </div>
          <div class="shop-distance">{{item.distance}}km</div>
        </div>
        <div class="shop-tag">
          <div class="tag">{{item.type == 1 ? '优惠' : '团购'}}</div>
          <div class="tag-txt">{{item.intro}}</div>
        </div>
        <div class="shop-goodses">
          <div class="shop-goods" v-for="(goods, idx) of item.goodses" :key="idx">
            <img class="shop-goods-img" :src="goods.url" alt />
            <span v-if="item.type == 1" class="goods-price">￥{{goods.price}}</span>
            <div v-if="item.type == 1" class="goods-name">{{goods.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shops"]
};
</script>

<style scoped>
/* 店铺列表 */
.shop-list{
  padding-bottom: 10px; 
}
.shop-card {
  margin: 32rpx;
  box-shadow: 0px 0px 8px #b2b2b240;
  border-radius: 20rpx;
}
.shop-title {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20rpx 28rpx 0;
}
.shop-name {
  font-size: 40rpx;
  color: #171717;
  margin-right: 32rpx;
}
.shop-type {
  padding: 4rpx 6rpx;
  background: #723aff;
  border-radius: 6rpx;
  font-size: 18rpx;
  color: #ffffff;
}
.move-shop {
  position: absolute;
  bottom: 0;
  right: 10rpx;
}
.icon-delete {
  position: absolute;
  right: 32rpx;
  bottom: 0;
  width: 32rpx;
  height: 32rpx;
}
.shop-access {
  padding: 0 28rpx 38rpx;
}
.shop-access-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rpx 0;
}
.shop-access-left {
  display: flex;
  align-items: center;
}
.shop-access-left i {
  width: 2rpx;
  height: 16rpx;
  background: #b2b2b2;
  margin: 0 12rpx;
}
.score {
  font-size: 26rpx;
  color: #ffab3a;
}
.price,
.isFree {
  font-size: 26rpx;
  color: #888888;
}
.shop-distance {
  font-size: 26rpx;
  color: #888888;
}
.shop-tag {
  display: flex;
  align-items: center;
}
.tag {
  padding: 2rpx 16rpx;
  background: #f54134;
  border-radius: 6rpx;
  color: #fff;
  font-size: 24rpx;
  margin-right: 20rpx;
  flex-shrink: 0;
}
.tag-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24rpx;
  color: #b2b2b2;
}
.shop-goodses {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 12rpx 0rpx 0;
}
.shop-goods {
  position: relative;
  text-align: center;
  margin-right: 16rpx;
}
.shop-goods-img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
}
.goods-price {
  position: absolute;
  bottom: 35px;
  left: 50%;
  margin-left: -44rpx;
  font-size: 28rpx;
  color: #ffffff;
}
.goods-name {
  margin-top: 12rpx;
  font-size: 26rpx;
  color: #353535;
}
</style>