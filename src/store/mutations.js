import {RECEIVE_MAIN} from './mutations-type'
export default {
  [RECEIVE_MAIN] (state,{MainData}) {
    state.mainData = MainData
  }
}
