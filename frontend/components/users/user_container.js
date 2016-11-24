import { connect } from 'react-redux';
import User from './user';
import { selectUser } from '../../reducers/selectors';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, { params }) => {
  const userId = parseInt(params.userId);
  const user = selectUser(state, userId);
  return {
    userId,
    user
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
