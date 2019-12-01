<template>
  <div class="container">
    <div class="notice-box">
      <div
        class="notice-item"
        v-for="(item, index) of modals"
        :key="index"
        @tap="goNoticeDetailPage(index)"
      >
        <div class="notice-img">
          <img :src="item.url" alt />
        </div>
        <div class="notice-modle">
          <div class="notice-modle-title">
            <span class="name">{{item.name}}</span>
            <span class="time" v-if="item.content">{{item.time | formatTime}}</span>
          </div>
          <div class="notice-modle-context">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modals: [
        {
          url: "../../../static/home/kf.png",
          name: "客服消息",
          content: "您有新的消息",
          time: new Date(),
          id: 0
        },
        {
          url: "../../../static/home/dd.png",
          name: "订单通知",
          content: "64561651651",
          time: new Date(),
          id: 0
        },
        {
          url: "../../../static/home/rm.png",
          name: "热门消息",
          content: "",
          time: "2019/10/10",
          id: 0
        },
        {
          url: "../../../static/home/yh.png",
          name: "优惠券信息",
          content: "",
          time: new Date(),
          id: 0
        },
        {
          url: "../../../static/home/ps.png",
          name: "配送信息",
          content: "",
          time: new Date(),
          id: 0
        }
      ]
    };
  },
  filters: {
    formatTime(val) {
      let t = new Date(val);
      let y = t.getFullYear();
      let m = t.getMonth() + 1;
      let d = t.getDate();
      console.log(y + "." + m + "." + d);
      return y + "." + m + "." + d;
    }
  },
  methods: {
    goNoticeDetailPage(index) {
      console.log(index);
      wx.navigateTo({
        url: "../notice_detail/main?index=" + index
      });
    }
  }
};
</script>

<style scoped>
.notice-box {
  display: flex;
  flex-direction: column;
}
.notice-item {
  padding: 26rpx 0;
  margin-left: 42rpx;
  border-bottom: 2rpx solid #ededed;
  display: flex;
  align-items: center;
}
.notice-img {
  flex-shrink: 0;
  width: 92rpx;
  height: 92rpx;
  overflow: hidden;
  border-radius: 12rpx;
  margin-right: 32rpx;
}
.notice-img img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.notice-modle {
  flex: 1;
}
.notice-modle-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  font-size: 34rpx;
  color: #353535;
}
.time {
  font-size: 22rpx;
  color: #b2b2b2;
  padding-right: 26rpx;
}
.notice-modle-context {
  flex: 1;
  font-size: 26rpx;
  color: #b2b2b2;
  margin-top: 16rpx;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 530rpx;
}
</style>