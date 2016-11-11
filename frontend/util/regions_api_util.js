export const fetchRegions = (success,error) => {
  $.ajax({
    type: 'GET',
    url: '/api/regions',
    success,
    error: console.log(error)
  });
};

export const searchRegions = (letters,success,error) => {
  $.ajax({
    type: 'GET',
    url: '/api/regions',
    data: {letters: letters},
    success,
    error: console.log(error)
  });
};
