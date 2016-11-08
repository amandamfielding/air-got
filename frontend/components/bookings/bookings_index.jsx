import React from 'react';
import BookingItem from './booking_item';

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.bookings) {
      let bookings = this.props.bookings.map(booking => {
        if (booking) {
          return (
            <BookingItem
              clearErrors={this.props.clearErrors}
              booking={booking}
              errors={this.props.errors}
              deleteBooking={this.props.deleteBooking}
              key={booking.id} />
            );
          }
        });

      return (
        <div className="bookings-container">
          <h2>Upcoming Trips</h2>
          <div className="bookings">
            {bookings}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default BookingsIndex;
