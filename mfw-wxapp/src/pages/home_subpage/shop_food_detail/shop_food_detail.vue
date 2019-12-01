<template>
  <div class="container">
    <header>
      <div class="sup">Cheney kitchen</div>
      <div class="sub">精致双人套餐</div>
    </header>
    <!-- 轮播图 -->
    <div class="food-imgs">
      <swiper @change="handleChange">
        <swiper-item v-for="(img, index) of imgs" :key="index">
          <img src="" :style="{ background: img.background }" />
        </swiper-item>
      </swiper>
      <div class="dots">
        <div
          :class="dot.isSelect ? 'dot-active' : 'dot'"
          v-for="(dot, index) of imgs"
          :key="index"
        ></div>
      </div>
    </div>
    <!-- 套餐介绍 -->
    <div class="food-intro">
      <header>套餐包含</header>
      <div class="food-cont">
        <div class="food-cont_item" v-for="(food, index) of foods" :key="index">
          <div class="food-name">
            <div class="name">·{{ food.name }}</div>
            <div class="count">({{ food.count }}份)</div>
          </div>
          <div class="food-price">￥{{ food.price }}</div>
        </div>
      </div>
    </div>
    <!-- 温馨提示 -->
    <div class="prompt">
      <header>温馨提示</header>
      <div class="valid-time">
        <header>有效期：</header>
        <div class="valid-time_cont">{{ prompt.validTime }}</div>
      </div>
      <div class="use-time">
        <header>有效时间 ：</header>
        <div class="use-time_cont">{{ prompt.useTime }}</div>
      </div>
      <div class="how-use">
        <header>使用规则：</header>
        <div
          class="how-use_cont"
          v-for="(p, index) of prompt.howToUse"
          :key="index"
        >
          {{ index + 1 }}.{{ p }}
        </div>
      </div>
    </div>
    <!-- 餐厅介绍 -->
    <div class="shop-intro">
      <header>餐厅介绍</header>
      <div class="shop-box">
        <img src="" alt="" />
        <div class="shop-detail">
          <div class="shop-name"></div>
          <div class="shop-level">
            <div class="shop-level_imgs">
              <img src="" alt="" />
            </div>
            <span></span>
          </div>
          <div class="work-time">
            <img src="" alt="" />
            <div class="work-time_txt"></div>
          </div>
          <div class="shop-loc">
            <img src="" alt="" />
            <div class="shop-loc_txt"></div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="pay">
        <div class="price">
          <div class="curr-price">￥300</div>
          <div class="cost-price">门市价格￥600</div>
        </div>
        <div class="pay-btn" @tap="goFoodOrder">
          立即抢购
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          background: "#ff00ff",
          isSelect: true
        },
        {
          background: "#fffff0",
          isSelect: false
        },
        {
          background: "#0000ff",
          isSelect: false
        },
        {
          background: "#fff000",
          isSelect: false
        },
        {
          background: "#ff000f",
          isSelect: false
        }
      ],
      foods: [
        {
          name: "澳洲安格斯M3级牛小排",
          count: 1,
          price: 388
        },
        {
          name: "澳洲安格斯M3级牛小排",
          count: 1,
          price: 388
        },
        {
          name: "澳洲安格斯M3级牛小排",
          count: 1,
          price: 388
        },
        {
          name: "澳洲安格斯M3级牛小排",
          count: 1,
          price: 388
        },
        {
          name: "澳洲安格斯M3级牛小排",
          count: 1,
          price: 388
        }
      ],
      prompt: {
        validTime: "2019.5.6至2019.8.4 23:59(周末、法定节假日通用)",
        useTime: "11:00-16:00",
        howToUse: [
          "团购用户不可同时享受商家其他优惠",
          "酒水饮料问题，请致电商家咨询，以商家反馈为准",
          "如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商",
          "店内无包间",
          "无需预约，消费高峰期可能需要等位",
          "每张优惠券建议2人使用",
          "商家提供免费WiFi",
          "停车位收费标准：详情咨询商家",
          "仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情请咨询商家"
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
    handleChange(e) {
      let index = e.mp.detail.current;
      for (var i of this.imgs) {
        i.isSelect = false;
      }
      this.imgs[index].isSelect = true;
    },
    goFoodOrder() {
      wx.navigateTo({
        url: "../shop_food_order/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
  padding: 20rpx 40rpx;
  height: auto;
}
.container > header {
  display: flex;
  flex-direction: column;
}
.sup {
  font-size: 26rpx;
  color: #888888;
}
.sub {
  font-size: 40rpx;
  font-weight: bottom;
  color: rgba(53, 53, 53, 1);
}
/* 轮播 */
.food-imgs {
  height: 670rpx;
  width: 670rpx;
  margin-top: 30rpx;
  margin-bottom: 30rpx;
  position: relative;
}
swiper {
  width: 100%;
  height: 100%;
}

swiper-item > img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  /* background: #000000; */
}
.dots {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translateX(-50%);
}
.dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #efefef;
  margin-right: 4rpx;
}
.dot-active {
  width: 30rpx;
  height: 10rpx;
  background: #723aff;
  border-radius: 16rpx;
  margin-right: 4rpx;
}
/* 套餐，提示，介绍 */
.food-intro > header,
.prompt > header,
.shop-intro > header {
  font-size: 36rpx;
  color: #353535;
  margin-bottom: 16rpx;
  background: #eee;
}
.food-cont {
  margin-bottom: 34rpx;
}
.food-cont_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.food-name {
  display: flex;
  align-items: center;
}
.name,
.food-price {
  font-size: 26rpx;
  color: #353535;
}
.count {
  color: #888888;
  font-size: 26rpx;
}
.prompt {
  margin-bottom: 34rpx;
}
.valid-time,
.use-time {
  display: flex;
  align-items: flex-start;
  /* flex-wrap: wrap; */
}
.valid-time > header,
.use-time > header,
.how-use > header {
  font-size: 26rpx;
  color: #353535;
  flex-shrink: 0;
}
.use-time_cont,
.how-use_cont,
.valid-time_cont {
  font-size: 26rpx;
  color: #353535;
}
.shop-intro {
}
.shop-box {
  display: flex;
  align-items: center;
}
.shop-box > img {
  width: 188rpx;
  height: 188rpx;
  margin-right: 38rpx;
  background: #eee;
  flex-shrink: 0;
}
.shop-detail {
  flex: 1;
}
.shop-name {
  font-size: 34rpx;
  color: rgba(53, 53, 53, 1);
  background: #eee;
}
.shop-level {
  display: flex;
  align-items: center;
}
.shop-level_imgs > img {
  width: 24rpx;
  height: 24rpx;
}
.shop-level > span {
  margin-left: 15rpx;
  font-size: 28rpx;
  color: #000000;
}
.work-time,
.shop-loc {
  display: flex;
  align-items: center;
}
.work-time_txt,
.shop-loc_txt {
  font-size: 13rpx;
  color: #353535;
}
.work-time > img,
.shop-loc > img {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  background: #eee;
}
/* 底部 */
.pay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48rpx;
}
.price {
  display: flex;
  flex-direction: column;
}
.curr-price {
  font-size: 40rpx;
  color: #754cff;
}
.cost-price {
  font-size: 22rpx;
  color: #888888;
}
.pay-btn {
  width: 272rpx;
  height: 72rpx;
  line-height: 72rpx;
  text-align: center;
  background: #754cff;
  box-shadow: 0px 1px 6px #754cff66;
  border-radius: 40rpx;
  font-size: 36rpx;
  color: #ffffff;
}
</style>
