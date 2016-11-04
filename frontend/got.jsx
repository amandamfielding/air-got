import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchRegions } from './actions/regions_actions';
import { requestPlaces } from './actions/place_actions';

document.addEventListener('DOMContentLoaded',() => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchRegions = fetchRegions;
  store.dispatch(fetchRegions());
  store.dispatch(requestPlaces());
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
