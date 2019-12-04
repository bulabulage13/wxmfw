<template>
  <div class="container">
    <div class="upload-box">
      <div class="upload-imgs">
        <div class="upload-list">
          <div
            class="upload-item"
            v-for="(m, index) of modals"
            :key="index"
            @tap="uploadImg(index)"
          >
            <div class="upload-item_before" v-if="!m.isUpload">
              <img src="../../../../static/icons/camera.png"/>
              <div class="name">{{ m.name }}</div>
            </div>
            <div class="upload-item_after" v-if="m.isUpload">
              <img :src="m.url" />
            </div>
          </div>
        </div>
      </div>
      <div class="fill-in-box">
        <div class="input-modal">
          <label>营业执照名</label>
          <input type="text" placeholder="填写营业执照名" />
        </div>
        <div class="input-modal">
          <label>统一社会信用代码</label>
          <input type="text" placeholder="填写统一社会信用代码" />
        </div>
        <div class="input-modal">
          <label>身份证号</label>
          <input type="number" placeholder="填写身份证号码" maxlength="18" />
        </div>
        <div class="input-modal">
          <label>身份证有效期</label>
          <div class="sel">
            <div>填写身份证有效期</div>
            <div>></div>
          </div>
        </div>
      </div>
      <div class="confirm">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modals: [
        { name: "营业执照", isUpload: false, url: "" },
        { name: "食品卫生许可证", isUpload: false, url: "" },
        { name: "身份证正面", isUpload: false, url: "" },
        { name: "身份证反面", isUpload: false, url: "" },
        { name: "店主手持身份证照片", isUpload: false, url: "" }
      ]
    };
  },
  methods: {
    uploadImg(index) {
      let self = this;
      wx.chooseImage({
        count: 1,
        success(res) {
          console.log(res);
          self.modals[index].isUpload = true;
          self.modals[index].url = res.tempFilePaths[0];
        },
        fail(res) {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style scoped>
.contaienr {
  background: #fff;
}
.upload-box {
  padding: 36rpx 30rpx 0 60rpx;
}
.upload-imgs {
}
.upload-list {
  display: flex;
  flex-wrap: wrap;
}
.upload-item {
  width: 300rpx;
  height: 200rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
  margin: 0 30rpx 30rpx 0;
}
.upload-item:last-child {
  width: 628rpx;
  height: 472rpx;
}
.upload-item_before {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.upload-item_before > img {
  width: 42rpx;
  height: 42rpx;
  margin-bottom: 12rpx;
}
.name {
  font-size: 22rpx;
  color: rgba(136, 136, 136, 1);
}
.upload-item_after {
  width: 100%;
  height: 100%;
}
.upload-item_after > img {
  width: 100%;
  height: 100%;
}

.fill-in-box {
}
.input-modal {
  display: flex;
  align-items: center;
  padding-top: 46rpx;
  padding-bottom: 12rpx;
  border-bottom: 2rpx solid #d2d2d2;
  font-size: 28rpx;
}
.input-modal > label {
  width: 224rpx;
  margin-right: 56rpx;
  color: #171717;
}
input {
  flex: 1;
  color: #171717;
}
input::placeholder,
.sel {
  color: #b2b2b2;
  font-size: 28rpx;
}
.sel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.confirm {
  width: 336rpx;
  height: 80rpx;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 40rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin: 148rpx auto;
}
</style>
