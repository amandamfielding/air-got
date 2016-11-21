export const fetchRegions = (success) => {
  $.ajax({
    type: 'GET',
    url: '/api/regions',
    success
  });
};

export const searchRegions = (letters,success) => {
  $.ajax({
    type: 'GET',
    url: '/api/regions',
    data: {letters: letters},
    success
  });
};
