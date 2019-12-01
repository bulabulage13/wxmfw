<template>
  <div class="container">
    <div class="logo">
      <img src="" />
    </div>
    <div class="txt_1">维修公众号：买返屋</div>
    <div class="txt_2">版本号：v1.0</div>
    <div class="txt_3" @tap="goProtocolPage()">———资质与规则————</div>
  </div>
</template>

<script>
export default {
  methods:{
    goProtocolPage(){
      wx.navigateTo({
        url:'../about_us_protocol/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f1f1f1;
  text-align: center;
}
.logo {
  width: 152rpx;
  height: 152rpx;
  background: #723aff;
  border-radius: 20rpx;
  margin: 160rpx auto 16rpx;
}
.logo > img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.txt_1 {
  font-size: 26rpx;
  color: #888888;
  margin-top: 24rpx;
}
.txt_2 {
  font-size: 26rpx;
  color: #722bff;
}
.txt_3 {
  position: absolute;
  bottom: 88rpx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 26rpx;
  color: #353535;
}
</style>
