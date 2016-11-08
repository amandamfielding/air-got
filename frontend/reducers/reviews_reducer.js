import { RECEIVE_REVIEWS,
         RECEIVE_REVIEW,
         REMOVE_REVIEW } from '../actions/reviews_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (oldState={}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({},oldState,{[action.review.id]:action.review});
    case REMOVE_REVIEW:
      let newState = merge({},oldState);
      delete newState[action.review.id];
      return newState;
    default:
      return oldState;
  }
};

export default ReviewsReducer;
