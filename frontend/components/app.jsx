import React from 'react';
import HeaderLoggedOut from './headers/header_logged_out';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <HeaderLoggedOut />
    {children}
    <Footer />
  </div>
);

export default App;
