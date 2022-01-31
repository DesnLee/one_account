import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import NavBar from '@/components/NavBar.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import accountModel from '@/models/accountModel';

Vue.config.productionTip = false;

Vue.component('Navbar', NavBar);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// 封装 tag 和 account 方法
window.accountsData = accountModel.getData();
window.createAccount = (account) => {
  const result = accountModel.create(account);
  window.alert(result.message);
  return result;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
