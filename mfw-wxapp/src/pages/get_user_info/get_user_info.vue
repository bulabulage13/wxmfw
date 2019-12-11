<template>
  <div class="container">
    <img src="" />
    <p>买返屋</p>
    <span>请完成微信授权以继续使用</span>
    <button
      open-type="getUserInfo"
      hover-class="none"
      @getuserinfo="getUserInfoFun"
      type="primary"
      size="defualt"
      lang="zh_CN"
    >
      微信授权用户信息
    </button>
  </div>
</template>

<script>
export default {
  onShow() {
    if (wx.getStorageSync("isUserInfo")) {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  methods: {
    getUserInfoFun() {
      wx.getUserInfo({
        lang: "zh_CN",
        success(res) {
          wx.setStorageSync("isUserInfo", true);
          wx.setStorageSync("userInfo", JSON.parse(res.rawData));
          wx.navigateTo({
            url: "../get_user_phone/main"
          });
        },
        fail(err) {
          wx.showModal({
            title: "提示",
            content: "需要通过授权才能继续，请重新点击并授权",
            showCancel: false,
            confirmColor: "#019283"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  margin-top: 180rpx;
  width: 120rpx;
  height: 120rpx;
  background: #eee;
}
p {
  margin-top: 16rpx;
  margin-bottom: 120rpx;
  font-size: 28rpx;
  color: #353535;
}
span {
  font-size: 22rpx;
  color: #02187a;
}
button {
  margin-top: 10rpx;
  font-size: 28rpx;
  width: 90%;
}
</style>
