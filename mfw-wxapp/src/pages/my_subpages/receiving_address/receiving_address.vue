<template>
  <div class="container">
    <div class="addresses">
      <div class="address">
        <div class="personal-data">
          <div class="user-name">{{addInfo.addressName}}</div>
          <div class="user-phone">{{addInfo.addressPhone}}</div>
          <div class="is-default">{{addInfo.addressDefault?'默认':''}}</div>
        </div>
        <div class="addr">
          <div class="addr-txt">{{addInfo.addressProvince}}{{addInfo.addressCity}}{{addInfo.addressDistrict}}{{addInfo.addressInfo}}</div>
          <div class="addr-edit">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
    <div class="add-btn" @tap="goAddAddressPage">+ 新增收货地址</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addInfo:{
        addressName:'杨鹏飞',
        addressPhone: '13112341234',
        addressProvince: '陕西省',
        addressCity: '西安市',
        addressDistrict: '灞桥区',
        addressInfo: '什么路123号',
        addressAllowTime: '周内',
        addressDefault: true
      }
    }
  },
  onShow() {
    this.$fly.get('getAddressById',{
      cUId: wx.getStorageSync('userId')
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    this.addInfo.addressName = '周星驰'
  },
  methods: {
    goAddAddressPage() {
      wx.navigateTo({
        url: "../receiving_address_add/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  background: #fff;
}
.addresses {
}
.address {
  margin-left: 52rpx;
  margin-top: 44rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
.personal-data {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
}
.user-name {
  font-size: 34rpx;
  color: #171717;
  margin-right: 60rpx;
  font-weight: bold;
}
.user-phone {
  font-size: 34rpx;
  color: #171717;
  font-weight: bold;
}
.is-default {
  width: 72rpx;
  height: 32rpx;
  line-height: 32rpx;
  background: rgba(114, 58, 255, 1);
  border-radius: 16rpx;
  color: #fff;
  font-size: 22rpx;
  margin-left: 22rpx;
  text-align: center;
}
.addr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12rpx;
}
.addr-txt {
  font-size: 26rpx;
  color: #888888;
}
.addr-edit > img {
  width: 32rpx;
  height: 32rpx;
  background: #eee;
  margin-right: 28rpx;
}
.add-btn {
  position: absolute;
  bottom: 52rpx;
  left: 50%;
  margin-left: -240rpx;
  width: 480rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 42px;
  font-size: 36rpx;
  color: #ffffff;
}
</style>
