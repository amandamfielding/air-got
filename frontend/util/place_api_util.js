export const fetchPlaces = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data: filters,
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
