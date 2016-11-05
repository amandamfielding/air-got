import { connect } from 'react-redux';
import Place from './place_show';
import { requestPlace } from '../../actions/place_actions';
import { fetchReviews } from '../../actions/reviews_actions';
import { selectPlace } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => {
  const placeId = parseInt(params.placeId);
  const place = selectPlace(state, placeId);
  return {
    placeId,
    place
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
