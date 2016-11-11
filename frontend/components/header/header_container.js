import { connect } from 'react-redux';
import Header from './header';
import { login, logout, receiveErrors } from '../../actions/session_actions';
import { searchRegions } from '../../actions/regions_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  regions: Object.keys(state.regions).map(key => state.regions[key])
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors({errors: []})),
  searchRegions: (letters) => dispatch(searchRegions(letters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
