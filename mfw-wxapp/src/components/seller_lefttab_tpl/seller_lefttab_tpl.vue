<template>
  <scroll-view class="left-tab">
    <ul class="tabs">
      <li
        class="tab"
        v-for="(item, index) of list"
        :key="index"
        :class="{'tab-active':item.isActive}"
        @tap="selectedList(index)"
      >{{item.name}}</li>
    </ul>
  </scroll-view>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    selectedList(index) {
      console.log(this.list);
      for (let p of this.list) {
        p.isActive = false;
      }
      this.list[index].isActive = true;
    }
  }
};
</script>

<style scoped>
.left-tab {
  height: 100%;
  position: fixed;
  top: 50rpx;
  overflow: hidden;
}
.tabs {
  padding-top: 6%;
  padding-bottom: 6%;
  height: 88%;
  width: 148rpx;
  overflow-y: scroll;
}
.tabs::-webkit-scrollbar {
  width: 0 !important;
}
.tabs::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.tabs::-webkit-scrollbar-thumb{
   background: #fff;
}
.tab {
  font-size: 26rpx;
  color: #353535;
  text-align: center;
  padding: 44rpx 20rpx 12rpx;
}

.tab-active {
  color: #723aff;
  position: relative;
}
.tab-active::after {
  content: "";
  position: absolute;
  width: 40rpx;
  height: 20rpx;
  bottom: 0;
  border-bottom: 2rpx solid #723aff;
  left: 50%;
  border-radius: 0 0 50% 50%;
  margin-left: -20rpx;
}
</style>