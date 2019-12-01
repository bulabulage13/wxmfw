<template>
  <div class="container">
    <div class="header">
      <div class="search-bar">
        <img src="../../../../static/icons/search.png" />
        <span>请输入问题关键字</span>
      </div>
    </div>

    <div class="ques-grid">
      <header>客服问题</header>
      <div class="ques-modals">
        <div
          class="ques-modal"
          v-for="(q, index) of grids"
          :key="index"
          @tap="handleQues(index)"
        >
          <img :src="q.img" />
          <div class="ques-modal_txt">{{ q.name }}</div>
        </div>
      </div>
    </div>

    <div class="ques-list">
      <header>常见问题</header>
      <div class="queses">
        <div class="ques" v-for="(q, index) of questions" :key="index">
          {{ q.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grids: [
        { name: "账户问题", img: "../../../static/my/zh.png", id: 0 },
        { name: "支付问题", img: "../../../static/my/zf.png", id: 1 },
        { name: "配送问题", img: "../../../static/my/ps.png", id: 2 },
        { name: "订单问题", img: "../../../static/my/dd.png", id: 3 },
        { name: "评价问题", img: "../../../static/my/pj.png", id: 4 },
        { name: "优惠券问题", img: "../../../static/my/yhq.png", id: 5 },
        { name: "退款问题", img: "../../../static/my/tk.png", id: 6 },
        { name: "其他问题", img: "../../../static/my/qt.png", id: 7 }
      ],
      questions: [
        {
          text: "找不到订单怎么办？",
          id: 0
        },
        {
          text: "找不到订单怎么办？",
          id: 0
        },
        {
          text: "找不到订单怎么办？",
          id: 0
        },
        {
          text: "找不到订单怎么办？",
          id: 0
        },
        {
          text: "找不到订单怎么办？",
          id: 0
        }
      ]
    };
  },
  methods: {
    handleQues(index) {
      console.log(index);
      wx.navigateTo({
        url: "../client_service_center_question/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20rpx 32rpx 24rpx 34rpx;
}
.search-bar {
  flex: 1;
  border-radius: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18rpx 0;
  background: #fff;
}
.search-bar > img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 14rpx;
}
.search-bar > span {
  font-size: 26rpx;
  color: #b9b9b9;
}

.ques-grid {
  background: #fff;
}
.ques-grid > header,
.ques-list > header {
  padding: 18rpx 34rpx 14rpx;
  border-bottom: 2rpx solid #ededed;
  font-size: 28rpx;
  color: #353535;
}
.ques-modals {
  display: flex;
  flex-wrap: wrap;
  padding: 24rpx 24rpx 0;
}
.ques-modal {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32rpx;
}
.ques-modal > img {
  width: 64rpx;
  height: 64rpx;
  margin-bottom: 16rpx;
}
.ques-modal_txt {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}

.ques-list {
  background: #fff;
  margin-top: 24rpx;
}

.queses {
}
.ques {
  padding: 20rpx 34rpx;
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
</style>
