const commonModel = {
  deepClone(data: Account): Account {
    return JSON.parse(JSON.stringify(data));
  },
};

export default commonModel;
