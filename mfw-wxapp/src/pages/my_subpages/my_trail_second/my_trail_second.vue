<template>
  <div class="container">
    <div class="add" @tap="addImg">
        <span v-if="!src">添加头图</span>
        <img v-if="src" mode="center" :src="src">
    </div>
    <div class="publish-btn">发布</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            src: ''
        }
    },
    methods:{
        addImg(){
            let self = this;
            wx.chooseImage({
                count:1,
                success(res){
                    console.log(res);
                    let tempFilePaths = res.tempFilePaths;
                    console.log(tempFilePaths[0]);
                    self.src=tempFilePaths[0];
                    // wx.uploadFile({
                    //     url: '',
                    //     filePath: tempFilePaths,
                    //     name: 'file',
                    //     formData:{

                    //     }
                    // });
                },
                fail(res){
                    console.log(res)
                }
            });
        }
    }
};
</script>

<style scoped>
.container {
  position: relative;
  background: #f9f9f9;
}
.add {
  margin: 28rpx 32rpx;
  height: 344rpx;
  line-height: 344rpx;
  background: #fff;
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
  color: #888888;
  box-shadow: 0px 0px 6px rgba(178, 178, 178, 0.16);
  border-radius: 20rpx;
  overflow: hidden;
}
.add>img{
    width: 100%;
    height: 100%;
}
.publish-btn {
  position: absolute;
  bottom: 80rpx;
  left: 50%;
  margin-left: -168rpx;
  width: 336rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #723aff;
  box-shadow: 0px 3px 9px rgba(114, 58, 255, 0.5);
  border-radius: 60rpx;
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}
</style>
