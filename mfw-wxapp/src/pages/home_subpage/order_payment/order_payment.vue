<template>
  <div class="container">
    <div class="header">
      <span>订单配送至</span>
      <div>选择收货地址<img src="../../../../static/icons/right.png" /></div>
    </div>
    <div class="top-box">
      <div class="tb-modal">
        <label>送达时间</label>
        <div class="txt">尽快送达(17:45送达)</div>
      </div>
      <div class="tb-modal">
        <label>支付方式</label>
        <div class="txt">微信支付</div>
      </div>
    </div>
    <div class="food-box">
      <header>粉之都(云景路店)</header>
      <div class="food-list">
        <div class="food-item">
          <div class="food-detail">
            <img src="" />
            <div class="fd-cont">
              <div class="fd-txt1">小姐姐套餐-2两</div>
              <div class="fd-txt2">x2</div>
            </div>
          </div>
          <div class="fd-txt2">￥10</div>
        </div>
        <div class="food-item">
          <div class="food-detail">
            <img src="" />
            <div class="fd-cont">
              <div class="fd-txt1">小姐姐套餐-2两</div>
              <div class="fd-txt2">x2</div>
            </div>
          </div>
          <div class="fd-txt2">￥10</div>
        </div>
      </div>
      <div class="price-list">
        <div class="pl_txt">
          <span>包装费</span>
          <span class="pl_txt1">￥2</span>
        </div>
        <div class="pl_txt">
          <span>配送费</span>
          <span class="pl_txt1">￥2</span>
        </div>
      </div>
      <div class="gift">
        <span>红包</span>
        <span class="g_txt">暂无可用</span>
      </div>
      <div class="payment">
        <span class="p_txt">小计</span>
        <span class="p_txt1">￥33.5</span>
      </div>
    </div>
    <div class="other">
      <div class="o_txt">
        <label>餐具份数</label>
        <div>
          <span>未选则</span>
          <img src="../../../../static/icons/right.png" />
        </div>
      </div>
      <div class="o_txt">
        <label>备注</label>
        <div @tap="goOrderPaymentAttach">
          <span>口味、偏好等要求</span>
          <img src="../../../../static/icons/right.png" />
        </div>
      </div>
      <div class="o_txt">
        <label>发票信息</label>
        <div>
          <span>暂不支持开具发票</span>
          <img src="../../../../static/icons/right.png" />
        </div>
      </div>
    </div>
    <div class="bottom-btn">
      <div class="bb-price">
        <span class="bb_txt">共计</span>
        <span>￥33.5</span>
      </div>
      <div class="go-pay">去支付</div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goOrderPaymentAttach() {
            wx.navigateTo({
                url:'../order_payment_attach/main'
            })
        },
    },
};
</script>

<style scoped>
.container {
  position: relative;
  background: #f9f9f9;
}
.header {
  color: #353535;
  padding: 32rpx 52rpx 0;
}
.header > span {
  font-size: 26rpx;
}
.header > div {
  font-size: 40rpx;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 8rpx;
}
.header > div > img {
  width: 40rpx;
  height: 40rpx;
}
.top-box {
  margin: 20rpx;
  background: #fff;
  border-radius: 16rpx;
  padding: 0 32rpx;
}
.tb-modal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18rpx 0;
  border-bottom: 2rpx solid #ededed;
  font-size: 26rpx;
}
.tb-modal:last-child {
  border-bottom: none;
}
.tab-modal > label {
  color: #353535;
}
.txt {
  color: #723aff;
}
.food-box {
  margin: 20rpx;
  background: #fff;
  border-radius: 16rpx;
  padding: 0 32rpx;
}
.food-box > header {
  font-size: 32rpx;
  padding: 28rpx 0 14rpx;
  border-bottom: 2rpx solid #ededed;
}
.food-list {
}
.food-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34rpx 0;
  border-bottom: 2rpx solid #ededed;
}
.food-detail {
  flex: 1;
  display: flex;
  align-items: center;
}
.food-detail > img {
  width: 64rpx;
  height: 64rpx;
  margin-right: 16rpx;
  color: #353535;
  background: #723aff;
}
.fd-txt1 {
  font-size: 26rpx;
  margin-bottom: 10rpx;
}
.fd-txt2 {
  font-size: 22rpx;
}
.price-list {
  padding: 16rpx 0;
  border-bottom: 2rpx solid #ededed;
}
.pl_txt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #353535;
  padding-bottom: 12rpx;
  font-size: 26rpx;
}

.pl_txt1 {
  font-size: 22rpx;
}
.gift {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26rpx 0;
  border-bottom: 2rpx solid #ededed;
  font-size: 26rpx;
  color: #353535;
}
.g_txt {
  color: #b2b2b2;
}
.payment {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: #723aff;
  padding: 26rpx 0;
}
.p_txt {
  font-size: 20rpx;
}
.p_txt1 {
  font-size: 26rpx;
}
.other {
  margin: 20rpx;
  background: #fff;
  border-radius: 16rpx;
  padding: 12rpx 32rpx;
}
.o_txt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26rpx;
  padding: 10rpx 0;
  border-bottom: 2rpx solid #ededed;
}
.o_txt:last-child {
  border-bottom: none;
}
.o_txt > label {
  color: #353535;
}
.o_txt > div {
  display: flex;
  align-items: center;
  color: #b2b2b2;
}
.o_txt > div > img {
  width: 26rpx;
  height: 26rpx;
}
.bottom-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72rpx;
  line-height: 72rpx;
  display: flex;
  align-items: center;
  background: #fff;
}
.bb-price {
  color: #723aff;
  font-size: 40rpx;
  margin-left: 60rpx;
  width: 68%;
}
.bb_txt {
  font-size: 28rpx;
}
.go-pay {
  width: 32%;
  background: #723aff;
  color: #fff;
  height: 100%;
  text-align: center;
  font-size: 36rpx;
  font-weight: bold;
}
</style>
