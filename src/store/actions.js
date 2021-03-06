import {RECEIVE_MAIN,RECEIVE_MAIN_CAROUSEL,RECEIVE_CLASSIFYLIST,RECEIVE_BRANDLIST,RECEIVE_ALLBRAND} from './mutations-type'
import {reqMainData,reqCarousel,reqClassifyList,reqBrandList,reqAllBrand} from '../api'
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
  },
  async getClassifyList({commit}){
    const result = await reqClassifyList()
    if(result.code===0){
      const lists = result.data
      commit(RECEIVE_CLASSIFYLIST,{lists})
    }
  },
  async getbrandList({commit}){
    const result = await reqBrandList()
    if(result.code===0){
      const lists = result.data
      commit(RECEIVE_BRANDLIST,{lists})
    }
  },
  async getAllBrand({commit},cb){
    const  result = await reqAllBrand()
    if(result.code===0){
      const allBrand = result.data
      commit(RECEIVE_ALLBRAND,{allBrand})
      cb && cb()
    }
  }

}
