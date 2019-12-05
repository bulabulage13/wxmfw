<template>
  <div class="container">
    <SearchInputTpl :placeholder="placeholder" />
    <div class="box">
      <!-- 宣传店 -->
      <div class="top-card">
        <div class="shop-top">
          <div class="shop-detail">
            <div class="shop-logo">
              <img :src="shop.logo" alt />
            </div>
            <div class="shop-content">
              <header>{{ shop.name }}</header>
              <div class="coupons">
                <div
                  class="coupon"
                  v-for="(item, index) of shop.coupons"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="propaganda">{{ shop.title }}</p>
        <div class="shop-food-kinds">
          <div
            class="shop-food"
            v-for="(food, index) of shop.foods"
            :key="index"
          >
            <img :src="food.img" alt />
            <div class="shop-name-wrapper">
              <div class="shop-food-name">{{ food.name }}</div>
            </div>
            <span class="shop-food-price">￥{{ food.price }}</span>
          </div>
        </div>
      </div>
      <!-- 筛选列表 -->
      <div
        :class="searchBarFixed ? 'filter-box-fixed' : 'filter-box '"
        id="filterBox"
      >
        <!-- 食品分类 -->
        <div class="food-kind">
          <swiper
            :display-multiple-items="foodKinds.length"
            :class="searchBarFixed ? 'height' : ''"
          >
            <swiper-item
              v-for="(kind, index) of foodKinds"
              :key="index"
              @tap="selectFoodKind(index)"
            >
              <img :src="kind.icon" v-if="!searchBarFixed" />
              <label :class="kind.isSelect ? 'active' : ''">{{
                kind.name
              }}</label>
            </swiper-item>
          </swiper>
        </div>
        <div class="filter-view">
          <div
            class="filter-item"
            v-for="(f, index) of filters"
            :key="index"
            @tap="selectFilter(index)"
          >
            <label
              class="filter-txt"
              :class="f.isSelect ? 'filter-txt-active' : ''"
              >{{ f.name }}<img v-if="f.icon" :src="f.icon"
            /></label>
          </div>
        </div>
        <div class="all-filter-content" v-if="sortSel">
          <div
            class="all-filter-item"
            v-for="(item, index) of sort"
            :key="index"
            :class="item.isSelect ? ' all-filter-item-active' : ''"
            @tap="selectSort(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="all-filter-content" v-if="mulSortSel">
          <div class="fature">
            <header>商家特色（多选）</header>
            <div class="all-filter-item-box">
              <div
                class="select-content"
                :class="item.isSelect ? 'select-content-active' : ''"
                v-for="(item, index) of feature"
                :key="index"
                @tap="selectFMulItem(index)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="price">
            <header>人均价格（单选）</header>
            <div class="all-filter-item-box">
              <div
                class="select-content"
                v-for="(p, index) of price"
                :key="index"
                :class="p.isSelect ? 'select-content-active' : ''"
                @tap="selectPitem(index)"
              >
                {{ p.name }}
              </div>
            </div>
          </div>
          <div class="activity">
            <header>优惠活动（多选）</header>
            <div class="all-filter-item-box">
              <div
                class="select-content"
                v-for="(a, index) of activity"
                :key="index"
                :class="a.isSelect ? 'select-content-active' : ''"
                @tap="selectAMulItem(index)"
              >
                {{ a.name }}
              </div>
            </div>
          </div>
          <div class="filter-btns">
            <div class="clear-all" @tap="clear">清空</div>
            <div class="confirm">
              完成
              <div v-if="count">{{ count }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 店铺列表 -->
      <div :class="isWrapper ? 'shop-list-wrapper' : ''">
        <div class="shop-list" :class="searchBarFixed ? 'mt' : ''">
          <SellerCardTpl :cards="cards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInputTpl from "../../../components/search_input_tpl/search_input_tpl.vue";
import SellerCardTpl from "../../../components/seller_card_tpl/seller_card_tpl.vue";
export default {
  components: {
    SearchInputTpl,
    SellerCardTpl
  },
  mounted() {
    let query = wx.createSelectorQuery();
    let self = this;
    query
      .select("#filterBox")
      .boundingClientRect(res => {
        //获取元素1距离页面顶部高度
        self.top = res.top;
      })
      .exec();
  },
  onLoad() {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data());
  },
  data() {
    return {
      placeholder: "搜索商家、商品",
      sortSel: false,
      mulSortSel: false,
      count: 0,
      searchBarFixed: false,
      top: 0,
      isWrapper: false,
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
      shop: {
        name: "Tio Dilo料理",
        logo: "../../../static/home/card-logo.png",
        coupons: ["100减20", "180减30", "220减40"],
        title: "唯爱与美食不可辜负",
        foods: [
          {
            id: 0,
            name: "鹅肝寿司",
            img: "../../../static/home/egss.png",
            price: 58
          },
          {
            id: 1,
            name: "三文鱼刺身",
            img: "../../../static/home/swycs.png",
            price: 88
          },
          {
            id: 2,
            name: "鹅肝寿司",
            img: "../../../static/home/zsswy.png",
            price: 68
          }
        ]
      },
      foodKinds: [
        {
          name: "全部",
          icon: "../../../static/home/all.png",
          type: 1,
          isSelect: true
        },
        {
          name: "快餐便当",
          icon: "../../../static/home/all.png",
          type: 2,
          isSelect: false
        },
        {
          name: "日式料理",
          icon: "../../../static/home/all.png",
          type: 3,
          isSelect: false
        },
        {
          name: "轻食沙拉",
          icon: "../../../static/home/all.png",
          type: 4,
          isSelect: false
        },
        {
          name: "米粉粥面",
          icon: "../../../static/home/all.png",
          type: 5,
          isSelect: false
        }
      ],
      filters: [
        {
          name: "综合排序",
          icon: "../../../static/icons/down.png",
          id: "0",
          isSelect: false
        },
        {
          name: "销量高",
          icon: "",
          id: "1",
          isSelect: false
        },
        {
          name: "速度高",
          icon: "",
          id: "2",
          isSelect: false
        },
        {
          name: "减配送费",
          icon: "",
          id: "3",
          isSelect: false
        },
        {
          name: "筛选",
          icon: "../../../static/icons/filter.png",
          id: "4",
          isSelect: false,
          haveChild: true
        }
      ],
      sort: [
        {
          name: "综合排序",
          id: 0,
          isSelect: true
        },
        {
          name: "距离最近",
          id: 1,
          isSelect: false
        },
        {
          name: "评分最高",
          id: 2,
          isSelect: false
        },
        {
          name: "起送价最低",
          id: 3,
          isSelect: false
        },
        {
          name: "配送费最低",
          id: 4,
          isSelect: false
        },
        {
          name: "人均高到低",
          id: 5,
          isSelect: false
        },
        {
          name: "人均低到高",
          id: 6,
          isSelect: false
        }
      ],
      feature: [
        {
          name: "5星好评",
          isSelect: false,
          id: 11
        },
        {
          name: "4星以上",
          isSelect: false,
          id: 12
        },
        {
          name: "点评高分",
          isSelect: false,
          id: 12
        },
        {
          name: "品牌商家",
          isSelect: false,
          id: 13
        },
        {
          name: "销量较高",
          isSelect: false,
          id: 14
        },
        {
          name: "优先商家",
          isSelect: false,
          id: 15
        }
      ],
      price: [
        {
          name: "20元以下",
          id: 21,
          isSelect: false
        },
        {
          name: "20-40元",
          id: 22,
          isSelect: false
        },
        {
          name: "40元以上",
          id: 23,
          isSelect: false
        }
      ],
      activity: [
        {
          name: "会员红包",
          id: 32,
          isSelect: false
        },
        {
          name: "优惠商家",
          id: 33,
          isSelect: false
        },
        {
          name: "折扣商品",
          id: 34,
          isSelect: false
        },
        {
          name: "首单立减",
          id: 35,
          isSelect: false
        },
        {
          name: "满减优惠",
          id: 36,
          isSelect: false
        },
        {
          name: "进店领券",
          id: 37,
          isSelect: false
        }
      ]
    };
  },
  onPageScroll(e) {
    let top = this.top;
    if (e.scrollTop >= top - 48) {
      this.searchBarFixed = true;
    } else {
      this.searchBarFixed = false;
    }
  },
  methods: {
    selectFoodKind(index) {
      if (!this.foodKinds[index].isSelect) {
        for (var f of this.foodKinds) {
          f.isSelect = false;
        }
        this.foodKinds[index].isSelect = true;
      }
    },
    selectFilter(index) {
      for (var f of this.filters) {
        f.isSelect = false;
      }
      this.filters[index].isSelect = true;
      console.log(this.searchBarFixed);
      if (!this.searchBarFixed) {
        this.searchBarFixed = true;
        wx.pageScrollTo({
          height: 0,
          selector: "#filterBox",
          success(res) {},
          fail() {}
        });
      }
      if (index == 0) {
        this.sortSel = !this.sortSel;
        this.mulSortSel = false;
        this.isWrapper = this.sortSel;
      } else if (index == 4) {
        this.sortSel = false;
        this.mulSortSel = !this.mulSortSel;
        this.isWrapper = this.mulSortSel;
      } else {
        this.sortSel = false;
        this.mulSortSel = false;
      }
    },
    selectSort(index) {
      for (var f of this.sort) {
        f.isSelect = false;
      }
      if (!this.sort[index].isSelect) {
        this.sort[index].isSelect = true;
        this.filters[0].name = this.sort[index].name;
        this.isWrapper = false;
      }
      this.sortSel = false;
    },
    selectFMulItem(index) {
      this.feature[index].isSelect = !this.feature[index].isSelect;
    },
    selectAMulItem(index) {
      this.activity[index].isSelect = !this.activity[index].isSelect;
      this.isWrapper = false;
    },
    selectPitem(index) {
      console.log(index);
      for (var f of this.price) {
        f.isSelect = false;
      }
      this.price[index].isSelect = !this.price[index].isSelect;
    },
    clear() {
      for (let p of this.feature) {
        p.isSelect = false;
      }
      for (let p of this.price) {
        p.isSelect = false;
      }
      for (let p of this.activity) {
        p.isSelect = false;
      }
    },
    count() {
      let count;
      for (let p of this.feature) {
        if (p.isSelect) {
          this.count++;
        }
      }
      for (let p of this.price) {
        if (p.isSelect) {
          this.count++;
        }
      }
      for (let p of this.activity) {
        if (p.isSelect) {
          this.count++;
        }
      }
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  margin-top: 96rpx;
}
/* 宣传店铺 */
.top-card {
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(136, 136, 136, 0.15);
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  padding: 0 40rpx;
}
.shop-top {
  background: #1c2ae6;
  background-size: contain;
  height: 148rpx;
  position: relative;
}
.shop-detail {
  display: flex;
  align-items: center;
  position: absolute;
  top: 40rpx;
  left: 0;
}
.shop-logo {
  width: 140rpx;
  height: 140rpx;
  overflow: hidden;
}
.shop-logo > img {
  width: 100%;
  max-height: 100%;
  min-height: 100%;
}
.shop-content {
  margin-left: 8rpx;
}
.shop-content > header {
  font-size: 36rpx;
  font-weight: bold;
  color: #ffffff;
}
.coupons {
  display: flex;
  align-items: center;
}
.coupon {
  padding: 0 20rpx;
  margin: 14rpx 10rpx 0 0;
  font-size: 24rpx;
  color: #ffffff;
  background: #f54134;
  border-radius: 6rpx;
}
/* 宣传语 */
.propaganda {
  font-size: 36rpx;
  font-weight: bold;
  color: #171717;
  padding-top: 28rpx;
  padding-left: 22rpx;
}
.shop-food-kinds {
  padding: 16rpx 0 16rpx 16rpx;
  display: flex;
  align-items: center;
}
.shop-food {
  position: relative;
  margin-right: 20rpx;
  display: flex;
  flex-flow: column;
}
.shop-food > img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
  background: #eee;
}
.shop-name-wrapper {
  position: absolute;
  bottom: 40rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.shop-food-name {
  font-size: 26rpx;
  color: #ffffff;
  background: rgba(136, 136, 136, 0.15);
  text-align: center;
  padding-bottom: 4rpx;
}
.shop-food-price {
  margin-top: 8rpx;
  font-size: 28rpx;
  color: #723aff;
}
/* 食品分类 */

.food-kind {
  margin: 0 0 26rpx;
  padding: 0 40rpx;
}
.food-kind swiper {
  height: 120rpx;
}
.food-kind swiper.height {
  height: 40rpx;
}
.food-kind swiper swiper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-kind swiper swiper-item > img {
  width: 88rpx;
  height: 88rpx;
}
.food-kind swiper swiper-item > label {
  font-size: 26rpx;
  color: #888888;
}
.food-kind swiper swiper-item > label.active {
  color: #723aff;
  border-bottom: 2rpx solid #723aff;
}
/* 筛选列表 */
.filter-box {
  display: flex;
  flex-direction: column;
  padding: 20rpx 0 0;
  background: #fff;
}
.filter-box-fixed {
  position: fixed;
  top: 96rpx;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20rpx 0 0;
}
.filter-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 40rpx 20rpx;
}
.filter-item {
  display: flex;
  align-items: center;
}
.filter-txt {
  color: #b2b2b2;
  font-size: 26rpx;
  display: flex;
  align-items: center;
}
.filter-txt img {
  width: 24rpx;
  height: 24rpx;
}
.filter-txt-active {
  color: #353535;
  font-weight: bold;
}
.all-filter-content {
  background: rgba(0, 0, 0, 0.55);
  z-index: 99;
}
.all-filter-item {
  padding: 16rpx 40rpx;
  font-size: 26rpx;
  color: #353535;
  border-bottom: 2rpx solid #d2d2d2;
  background: #fff;
}
.all-filter-item-active {
  color: #723aff;
}
.all-filter-item:last-child {
  border-bottom: none;
}
.fature,
.price,
.activity {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 40rpx;
}
.fature > header,
.price > header,
.activity > header {
  padding: 20rpx 0;
  font-size: 26rpx;
  color: #353535;
}
.all-filter-item-box {
  display: flex;
  flex-wrap: wrap;
}
.select-content {
  width: 19%;
  background: #d2d2d2;
  font-size: 24rpx;
  color: #888888;
  margin-right: 10rpx;
  margin-bottom: 10rpx;
  padding: 6rpx 40rpx;
  border-radius: 24rpx;
  text-align: center;
}
.select-content-active {
  background: #723aff;
  color: #fff;
}

.filter-btns {
  display: flex;
  align-items: center;
  padding-top: 40rpx;
  background: #fff;
}
.clear-all {
  width: 50%;
  font-size: 28rpx;
  color: #888888;
  background: #fff;
  text-align: center;
  padding: 10rpx 0;
}
.confirm {
  width: 50%;
  font-size: 28rpx;
  color: #fff;
  background: #723aff;
  text-align: center;
  padding: 10rpx 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.confirm > div {
  width: 24rpx;
  height: 24rpx;
  line-height: 24rpx;
  text-align: center;
  background: #ffab3a;
  color: #fff;
  margin-left: 10rpx;
}
.shop-list {
  padding: 0 40rpx;
  z-index: 1;
}
.mt {
  padding-top: 200rpx;
}
.shop-list-wrapper {
  background: rgba(0, 0, 0, 0.55);
  z-index: 9;
}
</style>
