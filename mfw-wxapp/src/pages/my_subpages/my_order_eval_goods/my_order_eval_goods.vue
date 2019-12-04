<template>
  <div class="container">
    <div class="goods-box">
      <img src="../../../../static/home/bj.png" />
      <div class="stars">
        <img src="../../../../static/my/star-active.png" />
        <img src="../../../../static/my/star-active.png" />
        <img src="../../../../static/my/star-active.png" />
        <img src="../../../../static/my/star-active.png" />
        <img src="../../../../static/my/star-active.png" />
      </div>
      <div class="user">匿名评价</div>
    </div>
    <div class="goods-textarea">
      <img src="../../../../static/icons/write.png" />
      <textarea placeholder="写下您最中肯的评价吧"></textarea>
      <div class="num">/500</div>
    </div>
    <div class="submit">提交</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #f9f9f9;
  position: relative;
}
.goods-box {
  margin: 28rpx 32rpx 0;
  background: #fff;
  border-radius: 20rpx;
  box-shadow: 0px 1px 6px rgba(136, 136, 136, 0.15);
  display: flex;
  align-items: center;
}
.goods-box > img {
  width: 144rpx;
  height: 144rpx;
  margin: 16rpx 46rpx;
  background: #eee;
}
.stars {
  display: flex;
  align-items: center;
  padding-left: 36rpx;
  padding-right: 32rpx;
}
.stars > img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 18rpx;
}
.user {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
  padding-right: 22rpx;
}
.goods-textarea {
  position: relative;
  height: 684rpx;
  margin: 24rpx 32rpx;
  background: #fff;
  border-radius: 20rpx;
  padding: 24rpx;
  box-shadow: 0px 1px 6px rgba(136, 136, 136, 0.15);
  box-sizing: border-box;
}

.goods-textarea > img {
  position: absolute;
  width: 24rpx;
  height: 24rpx;
  top: 24rpx;
  left: 24rpx;
}
textarea {
  font-size: 22rpx;
  text-indent: 35rpx;
  width: 100%;
  height: 100%;
}
textarea::placeholder {
  color: rgba(178, 178, 178, 1);
  margin-left: 40rpx;
}
.num {
  position: absolute;
  right: 20rpx;
  bottom: 12rpx;
  font-size: 22rpx;
  color: rgba(178, 178, 178, 1);
}
.submit {
  position: absolute;
  bottom: 142rpx;
  left: 50%;
  width: 336rpx;
  height: 80rpx;
  margin-left: -168rpx;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36rpx;
  font-weight: bold;
  line-height: 80rpx;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}
</style>
