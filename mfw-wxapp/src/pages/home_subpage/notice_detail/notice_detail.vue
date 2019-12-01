<template>
  <div class="contianer">
    <div class="notice-list">
      <div class="notice-item" v-for="(item, index) of list" :key="index">
        <div class="notice-title">
          <div class="title">{{item.title}}</div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="notice-content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "这是消息标题",
          time: "2019/11/7 14:50:36",
          content:
            "这是一段内容文字用来测试使用，这是一段内容文字用来测试使用，这是一段内容文字用来测试使用"
        },
        {
          title: "这是消息标题",
          time: "2019/11/7 14:50:36",
          content:
            "这是一段内容文字用来测试使用，这是一段内容文字用来测试使用，这是一段内容文字用来测试使用"
        }
      ]
    };
  },
  beforeCreate() {
    console.log(this);
  },
  beforeMount() {
    console.log(this.$mp.query.index);
  }
};
</script>

<style scoped>
.notice-list {
  display: flex;
  flex-direction: column;
}
.notice-item {
  padding: 34rpx 0 16rpx;
  margin: 0 30rpx 0 50rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
.notice-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
  color: #353535;
}
.time,
.notice-content {
  font-size: 26rpx;
  color: #b2b2b2;
}
.notice-content {
  margin-top: 16rpx;
}
</style>