export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";

export const fetchReviews = () => ({
  type: FETCH_REVIEWS
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const deleteReview = (id) => ({
  type: DELETE_REVIEW,
  id
});
