import Fly from 'flyio/dist/npm/wx'
let fly = new Fly;



let url = "http://129.204.180.3:8090";
let path = {
    login: url + '/login', //用户登录
    register: url + '/register', // 用户注册
    setUserName: url + '/setUserName', // 修改昵称
    setUserHeader: url + '/setUserHeader', // 修改图像
    setBirthday: url + '/setUserBirthday',// 修改生日
    getIndexAd: url + '/getIndexAd', // 首页广告
    getListIndex: url + '/getListIndex',// 首页搜索
    findByMerchant: url + '/findByMerchant',// 查询商户列表
    getProductByMerchantItem: url + '/getProductByMerchantItem',// 商户页面
    getProductDetail: url + '/getProductDetail',// 产品详细信息
    saveMerchantFollow: url + '/saveMerchantFollow',// 产品详细信息
    getFollowByUserId: url + '/getFollowByUserId',// 添加收藏
    delFollow: url + '/delFollow',// 用户查询收藏
    saveKeyWord: url + '/saveKeyWord',// 删除收藏
    getUserkeyWord: url + '/getUserkeyWord'// 用户搜索关键字
}


export default path;
