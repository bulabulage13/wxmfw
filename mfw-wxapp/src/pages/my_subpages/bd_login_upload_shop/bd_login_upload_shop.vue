<template>
  <div class="container">
    <div class="upload-box">
      <div class="shop-photo">
        <header>门店照片</header>
        <div class="photoes">
          <div
            class="photo"
            v-for="(p, index) of shopPhotoes"
            :key="index"
            @tap="chooseImgs(index)"
          >
            <div class="upload_before" v-if="!p.isPhoto">
              <img src="../../../../static/icons/camera.png" />
              <div class="photo-name">{{ p.name }}</div>
            </div>
            <div class="upload_after" v-if="p.isPhoto">
              <img :src="p.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="shop-logo">
        <header>店铺logo <span>(有则上传，无则留空)</span></header>
        <div class="logo" @tap="chooseLogo">
          <div class="upload_before" v-if="!isLogo">+</div>
          <div class="upload_after" v-if="isLogo">
            <img :src="logo" />
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
      shopPhotoes: [
        {
          name: "门店招牌照片",
          isPhoto: false,
          img: ""
        },
        {
          name: "门店周边环境照片",
          isPhoto: false,
          img: ""
        },
        {
          name: "内部环境或厨房照片",
          isPhoto: false,
          img: ""
        }
      ],
      isLogo: false,
      logo: ""
    };
  },
  methods: {
    chooseImgs(index) {
      let self = this;
      wx.chooseImage({
        count: 1,
        success(res) {
          console.log(res);
          self.shopPhotoes[index].isPhoto = true;
          self.shopPhotoes[index].img = res.tempFilePaths[0];
        },
        fail(err) {
          console.log(err);
        }
      });
    },
    chooseLogo() {
      let self = this;
      wx.chooseImage({
        count: 1,
        success(res) {
          self.isLogo = true;
          self.logo = res.tempFilePaths[0];
        },
        fail(res) {}
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
}
.upload-box {
  margin-top: 12rpx;
}
.shop-photo > header,
.shop-logo > header {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
  padding: 0 60rpx 32rpx;
  font-weight: bold;
}
.shop-logo > header > span {
  font-size: 26rpx;
  color: #b2b2b2;
  margin-left: 12rpx;
  font-weight: normal;
}
.photoes {
  display: flex;
  flex-wrap: wrap;
  padding: 0 44rpx;
}
.photo {
  width: 298rpx;
  height: 200rpx;
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
  border-radius: 6rpx;
  margin: 0 16rpx 32rpx;
}
.upload_before {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.upload_before > img {
  width: 44rpx;
  height: 44rpx;
  margin-bottom: 12rpx;
}
.photo-name {
  font-size: 22rpx;
  color: rgba(136, 136, 136, 1);
}
.upload_after {
  height: 100%;
  width: 100%;
}
.upload_after > img {
  height: 100%;
  width: 100%;
  background: #eee;
}
.logo {
  margin: 0 60rpx;
  height: 200rpx;
  line-height: 200rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px rgba(210, 210, 210, 0.35);
  border-radius: 6rpx;
  text-align: center;
}
.confirm {
  width: 336rpx;
  height: 80rpx;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
  text-align: center;
  line-height: 80rpx;
  margin: 186rpx auto;
}
</style>
