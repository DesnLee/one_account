const localStorageName = '_currentId';

function createId(): number {
  const currentId = parseInt(window.localStorage.getItem(localStorageName) || '0');
  const nextId = currentId + 1;
  window.localStorage.setItem(localStorageName, nextId.toString());
  return currentId + 1;
}

export default createId;
