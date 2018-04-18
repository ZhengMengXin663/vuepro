import {RECEIVE_MAIN,RECEIVE_MAIN_CAROUSEL,RECEIVE_CLASSIFYLIST,RECEIVE_BRANDLIST} from './mutations-type'
export default {
  [RECEIVE_MAIN] (state,{MainData}) {
    state.mainData = MainData
  },
  [RECEIVE_MAIN_CAROUSEL] (state,{maincarousel}){
    state.maincarousel = maincarousel
  },
  [RECEIVE_CLASSIFYLIST] (state,{lists}){
    state.classifyLists = lists
  },
  [RECEIVE_BRANDLIST](state,{lists}){
    state.brandlist = lists
  }
}
