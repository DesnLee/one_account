const localStorageName = 'savedTags';
const tagsModel: tagsModel = {
  data: [],

  getData() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    if (this.data.length === 0) {
      this.data = ['衣', '食', '住', '行'];
      this.save();
    }
    return this.data;
  },

  create(name) {
    if (this.data.indexOf(name) >= 0) {
      return {code: 1000, message: '标签已存在，请勿重复添加'};
    }
    this.data.push(name);
    return this.save();
  },

  save() {
    try {
      window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
      return {code: 1, message: '添加标签成功！'};
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return {code: 1000, message: err.message};
    }
  },
};

export default tagsModel;
