import createId from '@/lib/createId';

const localStorageName = 'savedTags';
const tagsModel: tagsModel = {
  data: [],

  getData() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    if (this.data.length === 0) {
      this.data = [{id: 1, name: '衣'}, {id: 2, name: '食'}, {id: 3, name: '住'}, {id: 4, name: '行'}];
      window.localStorage.setItem('_currentId', '4');
      this.save();
    }
    return this.data;
  },

  create(name) {
    if (!name) {return {code: 1001, message: '标签不能为空'};}
    const tagName = this.data.filter(item => item.name === name)[0];
    if (tagName) {
      return {code: 1000, message: '标签已存在，请勿重复添加'};
    }
    const id = createId();
    this.data.push({id, name});
    return this.save();
  },

  update(tag) {
    const target = this.data.filter(item => item.id === tag.id)[0];
    const names = this.data.map(item => item.name);

    if (names.indexOf(tag.name) >= 0) {
      return {code: 1000, message: '标签已存在'};
    } else {
      target.name = tag.name;
      return this.save();
    }

  },

  delete(id) {
    const index = this.data.indexOf(this.data.filter(item => item.id === parseInt(id))[0]);
    this.data.splice(index, 1);
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
