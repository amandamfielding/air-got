import { connect } from 'react-redux';
import Regions from './regions';
import { fetchRegions, receiveRegions } from '../../actions/regions_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  regions: asArray(state)
});

export default connect(
  mapStateToProps
)(Regions);
