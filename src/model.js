const deepClone = (data) => {
    return JSON.parse(JSON.stringify(data));
};
const getAccountList = () => {
    return JSON.parse(window.localStorage.getItem('savedAccount') || '[]');
};
const setAccountList = (arr) => {
    window.localStorage.setItem('savedAccount', JSON.stringify(arr));
};
const getTags = () => {
    return JSON.parse(window.localStorage.getItem('savedTags') || '[]');
};
const setTags = (arr) => {
    window.localStorage.setItem('savedTags', JSON.stringify(arr));
};
export { deepClone, getAccountList, setAccountList, getTags, setTags };
//# sourceMappingURL=model.js.map