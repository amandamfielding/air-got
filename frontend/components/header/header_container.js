import { connect } from 'react-redux';
import Header from './header';
import { login, logout, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors({errors: []}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
