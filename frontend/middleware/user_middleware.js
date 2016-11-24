import { receiveUser, REQUEST_USER } from '../actions/user_actions';
import { fetchUser } from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchSuccess = data => dispatch(receiveUser(data));

  switch(action.type){
    case REQUEST_USER:
      fetchUser(action.id, fetchSuccess);
      return next(action);
    default:
      return next(action);
  }
};
