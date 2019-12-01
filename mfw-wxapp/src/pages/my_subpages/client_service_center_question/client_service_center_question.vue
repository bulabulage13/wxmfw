<template>
  <div class="container">
    <div class="ques-box">
      <div
        class="ques"
        v-for="(q, index) of questions"
        :key="index"
        @tap="goQuestionDetilPage(index)"
      >
        <div class="q_txt">{{ q.text }}</div>
        <div class="q_right">></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 },
        { text: "这是问题列表", id: 0 }
      ]
    };
  },
  methods: {
    goQuestionDetilPage(index) {
      wx.navigateTo({
        url: "../client_service_center_question_detail/main"
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #f1f1f1;
  height: 100%;
}
.ques-box {
  height: 100%;
  background: #fff;
  margin-top: 24rpx;
}
.ques {
  display: flex;
  align-items: center;
  margin: 0 40rpx;
  padding: 24rpx 0;
  border-bottom: 2rpx solid #d2d2d2;
}
.q_txt {
  flex: 1;
  font-size: 28rpx;
  color: rgba(53, 53, 53, 1);
}
.q_right {
  color: #b2b2b2;
}
</style>
