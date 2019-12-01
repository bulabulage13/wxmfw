<template>
  <div class="container">
    <div class="protocols">
      <div class="protocol" v-for="(p, index) of protocols" :key="index">
        {{ p }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      protocols: [
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议",
        "买返屋平台用户协议"
      ]
    };
  }
};
</script>

<style scoped>
.container {
  background: #f1f1f1;
}
.protocols {
  margin-top: 24rpx;
  background: #fff;
}
.protocol {
  font-size: 24rpx;
  color: #353535;
  padding: 24rpx 0;
  text-indent: 14rpx;
  margin: 0 21rpx;
  border-bottom: 2rpx solid #D2D2D2;
}
.protocol:last-child{
    border-bottom: none;
}
</style>
