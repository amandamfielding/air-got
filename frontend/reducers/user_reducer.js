import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (oldState={}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      let state = merge({},oldState,{[action.user.id]:action.user});
      state.errors = [];
      return state;
    default:
      return oldState;
  }
};

export default UserReducer;
