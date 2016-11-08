import { connect } from 'react-redux';
import BookingEditForm from './booking_edit_form';
import { updateBooking, receiveBookingErrors } from '../../actions/bookings_actions';

const mapStateToProps = ({bookings}, ownProps) => ({
  booking: bookings[parseInt(ownProps.booking.id)],
  errors: bookings.errors
});

const mapDispatchToProps = (dispatch) => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
  clearErrors: () => dispatch(receiveBookingErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingEditForm);
