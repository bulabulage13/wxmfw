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
        <div class="more">
          <div>选择更多</div>
          <img src="../../../../static/icons/right.png" />
        </div>
      </div>
    </div>
    <div class="evals">
      <header>
        <div class="s_txt1">评价(2)</div>
        <div class="all">
          <div>查看全部评价</div>
          <img src="../../../../static/icons/right.png" />
        </div>
      </header>
      <div class="eval">
        <img src="../../../../static/my/user.png">
        <div class="eval-cont">
          <div class="user">
            <div class="uname">什么什么</div>
            <div class="time">2019.07.08</div>
          </div>
          <div class="eval-txt">这是评论内容</div>
        </div>
      </div>
    </div>
    <div class="join-btn">加入购物车</div>
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
      ]
    };
  }
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
  border-bottom: 2rpx solid #EDEDED;
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
.eval{
  display: flex;
  align-items: start;
  padding: 20rpx 0;
}
.eval>img{
  width: 48rpx;
  height: 48rpx;
  margin-right: 12rpx;
  flex-shrink: 0;
}
.eval-cont{
  flex: 1;
}
.user{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.uname{
  color: #d3d3d3;
  font-size: 26rpx;
}
.time{
  color: #D2D2D2;
  font-size: 22rpx;
}
.join-btn{
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
}
</style>
