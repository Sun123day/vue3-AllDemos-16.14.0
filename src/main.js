//以下为Vue2.x代码
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios';

// Vue.prototype.$axios = axios;

// Vue.config.productionTip = false;
// Vue.use(ElementUI);


// new Vue({
//   el: '#app',
//   router,
//   store,
//   axios,
//   render: h => h(App)
// }).$mount('#app')

//以下为Vue3.x代码
import { createApp } from 'vue'; // 导入 createApp 方法
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';
// import naive from 'naive-ui'
// Naivve UI 只能按需引入，然后全局挂载
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

// 引入Naive UI
import { useNaiveComponents } from '@/plugins/setNaiveUI'

// main.js:注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App); // 创建 Vue 应用程序实例
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

app.use(router);
app.use(store);
app.use(ElementPlus);
// Naivve UI 只能按需引入，然后全局挂载
// app.use(naive)
useNaiveComponents(app)
app.config.globalProperties.$axios = axios;

app.mount('#app'); // 挂载应用程序
