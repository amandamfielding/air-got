export const fetchRegions = (success,error) => {
  $.ajax({
    type: 'GET',
    url: '/api/regions',
    success,
    error: console.log(error)
  });
};
