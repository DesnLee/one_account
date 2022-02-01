import deepClone from '@/lib/deepClone';
const localStorageName = 'savedAccount';
const state = {
    accountsData: []
};
const mutations = {
    fetch(state) {
        state.accountsData = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    }
};
const actions = {
    async save({ state }) {
        return new Promise(resolve => {
            try {
                window.localStorage.setItem(localStorageName, JSON.stringify(state.accountsData));
                resolve({ code: 1, message: '记录账单成功！' });
            }
            catch (err) {
                resolve({ code: 1000, message: err.message });
            }
        });
    },
    async create({ dispatch, state }, data) {
        const cloneData = deepClone(data);
        cloneData.createAt = new Date().toISOString();
        state.accountsData.push(cloneData);
        return new Promise(resolve => {
            dispatch('save').then((result) => {
                resolve(result);
            });
        });
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
//# sourceMappingURL=accounts.js.map