import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import SearchContainer from './search/search_container';
import PlaceShowContainer from './place_show/place_show_container';
import UserContainer from './users/user_container';
import BookingsContainer from './bookings/bookings_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/search" component={SearchContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/places/:placeId" component={PlaceShowContainer}  onEnter={_ensureLoggedIn}/>
          <Route path="/users/:userId" component={UserContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/bookings" component={BookingsContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
