import { GET_BLOG_LIST, GET_NAVIGATION, GET_OPTIONS } from './actionType'

export default {

  [GET_NAVIGATION](state, value){
    state.navigation = value;
  },

  [GET_OPTIONS](state, value){
    state.option = value;
  }

}