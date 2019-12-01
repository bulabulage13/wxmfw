<template>
  <div class="container">
    <div class="logo">
      <img src="" />
    </div>
    <div class="login">
      <div class="login-input">
        <div class="job-number">
          <label>工号</label>
          <input type="text" placeholder="请输入工号" />
        </div>
        <div class="job-password">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="login-btn" @tap="toLogin">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      wx.navigateTo({
        url:'../bd_login_add/main'
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
}
.logo {
  margin-top: 118rpx;
  margin-left: 90rpx;
}
.logo > img {
  width: 240rpx;
  height: 80rpx;
  background: #eee;
}
.login {
  margin: 225rpx 90rpx 140rpx;
}
.job-number {
  margin-bottom: 36rpx;
}
.job-number > label,
.job-password > label {
  font-size: 22rpx;
  color: rgba(23, 23, 23, 1);
  margin-bottom: 18rpx;
}
input {
  font-size: 28rpx;
  padding-bottom: 16rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
input::placeholder {
  color: #b2b2b2;
  font-size: 28rpx;
}
.login-btn {
  margin: 70rpx auto 0;
  width: 336rpx;
  height: 80rpx;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 40rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 80rpx;
  text-align: center;
}
</style>
