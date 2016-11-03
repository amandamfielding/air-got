import { connect } from 'react-redux';
import Regions from './regions';
import { fetchRegions, receiveRegions } from '../../actions/regions_actions';
import { asRegionsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  regions: asRegionsArray(state)
});

export default connect(
  mapStateToProps
)(Regions);
