import deepClone from '../lib/deepClone'

const localStorageName = 'savedAccount'
const accountModel = {
  accounts : [],
  getData (){
    this.accounts = JSON.parse(window.localStorage.getItem(localStorageName) || '[]')
    return this.accounts
  },
  create (data){
    const cloneData = deepClone(data)
    cloneData.createAt = new Date()
    this.accounts.push(cloneData)
    return this.save()
  },
  save (){
    try{
      window.localStorage.setItem(localStorageName, JSON.stringify(this.accounts))
      return {code : 1, message : '记录账单成功！'}
    } catch (err){
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return {code : 1000, message : err.message}
    }
  },
}
export default accountModel
//# sourceMappingURL=accountModel.js.map
