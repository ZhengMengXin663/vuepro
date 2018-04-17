import {RECEIVE_MAIN,RECEIVE_MAIN_CAROUSEL} from './mutations-type'
import {reqMainData,reqCarousel} from '../api'
export default {
  async getMainData({commit}){
    const result = await reqMainData()
    if(result.code===0){
      const MainData = result.data
      commit(RECEIVE_MAIN,{MainData})
    }
  },
  async getMainCarousel({commit}){
    const result = await reqCarousel()
    if(result.code===0){
      const maincarousel = result.data
      commit(RECEIVE_MAIN_CAROUSEL,{maincarousel})
    }
  }


}
