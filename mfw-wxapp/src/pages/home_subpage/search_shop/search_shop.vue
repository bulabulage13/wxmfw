<template>
  <div class="search-shop">
    <div class="search-top">
      <div class="search">
        <img src="../../../../static/icons/search.png" alt />
        <input type="text" placeholder="搜索商家、商品" />
      </div>
      <label>搜索</label>
    </div>
    <div class="hot-search">
      <header>热门搜索</header>
      <ul>
        <li>螺蛳粉</li>
        <li>螺蛳粉</li>
        <li>螺蛳粉</li>
        <li>螺蛳粉</li>
        <li>螺蛳粉</li>
        <li>螺蛳粉</li>
      </ul>
    </div>
    <div class="history-search">
      <header>
        <div>历史搜索</div>
        <img src="../../../../static/icons/trash.png" alt />
      </header>
      <ul>
        <li>超辣的</li>
        <li>超辣的</li>
        <li>超辣的</li>
        <li>超辣的</li>
        <li>超辣的多放蒜</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-shop {
}
.search-top {
  display: flex;
  align-items: center;
  margin: 10rpx 21rpx;
}
.search {
  display: flex;
  align-items: center;
  padding: 10rpx 32rpx;
  background: #f5f5f5;
  border-radius: 48rpx;
  flex: 1;
}
.search img {
  width: 32rpx;
  height: 32rpx;
  margin-right: 16rpx;
}
.search input,
.search input::placeholder {
  font-size: 22rpx;
  color: #888888;
  flex: 1;
}
.search-top label {
  flex-shrink: 0;
  font-size: 34rpx;
  color: #723aff;
  margin: 0 32rpx;
}
/* 热门搜索 */
.hot-search,
.history-search {
  padding: 28rpx 52rpx;
}
.hot-search header,
.history-search header {
  font-size: 34rpx;
  color: #353535;
  padding-bottom: 16rpx;
  border-bottom: 2rpx solid #d8d8d8;
}
.history-search header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hot-search ul, .history-search ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 3rpx;
}
.hot-search ul li, .history-search ul li {
  margin: 16rpx 18rpx 8rpx 0;
  padding: 1rpx 14rpx;
  border: 1px solid #b2b2b2;
  font-size: 26rpx;
  color: #353535;
}
/* 历史搜索 */

.history-search header img {
  width: 32rpx;
  height: 32rpx;
}
</style>