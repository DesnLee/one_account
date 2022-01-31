import createId from '@/lib/createId';
const localStorageName = 'savedTags';
const state = {
    tagsData: []
};
const getters = {
    findById: (state) => (id) => {
        return state.tagsData.filter((item) => item.id === parseInt(id + ''))[0];
    },
    findByName: (state) => (name) => {
        return state.tagsData.filter((item) => item.name === name)[0];
    }
};
const mutations = {
    fetch(state) {
        state.tagsData = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    }
};
const actions = {
    async save({ state }) {
        return new Promise(resolve => {
            try {
                window.localStorage.setItem(localStorageName, JSON.stringify(state.tagsData));
                resolve({ code: 1, message: '标签保存成功！' });
            }
            catch (err) {
                resolve({ code: 1000, message: err.message });
            }
        });
    },
    async create({ dispatch, state, getters }) {
        const createName = window.prompt('请输入标签名');
        return new Promise(resolve => {
            if (!createName)
                return resolve({ code: 1001, message: '标签不能为空' });
            if (getters.findByName(createName)) {
                window.alert('标签已存在，请勿重复添加');
                return resolve({ code: 1000, message: '标签已存在，请勿重复添加' });
            }
            const id = createId();
            state.tagsData.push({ id: id, name: createName });
            dispatch('save').then((result) => {
                return resolve(result);
            });
        });
    },
    async update({ dispatch, state, getters }, payload) {
        const target = getters.findById(payload.id);
        const names = state.tagsData.map((item) => item.name);
        return new Promise(resolve => {
            if (names.indexOf(payload.name) >= 0) {
                window.alert('标签已存在');
                return resolve({ code: 1000, message: '标签已存在' });
            }
            else {
                target.name = payload.name;
                dispatch('save').then((result) => {
                    return resolve(result);
                });
            }
        });
    },
    async delete({ dispatch, state, getters }, payload) {
        const index = state.tagsData.indexOf(getters.findById(payload.id));
        state.tagsData.splice(index, 1);
        return new Promise(resolve => {
            dispatch('save').then((result) => {
                return resolve(result);
            });
        });
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
//# sourceMappingURL=tags.js.map