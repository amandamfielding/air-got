export const fetchReviews = (placeId,success,error) => {
  $.ajax({
    method: 'GET',
    url: `/api/places/${placeId}/reviews`,
    success,
    error: console.log(error)
  });
};

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review: review},
    success
  });
};

export const deleteReview = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
    success
  });
};
