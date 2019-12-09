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
Vue.prototype.$fly = fly;

const app = new Vue(App)
app.$mount()
