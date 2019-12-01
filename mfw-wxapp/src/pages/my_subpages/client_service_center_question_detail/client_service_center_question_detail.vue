<template>
  <div class="container">
    <div class="ques-detail">
      这是一段问题列表
    </div>
    <div class="cat-off">
      <div class="line"></div>
      <div class="co_txt">以上回答对您有帮助吗</div>
      <div class="line"></div>
    </div>
    <div class="btns" v-if="!isTap">
      <div class="btn" @tap="handleUserfull">
        <img src="" />
        <span>有帮助</span>
      </div>
      <div class="btn" @tap="handleUnuserfull">
        <img src="" alt="" />
        <span>无帮助</span>
      </div>
    </div>
    <div class="bt-txt" v-if="isTap">
      {{ isUsefull ? "感谢支持" : "感谢反馈，我们会尽快改进！" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUserfull: false,
      isTap: false
    };
  },
  methods: {
    handleUserfull() {
      this.isTap = true;
      this.isUserfull = true;
    },
    handleUnuserfull() {
      this.isTap = true;
      this.isUserfull = false;
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
}
.ques-detail {
  padding: 22rpx 42rpx;
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.cat-off {
  margin-top: 152rpx;
  display: flex;
  align-items: center;
  padding: 0 42rpx;
}
.line {
  width: 178rpx;
  height: 2rpx;
  background: #888888;
}
.co_txt {
  margin: 0 24rpx;
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.btns {
  margin-top: 40rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btn {
  width: 158rpx;
  height: 56rpx;
  border: 2rpx solid rgba(53, 53, 53, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn > img {
  width: 28rpx;
  height: 28rpx;
  margin-right: 14rpx;
  background: #888888;
}
.btn > span {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.bt-txt {
  margin-top: 40rpx;
  text-align: center;
  font-size: 30rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
</style>
