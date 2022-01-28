const localStorageTagsName = 'savedTags';
const localStorageAccountName = 'savedAccount';

const deepClone = (data: Account): Account => {
  return JSON.parse(JSON.stringify(data));
};

const getAccountList = (): Account[] => {
  return JSON.parse(window.localStorage.getItem(localStorageAccountName) || '[]');
};

const setAccountList = (arr: Account[]): void => {
  window.localStorage.setItem(localStorageAccountName, JSON.stringify(arr));
};

const getTags = (): string[] => {
  return JSON.parse(window.localStorage.getItem(localStorageTagsName) || '[]');
};

const setTags = (arr: string[]): void => {
  window.localStorage.setItem(localStorageTagsName, JSON.stringify(arr));
};

export {
  deepClone,
  getAccountList,
  setAccountList,
  getTags,
  setTags
};
