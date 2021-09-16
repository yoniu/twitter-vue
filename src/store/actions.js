import { GET_BLOG_LIST, GET_NAVIGATION, GET_OPTIONS } from './actionType'
import AV from 'leancloud-storage'
const { Query, User } = AV
import { leancloud } from '../config'

AV.init({
  appId: leancloud.appId,
  appKey: leancloud.appKey,
  serverURL: leancloud.restAPI
});

export default {

  async [GET_BLOG_LIST]({ commit }){

  },

  async [GET_NAVIGATION]({ commit }){
    try{
      const query = new Query('navigation');
      const result = await query.find();
      commit(GET_NAVIGATION, result);
    }catch(e){
      commit(GET_NAVIGATION, []);
    }
  },

  async [GET_OPTIONS]({ commit }){
    try{
      const query = new Query('option');
      let arr = {};
      const result = await query.find();
      result.forEach((option)=>{
        arr[option.get('option')] = option.get('value');
      });
      commit(GET_OPTIONS, arr);
    }catch(e){
      commit(GET_OPTIONS, []);
    }
  }

}