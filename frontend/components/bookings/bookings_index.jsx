import React from 'react';
import BookingItem from './booking_item';

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.bookings) {
      return (
        <div className="bookings-container">
          <h2>Upcoming Trips</h2>
          <div className="bookings">
          {this.props.bookings.map(booking => (
            <BookingItem
              booking={booking}
              deleteBooking={this.props.deleteBooking}
              key={booking.id} />
          ))}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default BookingsIndex;
