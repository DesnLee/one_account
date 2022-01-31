import createId from '@/lib/createId';

const localStorageName = 'savedTags';

const tagStore = {
  state: {
    tagsData: [] as Tag[]
  },
  getters: {
    findById: (state) => (id) => {
      return state.tagsData.filter(item => item.id === parseInt(id))[0];
    },
    findByName: (state) => (name) => {
      return state.tagsData.filter(item => item.name === name)[0];
    },
  },
  mutations: {
    fetch(state) {
      state.tagsData = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    },
    save(state) {
      try {
        window.localStorage.setItem(localStorageName, JSON.stringify(state.tagsData));
        return {code: 1, message: '标签保存成功！'};
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return {code: 1000, message: err.message};
      }
    }
  },
  actions: {
    create({commit, state, getters}) {
      const createName = window.prompt('请输入标签名');

      if (!createName) { return {code: 1001, message: '标签不能为空'}; }
      if (getters.findByName(createName)) {
        window.alert('标签已存在，请勿重复添加');
        return {code: 1000, message: '标签已存在，请勿重复添加'};
      }

      const id = createId();
      state.tagsData.push({id: id, name: createName});
      return commit('save');
    },
    update({commit, state, getters}, payload) {
      const target = getters.findById(payload.id);
      const names = state.tagsData.map(item => item.name);

      if (names.indexOf(payload.name) >= 0) {
        window.alert('标签已存在');
        return {code: 1000, message: '标签已存在'};
      } else {
        target.name = payload.name;
        return commit('save');
      }
    },
    delete({commit, state, getters}, payload) {
      const index = state.tagsData.indexOf(getters.findById(payload.id));
      state.tagsData.splice(index, 1);
      return commit('save');
    }
  },
};

export default tagStore;
