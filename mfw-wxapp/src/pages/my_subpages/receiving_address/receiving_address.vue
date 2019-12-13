<template>
  <div class="container">
    <div class="addresses" v-for="(addr,index) of addInfo" :key="index">
      <div class="address">
        <div class="personal-data">
          <div class="user-name">{{ addr.addressName }}</div>
          <div class="user-phone">{{ addr.addressPhone }}</div>
          <div class="is-default">
            {{ addr.addressDefault == 1 ? "默认" : "" }}
          </div>
        </div>
        <div class="addr">
          <div class="addr-txt">
            {{ addr.addressProvince }}{{ addr.addressCity
            }}{{ addr.addressDistrict }}{{ addr.addressInfo }}
          </div>
          <div class="addr-edit">
            <img src="../../../../static/icons/edit.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="add-btn" @tap="goAddAddressPage">+ 新增收货地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addInfo: [],
      noList: true
    };
  },
  onShow() {
    let self = this;
    this.$fly
      .get("getAddressById", {
        cUId: wx.getStorageSync("userId")
      })
      .then(res => {
        if (res.state == 0) {
          self.noList = false;
          self.addInfo = res.list;
        } else {
          self.noList = true;
        }
      })
      .catch(err => {
        console.log(err);
      });
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
