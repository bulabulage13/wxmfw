<template>
  <div class="container">
    <img src="" />
    <p>买返屋</p>
    <span>请完成微信授权以继续使用</span>
    <button
      open-type="getPhoneNumber"
      hover-class="none"
      @getphonenumber="getPhoneNumber"
      type="primary"
      size="defualt"
    >
      登录
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    getPhoneNumber(e) {
      console.log(e);
      let self = this;
      if (e.mp.detail.encryptedData && e.mp.detail.iv) {
        let userInfo = wx.getStorageSync("userInfo");
        let data = {
          userOpenid: wx.getStorageSync("openid"),
          encryptedData: e.mp.detail.encryptedData,
          iv: e.mp.detail.iv,
          session_key: wx.getStorageSync("session_key"),
          userName: userInfo.nickName,
          userHeader: userInfo.avatarUrl,
          userSex: userInfo.gender,
          userBirthday: ""
        };
        this.$fly
          .post('register', data)
          .then(res => {
            console.log(res);
            if (res.state == 1) {
              wx.showToast({
                title: "用户注册失败,请稍后重试！",
                duration: 3000,
                icon: "none"
              });
            } else if (res.state == 0 || res.state == 2) {
              self.toLogin();
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        wx.showModal({
          title: "提示",
          content: "需要通过授权才能登录，请重新点击并授权",
          showCancel: false,
          confirmColor: "#019283"
        });
      }
    },
    toLogin() {
      let self = this;
      this.$fly
        .post('login', { userOpenid: wx.getStorageSync("openid") })
        .then(res => {
          if (res.state == 0) {
            wx.setStorageSync("isUserPhone", true);
            wx.setStorageSync('userId', res.list.userId)
            wx.reLaunch({
              url: "../my/main"
            });
          } else {
            wx.showToast({
              title: "登录失败，请稍后重试！",
              icon: "none"
            });
          }
        })
        .catch(err => {
          console.log(err);
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
