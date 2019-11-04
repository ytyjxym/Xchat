import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/fonts/glyphicons-halflings-regular.ttf'
//过滤器
import filters from './plugins/filters';
//axios
import './plugins/axios'
//图标
import './assets/css/font.css'
//socket
import './plugins/socket.io'
Vue.config.productionTip = false;

import baseUrl from './plugins/baseUrl'
//vuex
import store from './plugins/store'
Vue.prototype.baseUrl = baseUrl.baseUrl;
let ownInf = window.localStorage.getItem('xChat__own')
if (ownInf) {
    store.state.own = JSON.parse(ownInf)
}
for (let key in filters) {
    Vue.filter(key, filters[key]);
};
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');