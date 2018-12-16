import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

Vue.use(ElementUI);
Vue.use(router)
Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   components:{App},
//   template:'</App>'
// });

// 引入路由
// // import router from "./router.js"
new Vue({
    el: '#app',
    router, // 注入到根实例中
    render: h => h(App)
});