<template>
  <div class="search">
    <div class="search-input" v-if="!searchIsShow">
      <img src="../../../static/icons/search.png" />
      <input
        id="search"
        v-model.trim="searchValue"
        :focus="!searchIsShow"
        @blur="watchInputVal"
        type="text"
        :placeholder="placeholder"
        autofocus="autofocus"
      />
    </div>
    <div @tap="searchIsShow = false" class="show-search" v-if="searchIsShow">
      <img src="../../../static/icons/search.png" />
      <span>{{placeholder}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      searchIsShow: true,
      searchValue: ""
    };
  },
  methods: {
    watchInputVal() {
      this.searchIsShow = true;
      if (this.searchValue) {
        this.searchValue = "";
      }
    }
  }
};
</script>

<style scoped>
.search {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 96rpx;
  background: #fff;
  -webkit-z-index: 99;
  -moz-z-index: 99;
  -ms-z-index: 99;
  -o-z-index: 99;
  z-index: 99;
}
.search-input {
  background: #f5f5f5;
  border-radius: 36rpx;
  display: flex;
  align-items: center;
  padding: 10rpx 20rpx;
  margin: 8rpx 32rpx;
}
.search-input img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 8rpx;
  flex-shrink: 0;
}
.search-input input,
.search-input input::placeholder {
  font-size: 22rpx;
  color: #b9b9b9;
  flex: 1;
}
.show-search {
  margin: 8rpx 32rpx;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #f5f5f5;
  border-radius: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16.5rpx 20rpx;
}
.show-search img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 8rpx;
}
.show-search span {
  font-size: 22rpx;
  color: #b9b9b9;
}
</style>