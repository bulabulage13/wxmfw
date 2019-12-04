<template>
  <div class="container">
    <div class="shop-summary">
      <div class="ss-top">
        <img src="../../../../static/home/sbp.png" />
        <div class="ss-detail">
          <div class="shop-name">姑奶奶糯米饭</div>
          <div class="shop-time">
            <img src="" />
            <span>配送约43分钟</span>
          </div>
          <div class="notice">
            公告：亲们，欢迎来到姑奶奶的糯米饭店，我们一定竭尽什么什么什么
          </div>
        </div>
      </div>
      <div class="ss-coupon">
        <div class="coupon">25减4</div>
        <div class="coupon">25减4</div>
        <div class="coupon">25减4</div>
      </div>
    </div>
    <div class="shop-content">
      <div class="sel-tabbars">
        <div class="tabbars">
          <div class="active">外卖</div>
          <div>外卖</div>
          <div>外卖</div>
        </div>
        <div class="to-search">
          <img src="../../../../static/icons/search.png" />
          <label>搜索</label>
        </div>
      </div>
      <div class="shop-box">
        <scroll-view class="sb-left" scroll-y="true">
          <ul class="food-types">
            <li class="food-type">类型</li>
            <li class="food-type">类型</li>
            <li class="food-type">类型</li>
            <li class="food-type">类型</li>
            <li class="food-type">类型</li>
          </ul>
        </scroll-view>
        <scroll-view class="sb-right" scroll-y="true">
          <div class="food-content">
            <header>奶奶的套餐</header>
            <ul class="foods-list">
              <li class="food" @tap="goWmDetailPage">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food" @tap="goTgDetailPage">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
              <li class="food">
                <img src="../../../../static/home/bj.png" />
                <div class="food-detail">
                  <div class="food-name">经典糯米饭</div>
                  <div class="food-txt">秘制扣肉糯米饭什么什么什么什么的</div>
                  <div class="food-txt">月售 25</div>
                  <div class="food-price">￥<span>19.99</span></div>
                  <div class="food-add"><img src="" /></div>
                </div>
              </li>
            </ul>
          </div>
        </scroll-view>
      </div>
    </div>
    <div class="shop-bottom">
      <img src="" />
      <div class="s-left">另需配送费￥4</div>
      <div class="s-right">20元起送</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goWmDetailPage() {
      wx.navigateTo({
        url: "../shop_food_detail_wm/main"
      });
    },
    goTgDetailPage() {
      wx.navigateTo({
        url: "../shop_food_detail_tg/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
}
.shop-summary {
  position: fixed;
  top: 0;
  height: 240rpx;
  background: #723aff;
  color: #fff;
  z-index: 999;
}
.ss-top {
  display: flex;
  align-items: center;
  padding: 18rpx 24rpx;
}
.ss-top > img {
  flex-shrink: 0;
  width: 132rpx;
  height: 132rpx;
  border-radius: 50%;
  margin-right: 18rpx;
}
.ss-detail {
  flex: 1;
}
.shop-name {
  font-size: 34rpx;
  font-weight: bold;
}
.shop-time {
  display: flex;
  align-items: center;
  margin: 10rpx 0;
}
.shop-time > img {
  width: 24rpx;
  height: 24rpx;
  background: red;
}
.shop-time > span {
  font-size: 22rpx;
}
.notice {
  font-size: 22rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 550rpx;
}
.ss-coupon {
  display: flex;
  align-items: center;
  padding: 20rpx 40rpx 0;
}
.coupon {
  padding: 0 10rpx;
  font-size: 22rpx;
  margin-right: 12rpx;
  background: #ffab3a;
  border-radius: 6rpx;
}

/* tabbar */

.shop-content {
  margin-top: 240rpx;
  position: relative;
}
.sel-tabbars {
  position: fixed;
  top: 240rpx;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2rpx solid #d2d2d2;
  z-index: 999;
  background: #fff;
}
.tabbars {
  flex: 1;
  display: flex;
  align-items: center;
}
.tabbars > div {
  height: 62rpx;
  width: 166rpx;
  line-height: 62rpx;
  text-align: center;
  font-size: 28rpx;
  color: #888;
}
.tabbars > div.active {
  position: relative;
  color: #353535;
}
.active::after {
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -32rpx;
  bottom: 2rpx;
  width: 64rpx;
  height: 4rpx;
  background: #723aff;
}
.to-search {
  display: flex;
  align-items: center;
  padding: 8rpx 20rpx;
  margin-right: 28rpx;
  border-radius: 30rpx;
  background: #d2d2d2;
}
.to-search > img {
  width: 28rpx;
  height: 28rpx;
  margin-right: 14rpx;
}
.to-search > label {
  font-size: 22rpx;
  color: rgba(185, 185, 185, 1);
}

/* 左边 */

.shop-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 62rpx;
  margin-bottom: 72rpx;
}
.sb-left {
  width: 166rpx;
  flex-shrink: 0;
  background: #f0f0f0;
  font-size: 28rpx;
  color: #353535;
  text-align: center;
  overflow-y: auto;
  height: 100vh;
  position: fixed;
  top: 304rpx;
}
.food-types {
}
.food-type {
  padding: 30rpx 40rpx;
}
/* 右边 */
.sb-right {
  flex: 1;
  margin-left: 166rpx;
}
.food-content {
  padding: 30rpx 26rpx;
}
.food-content > header {
  font-size: 28rpx;
  color: #353535;
  margin-bottom: 10rpx;
}
.food-list {
}
.food {
  display: flex;
  align-items: center;
  margin-bottom: 46rpx;
}
.food > img {
  flex-shrink: 0;
  width: 172rpx;
  height: 172rpx;
  margin-right: 12rpx;
}
.food-detail {
  flex: 1;
  position: relative;
}
.food-name {
  font-size: 28rpx;
  color: #353535;
  font-weight: bold;
}
.food-txt {
  color: #b2b2b2;
  font-size: 22rpx;
  width: 336rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.food-price {
  font-size: 18rpx;
  color: #723aff;
  margin-top: 18rpx;
}
.food-price > span {
  font-size: 36rpx;
}
.food-add {
  position: absolute;
  right: 46rpx;
  bottom: 0;
}
.food-add > img {
  width: 32rpx;
  height: 32rpx;
  background: #723aff;
}

/* 底部 */
.shop-bottom {
  display: flex;
  align-items: center;
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.shop-bottom > img {
  position: absolute;
  height: 96rpx;
  width: 84rpx;
  background: #ffab3a;
  bottom: 0;
  left: 40rpx;
}
.s-left {
  width: 70%;
  height: 100%;
  background: #723aff;
  font-size: 26rpx;
  color: #b395ff;
  text-align: center;
}
.s-right {
  width: 30%;
  height: 100%;
  background: #ffab3a;
  font-size: 32rpx;
  color: #ffe5c3;
  text-align: center;
}
</style>
