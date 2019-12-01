<template>
  <div class="container">
    <div class="collection-box">
      <div class="collections">
        <div class="collection" v-for="(c, index) of collections" :key="index">
          <img src="" />
          <div class="col-detail">
            <div class="col-detail_title">{{ c.name }}</div>
            <div class="col-detail_txt">{{ c.txt }}</div>
            <div class="col-detail_price">￥{{ c.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collections: [
        {
          name: "阴阳师妙趣奇遇记曲奇礼盒",
          txt: "游戏联名，6种风味曲奇",
          price: 88,
          url: ""
        },
        {
          name: "阴阳师妙趣奇遇记曲奇礼盒",
          txt: "游戏联名，6种风味曲奇",
          price: 88,
          url: ""
        },
        {
          name: "阴阳师妙趣奇遇记曲奇礼盒",
          txt: "游戏联名，6种风味曲奇",
          price: 88,
          url: ""
        },
        {
          name: "阴阳师妙趣奇遇记曲奇礼盒",
          txt: "游戏联名，6种风味曲奇",
          price: 88,
          url: ""
        },
      ]
    };
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
}
.collection-box {
  margin-top: 22rpx;
  background: #fff;
  min-height: 100%;
}
.collections {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.collection {
  display: flex;
  align-items: center;
  margin-left: 32rpx;
  padding: 16rpx 0 18rpx;
  border-bottom: 2rpx solid #ededed;
}
.collection:last-child{
  border-bottom: none;
}
.collection > img {
  width: 144rpx;
  height: 144rpx;
  margin-right: 8rpx;
  background: #eee;
}
.col-detail {
}
.col-detail_title {
  font-size: 28rpx;
  color: #353535;
}
.col-detail_txt {
  font-size: 24rpx;
  color: #b2b2b2;
  margin: 4rpx 0；
}
.col-detail_price {
  font-size: 32rpx;
  color: #353535;
}
</style>
