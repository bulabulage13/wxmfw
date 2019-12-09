<template>
  <div class="container">
    <div class="home-top">
      <div class="home-tapbar">
        <div
          @tap="handleTabbar(index)"
          v-for="(tab, index) of tabs"
          :key="index"
          class="home-tapbar-txt"
          :class="{ 'home-tapbar-active': tab.isTab }"
        >
          <span class="home-tabbar-name">{{ tab.name }}</span>
          <i class="underline"></i>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="home-operate">
        <div class="home-operate-location" @tap="goSelectAddrPage">
          <img
            class="icon-locations"
            src="../../../static/icons/location.png"
            alt
          />
          <span>东京大学</span>
          <img class="icon-down" src="../../../static/icons/down.png" alt />
        </div>
        <div class="home-operate-search" @tap="goSearchPage">
          <img class="icon-search" src="../../../static/icons/search.png" />
          <input type="text" placeholder="搜索商家、商品" disabled="true" />
        </div>
        <div class="home-operate-notice" @tap="goNoticePage">
          <img class="icon-notice" src="../../../static/icons/notice.png" alt />
          <div class="notice-count">99+</div>
        </div>
      </div>
    </div>

    <div v-if="!isShow" class="tab-content">
      <!-- 广告图 -->
      <homeBannerTpl :bannerUrl="bannerUrl" />
      <!-- grid -->
      <homeModalsTpl :modals="modals" @change="handlerClick" />
      <!-- 优选 -->
      <homePreferenceTpl :preferences="preferences" />
      <!-- 广告 -->
      <homeBannerTpl :bannerUrl="bannerUrl" />
      <!-- 店铺列表 -->
      <homeCardTpl :shops="shops" />
    </div>
    <div v-else-if="isShow" class="tab-content_search">
      <homeSearchShop :shops="searchShops" />
    </div>
  </div>
</template>

<script>
import path from "../../utils/serverConfig";
import homeBannerTpl from "../../components/home_banner_tpl/home_banner_tpl.vue";
import homeModalsTpl from "../../components/home_modals_tpl/home_modals_tpl.vue";
import homePreferenceTpl from "../../components/home_preference_tpl/home_preference_tpl.vue";
import homeCardTpl from "../../components/home_card_tpl/home_card_tpl.vue";
import homeSearchShop from "../../components/home_seach_shop_tpl/home_seach_shop_tpl.vue";

export default {
  components: {
    homeBannerTpl,
    homeModalsTpl,
    homePreferenceTpl,
    homeCardTpl,
    homeSearchShop
  },
  beforeMount() {
    console.log(path);
    console.log(this.$fly);
    this.$fly
      .get(path.getIndexAd)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      bannerUrl: "../../static/banner/banner_01.png",
      tabs: [
        { name: "推荐", id: 0, index: 0, isTab: true },
        { name: "探店", id: 1, index: 1, isTab: false }
      ],
      isShow: false,
      modals: [
        { name: "堂食团购", url: "../../static/home/tstg.png", id: 0 },
        { name: "爽口美食", url: "../../static/home/skms.png", id: 1 },
        { name: "夏季饮品", url: "../../static/home/xjyp.png", id: 2 },
        { name: "米粉面食", url: "../../static/home/mfms.png", id: 3 },
        { name: "甜品糕点", url: "../../static/home/tpgd.png", id: 4 },
        { name: "快餐便当", url: "../../static/home/kcbd.png", id: 5 },
        { name: "披萨意面", url: "../../static/home/psym.png", id: 6 },
        { name: "精致西餐", url: "../../static/home/jzxc.png", id: 7 },
        { name: "便利超市", url: "../../static/home/blcs.png", id: 8 },
        { name: "附近更多", url: "../../static/home/fjgd.png", id: 9 }
      ],
      preferences: [
        {
          url: "../../static/home/dyz.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/dyz-logo.png"
        },
        {
          url: "../../static/home/hsh.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/hsh-logo.png"
        },
        {
          url: "../../static/home/gjj.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/gjj-logo.png"
        },
        {
          url: "../../static/home/dyz.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/dyz-logo.png"
        },
        {
          url: "../../static/home/hsh.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/hsh-logo.png"
        },
        {
          url: "../../static/home/gjj.png",
          name: "大运粥",
          reason: "根据你看过的店推荐",
          logo: "../../static/home/hsh-logo.png"
        }
      ],
      shops: [
        {
          name: "爱民螺蛳粉",
          type: 1,
          score: "4.4",
          price: "20",
          distance: 1.2,
          intro: "新用户立减8元（首次使用平台最高10元的优惠券）",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/sxf.png",
              price: "8.5"
            },
            {
              name: "酱拌+卤蛋套餐",
              url: "../../static/home/bj.png",
              price: "8.5"
            },
            {
              name: "鸭脚",
              url: "../../static/home/yj.png",
              price: "8.5"
            }
          ]
        },
        {
          name: "Cheney kitchen",
          type: 0,
          score: "4.9",
          price: "20",
          distance: 1.2,
          intro: "精致双人套餐",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/mp.png",
              price: "8.5"
            },
            {
              name: "三鲜粉",
              url: "../../static/home/swy.png",
              price: "8.5"
            },
            {
              name: "三鲜粉",
              url: "../../static/home/hcd.png",
              price: "8.5"
            }
          ]
        },
        {
          name: "爱民螺蛳粉",
          type: 1,
          score: "4.4",
          price: "20",
          distance: 1.2,
          intro: "新用户立减8元（首次使用平台最高10元的优惠券）",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/sxf.png",
              price: "8.5"
            },
            {
              name: "酱拌+卤蛋套餐",
              url: "../../static/home/bj.png",
              price: "8.5"
            },
            {
              name: "鸭脚",
              url: "../../static/home/yj.png",
              price: "8.5"
            }
          ]
        },
        {
          name: "爱民螺蛳粉",
          type: 1,
          score: "4.4",
          price: "20",
          distance: 1.2,
          intro: "新用户立减8元（首次使用平台最高10元的优惠券）",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/sxf.png",
              price: "8.5"
            },
            {
              name: "酱拌+卤蛋套餐",
              url: "../../static/home/bj.png",
              price: "8.5"
            },
            {
              name: "鸭脚",
              url: "../../static/home/yj.png",
              price: "8.5"
            }
          ]
        },
        {
          name: "爱民螺蛳粉",
          type: 1,
          score: "4.4",
          price: "20",
          distance: 1.2,
          intro: "新用户立减8元（首次使用平台最高10元的优惠券）",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/sxf.png",
              price: "8.5"
            },
            {
              name: "酱拌+卤蛋套餐",
              url: "../../static/home/bj.png",
              price: "8.5"
            },
            {
              name: "鸭脚",
              url: "../../static/home/yj.png",
              price: "8.5"
            }
          ]
        },
        {
          name: "爱民螺蛳粉",
          type: 1,
          score: "4.4",
          price: "20",
          distance: 1.2,
          intro: "新用户立减8元（首次使用平台最高10元的优惠券）",
          goodses: [
            {
              name: "三鲜粉",
              url: "../../static/home/sxf.png",
              price: "8.5"
            },
            {
              name: "酱拌+卤蛋套餐",
              url: "../../static/home/bj.png",
              price: "8.5"
            },
            {
              name: "鸭脚",
              url: "../../static/home/yj.png",
              price: "8.5"
            }
          ]
        }
      ],
      searchShops: [
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0 //外卖和团
        },
        {
          logo: "../../static/home/dcs.png",
          name: "到长沙湘菜餐厅",
          addr: "南宁市大学东路98号南宁百货大楼18层25号",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 1 //外卖
        },
        {
          logo: "../../static/home/mskr.png",
          name: "么肆烤肉",
          addr: "南宁市大学东路98号大学东路98号大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 2 //团
        },
        {
          logo: "../../static/home/sbw.png",
          name: "赛百味SUBWAY(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 2
        },
        {
          logo: "../../static/home/sbp.png",
          name: "蜀八婆香汁焖锅(农院店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 1
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 2
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        },
        {
          logo: "../../static/home/qxc.png",
          name: "秦小吃(西大店)",
          addr: "南宁市大学东路98号南宁百货大楼",
          phone: "0771-5681235",
          distance: "3",
          level: "4.0",
          type: 0
        }
      ]
    };
  },
  methods: {
    handleTabbar(index) {
      let tabs = this.tabs;
      for (var tab of tabs) {
        tab.isTab = false;
      }
      this.tabs[index].isTab = true;
      if (index == 0) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    goSearchPage() {
      wx.navigateTo({
        url: "../home_subpage/search_shop/main"
      });
    },
    goSelectAddrPage() {
      wx.navigateTo({
        url: "../home_subpage/select_address/main"
      });
    },
    goNoticePage() {
      wx.navigateTo({
        url: "../home_subpage/notice_page/main"
      });
    },
    goShopDetail(index) {
      let type = this.shops[index].type;
      if (type == 0) {
        // wx.navigateTo({
        //   url: ''
        // });
      }
    }
  }
};
</script>

<style scoped>
.home-top {
  position: fixed;
  background: #fff;
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
}
.home-tapbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.home-tapbar-txt {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-tabbar-name {
  font-size: 36rpx;
  color: #888888;
}

.home-tapbar-active .home-tabbar-name {
  color: #353535;
}
.home-tapbar-active .underline {
  width: 64rpx;
  height: 4rpx;
  background: #723aff;
}

.home-operate {
  display: flex;
  align-items: center;
  padding: 32rpx;
}
.home-operate-location {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.icon-locations {
  width: 36rpx;
  height: 36rpx;
}

.home-operate-location span {
  font-size: 36rpx;
  color: #353535;
  margin: 0 16rpx;
}
.icon-down {
  width: 36rpx;
  height: 36rpx;
}
.icon-search {
  width: 36rpx;
  height: 36rpx;
}
.icon-notice {
  width: 48rpx;
  height: 48rpx;
}

.home-operate-search {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 40rpx;
  padding: 10rpx 26rpx;
  margin-left: 10rpx;
}
.home-operate-search input {
  font-size: 22rpx;
  margin-left: 10rpx;
}
.input::-webkit-input-placeholder {
  color: #f5f5f5;
}
.home-operate-notice {
  flex-shrink: 0;
  position: relative;
}
.icon-notice {
  margin-left: 16rpx;
}
.notice-count {
  position: absolute;
  top: -5rpx;
  right: -24rpx;
  background: #ffab3a;
  color: #fff;
  font-size: 18rpx;
  border-radius: 18rpx;
  padding: 2rpx 5rpx;
}
.tab-content {
  height: 100%;
  background: #fff;
  margin-top: 180rpx;
}
.tab-content_search {
  height: 100%;
  background: #f9f9f9;
  margin-top: 180rpx;
}
</style>
