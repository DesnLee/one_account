const localStorageTagsName = 'savedTags';
const localStorageAccountName = 'savedAccount';
const deepClone = (data) => {
    return JSON.parse(JSON.stringify(data));
};
const getAccountList = () => {
    return JSON.parse(window.localStorage.getItem(localStorageAccountName) || '[]');
};
const setAccountList = (arr) => {
    window.localStorage.setItem(localStorageAccountName, JSON.stringify(arr));
};
const getTags = () => {
    return JSON.parse(window.localStorage.getItem(localStorageTagsName) || '[]');
};
const setTags = (arr) => {
    window.localStorage.setItem(localStorageTagsName, JSON.stringify(arr));
};
export { deepClone, getAccountList, setAccountList, getTags, setTags };
//# sourceMappingURL=model.js.map