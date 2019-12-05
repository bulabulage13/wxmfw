<template>
  <div class="container">
    <div class="search-bar" v-if="!isShow">
      <SearchInputTpl :placeholder="placeholder" />
    </div>
    <div class="banner">
      <homeBannerTpl :bannerUrl="bannerUrl" />
    </div>
    <div
      :class="isShow ? 'filter-view-fixed' : 'filter-view'"
      id="filterBox"
      @touchmove.stop="touchForbidden"
    >
      <!-- 筛选列表 -->
      <div class="filter-list">
        <div
          :class="f.isSelect ? 'filter-item-active' : 'filter-item'"
          v-for="(f, index) of filters"
          :key="index"
          @tap="filterShops(index)"
        >
          <span>{{ f.name }}</span>
          <img :src="f.icon" />
        </div>
      </div>
      <!-- 筛选内容 -->
      <div class="filter-content" v-if="contentShow">
        <!-- 全部 -->
        <div class="filter-content_all" v-if="filters[0].contShow">
          <div
            :class="!kind.isSelect ? 'all-item' : 'all-item-active'"
            v-for="(kind, index) of foodKinds"
            :key="index"
            @tap="selectFoodKind(index)"
          >
            {{ kind.name }}
          </div>
        </div>
        <!-- 附近 -->
        <div class="filter-content_nearby" v-if="filters[1].contShow">
          <div class="nearby-item_left">
            <div
              class="nearby-item"
              :class="f.isSelect ? 'nearby-item-active' : ''"
              v-for="(f, index) of nearbys"
              :key="index"
              @tap="selectNearbys(index)"
            >
              {{ f.name }}
            </div>
          </div>
          <div class="nearby-item_right">
            <div
              class="nearby-item"
              :class="f.isSelect ? 'nearby-item-active' : ''"
              v-for="(f, index) of distances"
              :key="index"
              @tap="selectNearbysDistance(index)"
            >
              {{ f.name }}
            </div>
          </div>
        </div>
        <!-- 智能排序 -->
        <div class="filter-content_sort" v-if="filters[2].contShow">
          <div
            class="sort-item"
            :class="!kind.isSelect ? 'sort-item' : 'sort-item-active'"
            v-for="(kind, index) of sortKinds"
            :key="index"
            @tap="selectSortKind(index)"
          >
            {{ kind.name }}
          </div>
        </div>
        <!-- 筛选 -->
        <div class="filter-content_filter" v-if="filters[3].contShow">
          <div class="filter-mul">
            <header>用餐人数</header>
            <div class="filter-mul-list">
              <div
                class="filter-mul-item"
                :class="p.isSelect ? 'filter-mul-item-active' : ''"
                v-for="(p, index) of persons"
                :key="index"
                @tap="personSelect(index)"
              >
                {{ p.text }}
              </div>
            </div>
          </div>
          <div class="filter-mul">
            <header>餐厅服务</header>
            <div class="filter-mul-list">
              <div
                class="filter-mul-item"
                :class="t.isSelect && 'filter-mul-item-active'"
                v-for="(t, index) of types"
                :key="index"
                @tap="typeSelect(index)"
              >
                {{ t.text }}
              </div>
            </div>
          </div>
          <div class="filter-btns">
            <div class="filter-btn clear" @tap="clearSel">清空</div>
            <div class="filter-btn success">
              <div>完成</div>
              <div class="count" v-if="count">{{ count }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商铺列表 -->
    <div class="shop-list" :class="isShow ? 'mt' : ''">
      <div
        class="shop-card"
        @tap="goShopDetail"
        v-for="(s, index) of shops"
        :key="index"
      >
        <div class="img-box">
          <img src="../../../../static/home/qxc.png" alt="" />
        </div>
        <div class="shop-box">
          <div class="shop-info">
            <div class="shop-name">{{ s.name }}</div>
            <div class="shop-type w">外</div>
          </div>
          <div class="shop-info">
            <div class="shop-more">
              <div class="shop-level">
                <img src="../../../../static/icons/star.png" alt="" />
                <span>{{ s.star }}</span>
              </div>
              <div class="shop-price">￥{{ s.price }}/人</div>
            </div>
            <div class="shop-distance">{{ s.distance }}km</div>
          </div>
          <div class="shop-info-loc">
            <div class="shop-loc">{{ s.location }}</div>
            <div class="shop-class">快餐</div>
          </div>
          <div class="shop-foods">
            <div class="shop-type t">团</div>
            <div class="shop-foods-list">
              {{ s.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInputTpl from "../../../components/search_input_tpl/search_input_tpl.vue";
import homeBannerTpl from "../../../components/home_banner_tpl/home_banner_tpl.vue";
export default {
  components: {
    SearchInputTpl,
    homeBannerTpl
  },
  data() {
    return {
      placeholder: "搜索商家、商品",
      bannerUrl: "../../../static/banner/banner_01.png",
      isShow: false,
      filterBoxFixed: false,
      filters: [
        {
          name: "全部美食",
          icon: "../../../static/icons/down.png",
          id: "0",
          isSelect: true,
          contShow: false
        },
        {
          name: "附近",
          icon: "../../../static/icons/down.png",
          id: "1",
          isSelect: false,
          contShow: false
        },
        {
          name: "智能排序",
          icon: "../../../static/icons/down.png",
          id: "2",
          isSelect: false,
          contShow: false
        },
        {
          name: "筛选",
          icon: "../../../static/icons/filter.png",
          id: "4",
          isSelect: false,
          contShow: false
        }
      ],
      foodKinds: [
        {
          name: "美食种类1",
          isSelect: false
        },
        {
          name: "美食种类2",
          isSelect: false
        },
        {
          name: "美食种类3",
          isSelect: false
        },
        {
          name: "美食种类4",
          isSelect: false
        },
        {
          name: "美食种类5",
          isSelect: false
        },
        {
          name: "美食种类6",
          isSelect: false
        },
        {
          name: "美食种类7",
          isSelect: false
        }
      ],
      nearbys: [
        {
          name: "附近",
          isSelect: true
        },
        {
          name: "全城",
          isSelect: false
        }
      ],
      sortKinds: [
        { name: "智能排序", isSelect: false },
        { name: "离我最近", isSelect: false },
        { name: "好评优先", isSelect: false },
        { name: "销量有限", isSelect: false }
      ],
      distances: [
        { name: "500m", isSelect: false },
        { name: "500m", isSelect: false },
        { name: "500m", isSelect: false },
        { name: "500m", isSelect: false },
        { name: "500m", isSelect: false }
      ],
      persons: [
        { text: "单人餐", isSelect: false },
        { text: "双人餐", isSelect: false },
        { text: "3-4餐", isSelect: false },
        { text: "5-10餐", isSelect: false },
        { text: "10人以上", isSelect: false }
      ],
      types: [
        { text: "外卖送餐", isSelect: false },
        { text: "自动取餐", isSelect: false }
      ],
      count: 0,
      contentShow: false,
      fbTop: 0,
      shops: [
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        },
        {
          img: "",
          name: "南鸭榜(青秀万达公馆店)",
          star: 4.4,
          price: 20,
          location: "东葛路",
          content: "什么什么什么什么什么什么神儿么神儿么社呢",
          distance: "2.3"
        }
      ]
    };
  },
  mounted() {
    let query = wx.createSelectorQuery();
    let self = this;
    query
      .select("#filterBox")
      .boundingClientRect(res => {
        self.fbTop = res.top;
      })
      .exec();
  },
  onPageScroll(e) {
    let self = this;
    let top = this.fbTop;
    if (e.scrollTop >= top - 48) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  },
  methods: {
    touchForbidden(e) {
      e.preventDefault();
    },
    filterShops(index) {
      wx.pageScrollTo({
        height: 0,
        selector: "#filterBox",
        success(res) {
          console.log("list调用成功=====>");
        },
        fail() {
          console.log("调用失败====>");
        }
      });
      if (this.filters[index].contShow) {
        for (var i of this.filters) {
          i.isSelect = false;
          i.contShow = false;
        }
        this.contentShow = false;
        this.filters[index].isSelect = true;
      } else {
        for (var i of this.filters) {
          i.isSelect = false;
          i.contShow = false;
        }
        this.filters[index].isSelect = true;
        this.filters[index].contShow = true;
        this.contentShow = true;
      }
    },
    selectFoodKind(index) {
      for (let i of this.foodKinds) {
        i.isSelect = false;
      }
      this.foodKinds[index].isSelect = true;
      this.filters[0].name = this.foodKinds[index].name;
      this.filters[0].contShow = false;
      this.contentShow = false;
    },
    selectSortKind(index) {
      for (let i of this.sortKinds) {
        i.isSelect = false;
      }
      this.sortKinds[index].isSelect = true;
      this.filters[2].name = this.sortKinds[index].name;
      this.filters[2].contShow = false;
      this.contentShow = false;
    },
    selectNearbys(index) {
      for (let n of this.nearbys) {
        n.isSelect = false;
      }
      this.nearbys[index].isSelect = true;
    },
    selectNearbysDistance(index) {
      for (let d of this.distances) {
        d.isSelect = false;
      }
      this.distances[index].isSelect = true;
      this.filters[1].contShow = false;
      this.contentShow = false;
    },
    goShopDetail(index) {
      wx.navigateTo({
        url: "../shop_detail_tuan/main"
      });
    },
    personSelect(index) {
      if (!this.persons[index].isSelect) {
        for (let p of this.persons) {
          p.isSelect = false;
        }
        this.persons[index].isSelect = true;
        this.getSelCount();
      }
    },
    typeSelect(index) {
      if (!this.types[index].isSelect) {
        for (let t of this.types) {
          t.isSelect = false;
        }
        this.types[index].isSelect = true;
        this.getSelCount();
      }
    },
    getSelCount() {
      let count = 0;
      for (let t of this.types) {
        if (t.isSelect) {
          count++;
        }
      }
      for (let p of this.persons) {
        if (p.isSelect) {
          count++;
        }
      }
      this.count = count;
    },
    clearSel() {
      for (let t of this.types) {
        t.isSelect = false;
      }
      for (let p of this.persons) {
        p.isSelect = false;
      }
      this.count = 0;
    }
  },
  watch: {
    data(newValue, oldValue) {}
  }
};
</script>

<style scoped>
.search-bar {
  position: relative;
}
.banner {
  margin-top: 96rpx;
  /* margin-bottom: 30rpx; */
}
.filter-view-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.filter-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32rpx 40rpx;
  background: #fff;
}
.filter-item,
.filter-item-active {
  /* width: 25%; */
  /* text-align: center; */
}
.filter-item > span {
  font-size: 26rpx;
  color: #b2b2b2;
}
.filter-item > image,
.filter-item-active > image {
  width: 18rpx;
  height: 18rpx;
  margin-left: 4rpx;
}
.filter-item-active > span {
  font-size: 26rpx;
  font-weight: bold;
  color: #353535;
}
/* 过滤框 */
.filter-content {
  position: fixed;
  top: 96rpx;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 53, 53, 0.5);
  z-index: 9;
  border-top: 2rpx solid #dcdcdc;
}
/* 全部美食和智能筛选*/
.all-item,
.sort-item,
.nearby-item {
  font-size: 26rpx;
  color: #353535;
  padding: 24rpx 40rpx;
  background: #fff;
}
.all-item-active,
.sort-item-active,
.nearby-item-active {
  font-size: 26rpx;
  color: #723aff;
  padding: 24rpx 40rpx;
  background: #fff;
}
/* 附近 */
.filter-content_nearby {
  width: 100%;
  display: flex;
  background: #fff;
}
/* 筛选 */
.filter-item_filter {
  background: #fff;
}
.filter-mul {
  padding: 28rpx 40rpx 0;
  background: #fff;
}
.filter-mul > header {
  font-size: 22rpx;
  color: #b2b2b2;
  padding-bottom: 10rpx;
}
.filter-mul-list {
  display: flex;
  flex-wrap: wrap;
}
.filter-mul-item {
  width: 140rpx;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  background: #d2d2d2;
  border-radius: 10px;
  font-size: 26rpx;
  color: #353535;
  margin-right: 26rpx;
  margin-bottom: 26rpx;
}
.filter-mul-item-active {
  background: #723aff;
  color: #fff;
}
.filter-btns {
  display: flex;
  align-items: center;
}
.filter-btn {
  flex: 1;
  padding: 10rpx 0;
  text-align: center;
  font-size: 28rpx;
}
.clear {
  background: #fff;
  color: #888888;
}
.success {
  background: #723aff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.count {
  width: 24rpx;
  height: 24rpx;
  background: #ffab3a;
  font-size: 24rpx;
  text-align: center;
  line-height: 24rpx;
  color: #fff;
  margin-left: 10rpx;
  border-radius: 50%;
}
/* 商铺 */
.mt {
  margin-top: 100rpx;
}

.shop-card {
  display: flex;
  align-items: flex-start;
  padding-bottom: 40rpx;
  margin: 0 40rpx 32rpx;
  border-bottom: 2rpx solid #f8f4f4;
  box-sizing: border-box;
}
.img-box {
  width: 144rpx;
  height: 144rpx;
  margin-right: 18rpx;
  flex-shrink: 0;
}
.img-box > img {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.shop-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.shop-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rpx;
}
.shop-info-loc {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
  font-size: 26rpx;
}
.shop-more {
  display: flex;
  align-items: center;
}
.shop-name {
  font-size: 34rpx;
  font-weight: bold;
  color: #353535;
}
.shop-level {
  display: flex;
  align-items: center;
  margin-right: 24rpx;
}
.shop-level img {
  width: 16rpx;
  height: 16rpx;
  margin-right: 4rpx;
}
.shop-level span,
.shop-price,
.shop-distance {
  font-size: 22rpx;
  color: #353535;
}
.shop-loc {
  margin-right: 32rpx;
}
.shop-foods {
  display: flex;
  align-items: center;
}
.shop-type {
  font-size: 18rpx;
  color: #ffffff;
  padding: 2rpx 6rpx;

  border-radius: 6rpx;
}
.t {
  background: #ffab3a;
  margin-right: 8rpx;
}
.w {
  background: #723aff;
}
.shop-foods-list {
  width: 446rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 26rpx;
  color: #353535;
}
</style>
