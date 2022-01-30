import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import NavBar from '@/components/NavBar.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagsModel from '@/models/tagsModel';
import accountModel from '@/models/accountModel';

Vue.config.productionTip = false;

Vue.component('Navbar', NavBar);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagsData = tagsModel.getData();
window.accountsData = accountModel.getData();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
