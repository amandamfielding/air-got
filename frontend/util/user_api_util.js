export const fetchUser = (id,success) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success
  });
};
