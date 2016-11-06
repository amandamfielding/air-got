export const fetchBookings = (success,error) => {
  $.ajax({
    method: 'GET',
    url: 'api/boookings',
    success,
    error: console.log("what the fuck")
  });
};

export const fetchBooking = (id,success,error) => {
  $.ajax({
    method: 'GET',
    url: `api/boookings/${id}`,
    success,
    error: console.log(error)
  });
};

export const createBooking = (booking, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/boookings',
    data: {booking: booking},
    success
  });
};

export const updateBooking = (booking, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/boookings/${booking.id}`,
    data: {booking: booking},
    success
  });
};

export const deleteBooking = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/boookings/${id}`,
    success
  });
};
