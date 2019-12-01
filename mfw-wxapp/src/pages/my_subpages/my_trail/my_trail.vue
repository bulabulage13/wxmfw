<template>
  <div class="container">
    <div class="trail-box">
      <div class="tabbars">
        <div
          class="tabbar"
          :class="t.isSelect ? 'tabbar-active' : ''"
          v-for="(t, index) of tabbars"
          :key="index"
          @tap="tabHandler(index)"
        >
          {{ t.name }}
        </div>
      </div>
      <div class="trails" v-if="isShow">
        <div class="trail" v-for="(t, index) of trails" :key="index">
          <div class="t-left">
            <img src="" alt="" />
            <div class="t-detail">
              <div class="t-title">{{ t.name }}</div>
              <div class="t-price">
                价值：<span>{{ t.price }}</span>
              </div>
            </div>
          </div>
          <div class="t-right">x{{ t.count }}</div>
        </div>
      </div>
      <div class="trails-report" v-if="!isShow">
        <div class="unreport">
          <header>未填写报告</header>
          <div class="trails-list">
            <div
              class="trails-item"
              v-for="(u, index) of unreports"
              :key="index"
            >
              <img src="" alt="" />
              <div class="ti-detail">
                <div class="ti-detail_title">{{ u.name }}</div>
                <div class="ti-detail_price">
                  <div class="price">
                    价值：<span>￥{{ u.price }}</span>
                  </div>
                  <div class="write-report" @tap="goReportPage">填写报告</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="report">
          <header>已填写报告</header>
          <div class=""></div>
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
        {
          name: "我的试用",
          isSelect: true
        },
        {
          name: "试用报告",
          isSelect: false
        }
      ],
      isShow: true,
      trails: [
        {
          name: "阴阳师妙趣奇遇记曲奇礼",
          price: 30,
          img: "",
          count: 1
        }
      ],
      unreports: [
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" },
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" },
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" }
      ],
      reports: [
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" },
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" },
        { name: "阴阳师妙趣奇遇记曲奇礼", price: 30, img: "" }
      ]
    };
  },
  methods: {
    tabHandler(index) {
      if (!this.tabbars[index].isSelect) {
        for (var i of this.tabbars) {
          i.isSelect = false;
        }

        this.isShow = !this.isShow;
        this.tabbars[index].isSelect = true;
      } else {
        return false;
      }
    },
    goReportPage(){
      wx.navigateTo({
        url: '../my_trail_first/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
}
.trail-box {
  position: relative;
}
.tabbars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64rpx;
  display: flex;
  background: #fff;
  line-height: 64rpx;
  box-sizing: border-box;
}
.tabbar {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
  text-align: center;
  flex: 1;
}
.tabbar-active {
  position: relative;
  font-size: 26rpx;
  color: #723aff;
  text-align: center;
  flex: 1;
}
.tabbar-active::after {
  content: "";
  width: 40rpx;
  height: 20rpx;
  position: absolute;
  bottom: 6rpx;
  left: 50%;
  margin-left: -20rpx;
  border-bottom: 2rpx solid #723aff;
  /* background: #723aff; */
  border-radius: 0% 50% 50% 50%;
}
.trails {
  padding: 0 32rpx;
  margin-top: 88rpx;
}
.trail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 24rpx;
  box-shadow: 0px 0px 6px rgba(178, 178, 178, 0.16);
  border-radius: 16rpx;
}
.t-left {
  display: flex;
  align-items: center;
}
.t-left > img {
  flex-shrink: 0;
  width: 212rpx;
  height: 144rpx;
  margin-right: 12rpx;
  background: #eee;
}
.t-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.t-title {
  font-size: 28rpx;
  color: #353535;
}
.t-price {
  font-size: 28rpx;
  color: #353535;
  margin-top: 60rpx;
}
.t-price > span {
  font-size: 24rpx;
  color: #723aff;
}
.t-right {
  font-size: 24rpx;
  color: #b2b2b2;
}

.trails-report {
  padding: 32rpx;
  margin-top: 60rpx;
}
.unreport,
.report {
}
.unreport > header,
.report > header {
  font-size: 32rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  padding: 24rpx 0 16rpx;
}
.trails-list {
}
.trails-item {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
  background: #fff;
  box-shadow: 0px 0px 6px rgba(178, 178, 178, 0.16);
  opacity: 1;
  border-radius: 16rpx;
  padding: 20rpx;
}
.trails-item > img {
  flex-shrink: 0;
  width: 212rpx;
  height: 144rpx;
  margin-right: 12rpx;
  background: #eee;
}
.ti-detail {
  flex: 1;
}
.ti-detail_title {
  font-size: 28rpx;
  color: rgba(53, 53, 53, 1);
}
.ti-detail_price {
  margin-top: 60rpx;
  font-size: 28rpx;
  color: #353535;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price > span {
  font-size: 24rpx;
  color: #b2b2b2;
}
.write-report {
  width: 136rpx;
  height: 44rpx;
  line-height: 44rpx;
  border: 1px solid rgba(114, 58, 255, 1);
  border-radius: 28rpx;
  padding: 4rpx 16rpx;
  text-align: center;
  color: #723aff;
}
</style>
