function deepClone(data: any): Account {
  return JSON.parse(JSON.stringify(data));
}

export default deepClone;
