import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/fonts/glyphicons-halflings-regular.ttf'
import filters from './plugins/filters';
import './plugins/axios'
Vue.config.productionTip = false;
import baseUrl from './plugins/baseUrl'
Vue.prototype.baseUrl = baseUrl.baseUrl;
for (let key in filters) {
    Vue.filter(key, filters[key]);
};

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');