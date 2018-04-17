import {RECEIVE_MAIN} from './mutations-type'
import {reqMainData} from '../api'
export default {
  async getMainData({commit}){
    const result = await reqMainData()
    if(result.code===0){
      const MainData = result.data
      commit(RECEIVE_MAIN,{MainData})
    }
  }
}
