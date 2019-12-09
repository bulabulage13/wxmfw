<template>
  <div class="container">
    <div class="userinfo">
      <div class="user" @tap="goGetUserInfoPage">
        <img :src="isLogin ? '' : '../../../static/my/user.png'" />
        <span>{{ isLogin ? "用户名称" : "登录/注册" }}</span>
      </div>
      <div class="set" v-if="isLogin" @tap="goSetPersonData">
        <img src="../../../static/icons/set.png" />
        <span>编辑资料</span>
      </div>
    </div>
    <div class="my-goods">
      <header>我的商品</header>
      <div class="my-goods-modals">
        <div class="my-goods-modal" @tap="goOrderPage">
          <img src="../../../static/my/dfk.png" alt />
          <div>待付款</div>
        </div>
        <div class="my-goods-modal">
          <img src="../../../static/my/dpj.png" alt />
          <div>待评价</div>
        </div>
        <div class="my-goods-modal">
          <img src="../../../static/my/sh.png" alt />
          <div>售后</div>
        </div>
        <div class="my-goods-modal">
          <img src="../../../static/my/qbdd.png" alt />
          <div>全部订单</div>
        </div>
      </div>
      <div class="my-goods-notice">
        <header>派送实时消息</header>
        <div class="notice-box">
          <img src alt />
          <div class="notice-box-txt">
            <div class="state">派送状态</div>
            <div class="notice-content">
              这是一段测试内容，仅供测试使用。。。。。呵呵呵呵
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-services">
      <header>其他服务</header>
      <div class="my-services-modals">
        <div
          class="my-services-modal"
          v-for="(service, index) of serviceModals"
          :key="index"
          @tap="goModalPage(index)"
        >
          <img :src="service.src" alt />
          <div class="modal-name">{{ service.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      serviceModals: [
        {
          name: "我的钱包",
          src: "../../static/my/qb.png",
          page: "../my_subpages/my_wallet/main"
        },
        {
          name: "客服中心",
          src: "../../static/my/kefzx.png",
          page: "../my_subpages/client_service_center/main"
        },
        {
          name: "关于我们",
          src: "../../static/my/gywm.png",
          page: "../my_subpages/about_us/main"
        },
        {
          name: "我的收藏",
          src: "../../static/my/sc.png",
          page: "../my_subpages/my_collection/main"
        },
        {
          name: "信息采集",
          src: "../../static/my/xxcj.png",
          page: "../my_subpages/bd_login/main"
        },
        {
          name: "我的试用",
          src: "../../static/my/wdsy.png",
          page: "../my_subpages/my_trail/main"
        },
        {
          name: "收货地址",
          src: "../../static/my/shdz.png",
          page: "../my_subpages/receiving_address/main"
        },
        {
          name: "商家入住",
          src: "../../static/my/sjrz.png",
          page: "../my_subpages/bd_login/main"
        }
      ]
    };
  },
  beforeMount() {
    // console.log(this.$store.state.isLogin)
    console.log(this.isLogin);
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    goGetUserInfoPage() {
      let self = this;
      let appId = "wx579653893a42166a";
      let secret = "9184547d7ad46c9b6c97a6a4938a1f70";
      let openid = "";
      wx.login({
        success(res) {
          console.log(res);
          if (res.code) {
            let url =
              "https://api.weixin.qq.com/sns/jscode2session?appid=" +
              appId +
              "&secret=" +
              secret +
              "&js_code=" +
              res.code +
              "&grant_type=authorization_code";
            self.$fly
              .get(url)
              .then(res => {
                console.log(res);
                openid = res.openid;
                wx.getSetting({
                  success(res) {
                    console.log('get setting ----->' + JSON.stringify(res));
                    if (!res.authSetting["scope.userInfo"]) {
                      wx.authorize({
                        scope: "scope.userinfo",
                        success(res) {
                          console.log("get user info ---------->" + res);
                        }
                      });
                    }
                  }
                });
              })
              .catch(err => {
                console.log(err);
              });

            // wx.getUserInfo({
            //   success(res) {}
            // });
          }
        }
      });
      wx.checkSession({
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        }
      });
    },
    goModalPage(index) {
      let page = this.serviceModals[index].page;
      wx.navigateTo({
        url: page
      });
    },
    goOrderPage() {
      wx.navigateTo({
        url: "../my_subpages/my_order/main"
      });
    },
    goSetPersonData() {
      wx.navigateTo({
        url: "../my_subpages/personal_data/main"
      });
    }
  }
};
</script>
<style scoped>
.container {
  background: #f1f1f1;
}
.userinfo {
  width: 100%;
  height: 200rpx;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* z-index: -1; */
  overflow: hidden;
  padding: 20rpx 36rpx;
  box-sizing: border-box;
}
.userinfo::after {
   content: "";
   width: 130%;
   height: 200rpx;
   position: absolute;
   left: -20%;
   top: 0;
  /*  z-index: -1; */
   border-radius: 0 0 50% 50%;
   background: #723aff;
}
.user {
  flex: 1;
  z-index: 99;
  display: flex;
  align-items: center;
}
.user > img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 28rpx;
  background: #fff;
  flex-shrink: 0;
}
.user > span {
  flex: 1;
  font-size: 36rpx;
  color: #ffffff;
}
.set {
  display: flex;
  align-items: center;
  padding-right: 26rpx;
  z-index: 99;
}
.set > img {
  width: 25rpx;
  height: 25rpx;
  margin-right: 8rpx;
}
.set > span {
  font-size: 18rpx;
  color: #ffffff;
}
/* 我的商品 */
.my-goods {
  margin: 56rpx 40rpx 24rpx;
  box-shadow: 0px 1px 6px rgba(204, 204, 204, 0.16);
  border-radius: 12rpx;
  background: #fff;
}
.my-goods > header {
  padding: 18rpx 32rpx 12rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #353535;
  border-bottom: 2rpx solid #f5f5f5;
}
.my-goods-modals {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.my-goods-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16rpx 0;
}
.my-goods-modal > img {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 6rpx;
}
.my-goods-modal > div {
  font-size: 22rpx;
  color: #888888;
}
.my-goods-notice {
  margin: 0 18rpx 26rpx;
  padding: 10rpx 16rpx;
  background: #fafafa;
  border-radius: 12rpx;
}
.my-goods-notice > header {
  font-size: 18rpx;
  color: #b2b2b2;
  margin-bottom: 14rpx;
}
.notice-box {
  display: flex;
  align-items: center;
}
.notice-box > img {
  width: 60rpx;
  height: 60rpx;
  margin-right: 22rpx;
  background: #723aff;
  border-radius: 6rpx;
}
.notice-box-txt {
}
.state {
  font-size: 22rpx;
  color: #009dff;
}
.notice-content {
  font-size: 18rpx;
  color: #b2b2b2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 其他服务 */
.my-services {
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(204, 204, 204, 0.16);
  border-radius: 12rpx;
  margin: 0 40rpx 24rpx;
}
.my-services > header {
  padding: 20rpx 32rpx 12rpx;
  border-bottom: 2rpx solid #f5f5f5;
  font-size: 28rpx;
  font-weight: bold;
  color: #353535;
}
.my-services-modals {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16rpx 0;
}
.my-services-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
  width: 25%;
  flex-shrink: 0;
}
.my-services-modal > img {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 6rpx;
}
.modal-name {
  font-size: 22rpx;
  color: #888888;
}
</style>
