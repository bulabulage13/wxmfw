<template>
  <div class="container">
    <header>输入标题18字左右阅读体验更佳</header>
    <div class="input_modal">
      <input type="text" v-model.trim="val" maxlength="35" />
      <label>{{ getVal }}/35个字</label>
    </div>
    <div class="txtarea_modal">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="你可以在此添加正文,给文章分段，使文章表达更清晰~"
      ></textarea>
    </div>
    <div class="next-btn" @tap="goNextPage">下一步</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ""
    };
  },
  computed: {
    getVal() {
      console.log(this.val);
      if (this.val.length < 36) {
        return this.val.length;
      }
    }
  },
  methods:{
    goNextPage(){
      wx.navigateTo({
        url:"../my_trail_second/main"
      })
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  background: #f9f9f9;
}
.container > header {
  padding: 18rpx 32rpx;
  font-size: 32rpx;
  font-weight: bold;
  color: #888888;
}
.input_modal {
  display: flex;
  align-items: center;
  padding-bottom: 8rpx;
  margin: 0 30rpx 0 34rpx;
  border-bottom: 2rpx solid #888888;
}
.input_modal > input {
  flex: 1;
}
.input_modal > label {
  font-size: 22rpx;
  color: #b2b2b2;
  flex-shrink: 0;
}
.txtarea_modal {
  margin: 24rpx 32rpx;
}
textarea {
  width: 100%;
  height: 820rpx;
  font-size: 22rpx;
  color: #b2b2b2 !important;
}
textarea::placeholder {
  font-size: 22rpx;
  color: #b2b2b2 !important;
}
.next-btn {
  position: absolute;
  bottom: 80rpx;
  left: 50%;
  margin-left: -168rpx;
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}
</style>
