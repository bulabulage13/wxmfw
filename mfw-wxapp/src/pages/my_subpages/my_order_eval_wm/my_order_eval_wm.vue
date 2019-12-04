<template>
  <div class="container">
    <div class="rider">
      <header>您对骑手满意吗？</header>
      <div class="wm-detail">
        <div class="wd-left">
          <img src="../../../../static/my/user.png" />
          <div class="wd-box">
            <div>买返屋配送</div>
            <div>8月7日13:55 左右到达</div>
          </div>
        </div>
        <div class="wd-right">匿名评价</div>
      </div>
      <div class="eval">
        <div class="eval-faces">
          <div class="eval-face">
            <img src="../../../../static/my/face_sm.png" alt="" />
            <div>不满意</div>
          </div>
          <div class="eval-face">
            <img src="../../../../static/my/face_fn.png" alt="" />
            <div class="face-active">满意</div>
          </div>
        </div>
        <div class="shortcuts">
          <div>风雨无阻</div>
          <div>热情礼貌</div>
          <div>货品完好</div>
          <div>仪表整洁</div>
          <div>快速准时</div>
        </div>
        <div class="eval-textarea">
          <textarea placeholder="写下您最中肯的评价吧~"></textarea>
        </div>
      </div>
    </div>
    <div class="shop">
      <header>您对商家/菜品满意吗？</header>
      <div class="shop-detail">
        <div class="sd-left">
          <img src="../../../../static/my/sw.png" alt="" />
          <div>西贝小面村(万象城店)</div>
        </div>
        <div class="sd-right">
          <img src="../../../../static/my/sel.png" />
          <div>匿名评价</div>
        </div>
      </div>
      <div class="stars-content">
        <div class="all-stars">
          <img src="../../../../static/my/star-active.png" />
          <img src="../../../../static/my/star-active.png" />
          <img src="../../../../static/my/star-active.png" />
          <img src="../../../../static/my/star-active.png" />
          <img src="../../../../static/my/star.png" />
        </div>
        <div class="stars">
          <span>质量</span>
          <div class="stars-box">
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
          </div>
          <span>很棒</span>
        </div>
        <div class="stars">
          <span>包装</span>
          <div class="stars-box">
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
            <img src="../../../../static/my/star.png" />
          </div>
          <span>很棒</span>
        </div>
      </div>
      <div class="shop-textarea">
        <textarea placeholder="写下您最中肯的评价吧~"></textarea>
      </div>
    </div>
    <div class="submit">提交评价</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  background: #f9f9f9;
}
.rider,
.shop {
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(136, 136, 136, 0.15);
  border-radius: 20rpx;
  padding: 0 24rpx 34rpx;
  margin: 28rpx 32rpx;
}
.shop {
  margin-top: 0;
  margin-bottom: 82rpx;
  padding-bottom: 54rpx;
}
.rider > header,
.shop > header {
  padding-top: 14rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  text-align: center;
}
.wm-detail,
.shop-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  margin: 24rpx 0;
}
.wd-left,
.sd-left {
  display: flex;
  align-items: center;
  font-size: 26rpx;
}
.wd-left > img {
  width: 80rpx;
  height: 80rpx;
  margin-right: 8rpx;
}
.sd-left > img {
  width: 64rpx;
  height: 64rpx;
  margin-right: 16rpx;
}
.wd-box,
.wd-right {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.wd-right {
  padding-right: 16rpx;
}
.sd-right {
  display: flex;
  align-content: center;
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.sd-right > img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 16rpx;
}
.sd-right > div {
  padding-right: 12rpx;
}
.eval {
}
.eval-faces {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 32rpx 0;
}
.eval-face {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 26rpx;
}
.eval-face > img {
  width: 56rpx;
  height: 56rpx;
  position: absolute;
  left: -28rpx;
  top: -8rpx;
  z-index: 9;
}
.eval-face > div {
  width: 152rpx;
  height: 40rpx;
  color: #353535;
  background: #f9f9f9;
  border-radius: 20rpx;
  text-align: center;
}
.eval-face > div.face-active {
  background: #723aff;
  color: #fff;
}
.shortcuts {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 22rpx;
  color: rgba(178, 178, 178, 1);
}
.shortcuts > div {
  padding: 4rpx 28rpx;
  border-radius: 20rpx;
  background: #f9f9f9;
  margin: 0 32rpx 12rpx;
}
.eval-textarea {
  border: 2rpx solid #d2d2d2;
  border-radius: 12rpx;
  background: #f9f9f9;
  font-size: 22rpx;
  padding: 18rpx 28rpx;
  height: 236rpx;
  margin-top: 40rpx;
}
textarea {
  width: 100%;
  height: 100%;
}
textarea::placeholder {
  color: #d2d2d2;
}

.stars-content {
  padding: 14rpx 0 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.all-stars,
.stars {
  display: flex;
  align-items: center;
}
.all-stars > img {
  width: 52rpx;
  height: 52rpx;
  margin-right: 26rpx;
}
.stars {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
  margin-top: 24rpx;
}
.stars > span {
  margin-right: 22rpx;
}
.stars-box {
  display: flex;
  align-items: center;
}
.stars-box > img {
  width: 30rpx;
  height: 30rpx;
  margin-right: 22rpx;
}
.shop-textarea {
  height: 236rpx;
  border: 2rpx solid #d2d2d2;
  background: #f9f9f9;
  border-radius: 12rpx;
  padding: 18rpx 28rpx;
  font-size: 22rpx;
}
.submit {
  position: absolute;
  bottom: 40rpx;
  left: 50%;
  margin-left: -168rpx;
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36rpx;
  color: #fff;
  text-align: center;
  font-weight: bold;
}
</style>
