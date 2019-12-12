<template>
  <div class="container">
    <div class="tabbars">
      <div
        class="tabbar"
        :class="tab.isSelect ? 'tabbar-active' : ''"
        v-for="(tab, index) of tabbars"
        :key="index"
        @tap="handleTabbar(index)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="goods-order">
      <header>商品订单</header>
      <div class="goods-box">
        <div class="goods-item'" v-for="(g, index) of goodses" :key="index">
          <header>
            <div class="order-number">订单号{{ g.num }}</div>
            <div class="order-status" v-if="g.state == 1">待付款</div>
          </header>
          <div class="order-detail">
            <img :src="g.img" />
            <div class="od">
              <div class="od-name">{{ g.name }}</div>
              <div class="od-txt">规格：{{ g.style }}</div>
              <div class="od-txt">单价：￥{{ g.price }}</div>
              <div class="od-txt">数量：{{ g.count }}件</div>
            </div>
          </div>
          <div class="all-price" v-if="g.state == 1">
            合计：<span>￥{{ g.payPrice }}</span>
          </div>
          <div class="order-endtime" v-if="g.state == 1">
            订单将于 <span>{{ g.orderTimes }}分钟</span>后自动关闭
          </div>
          <div class="order-btns">
            <div
              class="btns btn-purple"
              v-if="g.state == 1"
              @tap="goPaymentPage"
            >
              继续支付
            </div>
            <div class="btns" v-if="g.state == 1">取消订单</div>
          </div>
        </div>
      </div>
    </div>
    <!-- wm -->
    <div class="wm-order">
      <header>外卖订单</header>
      <div class="wm-box">
        <div
          class="wm-item"
          :class="wm.state != 0 ? 'br' : ''"
          v-for="(wm, index) of wms"
          :key="index"
        >
          <header>
            <div class="h-left" @tap="goShopDetail(index)">
              <img src="../../../../static/my/sel.png" v-if="wm.state == 0" />
              <div>{{ wm.shopName }}</div>
              <div class="shop-right">
                <img src="../../../../static/icons/right.png" />
              </div>
            </div>
            <div class="h-right">
              <img
                src="../../../../static/icons/trash.png"
                v-if="wm.state == 0"
              />
              <div class="h-right_paied" v-if="wm.state != 0">
                <div class="hrp_txt_1" v-if="wm.state == 1">商家已接单</div>
                <div class="hrp_txt_2" v-if="wm.state == 1">9分钟前</div>
              </div>
            </div>
          </header>
          <div class="wm-list" v-if="wm.state == 0">
            <div class="wm-food" v-for="(f, idx) of wm.foods" :key="idx">
              <div class="wi-left">
                <img src="../../../../static/my/sel.png" />
                <div class="wi-detail">
                  <img :src="f.img" />
                  <div class="wi-d">
                    <div class="wi-name">{{ f.name }}</div>
                    <div class="wi-count">x{{ f.count }}</div>
                  </div>
                </div>
              </div>
              <div class="wi-right">
                <div class="old-price">￥{{ f.prePrice }}</div>
                <div class="now-price">￥{{ f.nowPrice }}</div>
              </div>
            </div>
          </div>
          <div class="other" v-if="wm.state == 0">
            <div>包装费</div>
            <div class="other_txt">￥{{ wm.bzPrice }}</div>
          </div>
          <div class="other mb" v-if="wm.state == 0">
            <div>配送费</div>
            <div class="other_txt">￥{{ wm.psPrice }}</div>
          </div>
          <div class="wm-btns" v-if="wm.state == 0">
            <div class="pay-btn" v-if="wm.state == 0">
              <div class="p-price">￥{{ wm.allPrice }}</div>
              <div class="p-btn">去结算</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbars: [
        { name: "全部订单", isSelect: true },
        { name: "外卖订单", isSelect: false },
        { name: "商品订单", isSelect: false },
      ],
      goodses: [
        {
          num: "123456789123456",
          state: 1,
          img: "../../../static/home/zsswy.png",
          name: "三只松鼠大礼包火红A版",
          style: "1998g/9袋装",
          price: "199/件",
          count: 1,
          payPrice: 119.0,
          orderTimes: 10
        }
      ],
      wms: [
        {
          shopName: "三品王(青秀万达店)",
          foods: [
            {
              name: "原汤牛肉粉",
              count: 1,
              prePrice: 13,
              nowPrice: 10,
              img: "../../../static/home/zsswy.png",
              isSelect: true
            },
            {
              name: "原汤牛肉粉",
              count: 1,
              prePrice: 13,
              nowPrice: 10,
              img: "../../../static/home/zsswy.png",
              isSelect: true
            },
            {
              name: "原汤牛肉粉",
              count: 1,
              prePrice: 13,
              nowPrice: 10,
              img: "../../../static/home/zsswy.png",
              isSelect: true
            }
          ],
          bzPrice: 4,
          psPrice: 2.5,
          allPrice: 50.5,
          state: 0
        },
      ]
    };
  },
  methods: {
    handleTabbar(index) {
      if (!this.tabbars[index].isSelect) {
        for (let i of this.tabbars) {
          i.isSelect = false;
        }
        this.tabbars[index].isSelect = true;
      }
    },
    goGoodsEvalPage() {
      wx.navigateTo({
        url: "../my_order_eval_goods/main"
      });
    },
    goWmEvalPage() {
      wx.navigateTo({
        url: "../my_order_eval_wm/main"
      });
    },
    goPaymentPage() {
      wx.navigateTo({
        url: "../home_subpage/order_payment/main"
      });
    },
    goShopDetail(index){
        wx.navigateBack({
            detal:1
        })
    }
  }
};
</script>

<style scoped>
.container {
  background: #f9f9f9;
  position: relative;
}
/* tabbars */
.tabbars {
  height: 64rpx;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  line-height: 64rpx;
}
.tabbar {
  font-family: PingFang SC;
  color: #353535;
  width: 33%;
  text-align: center;
  font-size: 26rpx;
  height: 100%;
  line-height: inherit;
}
.tabbar-active {
  color: #723aff;
  position: relative;
}
.tabbar-active::after {
  content: "";
  position: absolute;
  bottom: 6rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 20rpx;
  border-bottom: 2rpx solid #723aff;
  border-radius: 0% 0% 50% 50%;
}
/* 商品订单 */
.goods-order {
  margin-top: 90rpx;
  padding: 0 32rpx;
}
.goods-order > header {
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  margin-bottom: 16rpx;
}
.goods-box {
}
.goods-item {
  box-shadow: 0px 1px 6px rgba(136, 136, 136, 0.15);
  border-radius: 20rpx;
  background: #fff;
  padding: 20rpx;
  margin-bottom: 34rpx;
}
.goods-item > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22rpx;
  margin-bottom: 18rpx;
}
.order-number {
  color: #888888;
  flex: 1;
}
.order-status {
  color: #723aff;
}
.order-detail {
  display: flex;
  align-items: center;
}
.order-detail > img {
  width: 144rpx;
  height: 144rpx;
  margin-right: 24rpx;
}
.od {
  display: flex;
  flex-direction: column;
}
.od-name {
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(46, 46, 46, 1);
}
.od-txt {
  font-size: 22rpx;
  color: rgba(136, 136, 136, 1);
  margin-top: 4rpx;
}
.all-price {
  text-align: right;
  color: #313131;
  font-size: 22rpx;
}
.all-price > span {
  color: #723aff;
  font-size: 34rpx;
  font-weight: bold;
}
.order-endtime {
  font-size: 22rpx;
  color: #888888;
  text-align: right;
  margin-bottom: 14rpx;
}
.order-endtime > span {
  color: #723aff;
}
.order-msg {
  background: #fafafa;
  border-radius: 12rpx;
  padding-left: 28rpx;
  padding-top: 10rpx;
  padding-bottom: 20rpx;
}
.order-msg > header {
  font-size: 22rpx;
  color: #b2b2b2;
  margin-bottom: 8rpx;
}
.order-md {
  display: flex;
  align-items: center;
}
.order-md > img {
  width: 60rpx;
  height: 60rpx;
  margin-right: 20rpx;
  flex-shrink: 0;
}
.msg {
  flex: 1;
  font-size: 22rpx;
}
.msg-state {
  color: rgba(0, 157, 255, 1);
}
.msg-now {
  color: #b2b2b2;
}
.order-btns {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.btns {
  padding: 8rpx 36rpx;
  border: 1px solid #707070;
  border-radius: 28rpx;
  font-size: 26rpx;
  text-align: center;
  color: #353535;
  margin-left: 16rpx;
}
.btn-purple {
  border: 2rpx solid #723aff;
  color: #723aff;
}
/* 外卖订单 */
.wm-order {
  padding: 0 40rpx;
}
.wm-order > header {
  font-size: 36rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  margin-bottom: 16rpx;
}
.wm-box {
}
.wm-item {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 6px rgba(136, 136, 136, 0.15);
  border-radius: 20rpx 20rpx 0px 0px;
  margin-bottom: 32rpx;
  padding: 20rpx 0;
}
.br {
  border-radius: 20rpx;
}
.wm-item > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx 18rpx;
  border-bottom: 2rpx solid #f5f5f5;
}
.h-left {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 26rpx;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.h-left > img {
  width: 26rpx;
  height: 26rpx;
  margin-right: 20rpx;
}
.h-right {
  flex-shrink: 0;
}
.shop-right {
  display: flex;
  align-items: center;
}
.shop-right > img {
  width: 32rpx;
  height: 32rpx;
  margin-left: 18rpx;
}
.h-right > img {
  width: 40rpx;
  height: 40rpx;
}
.h-right_paied {
  text-align: right;
}
.hrp_txt_1 {
  font-size: 26rpx;
  color: rgba(53, 53, 53, 1);
}
.hrp_txt_2 {
  font-size: 18rpx;
  color: rgba(178, 178, 178, 1);
}
.wm-list {
  border-bottom: 2rpx solid #f5f5f5;
}
.wm-food {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 36rpx 24rpx 20rpx;
}
.wi-left {
  display: flex;
  align-items: center;
}
.wi-left > img {
  width: 26rpx;
  height: 26rpx;
  margin-right: 20rpx;
}
.wi-detail {
  display: flex;
  align-items: center;
}
.wi-detail > img {
  width: 76rpx;
  height: 76rpx;
  margin-right: 14rpx;
}
.wi-name {
  font-size: 26rpx;
  color: #353535;
  margin-bottom: 22rpx;
}
.wi-count {
  font-size: 20rpx;
  color: rgba(136, 136, 136, 1);
}
.wi-right {
  display: flex;
  align-items: center;
  font-size: 26rpx;
}
.old-price {
  text-decoration: line-through;
  color: #d2d2d2;
}
.now-price {
  color: #353535;
  font-weight: bold;
}
.paied-wm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26rpx;
  color: #353535;
  padding: 20rpx 26rpx;
  border-radius: 0 0 20rpx 20rpx;
}
.other {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 58rpx;
  padding-right: 36rpx;
  margin-top: 14rpx;
}
.mb {
  margin-bottom: 14rpx;
}
.other > div {
  font-size: 26rpx;
  color: #353535;
}
.other_txt {
  font-weight: bold;
}
.wm-btns {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 20rpx 30rpx 0;
  border-top: 2rpx solid #f5f5f5;
}
.pay-btn {
  width: 248rpx;
  height: 44rpx;
  border-radius: 32rpx;
  overflow: hidden;
  line-height: 44rpx;
  display: flex;
  align-items: center;
  margin-bottom: 26rpx;
}
.pay-btn > div {
  width: 50%;
  height: 100%;
  line-height: inherit;
  font-size: 26rpx;
  text-align: center;
}
.p-price {
  background: #f2f2f2;
  color: rgba(114, 58, 255, 1);
}
.p-btn {
  background: rgba(114, 58, 255, 1);
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.wm-btn {
  padding: 6rpx 20rpx;
  border-radius: 26rpx;
  border: 2rpx solid #723aff;
  font-size: 26rpx;
  margin-left: 26rpx;
}
.wm-btn_eval {
  color: rgba(114, 58, 255, 1);
}
.wm-btn_recur {
  background: #723aff;
  color: #fff;
}
</style>
