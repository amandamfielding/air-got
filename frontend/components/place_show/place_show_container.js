import { connect } from 'react-redux';
import Place from './place_show';
import { requestPlace } from '../../actions/place_actions';
import { fetchReviews } from '../../actions/reviews_actions';
import { selectPlace } from '../../reducers/selectors';
import { createBooking, receiveBookingErrors } from '../../actions/bookings_actions';

const mapStateToProps = (state, { params }) => {
  const placeId = parseInt(params.placeId);
  const place = selectPlace(state, placeId);
  return {
    placeId,
    place,
    errors: state.bookings.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPlace: (id) => dispatch(requestPlace(id)),
  fetchReviews: (placeId) => dispatch(fetchReviews(placeId)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(receiveBookingErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
