<template>
  <div class="container">
    <div class="add-box">
      <div class="input-modal">
        <div class="im_txt">收货人</div>
        <input type="text" placeholder="姓名" v-model="userName" />
      </div>
      <div class="input-modal">
        <div class="im_txt">电话</div>
        <input type="tel" placeholder="手机号码" v-model="phone" />
      </div>
      <div class="input-modal" @tap="showCityModal">
        <div class="im_txt">地址</div>
        <div class="show-picker">
          <div class="sp_txt">选择收货地址</div>
          <div class="sp_txt">></div>
        </div>
      </div>
      <div class="input-modal" @tap="showPickerModal">
        <div class="im_txt">收货时间</div>
        <div class="show-picker">{{ timeTxt }}</div>
      </div>
      <div class="input-modal">
        <div class="im_txt">详细地址</div>
        <textarea placeholder="街道、楼牌号等" />
      </div>
    </div>
    <div class="set">
      <div class="s_txt">设置为默认地址</div>
      <switch
        class="checke"
        color="#723aff"
        :checked="isChecked"
        @change="changeSwitch"
      ></switch>
    </div>
    <div class="save-btn">保存</div>
    <div class="time-container" v-if="isShow">
      <div
        class="time-wrapper"
        @touch="preventD"
        @tap="hiddenPickerModal('t')"
      ></div>
      <div class="time-box" :animation="animation">
        <picker-view class="time-p" @change="handleChange" :value="index">
          <picker-view-column class="time-pvc">
            <div class="pvc_txt" v-for="(t, index) of times" :key="index">
              {{ t.text }}
            </div>
          </picker-view-column>
        </picker-view>
        <div class="confirm-btn" @tap="confirmGetTime">确定</div>
        <div class="close" @tap="hiddenPickerModal('t', 400)"></div>
      </div>
    </div>
    <div class="region-container" v-if="isShowCity">
      <div
        class="region-wrapper"
        @touch="preventD"
        @tap="hiddenPickerModal('g')"
      ></div>
      <div class="region-box" :animation="gAnimation">
        <header>{{ regionTitle }}</header>
        <picker-view class="region-p" @change="regionChange" :value="index">
          <picker-view-column class="region-pvc">
            <div class="pvc_txt" v-for="(p, index) of provinces" :key="index">
              {{ p.name }}
            </div>
          </picker-view-column>
          <picker-view-column>
            <div class="pvc_txt" v-for="(c, index) of getCities" :key="index">
              {{ c.name || "请选择市" }}
            </div>
          </picker-view-column>
          <picker-view-column>
            <div class="pvc_txt" v-for="(a, index) of getAreas" :key="index">
              {{ a.name || "请选择区" }}
            </div>
          </picker-view-column>
        </picker-view>
        <div class="confirm-btn_g" @tap="confirmGetAddr">确定</div>
        <div class="close" @tap="hiddenPickerModal('g', 520)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "../../../utils/region";

export default {
  data() {
    return {
      userName: "",
      phone: "",
      isChecked: true,
      isShow: false,
      isShowCity: false,
      times: [
        {
          text: "收货时间不限",
          id: 0
        },
        {
          text: "休息日节假日收货",
          id: 1
        },
        {
          text: "工作日收货",
          id: 2
        }
      ],
      timeTxt: "收货时间不限",
      index: 0,
      isDefault: true,
      animation: {},
      gAnimation: {},
      provinces: datas.provinces,
      pIdx: 0,
      cIdx: 0,
      aIdx: 0,
      cities: [],
      areas: []
    };
  },
  computed: {
    getCities() {
      let id = this.provinces[this.pIdx].id;
      console.log(this.cIdx);
      return datas.cities[id];
    },
    getAreas() {
      let id = this.getCities[this.cIdx].id;
      return datas.areas[id];
    },
    regionTitle() {
      let p = this.provinces[this.pIdx].name;
      let c = this.getCities[this.cIdx].name;
      let a = this.getAreas[this.aIdx].name;
      return `${p}${c}${a}`;
    }
  },
  mounted() {
    console.log(this.provinces);
    console.log(this.cities);
    console.log(this.areas);
    console.log(datas);
  },
  methods: {
    // 动画
    doAnimation() {
      let self = this;
      let animation = wx.createAnimation({
        duration: 200,
        delay: 0,
        timingFunction: "ease"
      });
      setTimeout(() => {
        animation.bottom(0).step();
        self.animation = animation.export();
      }, 200);
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
        self.gAnimation = animation.export();
      }, 200);
    },
    hiddenAnimation() {
      let self = this;
      let animation = wx.createAnimation({
        duration: 100,
        delay: 0,
        timingFunction: "ease"
      });
      setTimeout(() => {
        animation.bottom(-400).step();
        self.animation = animation.export();
      }, 200);
    },
    hiddenGAnimation() {
      let self = this;
      let animation = wx.createAnimation({
        duration: 100,
        delay: 0,
        timingFunction: "ease"
      });
      setTimeout(() => {
        animation.bottom(-520).step();
        self.gAnimation = animation.export();
      }, 200);
    },
    preventD() {
      return;
    },
    changeSwitch(e) {
      console.log(e);
      this.isChecked = e.mp.detail.value;
    },
    handleChange(e) {
      this.index = e.target.value;
    },
    regionChange(e) {
      console.log(e);
      if (this.pIdx != e.mp.detail.value[0]) {
        this.pIdx = e.mp.detail.value[0];
        this.cIdx = 0;
        this.aIdx = 0;
      }else{
        this.cIdx = e.mp.detail.value[1];
        this.aIdx = e.mp.detail.value[2];
      }
      console.log(this.cIdx)
      console.log(this.aIdx)
    },
    showPickerModal() {
      this.isShow = true;
      this.doAnimation();
    },
    showCityModal() {
      this.goAnimation();
      this.isShowCity = true;
    },
    hiddenPickerModal(a) {
      console.log(a);
      if (a == "t") {
        this.isShow = false;
        this.hiddenAnimation();
      } else {
        this.isShowCity = false;
        this.hiddenGAnimation();
      }
    },
    confirmGetTime() {
      this.hiddenAnimation();
      this.isShow = false;
      this.timeTxt = this.times[this.index].text;
    },
    confirmGetAddr() {
      this.hiddenGAnimation();
      this.isShowCity = false;
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  overflow: hidden;
}
.add-box {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px rgba(178, 178, 178, 0.16);
}
.input-modal {
  display: flex;
  align-items: flex-start;
  margin: 0 44rpx;
  padding: 26rpx 0 18rpx;
  border-bottom: 2rpx solid #d2d2d2;
}
.input-modal:last-child {
  border-bottom: none;
}
.im_txt {
  font-size: 28rpx;
  color: #353535;
  flex-shrink: 0;
  width: 112rpx;
  margin-right: 38rpx;
}
.input-modal > input,
.input-modal > textarea {
  flex: 1;
  font-size: 28rpx;
  color: #353535;
  z-index: 1;
}
.input-modal > textarea {
  height: 208rpx;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 28rpx;
  color: #b2b2b2;
}
.show-picker {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28rpx;
  color: #b2b2b2;
}
.sp_txt {
  font-size: 28rpx;
  color: #ffab3a;
}

.set {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26rpx 82rpx 30rpx 42rpx;
  margin-top: 24rpx;
  box-shadow: 0px 2px 6px rgba(178, 178, 178, 0.16);
}
.s_txt {
  font-size: 28rpx;
  color: #353535;
}
.checke {
  transform: scale(0.6);
}

.save-btn {
  margin: 100rpx auto 0;
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.time-container,
.region-container {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
}
.time-wrapper,
.region-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.time-box {
  height: 800rpx;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: -800rpx;
  border-radius: 16rpx 16rpx 0 0;
  overflow: hidden;
  z-index: 99;
}
.region-box {
  height: 1040rpx;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: -1040rpx;
  border-radius: 16rpx 16rpx 0 0;
  overflow: hidden;
  z-index: 99;
}
.region-box > header {
  font-size: 36rpx;
  color: #353535;
  margin: 162rpx 0;
  text-align: center;
}
.time-p {
  height: 180rpx;
  background: #fff;
  z-index: 9;
  margin-top: 184rpx;
}
.time-pvc {
  margin: 0 200rpx;
  padding: 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.region-p {
  height: 180rpx;
  background: #fff;
  z-index: 9;
  margin-top: 184rpx;
}
.region-pvc {
  margin: 0 20rpx;
  padding: 12rpx 0;
  width: 200rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pvc_txt {
  font-size: 28rpx;
  line-height: 68rpx;
  color: #353535;
  text-align: center;
}

.confirm-btn,
.confirm-btn_g {
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: rgba(114, 58, 255, 1);
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  font-size: 36x;
  font-weight: bold;
  color: #ffffff;
  margin: 180rpx auto 0;
}
.confirm-btn_g {
  margin: 216rpx auto 0;
}
.close {
  width: 30rpx;
  height: 30rpx;
  background: red;
  position: absolute;
  top: 26rpx;
  right: 26rpx;
  z-index: 9;
}
</style>
