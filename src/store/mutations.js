import {RECEIVE_MAIN,RECEIVE_MAIN_CAROUSEL} from './mutations-type'
export default {
  [RECEIVE_MAIN] (state,{MainData}) {
    state.mainData = MainData
  },
  [RECEIVE_MAIN_CAROUSEL] (state,{maincarousel}){
    state.maincarousel = maincarousel
  }
}
