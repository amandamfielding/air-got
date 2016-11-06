import React from 'react';

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.bookings) {
      return (
        <div>
          {this.props.bookings.map(booking => (
            <BookingItem booking={booking}/>
          ))}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default BookingsIndex;
