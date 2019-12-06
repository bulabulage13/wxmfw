<template>
  <div class="container">
    <div class="header">
        <span>订单配送至</span>
        <div>选择收货地址<img src="../../../../static/icons/right.png"></div>
    </div>
    <div class="top-box">
        <div class="tb-modal">
            <label>送达时间</label>
            <div class="txt">尽快送达(17:45送达)</div>
        </div>
        <div class="tb-modal">
            <label>支付方式</label>
            <div class="txt">微信支付</div>
        </div>
    </div>
    <div class="food-box">
        <header>粉之都(云景路店)</header>
        <div class="food-list">
            <div class='food-item'>
                <div class="food-detail">
                    <img src="">
                    <div class="fd-cont">
                        <div>小姐姐套餐-2两</div>
                        <div>小姐姐套餐-2两</div>
                    </div>
                </div>
                <div class="price">￥10</div>
            </div>
        </div>
        <div class="price-list">
            <div class="pl_txt">
                <span>包装费</span>
                <span>￥2</span>
            </div>
            <div class="pl_txt">
                <span>配送费</span>
                <span>￥2</span>
            </div>
        </div>
        <div class="gift">
            <span>红包</span>
            <span>暂无可用</span>
        </div>
        <div class="payment">
            <span>小计</span>
            <span>￥33.5</span>
        </div>
    </div>
    <div class="other">
        <div class="o_txt">
            <label>餐具份数</label>
            <div>
                <span></span>
                <img src="">
            </div>
        </div>
        <div class="o_txt">
            <label>备注</label>
            <div>
                <span></span>
                <img src="">
            </div>
        </div>
        <div class="o_txt">
            <label>发票信息</label>
            <div>
                <span></span>
                <img src="">
            </div>
        </div>
    </div>
    <div class="bottom-btn">
        <div class="bb-price">
            <span>共计</span>
            <span>￥33.5</span>
        </div>
        <div class="panment">去支付</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .container{
      background: #F9F9F9;
  }

</style>
