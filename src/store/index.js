import Vue from 'vue';
import Vuex from 'vuex';
import tags from '@/store/tagStore';
import accounts from '@/store/accountStore';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        tags: {
            namespaced: true,
            ...tags
        },
        accounts: {
            namespaced: true,
            ...accounts
        }
    }
});
export default store;
//# sourceMappingURL=index.js.map