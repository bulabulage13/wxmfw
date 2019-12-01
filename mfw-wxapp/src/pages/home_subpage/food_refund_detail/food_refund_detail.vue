<template>
  <div class="container">
    <!-- top -->
    <div class="refund">
      <div class="refund-money">
        <div class="r_txt1">退款金额</div>
        <div class="r_txt2">888元</div>
      </div>
      <div class="refund-use">
        <div class="r_txt1">退回账户</div>
        <div class="r_txt1">微信支付帐户</div>
      </div>
      <div class="refund-time">
        <div class="r_txt1">到账时间</div>
        <div class="r_txt1">预计最晚2019年08月15日到账</div>
      </div>
    </div>
    <div class="refund-process">
      <header>退款流程</header>
      <div class="rp-box">
        <div class="rp-item">
          <div class="rp-circle"></div>
          <div class="rp-detail">
            <div class="rpd_txt1">时间</div>
            <div class="rpd_txt2">买返屋审核通过</div>
            <div class="rpd_txt3">586元的退款申请已提交至维修</div>
          </div>
        </div>
        <div class="rp-item">
          <div class="rp-circle"></div>
          <div class="rp-detail">
            <div class="rpd_txt1">时间</div>
            <div class="rpd_txt2">微信受理退款</div>
            <div class="rpd_txt3">您的退款已被微信受理</div>
          </div>
        </div>
        <div class="rp-item">
          <div class="rp-circle rp-circle-active"></div>
          <div class="rp-detail">
            <div class="rpd_txt1">时间</div>
            <div class="rpd_txt2">退款中</div>
            <div class="rpd_txt3">586元的退款正在原路返回您的支付端口，预计最晚2019年08月15日返还。</div>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #f1f1f1;
  padding: 0 32rpx;
}
.refund {
  background: #ffffff;
  border-radius: 8rpx;
  padding: 0 24rpx 24rpx;
  margin-top: 24rpx;
}
.refund-money {
  display: flex;
  align-items: center;
  padding-top: 16rpx;
}
.r_txt1 {
  font-size: 26rpx;
  color: #353535;
  margin-right: 40rpx;
}
.r_txt2 {
  font-size: 26rpx;
  color: #723aff;
}
.refund-use, .refund-time{
  display: flex;
  align-items: center;
}
.refund-use{
  margin: 16rpx 0;
}
.refund-process {
  background: #fff;
  border-radius: 8rpx;
  padding: 0 24rpx;
  margin-top: 24rpx;
}
.refund-process > header {
  font-size: 26rpx;
  color: #353535;
  border-bottom: 2rpx solid #D2D2D2;
  padding: 16rpx 0;
}
.rp-item {
  display: flex;
  /* align-items: center; */
  padding: 16rpx 0 40rpx;
}
.rp-circle {
  position: relative;
  width: 26rpx;
  height: 26rpx;
  margin-right: 16rpx;
  background: #723aff;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 39rpx;
}
.rp-circle::after{
  content: '';
  width: 2rpx;
  height: 160rpx;
  background: #723aff;
  position: absolute;
  top: 13rpx;
  left: 50%;
  margin-left: -1rpx;
  /* z-index: -1; */
}
.rp-circle-active {
  background: #ffab3a;
}
.rp-item:last-child>.rp-circle::after{
  width: 0;
}
.rp-detail {
}
.rpd_txt1 {
  font-size: 18rpx;
  color: #353535;
}
.rpd_txt2 {
  font-size: 26rpx;
  color: #723aff;
  margin: 8rpx 0;
}
.rpd_txt3 {
  font-size: 22rpx;
  color: rgba(53, 53, 53, 1);
}
</style>
