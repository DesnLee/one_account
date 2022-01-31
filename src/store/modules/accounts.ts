import deepClone from '@/lib/deepClone';

const localStorageName = 'savedAccount';

const state = {
  accountsData: [] as Account[]
};

const mutations = {
  fetch(state: any) {
    state.accountsData = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
  }
};

const actions = {
  async save({state}: any) {
    return new Promise(resolve => {
      try {
        window.localStorage.setItem(localStorageName, JSON.stringify(state.accountsData));
        resolve({code: 1, message: '记录账单成功！'});
      } catch (err: any) {
        resolve({code: 1000, message: err.message});
      }
    });
  },
  async create({dispatch, state}: any, data: Account) {
    const cloneData = deepClone(data);
    cloneData.createAt = new Date();
    state.accountsData.push(cloneData);

    return new Promise(resolve => {
      dispatch('save').then((result: object) => {
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
