import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React goes here</h1>, root);
});
