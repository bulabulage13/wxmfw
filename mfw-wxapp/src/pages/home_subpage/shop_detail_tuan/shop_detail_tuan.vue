<template>
  <div class="container">
    <!-- 商品简介 -->
    <div class="shop-intro">
      <header>{{ shopDetail.name }}</header>
      <div class="shop-level">
        <div class="shop-level_star">
          <img
            v-for="(s, index) of shopDetail.stars"
            :key="index"
            src="../../../../static/icons/level.png"
          />
        </div>
        <div class="shop-level_txt">{{ shopDetail.stars }}</div>
      </div>
      <div class="shop-intro_img">
        <!-- next-margin -->
        <swiper
          display-multiple-items="2"
          next-margin="120rpx"
          previous-margin="40rpx"
        >
          <swiper-item v-for="(b, index) of shopDetail.imgs" :key="index">
            <img :src="b" />
          </swiper-item>
        </swiper>
      </div>
      <ul class="shop-intro_list">
        <li class="shop-intro_item">
          <img src="../../../../static/icons/time.png" alt="" />
          <span>{{ shopDetail.time }}</span>
        </li>
        <li class="shop-intro_item">
          <img src="../../../../static/icons/s_loc.png" alt="" />
          <span>{{ shopDetail.addr }}</span>
        </li>
        <li class="shop-intro_item">
          <img src="../../../../static/icons/p.png" alt="" />
          <span>{{ shopDetail.phone }}</span>
        </li>
      </ul>
      <div class="shop-type">
        <div class="w">外</div>
        <div class="shop-type_txt">外卖 ></div>
      </div>
    </div>
    <!-- 堂食套餐 -->
    <div class="ts">
      <div
        class="ts-item"
        v-for="(wm, index) of shopDetail.wms"
        :key="index"
        @tap="goFoodDetail"
      >
        <img :src="wm.img" />
        <div class="ts-item_intro">
          <header>{{ wm.name }}</header>
          <div class="time">
            <span>{{ wm.time }}</span>
            <span>免预约</span>
          </div>
          <div class="price">
            <span class="curr-price">￥{{ wm.nowPrice }}</span>
            <span class="cost-price">￥{{ wm.oldPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 精选评论 -->
    <div class="commont">
      <header>
        <div class="commont-count">精选评论(99)</div>
        <div class="">></div>
      </header>
      <section class="commont-item">
        <header>
          <div class="user">
            <img src="../../../../static/images/user.png" />
            <div class="user-name">催景博</div>
          </div>
          <div class="date">2019.07.03</div>
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
  data() {
    return {
      shopDetail: {
        imgs: [
          "../../../static/banner/shop.png",
          "../../../static/banner/shop.png",
          "../../../static/banner/shop.png",
          "../../../static/banner/shop.png",
          "../../../static/banner/shop.png"
        ],
        name: "Cheney kitchen",
        stars: 5.0,
        time: "11:00-22:00",
        addr: "长湖路天龙湾悦酒店1楼1层",
        phone: "18812351235",
        wms: [
          {
            name: "精致双人套餐",
            time: "周一至周五",
            oldPrice: "666",
            nowPrice: "555",
            img: "../../../static/home/mp.png"
          },
          {
            name: "精致双人套餐",
            time: "周一至周五",
            oldPrice: "666",
            nowPrice: "555",
            img: "../../../static/home/mp.png"
          }
        ]
      }
    };
  },
  mounted() {
    wx.setNavigationBarTitle({
      title: "Cheney kitchen"
    });
  },
  methods: {
    goFoodDetail() {
      wx.navigateTo({
        url: "../shop_food_detail/main"
      });
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
  display: flex;
  align-items: center;
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
  flex-shrink: 0;
}
.ts-item_intro {
  flex: 1;
}
.ts-item_intro > header {
  font-size: 32rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.time {
  font-size: 26rpx;
  color: #b2b2b2;
  margin: 24rpx 0 6rpx 0;
}
.price {
  display: flex;
  align-items: center;
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
  padding: 18rpx 40rpx;
  background: #fff;
  margin-bottom: 88rpx;
}
.commont > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 12rpx;
  border-bottom: 2rpx solid #ededed;
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
}
.user-name {
  font-size: 28rpx;
  color: #ffab3a;
}
.date {
  font-size: 22rpx;
  color: #b2b2b2;
}
.commont-item_cont {
  margin-left: 78rpx;
  font-size: 26rpx;
  color: #353535;
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
