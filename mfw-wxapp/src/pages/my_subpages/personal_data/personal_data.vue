<template>
  <div class="container">
    <section>
      <div class="set-modal" @tap="changeUserPic">
        <div class="sm-left">头像</div>
        <div class="sm-right">
          <img class="tx" :src="userInfo.avatarUrl" />
          <img class="right" src="../../../../static/icons/right.png" />
        </div>
      </div>
      <div class="set-modal">
        <div class="sm-left">昵称</div>
        <div class="sm-right">
          <input
            type="text"
            v-model="userInfo.nickName"
            @change="setUserName"
          />
          <img class="right" src="../../../../static/icons/right.png" />
        </div>
      </div>
      <div class="set-modal">
        <div class="sm-left">性别</div>
        <div class="sm-right">
          <div class="txt">
            {{
              userInfo.gender == 1 ? "男" : userInfo.gender == 2 ? "女" : "保密"
            }}
          </div>
          <img class="right" src="../../../../static/icons/right.png" />
        </div>
      </div>
      <div class="set-modal">
        <div class="sm-left">生日</div>
        <div class="sm-right" @tap="selDate">
          <div class="txt">{{ birthDay }}</div>
          <img class="right" src="../../../../static/icons/right.png" />
        </div>
      </div>
    </section>
    <div class="date-box" v-if="isShow" :animation="animation">
      <div
        class="date-wrapper"
        @touch="preventD"
        @tap.prevent="hiddenDateModal"
      ></div>
      <div class="date">
        <picker-view @change="getHandleChange" :value="value">
          <picker-view-column>
            <div v-for="(y, index) of years" :key="index">{{ y }}年</div>
          </picker-view-column>
          <picker-view-column>
            <div v-for="(m, index) of months" :key="index">{{ m }}月</div>
          </picker-view-column>
          <picker-view-column>
            <div v-for="(d, index) of days" :key="index">{{ d }}日</div>
          </picker-view-column>
        </picker-view>
        <div class="close" @tap="hiddenDateModal">
          <img src="../../../../static/icons/delete.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import date from "../../../utils/date";
export default {
  data() {
    return {
      pic: "../../../../static/my/user.png",
      years: date.years,
      months: date.months,
      days: date.days,
      isShow: false,
      animation: {},
      userInfo: {},
      value: [date.years.length, 0, 0],
      birthDay: "请选择"
    };
  },
  mounted() {
    this.userInfo = wx.getStorageSync("userInfo");
  },
  methods: {
    preventD() {
      return;
    },
    changeUserPic() {
      let self = this;
      wx.chooseImage({
        count: 1,
        sizeType: "compressed",
        success(res) {
          console.log(res.tempFiles[0].path);
          self.pic = res.tempFiles[0].path;
          self.userInfo.avatarUrl = res.tempFiles[0].path;
          wx.setStorageSync("userInfo", self.userInfo);
          wx.uploadFile({
            url: "http://129.204.180.3:8090/setUserHeader",
            filePath: res.tempFiles[0].path,
            name: "file",
            formData: { userId: wx.getStorageSync("userId") },
            success(res) {
              console.log(res);
            },
            fail(err) {
              console.log(err);
            }
          });
        },
        fail(res) {
          console.log(res);
        }
      });
    },
    setUserName() {
      let userName = this.userInfo.nickName;
      let self = this;
      this.$fly
        .post("setUserName", {
          userName: userName,
          userId: wx.getStorageSync("userId")
        })
        .then(res => {
          if (res.state == 0) {
            wx.showToast({
              title: "修改成功",
              icon: "none",
              duration: 3000
            });
            wx.setStorageSync("userInfo", self.userInfo);
          } else {
            wx.showToast({
              title: "修改失败",
              icon: "none",
              duration: 3000
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goAnimation() {
      let self = this;
      let animation = wx.createAnimation({
        duration: 200,
        delay: 0,
        timingFunction: "ease"
      });
      setTimeout(() => {
        animation.bottom(0).step();
        self.animation = animation.export();
      });
    },
    hiddenAnimation() {
      let self = this;
      let animation = wx.createAnimation({
        duration: 100,
        delay: 0,
        timingFunction: "ease"
      });
      setTimeout(() => {
        animation.bottom(-212).step();
        self.animation = animation.export();
      }, 200);
    },
    selDate() {
      this.isShow = true;
      this.goAnimation();
    },
    hiddenDateModal(e) {
      let value = this.value;
      let self = this;
      this.isShow = false;
      this.hiddenAnimation();
      this.birthDay =
        this.years[value[0]] +
        "/" +
        this.months[value[1]] +
        "/" +
        this.days[value[2]];
      this.$fly
        .post("setUserBirthday", {
          userId: wx.getStorageSync("userId"),
          userBirthday: self.birthDay
        })
        .then(res => {
          if (res.state == 0) {
            wx.showToast({
              title: "出生年月日修改成功",
              icon: "none"
            });
          } else {
            wx.showToast({
              title: "修改失败",
              icon: "none"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHandleChange(e) {
      console.log(e);
      this.value = e.mp.detail.value;
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  background: #f9f9f9;
  height: 100%;
}
section {
  background: #fff;
  padding: 0 40rpx;
}
.set-modal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120rpx;
  border-bottom: 2rpx solid #f9f9f9;
}
.sm-left {
  font-size: 28rpx;
  color: rgba(23, 23, 23, 1);
}
.sm-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.tx {
  width: 104rpx;
  height: 104rpx;
  border-radius: 50%;
  overflow: hidden;
}
.right {
  width: 32rpx;
  height: 32rpx;
  margin-left: 10rpx;
}
.sm-right > input,
.txt {
  flex: 1;
  font-size: 28rpx;
  color: rgba(136, 136, 136, 1);
  text-align: right;
}
.date-box {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: -424rpx;
}
.date-wrapper {
  height: 100%;
  background: rgba(23, 23, 23, 0.7);
  z-index: 1;
}
.date {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 424rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
}
picker-view {
  width: 560rpx;
  height: 140rpx;
}
picker-view-column {
  text-align: center;
  font-size: 28rpx;
  color: #353535;
  line-height: 2.5;
}
.close {
  position: absolute;
  top: 16rpx;
  right: 16rpx;
}
.close > img {
  width: 32rpx;
  height: 32rpx;
}
</style>
