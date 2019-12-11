import Vue from 'vue'
import store from './store/index'
import Fly from 'flyio/dist/npm/wx'
import App from './App'


Vue.config.productionTip = false
App.mpType = 'app'
// 引入store对象,放在vue原型上
Vue.prototype.$store = store;
// 引入fly，并全局引用
let fly = new Fly;
fly.interceptors.response.use(
    (response) => {
        console.log(response);
        return response.data
    },
    (err) => {
        return Promise.resolve(err);
    }
)
fly.config.headers={
    "Content-Type":"application/x-www-form-urlencoded"
}
// 请求超时设置
fly.config.timeout = 10000;
// 请求地址
fly.config.baseURL = 'http://129.204.180.3:8090/';
Vue.prototype.$fly = fly;

const app = new Vue(App)
app.$mount()
