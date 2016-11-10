import { connect } from 'react-redux';
import Search from './search';
import { asPlacesArray } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/reviews_actions';

const mapStateToProps = state => ({
  places: asPlacesArray(state)
});


export default connect(
  mapStateToProps
)(Search);
