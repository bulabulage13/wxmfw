<template>
  <div class="container">
    <div class="textarea">
      <textarea placeholder="填写额外对商家和骑手小哥的备注信息"></textarea>
      <span class="count">/50</span>
    </div>
    <div class="attach">
      <header>常见/快捷备注</header>
      <div class="attachs">
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
        <div class="att-box">多加葱</div>
      </div>
    </div>
    <div class="confirm">确定</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  background: #fff;
}
.textarea {
  margin: 20rpx 32rpx;
  background: #f9f9f9;
  border-radius: 12rpx;
  position: relative;
}
textarea {
  padding: 12rpx 16rpx;
  font-size: 26rpx;
}
textarea::placeholder {
  color: #b2b2b2;
}
.count {
  position: absolute;
  bottom: 12rpx;
  right: 10rpx;
  color: #b2b2b2;
  font-size: 22rpx;
}
.attach {
  margin: 4rpx 32rpx;
}
.attach > header {
  font-size: 26rpx;
  color: #dbdbdb;
  margin-bottom: 10rpx;
}
.attachs {
  display: flex;
  flex-wrap: wrap;
}
.att-box {
  padding: 6rpx 24rpx;
  font-size: 26rpx;
  color: #353535;
  border: 2rpx solid #b2b2b2;
  margin-right: 16rpx;
  margin-bottom: 16rpx;
}
.confirm {
  position: absolute;
  bottom: 140rpx;
  left: 50%;
  margin-left: -168rpx;
  width: 336rpx;
  height: 80rpx;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36rpx;
  font-weight: bold;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
}
</style>
