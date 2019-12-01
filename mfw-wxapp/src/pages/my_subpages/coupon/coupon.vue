<template>
  <div class="container">
    <div class="coupon-box">
      <div class="tabbars">
        <div
          class="tabbar"
          :class="t.isSelect ? 'tabbar-active' : ''"
          v-for="(t, index) of tabbars"
          :key="index"
          @tap="handleTabbar(index)"
        >
          <span>{{ t.name }}</span>
          <span>({{ t.count }})</span>
        </div>
      </div>
      <div class="coupons">
        <div class="coupon" v-for="(c, index) of coupons" :key="index">
          <div class="coupon-top">
            <div class="coupon-left">
              <img src="" />
              <div class="c-detail">
                <div class="c-detail_title">{{ c.name }}</div>
                <div class="c-detail_type">{{ c.type }}</div>
                <div class="c-detail_time">有效期至{{ c.time }}</div>
              </div>
            </div>
            <div class="coupon-right">
              <div class="price">
                <div class="price_sub">￥</div>
                <div class="price_sup">{{ c.price }}</div>
              </div>
              <div class="all">满{{ c.all }}可用</div>
            </div>
          </div>
          <div class="coupon-bottom">
            <div class="cb-txt">可与其他活动优惠同时享受。在线支付专享受。</div>
            <div class="cb-btn">立即使用</div>
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
      tabbars: [
        { name: "满减券", count: 10, isSelect: true },
        { name: "商品券", count: 1, isSelect: false }
      ],
      coupons: [
        {
          name: "粉之都(云景路店)",
          type: "满减券",
          time: "2019.08.15",
          img: "",
          price: 10,
          all: 38
        },
        {
          name: "粉之都(云景路店)",
          type: "满减券",
          time: "2019.08.15",
          img: "",
          price: 10,
          all: 38
        },
        {
          name: "粉之都(云景路店)",
          type: "满减券",
          time: "2019.08.15",
          img: "",
          price: 10,
          all: 38
        }
      ]
    };
  },
  methods: {
    handleTabbar(index) {
      if (!this.tabbars[index].isSelect) {
        for (let t of this.tabbars) {
          t.isSelect = false;
        }
        this.tabbars[index].isSelect = true;
      }else{
        return;
      }
    }
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
}
.coupon-box {
  position: relative;
}
.tabbars {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabbar {
  font-size: 26rpx;
  color: #353535;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 12rpx 0 16rpx;
}
.tabbar-active {
  color: #723aff;
  position: relative;
  padding: 8rpx 0 20rpx;
}
.tabbar-active::after {
  content: "";
  width: 46rpx;
  height: 20rpx;
  position: absolute;
  bottom: 10rpx;
  left: 50%;
  margin-left: -23rpx;
  border-bottom: 2rpx solid #723aff;
  /* background: #723aff; */
  border-radius: 0% 50% 50% 50%;
}
.coupons {
  margin: 102rpx 32rpx;
}
.coupon {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px rgba(178, 178, 178, 0.16);
  border-radius: 16rpx;
  margin-top: 42rpx;
}
.coupon-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
}
.coupon-left {
  display: flex;
  align-items: center;
}
.coupon-left > img {
  width: 134rpx;
  height: 134rpx;
  margin-right: 26rpx;
  background: #723aff;
}
.c-detail {
}
.c-detail_title {
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.c-detail_type {
  font-size: 26rpx;
  color: rgba(178, 178, 178, 1);
  margin: 8rpx 0;
}
.c-detail_time {
  font-size: 26rpx;
  color: rgba(178, 178, 178, 1);
}
.coupon-right {
}
.price {
  display: flex;
  align-items: baseline;
  color: #723aff;
}
.price_sub {
  font-size: 28rpx;
}
.price_sup {
  font-size: 40rpx;
}
.all {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.coupon-bottom {
  position: relative;
  padding: 10rpx 0;
  margin: 0 20rpx;
  border-top: 2rpx dashed #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.coupon-bottom::after {
  content: "";
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #f9f9f9;
  position: absolute;
  left: -30rpx;
  top: -10rpx;
}
.coupon-bottom::before {
  content: "";
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #f9f9f9;
  position: absolute;
  right: -30rpx;
  top: -10rpx;
}
.cb-txt {
  font-size: 22rpx;
  color: rgba(178, 178, 178, 1);
}
.cb-btn {
  width: 128rpx;
  height: 40rpx;
  background: #723aff;
  border-radius: 8rpx;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40rpx;
}
</style>
