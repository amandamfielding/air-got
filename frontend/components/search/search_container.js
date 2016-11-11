import { connect } from 'react-redux';
import Search from './search';
import { asPlacesArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  places: asPlacesArray(state),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
