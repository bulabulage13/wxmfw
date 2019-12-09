<template>
  <div class="container">
    <img src="" />
    <p>买返屋</p>
    <span>请完成微信授权以继续使用</span>
    <button
      open-type="getUserInfo"
      hover-class="none"
      bindgetuserinfo="getUserInfoFun"
    >
      维修授权用户信息
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    getUserInfoFun() {
      wx.getUserInfo({
        lang: "zh_CN",
        success(res) {
          wx.showLoading({
            title: "加载中..."
          });
          wx.login({
            success(res) {
              console.log(res);
              let code = res.code;
              let options = {
                url: "users/login",
                data: {
                  iv: iv,
                  encryptedData: encryptedData,
                  shIds: wx.getStorageSync("shIds"),
                  zhHoteld: wx.getStorageSync("zhHoteld"),
                  code: code
                },
                success(data) {
                  wx.showToast({
                    title: "授权成功",
                    icon: "success"
                  });
                  app.globalData.isLogin = true;
                  wx.setStorageSync("token", data.authorization);
                  wx.setStorageSync("userIds", data.userIds);
                  self.callback();
                },
                warn() {
                  wx.hideLoading();
                  wx.showModal({
                    title: "提示",
                    content: "授权失败，请重新点击并授权",
                    showCancel: false,
                    confirmColor: "#019283"
                  });
                }
              };
              hdAjax(options);
            }
          });
        },
        fail(err) {
          console.log(err);
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
  width: 120rpx;
  height: 120rx;
  background: #eee;
}
p {
  font-size: 32rpx;
  color: #353535;
}
span {
  font-size: 22rpx;
  color: #02187a;
}
</style>
