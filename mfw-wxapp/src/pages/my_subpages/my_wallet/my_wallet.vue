<template>
  <div class="container">
    <div class="wallet-box">
      <div class="wallet-header">
        <div class="wh_txt1">余额(元)</div>
        <div class="wh_txt2">{{balance}}</div>
        <div class="wh_txt3" :class="checkHaveBalance?'wh_txt3-active':''">{{checkHaveBalance?'余额提现':"无法提现"}}</div>
      </div>
      <div class="my-card">
        <header>
          <div class="mc_txt">我的银行卡</div>
          <div class="add" v-if="isCard">+</div>
        </header>
        <div class="no-card" v-if="!isCard">
          添加银行卡
        </div>
        <div class="cards" v-if="isCard">
          <div class="card">
            <div class="card-left">
              <img src="" alt="" />
              <div class="card-detail">
                <div class="card-name">中国建设银行</div>
                <div class="card-type">储蓄卡</div>
              </div>
            </div>
            <div class="card-num">64654564564564</div>
          </div>
          <div class="card">
            <div class="card-left">
              <img src="" alt="" />
              <div class="card-detail">
                <div class="card-name">中国建设银行</div>
                <div class="card-type">储蓄卡</div>
              </div>
            </div>
            <div class="card-num">64654564564564</div>
          </div>
        </div>
        <div class="my-coupons" @tap="goCouponPage">
          <div class="m_txt">
            <div>我的优惠券</div>
            <div class="coupon-count">3张</div>
          </div>
          <div>></div>
        </div>
        <div class="my-bill">
          <div class="m_txt">我的账单</div>
          <div>></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCard: false,
      balance: '6000.00'
    }
  },
  computed:{
    checkHaveBalance(){
      if(this.balance > 0){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    goCouponPage() {
      wx.navigateTo({
        url: "../coupon/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
}
.wallet-box {
}
.wallet-header {
  position: relative;
  background: #723aff;
  height: 252rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  z-index: 9;
}
.wallet-header::after {
  content: "";
  position: absolute;
  height: 252rpx;
  width: 150%;
  top: 40rpx;
  border-radius: 0 0 50% 50%;
  background: #723aff;
}

.wh_txt1 {
  z-index: inherit;
  margin-top: 28rpx;
  margin-bottom: 18rpx;
  font-size: 26rpx;
}
.wh_txt2 {
  z-index: inherit;
  font-size: 80rpx;
}
.wh_txt3 {
  position: absolute;
  bottom: -72rpx;
  left: 50%;
  margin-left: -108rpx;
  z-index: inherit;
  width: 216rpx;
  height: 72rpx;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(114, 58, 255, 0.15);
  border-radius: 46rpx;
  color: #888888;
  font-size: 34rpx;
  text-align: center;
  line-height: 72rpx;
}
.wh_txt3-active{
  color: #723aff;
}
.my-card {
  margin: 100rpx 60rpx 0;
}
.my-card > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16rpx;
}
.mc_txt,
.add {
  color: #353535;
  font-size: 28rpx;
}
.no-card {
  height: 152rpx;
  line-height: 152rpx;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
  border-radius: 6rpx;
  font-size: 28rpx;
  color: rgba(178, 178, 178, 1);
}
.cards {
  margin-bottom: 18rpx;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40rpx 24rpx;
  box-shadow: 0px 2px 6px rgba(209, 209, 209, 0.349);
  border-radius: 6rpx;
}
.card-left {
  display: flex;
  align-items: center;
  color: #353535;
}
.card-left > img {
  width: 72rpx;
  height: 72rpx;
  margin-right: 32rpx;
  background: #eee;
}
.card-name {
  font-size: 26rpx;
}
.card-type {
  font-size: 20rpx;
}
.card-num {
  color: #888888;
  font-size: 26rpx;
}
.my-coupons,
.my-bill {
  padding: 28rpx 0 16rpx 0;
  border-bottom: 2rpx solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.m_txt {
  color: #353535;
  font-size: 28rpx;
  display: flex;
  align-items: center;
}
.coupon-count {
  font-size: 14rpx;
  color: #ffffff;
  padding: 4rpx 10rpx;
  background: #723aff;
  border-radius: 6rpx;
  margin-left: 10rpx;
}
</style>
