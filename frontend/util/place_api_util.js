export const fetchPlaces = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/places',
    success
  });
};

export const fetchPlace = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/places/${id}`,
    success
  });
};
