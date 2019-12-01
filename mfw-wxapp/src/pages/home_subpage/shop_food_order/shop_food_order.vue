<template>
  <div class="container">
    <!-- 顶部 -->
    <div class="shop">
      <div class="shop-left">
        <img src="" />
        <div class="food-detial">
          <div class="food-name">Cheney kitchen精致双人套餐</div>
          <div class="food-time">
            <span>周一至周五</span>
            <div class="line"></div>
            <span>免预约</span>
          </div>
          <div class="food-intro">
            <span>随时退</span>
            <div class="line"></div>
            <span>过期自动退</span>
            <div class="line"></div>
            <span>到店吃</span>
          </div>
        </div>
      </div>
      <div class="price">￥500</div>
    </div>
    <!-- 当前位置 -->
    <div class="current-location">
      <header>当前位置</header>
      <div class="shop-loc">
        <div class="shop-name">Cheney kitchen</div>
        <div class="loc">
          <div class="distance">1.2km</div>
          <div class="line"></div>
          <div class="addr">
            南宁市青秀区长湖路天龙湾悦酒店1楼天龙湾悦酒店1楼
          </div>
          <img src="" />
        </div>
      </div>
    </div>
    <!-- 套餐详情 -->
    <div class="food">
      <header>套餐详情</header>
      <div class="food-list">
        <div class="food-item">
          <div class="food-item_box">
            <div class="food-name">澳洲安格斯牛排</div>
            <div class="food-count">(1份)</div>
          </div>
          <div class="food-price">￥500</div>
        </div>
        <div class="food-item">
          <div class="food-item_box">
            <div class="food-name">澳洲安格斯牛排</div>
            <div class="food-count">(1份)</div>
          </div>
          <div class="food-price">￥500</div>
        </div>
      </div>
    </div>
    <!-- 消费二维码 -->
    <div class="decode">
      <header>消费二维码</header>
      <div class="d-detail">
        <img src="" alt="" />
        <div class="d-code">消费码：2008 008 008</div>
        <div class="d-intro">向商家出示二维码扫描或填写核销码即可消费</div>
      </div>
    </div>
    <!-- 申请退款 -->
    <div class="refund-btn" @tap="goFoodRefund">
      申请退款
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goFoodRefund(){
      wx.navigateTo({
        url:'../shop_food_refund/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f1f1f1;
  height: auto;
  padding: 0 32rpx;
}
.shop {
  background: #ffffff;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 16rpx;
  margin-top: 32rpx;
  margin-bottom: 16rpx;
}
.shop-left {
  display: flex;
  align-items: center;
}
.shop-left > img {
  width: 128rpx;
  height: 128rpx;
  margin-right: 24rpx;
  flex-shrink: 0;
  background: #eee;
}
.food-detail {
  flex: 1;
}
.food-name {
  font-size: 26rpx;
  color: #353535;
}
.food-time {
  margin: 12rpx 0;
}
.food-time,
.food-intro {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  color: #888888;
}
.line {
  height: 24rpx;
  width: 2rpx;
  background: #888888;
  margin: 0 18rpx;
}
.price {
  font-size: 26rpx;
  color: #353535;
}
/* 当前位置 */
.current-location {
  background: #ffffff;
  border-radius: 8rpx;
  padding: 20rpx 16rpx 34rpx;
}
.current-location > header {
  padding-bottom: 10rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
.shop-loc {
  display: flex;
  flex-direction: column;
}
.shop-name {
  padding: 14rpx 0 10rpx;
  font-size: 26rpx;
  color: #353535;
}
.loc {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  color: #b2b2b2;
}
.loc > span {
  width: 2rpx;
  background: #b2b2b2;
  height: 24rpx;
  margin: 0 18rpx;
}
.loc > img {
  width: 40rpx;
  height: 40rpx;
  margin-left: 28rpx;
  flex-shrink: 0;
  background: #eee;
}
.addr {
  width: 452rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 套餐详情 */
.food {
  background: #fff;
  margin: 16rpx 0;
  border-radius: 8rpx;
}
.food > header {
  font-size: 28rpx;
  color: #353535;
  padding: 18rpx 0;
  margin: 0 10rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
.food-list {
  padding: 14rpx 10rpx 30rpx;
}
.food-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26rpx;
  color: #353535;
  margin-left: 12rpx;
}
.food-item_box {
  display: flex;
  align-items: center;
}
.food-count {
  font-size: 26rpx;
  color: #888888;
}
/* 消费二维码 */
.decode {
  background: #fff;
}
.decode > header {
  font-size: 28rpx;
  color: #353535;
  padding: 18rpx 0;
  margin: 0 10rpx;
  border-bottom: 2rpx solid #f1f1f1;
}
.d-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32rpx 0 24rpx;
}
.d-detail > img {
  width: 320rpx;
  height: 320rpx;
  background: #eee;
  margin-bottom: 8rpx;
}
.d-code {
  font-size: 28rpx;
  color: #353535;
  margin-bottom: 8rpx;
}
.d-intro {
  font-size: 28rpx;
  color: #888888;
}
/* 申请退款 */
.refund-btn {
  font-size: 32rpx;
  font-weight: bold;
  color: #353535;
  padding: 26rpx 0;
  text-align: center;
  background: #fff;
  margin-top: 16rpx;
  margin-bottom: 82rpx;
  border-radius: 8rpx;
}
</style>
