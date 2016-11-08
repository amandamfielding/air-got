import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { deleteReview, createReview } from '../../actions/reviews_actions';

const mapDispatchToProps = (dispatch) => ({
  deleteReview: id => dispatch(deleteReview(id)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewsIndex);
