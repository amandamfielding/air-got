import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  // places: asArray(state),
});


export default connect(
  mapStateToProps
)(Search);
