import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchRegions } from './actions/regions_actions';
import { requestPlaces } from './actions/place_actions';
import { fetchReviews} from './actions/reviews_actions';
import { requestBookings } from './actions/bookings_actions';

document.addEventListener('DOMContentLoaded',() => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    } else {
    store = configureStore();
  }


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.fetchRegions = fetchRegions;
  window.requestBookings = requestBookings;
  store.dispatch(fetchRegions());
  store.dispatch(requestPlaces());
  store.dispatch(requestBookings());
});
