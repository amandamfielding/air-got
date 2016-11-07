import { connect } from 'react-redux';
import BookingsIndex from './bookings_index';
import { deleteBooking, receiveBookingErrors } from '../../actions/bookings_actions';

const mapStateToProps = ({bookings}) => ({
  bookings: Object.keys(bookings).map(id => bookings[id])
});

const mapDispatchToProps = (dispatch) => ({
  deleteBooking: id => dispatch(deleteBooking(id)),
  clearBookingErrors: () => dispatch(receiveBookingErrors({errors: []}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsIndex);
