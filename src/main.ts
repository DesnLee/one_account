import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import NavBar from '@/components/NavBar.vue';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false;

Vue.component('Navbar', NavBar);
Vue.component('Layout', Layout);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
