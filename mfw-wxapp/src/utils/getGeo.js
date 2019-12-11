let getGeo = function (_vm) {
    wx.getLocation({
        type: 'gcj02',
        success(res) {
            console.log(res)
            _vm.$store.dispatch('setCoords', res.latitude + "," + res.longitude)
            getLocation(res, _vm);
        },
        fail(err) {
            console.log(err);
        }
    });
}
let getLocation = function (res, _vm) {
    wx.request({
        url: 'https://restapi.amap.com/v3/geocode/regeo',
        data: {
            key: '7f878f46a1afe827e6ff305bae2e9537',
            location: res.longitude + "," + res.latitude,
            extensions: "all",
            s: "rsx",
            sdkversion: "sdkversion",
            logversion: "logversion"
        },
        success: function (res) {
            console.log(res);
            _vm.$store.dispatch('getLoction', res.data.regeocode.aois[0].name);
            _vm.$store.dispatch('getNearby', res.data.regeocode.pois);
            _vm.$store.dispatch('getCity', res.data.regeocode.addressComponent);
            // console.log(JSON.stringify(res.data.regeocode.formatted_address));
            wx.navigateBack({
                detal: 1
            })
        },
        fail: function (res) {
        }
    })
}
export default getGeo;