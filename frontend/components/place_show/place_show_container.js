import { connect } from 'react-redux';
import Place from './place_show';
import { requestBench } from '../../actions/place_actions';
import { selectBench } from '../../reducers/selectors';


const mapStateToProps = (state, { params }) => {
  const placeId = parseInt(params.placeId);
  const place = selectBench(state, placeId);
  return {
    placeId,
    place
  };
};

const mapDispatchToProps = dispatch => ({
  requestBench: id => dispatch(requestBench(id))
});

export default connect(
  mapStateToProps
)(Place);
