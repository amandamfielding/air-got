import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import SearchContainer from './search/search_container';
import PlaceShowContainer from './place_show/place_show_container';
import UserContainer from './users/user_container';
import BookingsContainer from './bookings/bookings_container';
import { requestBookings } from '../actions/bookings_actions';
import { requestPlaces } from '../actions/place_actions';
import { fetchRegions } from '../actions/regions_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _requestBookings = () => {
    store.dispatch(requestBookings());
  };

  const _requestPlaces = () => {
    store.dispatch(requestPlaces());
  };

  const _fetchRegions = () => {
    store.dispatch(fetchRegions());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_fetchRegions}>
          <IndexRoute component={Home} />
          <Route path="/search/:lat/:lng" component={SearchContainer} />
          <Route path="/places/:placeId" component={PlaceShowContainer} />
          <Route path="/users/:userId" component={UserContainer} />
          <Route path="/bookings" component={BookingsContainer} onEnter={_requestBookings}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
