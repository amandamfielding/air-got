import React from 'react';

const BookingItem = ({ booking, deleteBooking }) => {
  const { place } = this.props.booking;
  if (booking) {
    return (
      <ul>
        <img src={place.place_images[0].url} />
        <li>{place.host.image_url}</li>&nbsp
          <li>{place.region_id}</li>
          <button onClick={() => deleteBooking(booking.id)}>Delete</button>
        </ul>
      );
  } else {
    return (<div></div>);
  }
};

export default BookingItem;
