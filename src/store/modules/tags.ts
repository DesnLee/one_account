import createId from '@/lib/createId';
// import initTags from '@/constant/initTags';

const localStorageName = 'savedTags';

const state: TagState = {
  tagsData: [],
  currentTag: undefined
};

const getters = {
  findById: (state: any) => (id: number | string) => {
    return state.tagsData.filter((item: Tag) => item.id === parseInt(id + ''))[0];
  },
  findByName: (state: any) => (name: string) => {
    return state.tagsData.filter((item: Tag) => item.name === name)[0];
  }
};

const mutations = {
  fetch(state: any) {
    state.tagsData = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
  },
  getCurrentTag(state: any, id: string | number) {
    state.currentTag = state.tagsData.filter((item: Tag) => item.id === parseInt(id + ''))[0];
  }
};

const actions = {
  async save({state}: any) {
    return new Promise(resolve => {
      try {
        window.localStorage.setItem(localStorageName, JSON.stringify(state.tagsData));
        resolve({code: 1, message: '标签保存成功！'});
      } catch (err: any) {
        resolve({code: 1000, message: err.message});
      }
    });
  },
  async create({dispatch, state, getters}: any) {
    const createName = window.prompt('请输入标签名');

    return new Promise(resolve => {
      if (!createName) return resolve({code: 1001, message: '标签不能为空'});
      if (getters.findByName(createName)) {
        window.alert('标签已存在，请勿重复添加');
        return resolve({code: 1000, message: '标签已存在，请勿重复添加'});
      }
      const id = createId();
      state.tagsData.push({id: id, name: createName});
      dispatch('save').then((result: object) => {
        return resolve(result);
      });
    });
  },
  async update({dispatch, state, getters}: any, payload: Tag) {
    const target = getters.findById(payload.id);
    const names = state.tagsData.map((item: Tag) => item.name);

    return new Promise(resolve => {
      if (names.indexOf(payload.name) >= 0) {
        window.alert('标签已存在');
        return resolve({code: 1000, message: '标签已存在'});
      } else {
        target.name = payload.name;
        dispatch('save').then((result: object) => {
          return resolve(result);
        });
      }
    });
  },
  async delete({dispatch, state, getters}: any, payload: Tag) {
    const index = state.tagsData.indexOf(getters.findById(payload.id));
    state.tagsData.splice(index, 1);
    return new Promise(resolve => {
      dispatch('save').then((result: object) => {
        return resolve(result);
      });
    });
  },
  // async initTags({dispatch, state}: any) {
  //   state.tagsData = initTags;
  //   return new Promise(resolve => {
  //     dispatch('save').then((result: object) => {
  //       const id = parseInt(window.localStorage.getItem('_currentId') || '0');
  //       if (id < 4) {window.localStorage.setItem('_currentId', '4');}
  //       resolve(result);
  //     });
  //   });
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
