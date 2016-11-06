import { connect } from 'react-redux';
import BookingsIndex from './bookings_index';
import { createBooking, updateBooking, deleteBooking } from '../../actions/bookings_actions';

const mapStateToProps = ({bookings}) => ({
  bookings: Object.keys(bookings).map(id => bookings[id])
});

const mapDispatchToProps = (dispatch) => ({
  updateBooking: id => dispatch(updateBooking(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  createBooking: () => dispatch(createBooking())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsIndex);
