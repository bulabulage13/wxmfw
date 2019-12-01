<template>
  <div class="container">
    <!-- 消费二维码 -->
    <div class="header">消费二维码</div>
    <div class="decode">
      <div class="decode-txt">6288 9789 4355</div>
      <div class="decode-box">
        <img src="" alt="" />
      </div>
    </div>
    <!-- 退还内容 -->
    <div class="header">退还内容</div>
    <div class="refund">
      <div class="refund-txt">现金：</div>
      <div class="refund-money">666元</div>
    </div>
    <!-- 现金退还方式 -->
    <div class="header">现金退还方式</div>
    <div class="how-refund">
      <div class="hr-txt">
        <span class="hr-txt_1">原路退回</span>
        <span class="hr-txt_2">(1-3个工作日内退款到原支付方)</span>
      </div>
      <div class="hr-box">
        <img src="" />
      </div>
    </div>
    <!-- 退款原因 -->
    <div class="header">退款原因 <span>(至少选一项)</span></div>
    <div class="why-refund">
      <div class="wr-item">
        <div class="wr-txt">预约不上</div>
        <div class="wr-box">
          <img src="" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部btn -->
    <div class="refund-btn" @tap="goFoodRefundDetail">
      申请退款
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goFoodRefundDetail(){
      wx.navigateTo({
        url: '../food_refund_detail/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f1f1f1;
  padding: 32rpx;
}
.header {
  font-size: 26rpx;
  font-weight: bold;
  color: #353535;
  margin-bottom: 16rpx;
}
/* 消费二维码 */
.decode {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8rpx;
  padding: 20rpx 32rpx;
  margin-bottom: 32rpx;
}
.decode-txt {
  font-size: 26rpx;
  color: #353535;
}
.decode-box > img {
  width: 36rpx;
  height: 36rpx;
  background: #723aff;
}
/* 退还内容 */
.refund {
  display: flex;
  align-items: center;
  padding: 20rpx 24rpx;
  background: #fff;
  border-radius: 8rpx;
  margin-bottom: 32rpx;
}
.refund-txt {
  font-size: 26rpx;
  color: #353535;
}
.refund-money {
  font-size: 26rpx;
  color: #723aff;
}
/* 现金退还方式 */
.how-refund {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 24rpx;
  background: #fff;
  margin-bottom: 32rpx;
  border-radius: 8rpx;
}
.hr-txt {
  display: flex;
  align-items: center;
}
.hr-txt_1 {
  color: #353535;
  font-size: 26rpx;
  margin-right: 13rpx;
}
.hr-txt_2 {
  color: #723aff;
  font-size: 22rpx;
}
.hr-box > img {
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
  background: #723aff;
}
/* 退款原因 */
.why-refund {
  background: #fff;
  border-radius: 8rpx;
}
.wr-item {
  padding: 16rpx 0 18rpx;
  margin: 0 12rpx 0 10rpx;
  border-bottom: 2rpx solid #d2d2d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wr-item:last-child {
  border-bottom: 0;
}
.wr-txt {
  font-size: 26rpx;
  color: #353535;
  margin-left: 14rpx;
}
.wr-box > img {
  width: 34rpx;
  height: 34rpx;
  border: 2rpx solid #b2b2b2;
  margin-right: 14rpx;
}
.wr-box-active {
  width: 34rpx;
  height: 34rpx;
  border: 2rpx solid #723AFF;
}
/* btn */
.refund-btn {
  width: 468rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 40rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: #ffffff;
  margin: 26rpx auto 32rpx;
}
</style>
