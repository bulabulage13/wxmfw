<template>
  <div class="container">
    <div class="manager">
      <header>我的商家</header>
      <div class="add" @tap="goAddShopInfo">
        添加商家信息
      </div>
      <div class="manager-list">
        <div class="manager-item" v-for="(m, index) of shops" :key="index">
          <div class="mi-left">
            <img src="" alt="" />
            <div class="mi-detail">
              <div class="shop-name">{{ m.name }}</div>
              <div class="shop-manager">
                <span>{{ m.manager }}</span>
                <span>{{ m.phone }}</span>
              </div>
            </div>
          </div>
          <div class="mi-right">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [
        {
          name: "粉之都(092白云店)",
          img: "",
          manager: "张叔叔",
          phone: "13112341234"
        },
        {
          name: "粉之都(092白云店)",
          img: "",
          manager: "张叔叔",
          phone: "13112341234"
        },
        {
          name: "粉之都(092白云店)",
          img: "",
          manager: "张叔叔",
          phone: "13112341234"
        },
        {
          name: "粉之都(092白云店)",
          img: "",
          manager: "张叔叔",
          phone: "13112341234"
        }
      ]
    };
  },
  methods:{
    goAddShopInfo(){
      wx.navigateTo({
        url: '../bd_login_entering/main'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
}
.manager {
}
.manager > header {
  margin: 16rpx 60rpx 22rpx;
  font-size: 26rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.add {
  margin: 0 60rpx 24rpx;
  padding: 54rpx 0 58rpx;
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
  border-radius: 6rpx;
  font-size: 28rpx;
  color: rgba(178, 178, 178, 1);
  text-align: center;
}
.manager-list {
}
.manager-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28rpx 12rpx 28rpx 52rpx;
  margin: 0 60rpx 24rpx;
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
}
.mi-left {
  display: flex;
  align-items: center;
}
.mi-left > img {
  width: 96rpx;
  height: 96rpx;
  margin-right: 28rpx;
  background: #eee;
}

.mi-detail {
  display: flex;
  flex-direction: column;
}
.shop-name {
  font-size: 30rpx;
  font-weight: bold;
  color: rgba(40, 40, 40, 1);
  margin-bottom: 6rpx;
}
.shop-manager > span {
  font-size: 22rpx;
  color: rgba(40, 40, 40, 1);
  margin-right: 22rpx;
}

.mi-right {
}
.mi-right > img {
  width: 24rpx;
  height: 24rpx;
  background: #eee;
}
</style>
