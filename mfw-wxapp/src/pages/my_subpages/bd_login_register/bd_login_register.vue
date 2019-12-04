<template>
  <div clas="container">
    <div class="register">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <div class="input-modals">
        <div class="input-modal">
          <div class="input-label">联系人</div>
          <input type="text" placeholder="商家联系人" />
        </div>
        <div class="input-modal">
          <div class="input-label">电话</div>
          <input type="tel" placeholder="商家注册电话(务必正确填写)" />
        </div>
        <div class="input-modal">
          <div class="input-label">邮箱</div>
          <input type="text" placeholder="商家邮箱地址" />
        </div>
      </div>
      <div class="submit">提交</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #fff;
}
.register {
}
.logo {
  margin-top: 164rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo > img {
  width: 256rpx;
  height: 80rpx;
  background: #eee;
}
.input-modals {
  padding: 120rpx 90rpx 200rpx 76rpx;
}
.input-modal {
  display: flex;
  align-items: center;
  padding-bottom: 12rpx;
  padding-top: 70rpx;
  border-bottom: 2rpx solid #d2d2d2;
  font-size: 28rpx;
}
.input-label {
  width: 84rpx;
  color: #353535;
  margin-right: 96rpx;
}
.input-modal > input {
  flex: 1;
}
input::placeholder {
  color: rgba(178, 178, 178, 1);
}
.submit {
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 40rpx;
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}
</style>
