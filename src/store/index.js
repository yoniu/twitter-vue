import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import status from './status';

export default createStore({
  actions,
  mutations,
  status
});