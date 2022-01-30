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
// 封装 tag 和 account 方法
window.tagsData = tagsModel.getData();
window.createTag = () => {
    const name = window.prompt('请输入标签名');
    const result = tagsModel.create(name);
    if (result.code !== 1001) {
        window.alert(result.message);
    }
    return result;
};
window.deleteTag = (id) => {
    return tagsModel.delete(id);
};
window.updateTag = (tag) => {
    const result = tagsModel.update(tag);
    if (result.code !== 1) {
        window.alert(result.message);
    }
    return result;
};
window.findTag = (id) => {
    return window.tagsData.filter(item => item.id === parseInt(id))[0];
};
window.accountsData = accountModel.getData();
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map