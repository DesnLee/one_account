const deepClone = (data: Account): Account => {
  return JSON.parse(JSON.stringify(data));
};

const getAccountList = (): Account[] => {
  return JSON.parse(window.localStorage.getItem('savedAccount') || '[]');
};

const setAccountList = (arr: Account[]): void => {
  window.localStorage.setItem('savedAccount', JSON.stringify(arr));
};

const getTags = (): string[] => {
  return JSON.parse(window.localStorage.getItem('savedTags') || '[]');
};

const setTags = (arr: string[]): void => {
  window.localStorage.setItem('savedTags', JSON.stringify(arr));
};

export {
  deepClone,
  getAccountList,
  setAccountList,
  getTags,
  setTags
};
