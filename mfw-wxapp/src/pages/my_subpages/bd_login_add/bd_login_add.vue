<template>
  <div class="container">
    <div class="modals">
      <div
        class="modal"
        v-for="(m, index) of modals"
        :key="index"
        :style="{ backgroundColor: m.color }"
        @tap="goModalPage(index)"
      >
        <img :src="m.img" />
        <div class="txt">{{ m.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modals: [
        {
          text: "BD业务（商户注册）",
          img: "",
          color: "#723AFF",
          route: "../bd_login_register/main"
        },
        {
          text: "商家信息录入",
          img: "",
          color: "#FFBB3A",
          route: "../bd_login_manager/main"
        },
        {
          text: "平台审核文件",
          img: "",
          color: "#FF423A",
          route: "../bd_login_upload_file/main"
        },
        {
          text: "店铺logo、门店照片",
          img: "",
          color: "#3A58FF",
          route: "../bd_login_upload_shop/main"
        }
      ]
    };
  },
  methods: {
    goModalPage(index) {
      let url = this.modals[index].route;
      console.log(url);
      wx.navigateTo({
        url: url
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
}
.modals {
}
.modal {
  display: flex;
  align-items: center;
  padding: 42rpx 86rpx;
  margin: 48rpx 60rpx 0;
  border-radius: 20rpx;
}
.modal > img {
  width: 68rpx;
  height: 68rpx;
  margin-right: 80rpx;
  background: #eee;
}
.txt {
  color: #fff;
  font-size: 28rpx;
}
</style>
