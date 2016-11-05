import { connect } from 'react-redux';
import User from './user';
import { selectUser } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => {
  const userId = parseInt(params.userId);
  const user = selectUser(state, userId);
  return {
    userId,
    user
  };
};

export default connect(
  mapStateToProps
)(User);
