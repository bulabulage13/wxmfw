<template>
  <div class="container">
    <!-- 商品简介 -->
    <div class="shop-intro">
      <header>Cheney kitchen</header>
      <div class="shop-level">
        <div class="shop-level_star">
          <img src="../../../../static/icons/star.png" alt="" />
          <img src="../../../../static/icons/star.png" alt="" />
          <img src="../../../../static/icons/star.png" alt="" />
          <img src="../../../../static/icons/star.png" alt="" />
          <img src="../../../../static/icons/star.png" alt="" />
        </div>
        <div class="shop-level_txt">5.0</div>
      </div>
      <div class="shop-intro_img">
        <!-- next-margin -->
        <swiper
          display-multiple-items="2.5"
          next-margin="120rpx"
          previous-margin="40rpx"
        >
          <swiper-item>
            <img src="../../../../static/banner/shop.png" alt="" />
          </swiper-item>
          <swiper-item>
            <img src="../../../../static/banner/shop.png" alt="" />
          </swiper-item>
          <swiper-item>
            <img src="../../../../static/banner/shop.png" alt="" />
          </swiper-item>
          <swiper-item>
            <img src="../../../../static/banner/shop.png" alt="" />
          </swiper-item>
        </swiper>
      </div>
      <ul class="shop-intro_list">
        <li class="shop-intro_item">
          <img src="../../../../static/icons/star.png" alt="" />
          <span>营业时间11:00——22:00</span>
        </li>
        <li class="shop-intro_item">
          <img src="../../../../static/icons/star.png" alt="" />
          <span>营业时间11:00——22:00</span>
        </li>
        <li class="shop-intro_item">
          <img src="../../../../static/icons/star.png" alt="" />
          <span>营业时间11:00——22:00</span>
        </li>
        <li class="shop-intro_item">
          <img src="../../../../static/icons/star.png" alt="" />
          <span>营业时间11:00——22:00</span>
        </li>
      </ul>
      <div class="shop-type">
        <div class="w">外</div>
        <div class="shop-type_txt">外卖 ></div>
      </div>
    </div>
    <!-- 堂食套餐 -->
    <div class="ts">
      <div class="ts-item" @tap="goFoodDetail">
        <img src="" />
        <div class="ts-item_intro">
          <header>套餐名称</header>
          <div class="time">
            <span></span>
            <span></span>
          </div>
          <div class="price">
            <span class="curr-price">￥</span>
            <span class="cost-price">￥</span>
          </div>
        </div>
      </div>
      <div class="ts-item">
        <img src="" />
        <div class="ts-item_intro">
          <header>套餐名称</header>
          <div class="time">
            <span></span>
            <span></span>
          </div>
          <div class="price">
            <span class="curr-price">￥</span>
            <span class="cost-price">￥</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 精选评论 -->
    <div class="commont">
      <header>
        <div class="commont-count">精选评论()</div>
        <div class="">></div>
      </header>
      <section class="commont-item">
        <header>
          <div class="user">
            <img src="" alt="" />
            <div class="user-name">催景博</div>
          </div>
          <div class="date"></div>
        </header>
        <div class="commont-item_cont">
          的撒范德萨的撒范德萨啊分撒的撒旦的撒范德萨的撒范德萨啊分撒的撒旦的撒范德萨的撒范德萨啊分撒的撒旦的撒范德萨的撒范德萨啊分撒的撒旦
        </div>
      </section>
    </div>
    <!-- 底部btn -->
    <div class="btn-discuss">发表点评</div>
  </div>
</template>

<script>
export default {
  data() {},
  mounted() {
    wx.setNavigationBarTitle({
      title: "Cheney kitchen"
    });
  },
  methods:{
    goFoodDetail(){
      wx.navigateTo({
        url:'../shop_food_detail/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f5f5f5;
}
.shop-intro {
  margin-bottom: 8rpx;
  background: #fff;
}
.shop-intro > header {
  font-size: 40rpx;
  font-weight: bold;
  color: #353535;
  margin-bottom: 10rpx;
  padding: 0 40rpx;
}
.shop-level {
  display: flex;
  align-items: center;
  padding: 0 40rpx;
}
.shop-level_star > img {
  width: 24rpx;
  height: 24rpx;
  margin-right: 4rpx;
}
.shop-level_txt {
  font-size: 28rpx;
  color: #000000;
  margin-left: 2rpx;
}
.shop-intro_img {
  height: 192rpx;
  margin: 28rpx 0;
}
/* 滚动图 */
.shop-intro_img > swiper {
  height: 100%;
}
swiper-item {
  height: 100%;
  padding-right: 40rpx;
}
swiper-item > img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
/* 列表 */
.shop-intro_list {
  padding: 0 40rpx;
  background: #fff;
}
.shop-intro_item {
  padding: 10rpx 0;
  border-bottom: 2rpx solid #ededed;
  color: #353535;
  font-size: 26rpx;
}
.shop-intro_item > img {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
}
.shop-type {
  padding: 20rpx 40rpx;
  display: flex;
  align-items: center;
}
.w {
  font-size: 18rpx;
  color: #ffffff;
  padding: 6rpx;
  background: #723aff;
  border-radius: 6rpx;
  margin-right: 16rpx;
}
.shop-type_txt {
  font-size: 26rpx;
  color: #353535;
}
/* 堂食套餐 */
.ts {
  background: #fff;
  padding: 0 40rpx;
  margin-bottom: 16rpx;
}
.ts-item {
  display: flex;
  align-items: center;
  padding: 32rpx 0 20rpx;
  border-bottom: 2rpx solid #ededed;
}
.ts-item:last-child {
  border-bottom: none;
}
.ts-item > img {
  width: 140rpx;
  height: 140rpx;
  margin-right: 20rpx;
  background: #eee;
  flex-shrink: 0;
}
.ts-item_intro {
  background: #eee;
  flex: 1;
}
.ts-item_intro > header {
  font-size: 32rpx;
  color: rgba(53, 53, 53, 1);
}
.time {
  font-size: 26rpx;
  color: #b2b2b2;
  margin: 24rpx 0 6rpx 0;
  background: #eee;
}
.price {
  display: flex;
  align-items: center;
  background: #eee;
}
.curr-price {
  color: #723aff;
  font-size: 34rpx;
  margin-right: 34rpx;
}
.cost-price {
  font-size: 26rpx;
  color: #b2b2b2;
  text-decoration: line-through;
}
/* 精选评论 */
.commont {
  padding: 0 40rpx;
  background: #fff;
  margin-bottom: 88rpx;
}
.commont > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 0 12rpx;
  border-bottom: 2rpx solid #ededed;
  background: #eee;
}
.commont-count {
  font-size: 32rpx;
  color: #353535;
}
.commont-item {
  padding: 26rpx 0 18rpx;
  border-bottom: 2rpx solid #ededed;
}
.commont-item > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  display: flex;
  align-items: center;
}
.user > img {
  width: 64rpx;
  height: 64rpx;
  margin-right: 14rpx;
  background: #eee;
}
.user-name {
  font-size: 28rpx;
  color: #ffab3a;
}
.date {
  width: 102rpx;
  height: 32rpx;
  line-height: 32rpx;
  font-size: 22rpx;
  color: #b2b2b2;
  background: #eee;
}
.commont-item_cont {
  margin-left: 78rpx;
  font-size: 26rpx;
  color: #353535;
  background: #eee;
  flex-wrap: wrap;
}
.btn-discuss {
  height: 72rpx;
  background: #723aff;
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 72rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
