<template>
  <div class="container">
    <div class="select-top">
      <div class="select-addr">
        <span>地理位置</span>
        <img src="../../../../static/icons/down.png" alt />
      </div>
      <i class="cross-axis"></i>
      <div class="stdin-addr">
        <input type="text" placeholder="小区/写字楼/学校等" />
      </div>
    </div>
    <!-- 当前位置 -->
    <div class="current-address">
      <header>当前位置</header>
      <div class="current-place">
        <div class="address-name">地理位置</div>
        <div class="restart">
          <img src="../../../../static/icons/getloc.png" alt />
          <span>重新定位</span>
        </div>
      </div>
    </div>
    <!-- 收货地址 -->
    <div class="receive-address">
      <header>收货地址</header>
      <ul class="receive-address-list">
        <li class="receive-address-item">
          <div class="receive-addr">收货地址</div>
          <div>
            <span class="receive-name">收货人</span>
            <span class="receive-phone">收货电话</span>
          </div>
        </li>
        <li class="receive-address-item">
          <div class="receive-addr">收货地址</div>
          <div>
            <span class="receive-name">收货人</span>
            <span class="receive-phone">收货电话</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 附近地址 -->
    <div class="nearby-address">
      <header>附近地址</header>
      <ul class="nearby-address-list">
        <li class="nearby-address-item">地址一</li>
        <li class="nearby-address-item">地址二</li>
        <li class="nearby-address-item">地址三</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
        }
    }
};
</script>

<style scoped>
.select-top {
  margin: 16rpx 42rpx;
  padding: 20rpx 24rpx;
  background: #f5f5f5;
  border-radius: 48rpx;
  display: flex;
  align-items: center;
}
.cross-axis {
  width: 2rpx;
  height: 24rpx;
  background: #707070;
}
.select-addr {
  display: flex;
  align-items: center;
}
.select-addr span {
  font-size: 26rpx;
  color: #353535;
}
.select-addr img {
  width: 20rpx;
  height: 20rpx;
  margin: 0 16rpx;
}
.stdin-addr input {
  margin-left: 22rpx;
  font-size: 26rpx;
  color: #888888;
}
.stdin-addr input::-webkit-input-placeholder {
  color: #888888;
}
/* 当前位置 */
.current-address {
  padding: 24rpx 42rpx 0;
  border-bottom: 1px solid #d2d2d2;
}
.current-address header {
  font-size: 26rpx;
  color: #353535;
  font-weight: bolder;
}
.current-place {
  padding: 16rpx 0 18rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.address-name {
  font-size: 26rpx;
  color: #353535;
}
.restart {
  display: flex;
  align-items: center;
}
.restart img {
  width: 32rpx;
  height: 32rpx;
}
.restart span {
  font-size: 26rpx;
  color: #ffab3a;
  margin-left: 8rpx;
}
/* 收货地址 */
.receive-address {
}
.receive-address header {
  font-size: 26rpx;
  font-weight: bold;
  color: #353535;
  padding: 16rpx 42rpx 0;
}
.receive-address-item {
  padding: 18rpx 42rpx;
  border-bottom: 2rpx solid #D2D2D2;
}
.receive-addr {
  font-size: 26rpx;
  color: #353535;
  margin-bottom: 8rpx;
}
.receive-name,
.receive-phone {
  font-size: 26rpx;
  color: #b2b2b2;
}
.receive-phone {
  margin-left: 26rpx;
}
/* 附近地址 */
.nearby-address {
}
.nearby-address header {
  font-size: 26rpx;
  font-weight: bold;
  color: #353535;
  padding: 16rpx 42rpx 0;
}
.nearby-address-item {
  padding: 16rpx 42rpx;
  border-bottom: 2rpx solid #D2D2D2;
  font-size: 26rpx;
  color: #353535;
}
.nearby-address-item:last-child {
  border-bottom: none;
}
</style>