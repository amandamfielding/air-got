import { connect } from 'react-redux';
import Search from './search';
import { asPlacesArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  places: asPlacesArray(state)
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
