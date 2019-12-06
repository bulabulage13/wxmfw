<template>
  <div class="container">
    <FoodBanner :imgs="imgs"></FoodBanner>
    <div class="food">
      <div class="name">五谷杂粮粉</div>
      <div class="about">美味高汤+半只鸡蛋+牛肉+粉</div>
      <div class="price">￥<span>23</span></div>
      <div class="amount">
        <div>配送费2.5元</div>
        <div>月售：76</div>
      </div>
      <div class="styles">
        <div class="cont">
          <div class="s_txt1">规格</div>
          <div class="s_txt2">3两-吃的满足</div>
        </div>
        <div class="more" @tap="handleShowStyles">
          <div>选择更多</div>
          <img src="../../../../static/icons/right.png" />
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="evals">
      <header>
        <div class="s_txt1">评价(2)</div>
        <div class="all">
          <div>查看全部评价</div>
          <img src="../../../../static/icons/right.png" />
        </div>
      </header>
      <div class="eval">
        <img src="../../../../static/my/user.png" />
        <div class="eval-cont">
          <div class="user">
            <div class="uname">什么什么</div>
            <div class="time">2019.07.08</div>
          </div>
          <div class="eval-txt">这是评论内容</div>
        </div>
      </div>
    </div>
    <!-- 选择框 -->
    <div class="style-box" v-if="isShow">
      <div class="style-box-wrapper" @tap="isShow = false"></div>
      <div class="style-cont">
        <div class="food-box">
          <img src="../../../../static/home/dcs.png" />
          <div class="food-detial">
            <div class="fd_txt">五谷杂粮粉</div>
            <div class="fd_txt1">￥250</div>
            <div class="fd_txt2">已选数量：1件</div>
          </div>
        </div>
        <div class="food-style">
          <header>规格</header>
          <div class="fs-list">
            <div class="fs-item fs-item-active">3两-吃的满足</div>
            <div class="fs-item">2两-精致生活</div>
          </div>
        </div>
        <div class="food-count">
          <header>数量</header>
          <div class="fc-box">
            <div class="opts opts_left">-</div>
            <div class="count">1</div>
            <div class="opts opts_right txt-active">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-btn" @tap="handleShowStyles">加入购物车</div>
  </div>
</template>

<script>
import FoodBanner from "../../../components/food_banner_tpl/food_banner_tpl";
export default {
  components: {
    FoodBanner
  },
  data() {
    return {
      isShow:false,
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
    };
  },
  methods: {
    handleShowStyles() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  padding: 40rpx;
}
.food {
}
.name {
  font-size: 34rpx;
  font-weight: bold;
  color: rgba(46, 46, 46, 1);
}
.about {
  font-size: 26rpx;
  color: rgba(178, 178, 178, 1);
  margin-top: 12rpx;
}
.price {
  font-size: 34rpx;
  color: #723aff;
}
.amount {
  display: flex;
  align-items: center;
  text-align: center;
  color: #b2b2b2;
  font-size: 22rpx;
}
.amount > div {
  margin-right: 42rpx;
}
.styles {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 44rpx 0 10rpx;
  background: #fafafa;
  border-radius: 24rpx;
  font-size: 26rpx;
  padding: 20rpx;
}
.cont {
  flex: 1;
  display: flex;
  align-items: center;
}
.s_txt1 {
  color: #b2b2b2;
  margin-right: 18rpx;
}
.s-txt2 {
  font-weight: bold;
  color: #363636;
}
.more {
  display: flex;
  align-items: center;
  color: #ffab3a;
}
.more > img {
  width: 26rpx;
  height: 26rpx;
}
.evals {
  font-size: 26rpx;
  padding: 20rpx;
  background: #fafafa;
  border-radius: 24rpx;
}
.evals > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8rpx;
  border-bottom: 2rpx solid #ededed;
}
.all {
  display: flex;
  align-items: center;
  color: #363636;
  font-weight: bold;
}
.all > img {
  width: 26rpx;
  height: 26rpx;
}
.eval {
  display: flex;
  align-items: start;
  padding: 20rpx 0;
}
.eval > img {
  width: 48rpx;
  height: 48rpx;
  margin-right: 12rpx;
  flex-shrink: 0;
}
.eval-cont {
  flex: 1;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.uname {
  color: #d3d3d3;
  font-size: 26rpx;
}
.time {
  color: #d2d2d2;
  font-size: 22rpx;
}
.join-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10rpx 0;
  text-align: center;
  color: #fff;
  background: #723aff;
  font-size: 36rpx;
  font-weight: bold;
  z-index: 999;
}

.style-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
.style-box-wrapper {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
}
.style-cont {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 456rpx;
  border-radius: 40rpx 40rpx 0 0;
  padding: 24rpx 42rpx;
  box-sizing: border-box;
}
.food-box {
  display: flex;
  align-items: center;
}
.food-box > img {
  width: 144rpx;
  height: 144rpx;
  border-radius: 12rpx;
  margin-right: 30rpx;
}
.fd_txt {
  font-size: 28rpx;
  font-weight: bold;
  color: #2e2e2e;
}
.fd_txt1 {
  font-size: 34rpx;
  font-weight: bold;
  color: #723aff;
  margin: 18rpx 0 10rpx;
}
.fd_txt2 {
  font-size: 22rpx;
  color: #2e2e2e;
}
.food-style {
  margin-top: 34rpx;
}
.food-style > header,
.food-count > header {
  font-size: 22rpx;
  color: rgba(46, 46, 46, 1);
}
.fs-list {
  display: flex;
  flex-wrap: wrap;
}
.fs-item {
  padding: 8rpx 32rpx;
  border-radius: 24rpx;
  background: #f7f7f7;
  border: 2rpx solid #ededed;
  font-size: 22rpx;
  color: #2e2e2e;
  margin: 14rpx 28rpx 14rpx 0;
}
.fs-item-active {
  background: #723aff;
  border-color: #723aff;
  color: #fff;
}
.fc-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.opts {
  width: 32rpx;
  height: 32rpx;
  border: 2rpx solid #eaeaea;
  text-align: center;
  line-height: 32rpx;
  font-size: 20rpx;
  background: #F7F7F7;
  color: #E8E8E8;
}
.opts_left{
  border-radius: 4rpx 0 0 4rpx;
}
.opts_right{
  border-radius: 0 4rpx 4rpx 0;
}
.txt-active{
  color: #723aff;
}
.count {
  width: 64rpx;
  height: 32rpx;
  border-top: 2rpx solid #eaeaea;
  border-bottom: 2rpx solid #eaeaea;
  text-align: center;
  line-height: 32rpx;
  font-size: 22rpx;
}
</style>
