function deepClone(data: any): any {
  return JSON.parse(JSON.stringify(data));
}

export default deepClone;
