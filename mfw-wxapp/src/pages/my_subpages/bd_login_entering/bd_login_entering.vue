<template>
  <div class="contaienr">
    <div class="shop-entering">
      <div class="input-modal">
        <div class="input-modal_label">行业分类</div>
        <div class="input-modal_input">
          <div class="txt_1">请选择行业分类</div>
          <div class="txt_right">></div>
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">店铺名称</div>
        <div class="input-modal_input">
          <input type="text" placeholder="请填写具体店铺名" />
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">商铺所在地区</div>
        <div class="input-modal_input">
          <div class="txt_1">请选择</div>
          <div class="txt_right">></div>
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">商铺详细地址</div>
        <div class="input-modal_input">
          <textarea placeholder="街道、楼牌号"></textarea>
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">商铺所在经纬度</div>
        <div class="input-modal_input">
          <div class="txt_1">请填写所在经纬度</div>
          <div class="txt_right">></div>
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">营业开始时间</div>
        <div class="input-modal_input">
          <div class="txt_1">请填写时间</div>
          <div class="txt_right">></div>
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">客服电话</div>
        <div class="input-modal_input">
          <input type="tel" placeholder="填写客服电话" />
        </div>
      </div>
      <div class="input-modal">
        <div class="input-modal_label">店铺简介</div>
        <div class="input-modal_input">
          <input type="text" placeholder="填写商家简介" />
        </div>
      </div>
    </div>
    <div class="submit">
      提交
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #fff;
}

.shop-entering {
}
.input-modal {
  margin: 0 32rpx;
  padding: 32rpx 0;
  border-bottom: 2rpx solid #d2d2d2;
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
  font-size: 28rpx;
}
.input-modal_label {
  color: #171717;
  width: 196rpx;
  margin-right: 134rpx;
}
.input-modal_input {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b2b2b2;
}
textarea {
  width: 100%;
  height: 150rpx;
}
textarea::placeholder, input::placeholder{
  color: #b2b2b2;
}
.txt_1 {
}
.txt_right {
  margin-left: 40rpx;
}

.submit {
  margin: 120rpx auto 0;
  width: 336rpx;
  height: 80rpx;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 80rpx;
  text-align: center;
}
</style>
