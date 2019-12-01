<template>
  <div class="container">
    <SearchInputTpl :placeholder="palceholder" />
    <div class="seller-box">
      <div class="left-box">
        <LeftBarTpl :list="list" />
      </div>
      <div class="right-box">
        <HomeBanner :bannerUrl="bannerUrl" />
        <SellerCard :cards="cards" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInputTpl from "../../components/search_input_tpl/search_input_tpl.vue";
import LeftBarTpl from "../../components/seller_lefttab_tpl/seller_lefttab_tpl.vue";
import HomeBanner from "../../components/home_banner_tpl/home_banner_tpl.vue";
import SellerCard from "../../components/seller_card_tpl/seller_card_tpl.vue";
export default {
  components: {
    SearchInputTpl,
    LeftBarTpl,
    HomeBanner,
    SellerCard
  },
  data() {
    return {
      palceholder: "搜一搜",
      bannerUrl: "../../static/banner/banner_01.png",
      cards: [
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        },
        {
          logo: "",
          name: "叫了只鸡（金湖店）",
          level: 4.8,
          count: 1000,
          distance: 3.6,
          qprice: 30,
          pprice: 0.5,
          coupons: [
            {
              text: "25减5"
            },
            {
              text: "30减6"
            },
            {
              text: "60减15"
            }
          ]
        }
      ],
      list: [
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false },
        { name: "便利超市", isActive: false }
      ]
    };
  },
  watch: {},
  methods: {}
};
</script>

<style scoped>
.container {
  height: 100%;
}
/* 主页面 */
.seller-box {
  margin-top: 96rpx;
  display: flex;
}
.right-box {
  flex: 1;
}
.left-box {
  flex-shrink: 0;
  margin-top: 20rpx;
  margin-bottom: 50rpx;
  padding-right: 150rpx;
  background: #fff;
  border-right: 2rpx solid #ededed;
  z-index: 9;
}
/*  */
</style>