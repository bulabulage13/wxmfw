<template>
  <div class="container">
    <div class="banner">
      <swiper>
        <swiper-item>
          <img src="" />
        </swiper-item>
      </swiper>
    </div>
    <div class="products">
      <div class="product-item" v-for="(p, index) of products" :key="index">
        <img src="" />
        <div class="title">{{ p.name }}</div>
        <div class="count">
          数量：<span>{{ p.count }}</span
          >份
        </div>
        <div class="count">
          价格：<span>￥{{ p.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "阴阳师曲妙奇遇记曲奇礼盒",
          count: 998,
          price: 11.2
        },
        {
          name: "阴阳师曲妙奇遇记曲奇礼盒",
          count: 998,
          price: 11.2
        },
        {
          name: "阴阳师曲妙奇遇记曲奇礼盒",
          count: 998,
          price: 11.2
        },
        {
          name: "阴阳师曲妙奇遇记曲奇礼盒",
          count: 998,
          price: 11.2
        },
        {
          name: "阴阳师曲妙奇遇记曲奇礼盒",
          count: 998,
          price: 11.2
        } 
      ]
    };
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
}
.banner {
  height: 500rpx;
}
swiper {
  height: 100%;
}
.swiper-item > img {
  width: 100%;
  height: 100%;
  background: #eee;
}

.products {
  background: #fff;
  margin-top: 16rpx;
  display: flex;
  flex-wrap: wrap;
  padding: 0 36rpx;
}
.product-item {
  margin: 32rpx 16rpx 0;
  width: 308rpx;
}
.product-item > img {
  width: 100%;
  height: 206rpx;
  background: #eee;
}
.title {
  color: #353535;
  font-size: 28rpx;
}
.count {
  font-size: 24rpx;
  color: #353535;
}
.count > span {
  color: #723aff;
}
</style>
