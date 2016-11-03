import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import Home from './home/home';


const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Footer />
  </div>
);

export default App;
