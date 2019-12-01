<template>
  <div class="home-modals">
    <div
      class="home-modal"
      v-for="(item, index) of modals"
      :key="index"
      @tap="goModalDetail(index)"
    >
      <img v-if="item.url" class="home-modal-img" :src="item.url" alt />
      <div class="home-modal-name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modals"],
  methods: {
    goModalDetail(index) {
      console.log(index);
      switch (index) {
        case 0:
          wx.navigateTo({
            url: "../../pages/home_subpage/modal_detail_tstg/main"
          });
          break;
        case 1:
          wx.navigateTo({
            url: "../../pages/home_subpage/modal_detail_skms/main"
          });
          break;
      }
    }
  }
};
</script>

<style scoped>
/* modals */
.home-modals {
  display: flex;
  flex-wrap: wrap;
}
.home-modal {
  margin: 30rpx 30rpx 0;
}
.home-modal-img {
  width: 88rpx;
  height: 88rpx;
}
.home-modal-name {
  font-size: 22rpx;
  color: #353535;
  text-align: center;
}
</style>