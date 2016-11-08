import { connect } from 'react-redux';
import BookingsIndex from './bookings_index';
import { deleteBooking, receiveBookingErrors } from '../../actions/bookings_actions';

const mapStateToProps = ({bookings}) => ({
  bookings: Object.keys(bookings).map(id => {
    if (id !== "errors") {
      return bookings[id];
    }
  }),
  errors: bookings.errors
});

const mapDispatchToProps = (dispatch) => ({
  deleteBooking: id => dispatch(deleteBooking(id)),
  clearErrors: () => dispatch(receiveBookingErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsIndex);
