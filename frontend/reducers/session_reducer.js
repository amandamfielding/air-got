import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({},_nullUser,{currentUser: currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({},_nullUser,{errors: errors});
    case LOGOUT:
      return merge({},_nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
