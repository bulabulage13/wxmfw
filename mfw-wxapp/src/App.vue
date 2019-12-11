<script>
export default {
  beforeMount() {
    let self = this;
    let appId = "wx579653893a42166a";
    let secret = "9184547d7ad46c9b6c97a6a4938a1f70";
    wx.checkSession({
      success: function(res) {
        console.log('处于登录态---------->' + JSON.stringify(res));
      },
      fail: function(res) {
        console.log("需要重新登录");
        wx.login({
          success(res) {
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
                  wx.setStorageSync('openid',res.openid);
                  wx.setStorageSync('session_key',res.session_key);
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }
        });
      }
    });
  },
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    // let logs;
    // if (mpvuePlatform === "my") {
    //   logs = mpvue.getStorageSync({ key: "logs" }).data || [];
    //   logs.unshift(Date.now());
    //   mpvue.setStorageSync({
    //     key: "logs",
    //     data: logs
    //   });
    // } else {
    //   logs = mpvue.getStorageSync("logs") || [];
    //   logs.unshift(Date.now());
    //   mpvue.setStorageSync("logs", logs);
    // }
  },
  log() {
    // console.log(`log at:${Date.now()}`);
  }
};
</script>

<style>
page {
  height: 100%;
}
.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
