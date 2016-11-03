import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import Home from './home/home';
import Regions from './regions/regions';

const App = ({ children }) => (
  <div>

    <HeaderContainer />
    <Home />
    <Regions />
    {children}
    <Footer />
  </div>
);

export default App;
