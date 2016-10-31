import { signup, login, logout } from '../util/session_api_util';
import { SIGNUP, LOGIN, LOGOUT, receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user,successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout( () => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
