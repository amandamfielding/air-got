import { connect } from 'react-redux';
import Header from './header';
import { login, logout, receiveErrors } from '../../actions/session_actions';
import { searchRegions, fetchRegions } from '../../actions/regions_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  searchedRegions: Object.keys(state.searchedRegions).map(key => state.searchedRegions[key])
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors({errors: []})),
  searchRegions: (letters) => dispatch(searchRegions(letters)),
  fetchRegions: () => dispatch(fetchRegions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
