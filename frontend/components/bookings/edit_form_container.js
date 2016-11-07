import { connect } from 'react-redux';
import BookingEditForm from './booking_edit_form';
import { updateBooking } from '../../actions/bookings_actions';

const mapStateToProps = ({bookings}, ownProps) => ({
  booking: bookings[parseInt(ownProps.booking.id)],
  errors: bookings[parseInt(ownProps.booking.id)].errors
});

const mapDispatchToProps = (dispatch) => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingEditForm);
